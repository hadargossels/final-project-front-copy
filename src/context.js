import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'
const ProductContext = React.createContext();
// var pageNum1;
// var sortOptions = [
//     {label: 'Low to High', value: 'LH'},
//     {label: 'High to Low', value: 'HL'},
//     {label: 'Most Rated', value: 'MT'},
// ];

class ProductProvider extends Component {
    
    constructor(props) {
        super(props);
        let cartSubTotal = 0, cartTax = 0, cartTotal = 0;
        let cart = [];
        if (localStorage.cart != null) {
            cart = JSON.parse(localStorage.cart);
            let total = JSON.parse(localStorage.totals );
            cartSubTotal = total.cartSubTotal;
            cartTax = total.cartTax;
            cartTotal = total.cartTotal;

        }

        this.state = {
            products:storeProducts,
            origProducts:storeProducts,
            filtersArray : [{isEnabled:false, type:"helmet"}, {isEnabled:false, type:"bike"},{isEnabled:false, type:"cub"},{isEnabled:false, type:"scooter"}],
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
            rows:10
            
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
             if (filterItem.isEnabled&& filterItem.type == item.type){
                found = true;
             }
        })

        return found;
      }

      setFilter = (filterName) => {

        let arr = [...this.state.filtersArray];

        for(let i=0; i< arr.length;i++){
            if(arr[i].type == filterName) {
                arr[i].isEnabled = !arr[i].isEnabled;
            }
        }        
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
        this.setProducts();
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
    const product = this.state.products.find(item => item.id===id);
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
        const selectedProduct = tempCart.find(item=>item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count +1;
        product.total = product.count * product.price;
        localStorage.cart = JSON.stringify([...tempCart]);
        this.setState(()=>{return{cart:[...tempCart]}
        },()=>{this.addTotals()})
    };
   decrement = (id) =>{
        let tempCart=[...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        if(product.count ===0){
            this.removeItem(id);
        }
        else{
            product.total = product.count*product.price;
            localStorage.cart = JSON.stringify([...tempCart]);
            this.setState(()=>{return{cart:[...tempCart]}
            },()=>{this.addTotals()})
        }
    };
    removeItem = (id) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item=> item.id !== id);
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
    };
    clearCart = () =>{
        localStorage.cart = [JSON.stringify([])];
        this.setState(() =>{
            return {cart:[]};
        },()=>{
            this.setProducts();
            this.addTotals();
        });
    };
    addTotals =() =>{
        let subTotal =0;
        this.state.cart.map(item =>{return(subTotal +=item.total)})
        const tempTax = subTotal *0.17;
        const tax = parseFloat(tempTax.toFixed(2))
        const total = (subTotal +tax).toFixed(2);

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
            return item.title.toLowerCase().indexOf(search.toLowerCase())!= -1;
        });
    }
    getHomepageProducts = ()=> {
        
        return this.state.products.filter((item)=>{
            return item.sale;
        });
    }
    
    
    
    
    //  setBoardItemsFunction =() =>  {
    //                 let list = []
    //                 for(var i=pageNum1*10;i<(pageNum1+1)*10;i++) {
    //                   list.push(this.state.products[i])
    //                 this.setState({boardProducts:list})
    //               }
    //             }
    // onOpen = (event) => {
    //             pageNum1 = event.page
    //                 // console.log(event.page + " event page");
    //             this.setState({first:event.first});
    //             this.setState({rows:event.rows})
    //             this.setBoardItemsFunction()
    //     }
    //        sortLowtoHigh = () => {
    //         var itemList = [...this.products];
    //         var array = []
    //         for (var i of itemList) {
    //           for(var j of itemList) {
    
    //           }
    //         }
    //       }
    //        sortFunction = (e) => {
    //            this.setState({sortValue: e.value})
    //           if(e.value == 'LH') {
    //                 var list1 = []
    //                 list1 = [...this.state.products]
    //                 var list2 = []
    //                 var min ;
    //                 var index = 0;
    //                 var a = list1.length
    //                 var count= 0
    //                       var smallest = {}
    //                       var index
    //                       for(var b = 0;b<a;b++) {
    //                           index = 0   
    //                           for(var g=0;g<list1.length;g++) {   
    //                               if(list1[index].price > list1[g].price) {
    //                                   index = g
    //                               }
    //                           }      
    //                           list2.push(list1[index])
    //                           list1.splice(index,1);
    //                        }
    //               this.setState({products:list2});
    //           }
    //           else if (e.value == 'HL') {
    //             var list1 = []
    //             list1 = [...this.state.products]
    //             var list2 = []
    //             var min ;
    //             var index = 0;
    //             var a = list1.length
    //             var count= 0
    //                   var smallest = {}
    //                   var index
    //                   for(var b = 0;b<a;b++) {
    //                       index = 0   
    //                       for(var g=0;g<list1.length;g++) {   
    //                           if(list1[index].price < list1[g].price) {
    //                               index = g
    //                           }
    //                       }      
    //                       list2.push(list1[index])
    //                       list1.splice(index,1);
    //                    }
    //                    this.setState({products:list2});
    //                 }
    //           else if (e.value == 'MT') {
    
    //             var list1 = []
    //             list1 = [...this.state.products]
    //             var list2 = []
    //             var min ;
    //             var index = 0;
    //             var a = list1.length
    //             var count= 0
    //                   var smallest = {}
    //                   var index
    //                   for(var b = 0;b<a;b++) {
    //                       index = 0   
    //                       for(var g=0;g<list1.length;g++) {   
    //                           if(list1[index].rating < list1[g].rating) {
    //                               index = g
    //                           }
    //                       }      
    //                       list2.push(list1[index])
    //                       list1.splice(index,1);
    //                    }
    //                    this.setState({products:list2});
    //                 }
    
    //        }
    
    //        filterUpto = (top) => {
    //         if(top == '' || top == null || top == undefined) {
    //         this.setState({products: this.state.origProducts});

    //         } else {
    //         var itemList = [...this.state.itemsOrig]
    //         var array = []
    //         for(var i of itemList) {
    //                 if(i.price <= top) {
    //                 array.push(i)
    //                 }
    //         }
    //         this.setState({itemsOrig:array});

    //       }
    //     }
    
    
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
               getHomepageProducts:this.getHomepageProducts
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductProvider,ProductConsumer};