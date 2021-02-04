import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'
const ProductContext = React.createContext();
var pageNum1;
var sortOptions = [
    {label: 'Low to High', value: 'LH'},
    {label: 'High to Low', value: 'HL'},
    {label: 'Most Rated', value: 'MT'},
];
// const [boardItems,setBoardItems] = useState([])
// const [itemsOrig,setItemsOrig] =  useState(posts)
// const [raceType,setRaceType] = useState(false)
// const [roadType,setRoadType] = useState(false)
// const [mountainType,setMountainType] = useState(false)
// const [sortValue,setSortValue] = useState('HL')
// const [pageNum,setPageNum] = useState(0)
// const [first, setFirst] = useState(0);
// const [rows, setRows] = useState(10);
class ProductProvider extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products:[],
    //         detailProduct:detailProduct,
    //         cart:[],
    //         modalOpen:false,
    //         modalProduct:detailProduct,
    //         CartSubTotal:0,
    //         CartTax: 0,
    //         CartTotal:0,
    //         boardProduct:[],
    //         itemsOrig:[],
    //         raceType:false,
    //         roadType:false,
    //         mountainType:false,
    //         sortValue:'HL',
    //         pageNum:0,
    //         first:0,
    //         rows:10
            
    //     };
    //   }
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen:false,
        modalProduct:detailProduct,
        CartSubTotal:0,
        CartTax: 0,
        CartTotal:0
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
        this.setState(()=>{
            return {detailProduct:product};
        })
    }
    addToCart = (id) =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() =>{
            return {products:tempProducts , cart:[...this.state.cart , product]};
        },
        ()=> {
            this.addTotals();
        }
    );

    };
    openModal = id =>{
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct:product, modalOpen:true}
        })
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
        this.setState(() =>{
            return {cart:[]};
        },()=>{
            this.setProducts();
            this.addTotals();
        });
    };
    addTotals =() =>{
        let subTotal =0;
        this.state.cart.map(item =>(subTotal +=item.total))
        const tempTax = subTotal *0.17;
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal +tax;
        this.setState(()=>{
            return{
                CartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    };

    

    
    
    
    
    //  setBoardItemsFunction=() =>  {
    //                 let list = []
    //                 for(var i=pageNum1*10;i<(pageNum1+1)*10;i++) {
    //                   list.push(this.state.products[i])
    //                 }
    //                 // setBoardItems(list)
    //                 return this.setState({boardProduct:list})
    //               }
    // onOpen = (event) => {
    //             pageNum1 = event.page
    //                 // console.log(event.page + " event page");
    //             this.setState({first:event.first});
    //             this.setState({rows:event.rows})
    //             return setBoardItemsFunction()
    //     }
    //     //    sortLowtoHigh = () => {
    //     //     var itemList = [...this.products];
    //     //     var array = []
    //     //     for (var i of itemList) {
    //     //       for(var j of itemList) {
    
    //     //       }
    //     //     }
    //     //   }
    //        sortFunction = (e) => {
    //           setSortValue(e.value)
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
    //         this.setState({products: products});

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
    //      filterByType = (reqType,name) => {
    //       if(name == 'race') {
    //         setRaceType(reqType)
    //         if(raceType) {
    //             this.setState({products:itemsOrig});
    //         } else {
    //           var itemList = itemsOrig;
    //           var array = []
    //           for(var i of itemList) {
    //                   if(i.type == 'Race') {
    //                   array.push(i)
    //                   }
                      
    //           }
    //           this.setState({itemsOrig:array});
              
    //         }
    
            
    //       } else if (name == 'road') {
    //         setRoadType(reqType)
    //         if(roadType) {
    //             this.setState({products:itemsOrig});
    //         } else {
    //           var itemList = itemsOrig;
    //           var array = []
    //           for(var i of itemList) {
    //                   if(i.type == 'Road') {
    //                   array.push(i)
    //                   }
                      
    //           }
    //           this.setState({products:array});

    //         }
    //       } 
    //       else {
    //         setMountainType(reqType)
    //         if(mountainType) {
    //             this.setState({products:itemsOrig});
    //         } else {
    //           var itemList = itemsOrig;
    //           var array = []
    //           for(var i of itemList) {
    //                   if(i.type == 'Mountain') {
    //                   array.push(i)
    //                   }
                      
    //           }
    //           this.setState({products:array});
              
    //         }
    //     }
    
    // } 
    
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
               clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export {ProductProvider,ProductConsumer};