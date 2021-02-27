import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {applyDiscount, getDiscounts} from '../../actions'
import {EmptyCart} from '../Cart/EmptyCart'
import './Checkout.css'

let priceOfAll
class Checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            allProducts:"",
            shipping:0,
            loggedIn: localStorage.getItem("login"),
            billingFields: [{id:"fname", value:"", valid:""}, {id:"lname", value:"", valid:""}, {id:"phone", value:"", valid:""}, {id:"email", value:"",valid:""}],
            shippingFields: [{id:"fname2", value:"", valid:""},{id:"lname2", value:"", valid:""},{id:"add1", value:"", valid:""},{id:"add2", value:"", valid:""},{id:"city", value:"", valid:""}, {id:"notes", value:""}],
            allOk:false
        }
        this.productsArr = JSON.parse(localStorage.getItem("productsArr"))
        this.discountRef = React.createRef();
        this.validateBillingFields =  this.validateBillingFields.bind(this)
        this.validateShippingFields =  this.validateShippingFields.bind(this)
    }

    componentDidMount(){
        axios.get("http://localhost:3000/objectsArr").then(response=> this.setState({allProducts:response.data}))
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

    shippingFee(e){
        this.setState({shipping:Number(e.target.value)})
    }
    
    changePayment(e){
        let paymentMethod = {value:e.target.value,valid:"is-valid"}
        this.setState({paymentMethod})
    }

    checkAll(){
        let allOk = true;
        let billingFields = [...this.state.billingFields]
        let shippingFields = [...this.state.shippingFields]
        
        for (let field of billingFields){
            if (field.valid !== "is-valid"){
                field.valid = "is-invalid"
                allOk=false;
            }
        }
        
        for (let field of shippingFields){
            if (field.valid !== "is-valid" && field.id !== "notes"){
                field.valid = "is-invalid"
                allOk=false;
            }
        }
        
        this.setState({billingFields, shippingFields, allOk})
        localStorage.setItem("totalPrice",(priceOfAll * (this.props.discount || 1 ) + (priceOfAll*(this.props.discount||1) < 100 ? this.state.shipping : 0)).toFixed(2))
    }

    async clickDiscount(e){
        e.preventDefault()
        await this.props.getDiscounts()
        this.props.applyDiscount(this.discountRef.current.value.toLowerCase())
    }

    render() {
        priceOfAll = 0;
        let coupon = this.props.discount
        let billing = this.state.billingFields
        let shipping = this.state.shippingFields
       
        return (
            <div className="py-5">
                {this.state.loggedIn? "": <Redirect to="/login"/>}
                {this.state.allOk? <Redirect to="/payment"/> : ""}
                {!this.productsArr? <EmptyCart/>:
                
                <div>
                    
                <h1 className="text-center">Checkout</h1>
                {!this.state.allProducts? <div>loading...</div>:
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <form>
                                    <h5 className="my-3">Billing details</h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="fname" className="fw-bold form-label">First name<span className="text-danger">*</span></label>
                                            <input name="fname" value={billing[0].value} onChange={(e)=>this.updateBillingFields(e,"fname")} id="fname" type="text" className={`form-control ${billing[0].valid}`}/>
                                            <div className="invalid-feedback">Please fill your first name.</div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lname" className="fw-bold form-label">Last name<span className="text-danger">*</span></label>
                                            <input onChange={(e)=>this.updateBillingFields(e,"lname")} id="lname" type="text" className={`form-control ${billing[1].valid}`} />
                                            <div className="invalid-feedback">Please fill your last name.</div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="phone" className="fw-bold form-label">Phone Number<span className="text-danger">*</span></label>
                                            <input onChange={(e)=>this.updateBillingFields(e,"phone")} id="phone" type="text" className={`form-control ${billing[2].valid}`}/>
                                            <div className="invalid-feedback">Invalid phone number.</div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="fw-bold form-label">Email Address<span className="text-danger">*</span></label>
                                            <input onChange={(e)=>this.updateBillingFields(e,"email")} id="email" type="text" className={`form-control ${billing[3].valid}`}/>
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
                                            <input id="fname2" onChange={(e)=>this.updateShippingFields(e,"fname2")} type="text" className={`form-control ${shipping[0].valid}`}/>
                                            <div className="invalid-feedback">Please fill the recepient's first name.</div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lname2" className="fw-bold form-label">Last name<span className="text-danger">*</span></label>
                                            <input id="lname2" onChange={(e)=>this.updateShippingFields(e,"lname2")}  className={`form-control ${shipping[1].valid}`} type="text"/>
                                            <div className="invalid-feedback">Please fill the recepient's last name.</div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="add1" className="fw-bold form-label">Address<span className="text-danger">*</span></label>
                                            <input id="add1" onChange={(e)=>this.updateShippingFields(e,"add1")} className={`form-control ${shipping[2].valid}`} placeholder="123 Main St" type="text"/>
                                            <div className="invalid-feedback">Please fill the recepient's address.</div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="add2" className="fw-bold form-label">Address 2<span className="text-danger">*</span></label>
                                            <input id="add2" onChange={(e)=>this.updateShippingFields(e,"add2")} className={`form-control ${shipping[3].valid}`} placeholder="Apartment, studio, or floor" type="text"/>
                                            <div className="invalid-feedback">Please fill the recepient's address.</div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="city" className="fw-bold form-label">City<span className="text-danger">*</span></label>
                                            <input id="city" onChange={(e)=>this.updateShippingFields(e,"city")} className={`form-control ${shipping[4].valid}`} type="text"/>
                                            <div className="invalid-feedback">Please fill the recepient's city.</div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea maxLength="200" id="notes" onChange={(e)=>this.updateShippingFields(e,"notes")} className="form-control" style={{height: "100px"}}></textarea>
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
                                            {this.productsArr.map((product,key)=>{
                                                if (key === 0)
                                                    priceOfAll = 0
                                                
                                                for (let obj of this.state.allProducts){
                                                    if (obj.id === product.id){
                                                        let finalPrice = ( obj.discount || obj.price).toFixed(2)
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
                                            <tr className={coupon? "text-danger" : "noDiscount"}>
                                                <th>Total (before discount)</th>
                                                <td>${priceOfAll.toFixed(2)}</td>
                                            </tr>          
                                            <tr className={coupon? "text-success" : "noDiscount"}>
                                                <th>Coupon Applied - You've saved</th>
                                                <td>-${(priceOfAll*(coupon?(1-coupon):1)).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <th>Total before shipping</th>
                                                <td>${(priceOfAll*(coupon?coupon:1)).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping method</th>
                                                <td>
                                                    <select className="form-select" onChange={(e)=>this.shippingFee(e)}>
                                                        <option value="0">Pick-up  - $0</option>
                                                        <option value="5">Unregistered mail - $5</option>
                                                        <option value="10">Registered mail - $10</option>
                                                        <option value="20">Delivery - $20</option>
                                                    </select>
                                                    <span className="form-text">Free shipping for deals over 100$</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Total including shipping</th>
                                                <td className="fw-bold">$
                                                    <span>
                                                    {(priceOfAll * (coupon || 1) + (priceOfAll*(coupon || 1) < 100 ? this.state.shipping : 0)).toFixed(2)}
                                                    </span>
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table> 
                                    <div className="row justify-content-center">
                                        <button className="btn btn-primary btn-lg py-3 w-50" onClick={()=>this.checkAll()}>Confirm Order</button>
                                        <p className="text-center">Still missing something? <Link to="/store/" style={{textDecoration:"none"}}>Continue Shopping</Link></p>
                                    </div>
                            
                                    <div className="my-2">
                                        <form onSubmit={(e)=>this.clickDiscount(e)} className="row g-3">
                                            <div>
                                                <h6>Apply Discount Code</h6>
                                                <input className="me-1 mb-2 form-control" ref={this.discountRef} type="text"/>
                                                <button className="btn btn-success">Apply Code</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>}
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    discount:state.discount.discount
})

export default connect(mapStateToProps, {applyDiscount, getDiscounts})(Checkout)