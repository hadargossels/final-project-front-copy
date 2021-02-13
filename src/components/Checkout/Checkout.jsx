import React, { Component } from 'react'
import './Checkout.css'
import myProducts from '../../prod.json'

let arrProd=JSON.parse(localStorage.getItem('products')) || [];


export default class Checkout extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9">
                        <br/>
                    <h2 className="text-center ">Enter your shipping address</h2>
                    <form >
                    <div className="formChk">
                        <label className="lbl">Country</label><br/>
                        <input type="text" className="inp"></input><br/>
                        <label className="lbl">Full Name *</label><br/>
                        <input type="text" className="inp"></input><br/>
                        <label className="lbl">Street address *</label><br/>
                        <input type="text" className="inp"></input><br/>
                        <label className="lbl">House number *</label><br/>
                        <input type="text" className="inp"></input><br/>
                        <label className="lbl">City *</label><br/>
                        <input type="text" className="inp"></input><br/>
                        <label className="lbl">Postal code (optional)</label><br/>
                        <input type="text" className="inp"></input><br/>
                        <label className="lbl">Comments (optional)</label><br/>
                        <textarea className="txtArea" cols="47" rows="5"></textarea><br/>
                    </div>
                    <h2 className="text-center ">Enter your payment details</h2>
                    <div className="text-center"> The payment that was choosen is:</div>
                    <br/><input type="button" className="paymentBtn" value="Go to payment processor"></input>
                    
                </form>
                </div>
                <div className="col-3">

                <div className="orderDetails">
                <h4>Order details</h4>
                    <div>
                        {
                        arrProd.map((obj)=>{
                           
                            let results=myProducts.filter((prod)=>{
                                return prod.Image===obj.Image
                            })[0];
                            
                                return(
                                    
                                <div className="container border" key={`${results.Title}`}>
                                    <div className="row">
                                        <div className="col-5">
                                            <img className="popImg" src={results.Image} alt="..."/>
                                        </div>
                                        <div className="col-7">
                                            <div><b>{results.Title}</b></div><br/>
                                            <div className="text-start">{obj.Item} x ${results.Price}</div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                            }
                        </div>
                        <br/>
                        <div className="btn-group-vertical">
                    <p className="radioP">
                        <input type="radio" name="name" id="r1" required defaultChecked/>
                        <label htmlFor="r1">
                            <span className="radioButtonGraph"></span>
                            Pickup - free
                        </label>
                        </p>
                        <p className="radioP">
                        <input type="radio" name="name" id="r2" required/>
                        <label htmlFor="r2">
                            <span className="radioButtonGraph"></span>
                            Regular mailing - $3
                            
                        </label>
                        </p>
                        <p className="radioP">
                        <input type="radio" name="name" id="r3" required/>
                        <label htmlFor="r3">
                            <span className="radioButtonGraph"></span>
                            Registered mailing - $9
                        </label>
                        </p>
                        <p className="radioP">
                        <input type="radio" name="name" id="r4" required/>
                        <label htmlFor="r4">
                            <span className="radioButtonGraph"></span>
                            Home delivery - $15
                        </label>
                        </p>
                    </div>
                        
                        <br/><br/>
                        <p>Item(s) total: <span className="text-end">$</span></p>
                        <p>Shipping: <span className="text-end">$</span></p>
                        <p>Coupon:<span className="text-end">-$</span></p>
                        <hr/>
                        <p style={{fontWeight:"bold"}}>Total ({arrProd.length} items) <span className="text-end">$</span></p>
                        <button id="checkoutBtn" style={{color:"white"}}>Place order</button>
                        <br/>
                        <input id="couponTxt" type="text" placeholder="Coupon Code"/>&nbsp;<i className="fas fa-tag"></i>    
                </div>
                
      
                </div>




            </div>
            </div>
            </div>
        )
    }
}
