import React, { Component } from 'react'
import './Cart.css'
import Item from './Item'
import myProducts from '../../prod.json'
import {Link} from "react-router-dom"
import CartEmpty from '../../pictures/cartEmpty.png'

export default class Cart extends Component {
    constructor(){
        super()
        this.state={
            arrProd:JSON.parse(localStorage.getItem('products')) || [],
            country:"Israel"
        }

    }
   
    priceCalculation(){
        let totalsum=0;
        for(let i=0;i<this.state.arrProd.length;i++)
            for(let j=0;j<myProducts.length;j++)
                if(this.state.arrProd[i].Image===myProducts[j].Image)
                    totalsum+=myProducts[j].Price*this.state.arrProd[i].Item
    return totalsum
    }
    shippingPrice(){
        if(this.state.country==="Israel")
            return 0

    }


    render() {
        return (
            <div className="container-fluid">
            {!this.state.arrProd.length ? (
                <div className="container">
                    <br/>
                    <h1 className="text-center">No products have been added to cart</h1><br/>
                    <img src={CartEmpty} alt="..." className="d-flex mx-auto"></img>
                    <br/><br/>
                </div>
            ) : (
                <div className="row">
                <div className="col-9">
                {
                    this.state.arrProd.map((card) =>
                        <Item key={card.Image} image={card.Image} item={card.Item}/>
                    )
                }
                <br/>   
                </div>
                <div className="col-3">
                        <br/>
                        <div style={{fontSize:"20px"}}><b>Country:</b></div>
                    <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                        <option >Israel</option>
                        <option value="1">China</option>
                        <option value="2">USA</option>
                        <option value="3">Spain</option>
                        <option value="4">Mexico</option>
                        <option value="5">Italy</option>
                    </select>

                    <br/>
                    <div id="checkout" className="container-fluid">
                    <br/><p style={{fontSize:"20px",fontWeight:"bold"}}>How you'll pay</p>
                    <div className="btn-group-vertical">
                    <p className="radioP">
                        <input type="radio" name="name" id="r1" required defaultChecked/>
                        <label htmlFor="r1">
                            <span className="radioButtonGraph"></span>
                            <i className="fab fa-cc-mastercard" style={{color:"red"}}></i>
                            <i className="fab fa-cc-amex" style={{color:"blue"}}></i>
                            <i className="fab fa-cc-visa" style={{color:"grey"}}></i>
                        </label>
                        </p>
                        <p className="radioP">
                        <input type="radio" name="name" id="r2" required/>
                        <label htmlFor="r2">
                            <span className="radioButtonGraph"></span>
                            <i className="fab fa-cc-paypal" style={{color:"blue"}}></i>
                            
                        </label>
                        </p>
                        <p className="radioP">
                        <input type="radio" name="name" id="r3" required/>
                        <label htmlFor="r3">
                            <span className="radioButtonGraph"></span>
                            <i className="fab fa-bitcoin" style={{color:"orange"}}></i> (Recommended)
                        </label>
                        </p>
                        <p className="radioP">
                        <input type="radio" name="name" id="r4" required/>
                        <label htmlFor="r4">
                            <span className="radioButtonGraph"></span>
                            Cash
                        </label>
                        </p>
                    </div>
                    <p>Item(s) total: <span className="text-end">${this.priceCalculation()} </span></p>
                    <p>Shipping: <span className="text-end">${this.shippingPrice()}</span></p>
                    <hr/>
                    <p style={{fontWeight:"bold"}}>Total ({this.state.arrProd.length} items) <span className="text-end">${this.priceCalculation()+this.shippingPrice()}</span></p>
                    <button id="checkoutBtn"><Link to='/checkout' style={{color:"white"}}>Proceed to checkout</Link>
                    </button>
                    <br/>
                    <input id="couponTxt" type="text" placeholder="Coupon Code"/>&nbsp;<i className="fas fa-tag"></i>
                    <button id="couponBtn">activate coupon</button>
                    <br/>
                </div>
            </div>

            </div>




            )}


                
        </div>
        )
    }
}
