import React, { Component } from 'react';
import './ItemsToBuy.css';
import data from '../../data.json'
import formatPrice from '../utility/Price'

class ItemsToBuy extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products: data.products,
        productList: [],
        productSum: null,
        coupon: "",
      }
    }

    componentDidMount = () => {
        let itemCodes = JSON.parse(localStorage.getItem("shoppingCart"))
        let myItems = [];
        let generalItems = [...this.state.products]
        if (itemCodes !== null) {
            generalItems.filter((product) => {
                if(itemCodes.includes(product.ISBN10)) {
                    myItems.push(product)
                }
                return true;
            })
            let genSum = 0;
            myItems.forEach((product) => {
                genSum += product.price;
            })
            this.setState({
                productList: myItems,
                productSum: genSum,
            }, () => {
                this.getPrice()
            })
        }
    }

    changePrice = (event) => {
        let amnt = event.target.value;
        let productId = event.target.id;
        let theProd;
        this.state.productList.forEach((product, index) => {
            if(product.ISBN10 === productId) {
               theProd = index
            }
        });
        let myProductList = [...this.state.productList];
        myProductList[theProd].quantity = amnt;
        this.setState({
            productList: myProductList,
        }, () => {
            this.getPrice()
        })
    }

    getPrice = () => {
        let genSum = 0;
        this.state.productList.forEach((product) => {
            genSum += (product.price * product.quantity);
        })
        this.setState({
            productSum: genSum,
        }, () => {
            this.props.getTotal(this.state.productSum)
        })
    }

    removeItem = (event) => {
        let itemId = event.target.id
        let storageList = JSON.parse(localStorage.getItem("shoppingCart"))
        let newStorageList = storageList.filter((item) => {
            return item !== itemId
        })
        let productsList = this.state.productList
        let newList = productsList.filter((product) => {
            return product.ISBN10 !== itemId
        })
        localStorage.setItem('shoppingCart',JSON.stringify(newStorageList))
        localStorage.setItem('shoppingLength',newStorageList.length)
        this.setState({
            productList: newList,
        },() => {
            this.getPrice();this.props.addToCart()
        })
    }
  
    render () {
      return (
        <div className="itemsToBuy m-5">
            <div className="header bg-yellow-700 text-3xl grid grid-cols-5 grid-rows-1 rounded-t-lg text-center py-1 mb-5 text-gray-200">
                <div className="col-span-2 row-span-1 border-r-2 border-gray-300">
                    Item
                </div>
                <div className="col-span-1 border-r-2 border-gray-300">
                    Quantity
                </div>
                <div className="col-span-1 border-r-2 border-gray-300">
                    Price
                </div>
                <div className="col-span-1">
                    Remove
                </div>
            </div>
            {this.state.productList.map((product) => {
                return (
                    <div 
                        className="item bg-gray-300 text-xl pt-5 pb-1 pl-5 grid grid-cols-5 grid-rows-1 rounded mb-10 border-4 border-yellow-700" 
                        key={product.ISBN13}
                    >
                        <div className="col-span-2 row-span-1">
                            <img 
                                src={product.image} 
                                alt="" 
                                className="cartImage float-left mr-5"
                            />
                            <p className="text-4xl text-yellow-800">{product.title}</p>
                            <br/>
                            <p className="text-1xl">#{product.ISBN10}</p>
                        </div>
                        <div className="col-span-1 pt-12 text-center">
                            <input 
                                type="number" 
                                name="quantity" 
                                min="1" 
                                max="10" 
                                defaultValue="1" 
                                className="quantity pl-2 pt-1 border-0" 
                                id={product.ISBN10} 
                                onChange={(event) => {this.changePrice(event)}}
                            />
                        </div>
                        <div className="col-span-1 text-3xl pt-12 ml-5 text-center">
                            {formatPrice(product.price * product.quantity)}
                        </div>
                        <div className="col-span-1 text-3xl pt-12 ml-5 text-center">
                            <button 
                                id={product.ISBN10} 
                                className="bg-yellow-800 text-yellow-100 pt-3 px-4 py-2 shadow-lg border border-yellow-800 hover:bg-yellow-100 hover:text-yellow-800 hover:shadow-none focus:shadow-none rounded"
                                onClick={(event) => this.removeItem(event)}
                            >
                                <i 
                                    className="fas fa-trash-alt" 
                                    id={product.ISBN10}
                                />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
      )
    }
  }
  
  export default ItemsToBuy;