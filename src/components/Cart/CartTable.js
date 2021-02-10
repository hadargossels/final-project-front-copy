import React, { Component } from 'react'
import {objectsArr} from '../Product/data'
import './CartTable.css'

export default class CartTable extends Component {
    constructor(props){
        super(props)
        this.AllProducts = objectsArr
        this.state = {productsArr:this.props.productsArr, priceBeforeShipping:0, discount:false}
        this.inputRef = React.createRef();
    }

    changeCount(e, objId){
        let newArr = [...this.state.productsArr]
        for (let i = 0 ; i < newArr.length ; i++){
            if (newArr[i].id === objId){
                if (e.target.value === "+")
                    newArr[i].count+=1
                else
                    newArr[i].count -=1

                if (newArr[i].count < 1)
                    newArr = newArr.slice(0,i).concat(newArr.slice(i+1,))
                break;
            }
        }
        if (newArr.length === 0){
            this.setState({productsArr:null}, this.props.cartEmptied())
            localStorage.removeItem("productsArr")
        }
        else{
            this.setState({productsArr:newArr})
            localStorage.setItem("productsArr", JSON.stringify(newArr)) 
        }
    }

    deleteItem(e,objId){
        let newArr = [...this.state.productsArr]
        if (e.target.id !== "emptyAll"){
            for (let i = 0 ; i < newArr.length ; i++){
                if (newArr[i].id === objId){
                    newArr = newArr.slice(0,i).concat(newArr.slice(i+1,))
                    this.setState({productsArr:newArr})
                    localStorage.setItem("productsArr", JSON.stringify(newArr)) 
                    break;
                }  
            }
        }

        if (e.target.id === "emptyAll" || newArr.length === 0){
            this.setState({productsArr:null},this.props.cartEmptied())
            localStorage.removeItem("productsArr")
        }
    }
    
    applyDiscount(e){
        e.preventDefault()
        if ((this.inputRef.current.value).toLowerCase() === "gal25")
            this.setState({discount:0.75})
    }
        
    render() {
        let priceOfAll = 0;
        let shipping = 15;

        if (this.state.productsArr){
            return (
                <div className="container mb-5">
                    <table className="table table-hover my-3">
                        <thead>
                            <tr>
                                <th className="smallImg">Item</th><th></th><th>Price</th><th>Qty</th><th className="smallImg">Subtotal</th><th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.productsArr.map((product,key)=>{
                                if (key === 0){
                                    priceOfAll = 0
                                }
                                for (let obj of this.AllProducts){
                                    if (obj.id === product.id){

                                        let finalPrice = (obj.discount ? obj.discount : obj.price).toFixed(2)
                                        let totalPrice = (finalPrice * product.count).toFixed(2)
                                        priceOfAll+= Number(totalPrice)
                                        
                                        return(
                                            <tr key={key}>
                                                <td className="smallImg"> <img src={obj.imgSmall} className="img-fluid" alt=""/></td>
                                                <td>{obj.name}</td>
                                                <td>${finalPrice}</td>
                                                <td >
                                                <div className="d-flex flex-wrap">
                                                    <input type="button" className={`btn btn-danger btn-sm minus ${this.props.page}`} value="-" onClick={(e)=>this.changeCount(e, obj.id)}/>
                                                    <span className="text-center px-1">{product.count}</span>
                                                    <input type="button" className={`btn btn-success btn-sm ${this.props.page}`} value="+" onClick={(e)=>this.changeCount(e, obj.id)}/>
                                                    </div>
                                                </td>
                                                <td className="smallImg">${totalPrice}</td>
                                                <td><i type="button" onClick={(e)=>this.deleteItem(e,obj.id)} className="far fa-trash-alt text-danger"></i></td>
                                            </tr>
                                        )
                                    }
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
            <button className={` ${this.props.page} btn btn-danger`} id="emptyAll" onClick={(e)=>this.deleteItem(e)}>Empty Cart</button>
            <div className="my-2">
                <h3 className={`${this.props.page} ps-1 bg-primary py-1 text-light`}>Summary</h3>
                <table className="table table-hover my-3">
                    <tbody>
                        <tr >
                            <th>Total Before Shipping</th>
                            <td>${(priceOfAll*(this.state.discount?this.state.discount:1)).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th>Estimated Shipping Fee</th>
                            <td>{priceOfAll*(this.state.discount?this.state.discount:1) >= 100 ?  "Free Shipping beyond $100USD!" :"$15.00"}</td>
                        </tr>
                        <tr>
                            <th>Order Total</th>
                            <td>${(priceOfAll*(this.state.discount?this.state.discount:1)+ (priceOfAll*(this.state.discount?this.state.discount:1)<100 ? shipping :0)).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <div className={this.props.page}>
                    <h6>Apply Discount Code</h6>
                    <form onSubmit={(e)=>this.applyDiscount(e)}>
                        <input className="me-1" ref={this.inputRef} type="text"/>
                        <button className="btn btn-success">Apply Code</button>
                    </form>
                </div>
                <button className="float-end btn btn-lg btn-primary my-2">Proceed to Checkout</button>

            </div>
        </div>

                
            )}
            return null;
    }
    
}
