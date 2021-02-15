import React, { Component } from 'react'
import {objectsArr} from '../Product/data'
import {Link, Redirect} from 'react-router-dom'
import './Checkout.css'

export default class Checkout extends Component {
    constructor(props){
        super(props)
        this.AllProducts = objectsArr
        this.state = {
                    discount:localStorage.getItem("discount"),
                    productsArr:JSON.parse(localStorage.getItem("productsArr")),
                    shipping:0,
                    loggedIn: localStorage.getItem("login"),
                    billingFields: [{id:"fname", value:"", valid:""}, {id:"lname", value:"", valid:""}, {id:"phone", value:"", valid:""}, {id:"email", value:"",valid:""}],
                    shippingFields: [{id:"fname2", value:"", valid:""},{id:"lname2", value:"", valid:""},{id:"add1", value:"", valid:""},{id:"add2", value:"", valid:""},{id:"city", value:"", valid:""}, {id:"notes", value:""}],
                    paymentMethod:{value:null,valid:""},
                    allOk:false
                    }

        this.discountRef = React.createRef();
        this.validateBillingFields =  this.validateBillingFields.bind(this)
        this.validateShippingFields =  this.validateShippingFields.bind(this)
    }

    updateBillingFields(e, inputField){
        let newBillingFields = [...this.state.billingFields]
        for (let field of newBillingFields){
            if (field.id === inputField){
                field.value = e.target.value
                break;
            }
        }
        this.setState({billingFields:newBillingFields}, this.validateBillingFields(e))
    }

    validateBillingFields(e){
        let newBillingFields = [...this.state.billingFields]
        for (let field of newBillingFields){
            if (e.target.id === field.id){
                switch (e.target.id) {
                    case "fname":
                    case "lname":
                        if (e.target.value)
                            field.valid = "is-valid"
                        else
                            field.valid = "is-invalid"
                        break;
                        
                    case "phone":
                        let mobilePattern = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
                        let homePattern = /^\(?([0-9]{2})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
                            if (e.target.value.match(mobilePattern) || e.target.value.match(homePattern))
                                field.valid = "is-valid"
                            else
                                field.valid = "is-invalid"
                            break;
                        case "email":
                            let mailPattern = new RegExp(/^\w+@\w+(\.[A-z]+){1,2}$/);
                            if (e.target.value.match(mailPattern))
                                field.valid = "is-valid"
                            else
                                field.valid = "is-invalid"
                            break;
                    default:
                        break;
                    }
            }
        }
        
        this.setState({billingFields:newBillingFields})
    }

    updateShippingFields(e, inputField){
        let newShippingFields = [...this.state.shippingFields]
        for (let field of newShippingFields){
            if (field.id === inputField){
                field.value = e.target.value
                break;
            }
        }
        this.setState({shippingFields:newShippingFields}, this.validateShippingFields(e))
    }

    validateShippingFields(e){
        let newShippingFields = [...this.state.shippingFields]
        for (let field of newShippingFields){
            if (e.target.id!== "notes" && e.target.id === field.id){
                if (e.target.value)
                    field.valid = "is-valid"
                else
                    field.valid = "is-invalid"
                    
                break;
            }
        }  
        this.setState({shippingFields:newShippingFields})
    }

    applyDiscount(e){
        e.preventDefault()
        if ((this.inputRef.current.value).toLowerCase() === "gal25"){
            this.setState({discount:0.75})
            localStorage.setItem("discount",0.75)
        }
    }

    shippingFee(e){
        this.setState({shipping:Number(e.target.value)})
    }
    
    changePayment(e){
        let paymentMethod = {value:e.target.value,valid:"is-valid"}
        this.setState({paymentMethod})
    }

    checkAll(){
        let allOk = true;
        let newBillingFields = [...this.state.billingFields]
        let newShippingFields = [...this.state.shippingFields]
        let paymentMethod = {...this.state.paymentMethod}

        for (let field of newBillingFields){
            if (field.valid !== "is-valid"){
                field.valid = "is-invalid"
                allOk=false;
            }
            
        }

        for (let field of newShippingFields){
            if (field.valid !== "is-valid" && field.id !== "notes"){
                field.valid = "is-invalid"
                allOk=false;
            }
                
        }

        if (paymentMethod.valid !== "is-valid"){
            paymentMethod.valid = "is-invalid"
            allOk=false
        }

        this.setState({billingFields:newBillingFields, shippingFields:newShippingFields, paymentMethod, allOk})
    }

    render() {
        let priceOfAll = 0;
       
        return (
            <div className="py-5 ">
                {this.state.loggedIn? "": <Redirect to="/login"/>}
                {this.state.allOk? <Redirect to="/confirmed"/> : ""}
                <h1 className="text-center">Checkout</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <h5 className="my-3">Billing details</h5>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="fname" className="fw-bold form-label">First name<span className="text-danger">*</span></label>
                                        <input name="fname" value={this.state.billingFields[0].value} onChange={(e)=>this.updateBillingFields(e,"fname")} id="fname" type="text" className={`form-control ${this.state.billingFields[0].valid}`}/>
                                        <div className="invalid-feedback">Please fill your first name.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname" className="fw-bold form-label">Last name<span className="text-danger">*</span></label>
                                        <input onChange={(e)=>this.updateBillingFields(e,"lname")} id="lname" type="text" className={`form-control ${this.state.billingFields[1].valid}`} />
                                        <div className="invalid-feedback">Please fill your last name.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="phone" className="fw-bold form-label">Phone Number<span className="text-danger">*</span></label>
                                        <input onChange={(e)=>this.updateBillingFields(e,"phone")} id="phone" type="text" className={`form-control ${this.state.billingFields[2].valid}`}/>
                                        <div className="invalid-feedback">Invalid phone number.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="fw-bold form-label">Email Address<span className="text-danger">*</span></label>
                                        <input onChange={(e)=>this.updateBillingFields(e,"email")} id="email" type="text" className={`form-control ${this.state.billingFields[3].valid}`}/>
                                        <div className="invalid-feedback">Invalid email address.</div>
                                    </div>
                                    <div className="col-12 form-check">
                                        <input type="checkbox" className="form-check-input" id="newsletter"/>
                                        <label className="form-check-label" htmlFor="newsletter">Subscribe to our monthly newsletter</label>
                                    </div>
                                </div>
                                <h5 className="my-3">Shipping details</h5>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="fname2" className="fw-bold form-label">First name<span className="text-danger">*</span></label>
                                        <input id="fname2" onChange={(e)=>this.updateShippingFields(e,"fname2")} type="text" className={`form-control ${this.state.shippingFields[0].valid}`}/>
                                        <div className="invalid-feedback">Please fill the recepient's first name.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname2" className="fw-bold form-label">Last name<span className="text-danger">*</span></label>
                                        <input id="lname2" onChange={(e)=>this.updateShippingFields(e,"lname2")}  className={`form-control ${this.state.shippingFields[1].valid}`} type="text"/>
                                        <div className="invalid-feedback">Please fill the recepient's last name.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="add1" className="fw-bold form-label">Address<span className="text-danger">*</span></label>
                                        <input id="add1" onChange={(e)=>this.updateShippingFields(e,"add1")} className={`form-control ${this.state.shippingFields[2].valid}`} placeholder="123 Main St" type="text"/>
                                        <div className="invalid-feedback">Please fill the recepient's address.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="add2" className="fw-bold form-label">Address 2<span className="text-danger">*</span></label>
                                        <input id="add2" onChange={(e)=>this.updateShippingFields(e,"add2")} className={`form-control ${this.state.shippingFields[3].valid}`} placeholder="Apartment, studio, or floor" type="text"/>
                                        <div className="invalid-feedback">Please fill the recepient's address.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="city" className="fw-bold form-label">City<span className="text-danger">*</span></label>
                                        <input id="city" onChange={(e)=>this.updateShippingFields(e,"city")} className={`form-control ${this.state.shippingFields[4].valid}`} type="text"/>
                                        <div className="invalid-feedback">Please fill the recepient's city.</div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea id="notes" onChange={(e)=>this.updateShippingFields(e,"notes")} className="form-control" style={{height: "100px"}}></textarea>
                                            <label htmlFor="notes">Additional Notes</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <table className="table table-hover my-3">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.productsArr.map((product,key)=>{
                                        if (key === 0)
                                            priceOfAll = 0
                                        
                                        for (let obj of this.AllProducts){
                                            if (obj.id === product.id){
                                                let finalPrice = (obj.discount ? obj.discount : obj.price).toFixed(2)
                                                let totalPrice = (finalPrice * product.count).toFixed(2)
                                                priceOfAll+= Number(totalPrice)
                                                
                                                return(
                                                    <tr key={key}>
                                                        <td>{obj.name} x{product.count}</td>
                                                        <td className="smallImg">${totalPrice}</td>
                                                    </tr>
                                                )
                                            }
                                        }
                                        return null;
                                    })}
                                    <tr className={this.state.discount? "text-danger" : "noDiscount"}>
                                        <th>Total (before discount)</th>
                                        <td>${priceOfAll.toFixed(2)}</td>
                                    </tr>          
                                    <tr className={this.state.discount? "text-success" : "noDiscount"}>
                                        <th>Coupon Applied - You've saved</th>
                                        <td>-${(priceOfAll*(this.state.discount?(1-this.state.discount):1)).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>Total before shipping</th>
                                        <td>${(priceOfAll*(this.state.discount?this.state.discount:1)).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping method</th>
                                        <td>
                                            <select className="form-select" onChange={(e)=>this.shippingFee(e)}>
                                                <option value="0">Pick-up  - $0</option>
                                                <option value="5">Unregistered mail  - $5</option>
                                                <option value="10">Registered mail  - $10</option>
                                                <option value="20">Delivery  - $20</option>
                                            </select>
                                            <span className="form-text">Free shipping for deals over 100$</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Total including shipping</th>
                                        <td className={`fw-bold ${priceOfAll*(this.state.discount?this.state.discount:1) < 100? "" : "noDiscount"}`}>${(priceOfAll*(this.state.discount ? this.state.discount : 1) + this.state.shipping).toFixed(2)}</td>
                                        <td className={`fw-bold ${priceOfAll*(this.state.discount?this.state.discount:1) > 100? "" : "noDiscount"}`}>${(priceOfAll*(this.state.discount ? this.state.discount : 1)).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>Payment method</th>
                                        <td className="text-start">
                                            <form>
                                                    <div className="form-check">
                                                        <input onClick={(e)=>this.changePayment(e)} value="paypal" className={`form-check-input radiob ${this.state.paymentMethod.valid}`} type="radio" name="flexRadioDefault" id="paypal"/>
                                                        <label className="form-check-label" htmlFor="paypal">
                                                            <i className="fab fa-cc-paypal fa-3x text-secondary"></i> Paypal
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input onClick={(e)=>this.changePayment(e)} value="cash"  className={`form-check-input radiob ${this.state.paymentMethod.valid}`} type="radio" name="flexRadioDefault" id="cash"/>
                                                        <label className="form-check-label text-start" htmlFor="cash">
                                                            <i className="fas fa-money-bill-wave-alt text-secondary fa-3x"></i> Cash
                                                        </label>
                                                        <div className="invalid-feedback">Please choose a payment method.</div>

                                                    </div>
                                                    
                                            </form>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> 
                            <div className="row justify-content-center">
                                <button className="btn btn-primary btn-lg py-3 w-50" onClick={()=>this.checkAll()}>Confirm Order</button>
                                <p className="text-center">Still missing something? <Link to="/store/" style={{textDecoration:"none"}}>Continue Shopping</Link></p>
                            </div>
                       
                            <div className="my-2">
                                <form onSubmit={(e)=>this.applyDiscount(e)} className="row g-3">
                                    <div className="">
                                        <h6>Apply Discount Code</h6>
                                        <input className="me-1 mb-2 form-control" ref={this.discountRef} type="text"/>
                                        <button className="btn btn-success">Apply Code</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        )
    }
}
