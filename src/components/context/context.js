import React, { Component } from 'react'
const ProductContext = React.createContext();
const axios = require('axios').default;
let cartSubTotal = 0, cartTax = 0, cartTotal = 0;
let cart = [];
let storeProducts =[];
const detailProduct = {
            id: 1,
            title: "",
            img: "",
            price: 0,
            company: "",
            info:"",
            inCart: false,
            count: 0,
            total: 0
          };
class ProductProvider extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            products:[],
            origProducts:[],
            filtersArray : [{isEnabled:false, type:"helmet"}, {isEnabled:false, type:"bike"},{isEnabled:false, type:"cub"},{isEnabled:false, type:"scooter"},{isEnabled:false, type:"sale"}],
            detailProduct:detailProduct,
            cart: cart,
            modalOpen:false,
            modalProduct:detailProduct,
            cartSubTotal:cartSubTotal,
            cartTax: cartTax,
            cartTotal:cartTotal,
            boardProducts:[],
            itemsOrig:[],
            raceType:false,
            roadType:false,
            mountainType:false,
            sortValue:'HL',
            pageNum:0,
            first:0,
            rows:10,
            posts: [[{postsAndCommentsArr:"", like:0,}],[{postsAndCommentsArr:"",like:0}],[{postsAndCommentsArr:"",like:0}],
                    [{postsAndCommentsArr:"",like:0}],[{postsAndCommentsArr:"",like:0}],[{postsAndCommentsArr:"",like:0}]],
            orders: []        
            
            };

       
      }

      areAnyFilterEnable = (filterArr) =>{
        let found= false;
        filterArr.map((filterItem)=> {
            if (filterItem.isEnabled){
                found= true;
            }
       })
       return found;
      }

      shouldShow =(item, filterArr) =>{
          let found = false;
        if (!this.areAnyFilterEnable(filterArr)) {
            return true;
        }

        filterArr.map((filterItem)=> {
            if(filterItem.isEnabled&&filterItem.type === 'sale' && item.sale)
                found = true;
             if (filterItem.isEnabled&& filterItem.type === item.type ){
                found = true;
             }
        })

        return found;
      }

     setOrder = (order, orderCart,specialReq,total) =>{
         let tempOrderArr = [...this.state.orders];
         tempOrderArr.push(order);
         this.setState({
             orders:tempOrderArr
         })
        console.log(total)
         axios.post("/api/order",{order:order,specialReq:specialReq,orderCart:orderCart,cartTotal:total,userId:JSON.parse(localStorage.getItem("usernameID"))}) 
         .then(
             response => {
                 console.log(response.statusText)
             }
         ).catch(
             err => console.log(err)
         )
     }

      setFilter = (filterName) => {
        let arr = [...this.state.filtersArray];
        
        arr.forEach(item => {
            if(item.type === filterName || item.type===filterName) {
                item.isEnabled = !item.isEnabled;
            }
        });
           this.setState(
               {
                   filtersArray:arr, 
                   products:this.state.origProducts.filter((item)=>{
                        return this.shouldShow(item, arr);

                   }),

               }
           )
    }

    componentDidMount(){
        this.dbLoad();
        this.updatePrice();
        this.setProducts();
    }
    dbLoad = () =>{
        const fetchData = async () => {
            const response = await axios.get("/api/product" );//, { 'headers': { 'Authorization':'Bearer '+ localStorage.getItem('token') } });
            this.setState({
                products: response.data,
                origProducts: response.data
            })
            if(localStorage.cart !==undefined){
                if (localStorage.cart.length !== 2) {
                    storeProducts = [...this.state.origProducts];
                    cart = JSON.parse(localStorage.cart);
                    let total = JSON.parse(localStorage.totals);
                    cartSubTotal = total.cartSubTotal;
                    cartTax = total.cartTax;
                    cartTotal = total.cartTotal;
                    this.setState({cart , cartSubTotal,cartTax,cartTotal});
                    for(let i=0;i<storeProducts.length;i++){
                         for(let j=0;j<cart.length;j++){
                            if(storeProducts[i]._id===cart[j]._id){
                                storeProducts[i].inCart = cart[j].inCart;    
                            }
                         }
                     }
                     this.setState({products:storeProducts,origProducts:storeProducts})
               }
            } 
        }
        fetchData()

    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem ={...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(()=>{
            return {products: tempProducts};
        });
    };

    getItem = (id) =>{
    const product = this.state.products.find(item => item._id===id);
        return product;
    };
    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState({detailProduct:product})
}
    addToCart = (id) =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        localStorage.cart = JSON.stringify([...this.state.cart , product]);
        this.setState({products:tempProducts ,cart:[...this.state.cart , product]},()=> {this.addTotals()});
        axios.post("/api/postCart",{product:product}) 
        .then(
            response => {
            }
        ).catch(
            err => console.log(err)
        )
    };
    openModal = id =>{
        const product = this.getItem(id);
        this.setState({modalProduct:product, modalOpen:true})
    }
    closeModal = () => {
        this.setState(()=>{
            return {modalOpen:false};
        })
    }
    increment = (id) =>{
        let tempCart=[...this.state.cart];
        const selectedProduct = tempCart.find(item=>item._id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count +1;
        product.total = product.count * product.price;
        localStorage.cart = JSON.stringify([...tempCart]);
        this.setState(()=>{return{cart:[...tempCart]}
        },()=>{this.addTotals()})
        axios.post("/api/postCart",{product:product,action:"increment"}) 
        .then(
            response => {
            }
        ).catch(
            err => console.log(err)
        )
    };
   decrement = (id) =>{
        let tempCart=[...this.state.cart];
        const selectedProduct = tempCart.find(item=>item._id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        let removeFromCart=false
        product.count = product.count - 1;
        if(product.count ===0){
            this.removeItem(id);
            removeFromCart = true
        }
        else{
            product.total = product.count*product.price;
            localStorage.cart = JSON.stringify([...tempCart]);
            this.setState(()=>{return{cart:[...tempCart]}
            },()=>{this.addTotals()})
        }
        axios.post("/api/postCart",{product:product,action:"decrement",removeFromCart:removeFromCart}) 
        .then(
            response => {
            }
        ).catch(
            err => console.log(err)
        )
    };
    removeItem = (id) =>{
        let tempProducts = [...this.state.products];
        const selectedProduct = tempProducts.find(item=>item._id ===id);
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item=> item._id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart=false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        localStorage.cart = JSON.stringify([...tempCart]);

        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },()=>{
            this.addTotals();
        })
        axios.post("/api/postCart",{product:selectedProduct,action:"removeItem"}) 
        .then(
            response => {
            }
        ).catch(
            err => console.log(err)
        )
    };
    clearCart = () =>{
        localStorage.cart = [JSON.stringify([])];
        localStorage.total = [JSON.stringify([])];
        this.setState({cart:[]})
        let arr = [...this.state.products];
        arr.forEach(item => {
            item.inCart = false;   
        });    
        this.setState({products:arr});
            this.setProducts();
            this.addTotals();
            axios.post("/api/clearAllCart",{userId:JSON.parse(localStorage.getItem("usernameID"))}) 
            .then(
                response => {
                }
            ).catch(
                err => console.log(err)
            )

            const fetchData = async () => {
                const response = await axios.get("/api/product" )//, { 'headers': { 'Authorization':'Bearer '+ localStorage.getItem('token') } });
                this.setState({
                    products: response.data,
                    origProducts: response.data
                })
            }
            fetchData()
        };
        
    
    addTotals =() =>{
        let subTotal =0;
        this.state.cart.map(item =>{return(subTotal +=item.total*1)})
        const tempTax = subTotal *0.17;
        const tax = parseFloat(tempTax.toFixed(2))
        const total = parseFloat(subTotal*1 +tax.toFixed(2)*1).toFixed(2);

        localStorage.totals = JSON.stringify({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        });

        this.setState(()=>{
            return{
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    };

    getProducts = (search)=> {
        return this.state.products.filter((item)=>{
            return item.title.toLowerCase().indexOf(search.toLowerCase())!== -1;
        });
       
        
    }
    getHomepageProducts = ()=> {
        this.state.products = [...this.state.origProducts];
        return this.state.products.filter((item)=>{
            return item.sale;
        });
    }
    
    
   setPriceFilter = (rangePrice) => { //does not work (slider)

        this.state.products = [...this.state.origProducts];
        return this.state.products.filter((item)=>{
            if(rangePrice[0]<item.price && rangePrice[1]>item.price) {
                        return item;
                    }
        });
      
    }
    priceHighToLow = (highOrLow) =>{
        let newArr = this.state.products;

        newArr  = newArr.sort((a,b) => {

            let priceA = a.price;
            let priceB = b.price;
            if(highOrLow ==='high')
                return (priceA < priceB) ? 1 : ((priceB < priceA) ? -1 : 0)
            else{
                return (priceA > priceB) ? 1 : ((priceB > priceA) ? -1 : 0)

            }

        });

        this.setState({products: newArr});

      }


      saleSort = () =>{
        let newArr = [...this.state.products];

        newArr = this.state.products.filter((item)=>{
            return item.sale;
        })
        this.setState({products: newArr});

      }

      ratingSort = () =>{
        let newArr = [...this.state.products];
       
        newArr  = newArr.sort((a,b) => {

            let ratingA = a.rating;
            let ratingB = b.rating;
                return (ratingA < ratingB) ? 1 : ((ratingB < ratingA) ? -1 : 0)
                
      });
        this.setState({products: newArr});
    }


    updatePrice =  () => {
        let newArr = [...this.state.products];
        for(let i=0;i<newArr.length;i++){
            if(newArr[i].sale)
                newArr[i].price = newArr[i].price- (newArr[i].price*0.2).toFixed(2);
        }
        this.setState({products:newArr})
    }
    updatePriceWithCoupon =  (val) => {
        let tempPrice = this.state.cartTotal;
        if(val==="12345"){
            tempPrice = tempPrice-tempPrice*0.1;
        }
        this.setState({cartTotal:tempPrice})
    }
    loadComments = () =>{
        return this.state.posts[0].postsAndCommentsArr
    }
    
    
    
    render() {
        return (
            <ProductContext.Provider value={{
               ...this.state, 
               handleDetail:this.handleDetail,
               addToCart:this.addToCart,
               openModal:this.openModal,
               closeModal:this.closeModal,
               increment: this.increment,
               decrement:this.decrement,
               removeItem:this.removeItem,
               clearCart:this.clearCart,
               setFilter:this.setFilter,
               getProducts: this.getProducts,
               getHomepageProducts:this.getHomepageProducts,
               setPriceFilter:this.setPriceFilter,
               priceHighToLow:this.priceHighToLow,
               saleSort:this.saleSort,
               ratingSort:this.ratingSort,
               updatePrice:this.updatePrice,
               updatePriceWithCoupon:this.updatePriceWithCoupon,
               loadComments:this.loadComments,
               dbLoad:this.dbLoad,
               setOrder: this.setOrder
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductProvider,ProductConsumer};