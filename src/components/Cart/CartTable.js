import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './CartTable.css'

export default class CartTable extends Component {
    constructor(props){
        super(props)
        this.state = {allCoupons:"",allProducts:[],productsArr:this.props.productsArr, discount:localStorage.getItem("discount")}
        this.discountRef = React.createRef();
    }

    componentDidMount(){
        axios.get("http://localhost:3000/coupons").then(allCoupons =>{
            this.setState({allCoupons:allCoupons.data})
        })
        axios.get("http://localhost:3000/objectsArr").then(allProducts =>{
            this.setState({allProducts:allProducts.data})
        })

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
        let coupons = this.state.allCoupons
        for (let coupon of coupons){
            if ((this.discountRef.current.value).toLowerCase() === coupon.code.toLowerCase()){
                let discounted = coupon.couponDiscount / 100
                this.setState({discount: discounted})
                localStorage.setItem("discount",discounted)
            }
        }
    }
        
    render() {
        let priceOfAll = 0;

        if (this.state.productsArr){
            return (
                <div className="container mb-5">
                    {!this.state.allProducts? <div>loading...</div>:
                        <div>
                            <table className="table table-hover my-3">
                                <thead>
                                    <tr>
                                        <th style={{width:"131px"}} className="smallImg">Item</th>
                                        <th></th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th className="smallImg">Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.state.productsArr.map((product,key)=>{
                                        if (key === 0){
                                            priceOfAll = 0
                                        }
                                        for (let obj of this.state.allProducts){
                                            if (obj.id === product.id){

                                                let finalPrice = (obj.discount ? obj.discount : obj.price).toFixed(2)
                                                let totalPrice = (finalPrice * product.count).toFixed(2)
                                                priceOfAll+= Number(totalPrice)
                                                
                                                return(
                                                    <tr key={key}>
                                                        <td className="smallImg"> <img src={obj.imgSmall} className="img-fluid" alt=""/></td>
                                                        <td className="text-start">{obj.name}</td>
                                                        <td className="text-start">${finalPrice}</td>
                                                        <td >
                                                            <div className="d-flex flex-wrap">
                                                                <input type="button" className={`btn btn-danger btn-sm minus ${this.props.page}`} value="-" onClick={(e)=>this.changeCount(e, obj.id)}/>
                                                                <span className="text-center px-1">{product.count}</span>
                                                                <input type="button" className={`btn btn-success btn-sm ${this.props.page}`} value="+" onClick={(e)=>this.changeCount(e, obj.id)}/>
                                                            </div>
                                                        </td>
                                                        <td className="smallImg text-start">${totalPrice}</td>
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
                                        <tr className={this.state.discount? "text-danger" : "noDiscount"}>
                                            <th>Total (before discount)</th>
                                            <td>${priceOfAll.toFixed(2)}</td>
                                        </tr>          
                                        <tr className={this.state.discount? "text-success" : "noDiscount"}>
                                            <th>Coupon Applied - You've saved</th>
                                            <td>-${(priceOfAll*(this.state.discount?(1-this.state.discount):1)).toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Before Shipping</th>
                                            <td>${(priceOfAll*(this.state.discount?this.state.discount:1)).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className={this.props.page}>
                                    <h6>Apply Discount Code</h6>
                                    <form onSubmit={(e)=>this.applyDiscount(e)}>
                                        <input className="me-1" ref={this.discountRef} type="text"/>
                                        <button className="btn btn-success">Apply Code</button>
                                    </form>
                                </div>
                                <button className="float-end btn btn-lg btn-primary my-2"><Link to="/checkout" style={{textDecoration:"none",color:'white'}}>Proceed to Checkout</Link></button>

                            </div>
                        </div>}
                </div>
            )}
            return null;
    }
    
}
