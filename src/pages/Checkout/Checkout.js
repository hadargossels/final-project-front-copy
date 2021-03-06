import React, { useState, useRef, useEffect } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {applyDiscount, getDiscounts, addTempInvoice} from '../../actions'
import Spinner from '../../components/Spinner/Spinner'
import {useAuth} from '../../contexts/AuthContext'
import {db} from '../../firebase'

import {EmptyCart} from '../../components/Cart/EmptyCart'
import './Checkout.css'

function Checkout (props) {
    const [myData, setMyData] = useState("")
    const {currentUser} = useAuth()

    const billFnameRef = useRef()
    const billLnameRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const [billingValid, setBilling] = useState(
        {"fname":"","lname":"","phone":"","email":""}
    )

    const shipFnameRef = useRef()
    const shipLnameRef = useRef()
    const streetRef = useRef()
    const aptRef = useRef()
    const cityRef = useRef()
    const notesRef = useRef()
    const [shippingValid, setShipping] = useState(
        {"fname":"","lname":"", "street":"","apt":"","city":""}
    )

    const [shippingFee, setshippingFee] = useState(0)
    const [allOkStatus, setAllOk] = useState(false)

    let discountRef = useRef(null)
    let priceOfAll = 0;
    let coupon = props.discount

    useEffect(()=>{
        db.on("value", (snapshot) =>{
            let myData = ""
            myData = (snapshot.val().users);
            for (const [key,value] of Object.entries(myData)){
              if (value.id === currentUser.uid)
                setMyData(value)
            }
        })
    },[])

    function validateBilling(field){
        let newValid = {...billingValid}
        switch (field){
            case "fname":
                if (billFnameRef.current.value)
                    newValid.fname = "is-valid"
                else
                    newValid.fname = "is-invalid"
                break;
            case "lname":
                if (billLnameRef.current.value)
                    newValid.lname = "is-valid"
                else
                    newValid.lname = "is-invalid"
                break;
            case "phone":
                let mobilePattern = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
                let homePattern = /^\(?([0-9]{2})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
                if (phoneRef.current.value.match(mobilePattern) || phoneRef.current.value.match(homePattern))
                    newValid.phone = "is-valid"
                else
                    newValid.phone = "is-invalid"
                break;
            case "email":
                let mailPattern = new RegExp(/^\w+@\w+(\.[A-z]+){1,2}$/);
                if (emailRef.current.value.match(mailPattern))
                    newValid.email = "is-valid"
                else
                    newValid.email = "is-invalid"
                break;
            default:
                break;
        }
        setBilling(newValid)
    }

    function validateShipping(field){
        let newValid = {...shippingValid}
        switch (field){
            case "fname":
                if (shipFnameRef.current.value)
                    newValid.fname = "is-valid"
                else
                    newValid.fname = "is-invalid"
                break;
            case "lname":
                if (shipLnameRef.current.value)
                    newValid.lname = "is-valid"
                else
                    newValid.lname = "is-invalid"
                break;
            case "street":
                if (streetRef.current.value)
                    newValid.street = "is-valid"
                else
                    newValid.street = "is-invalid"
                break;
            case "apt":
                if (aptRef.current.value)
                    newValid.apt = "is-valid"
                else
                    newValid.apt = "is-invalid"
                break;
            case "city":
                if (cityRef.current.value)
                    newValid.city = "is-valid"
                else
                    newValid.city = "is-invalid"
                break;
            default:
                break;
        }
        setShipping(newValid)
    }

    function checkAll(){
        let allOk = true;
        let newBilling = {...billingValid}
        let newShipping = {...shippingValid}

        for (const [key, value] of Object.entries(newBilling)) {
            if (!value){
                switch (key){
                    case "fname":
                        if (billFnameRef.current.value)
                            newBilling.fname = "is-valid"
                        else{
                            newBilling.fname = "is-invalid"
                            allOk=false;
                        }
                        break;
                    case "lname":
                        if (billLnameRef.current.value)
                            newBilling.lname = "is-valid"
                        else{
                            newBilling.lname = "is-invalid"
                            allOk=false;
                        }
                        break;
                    case "phone":
                        let mobilePattern = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
                        let homePattern = /^\(?([0-9]{2})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
                        if (phoneRef.current.value.match(mobilePattern) || phoneRef.current.value.match(homePattern))
                            newBilling.phone = "is-valid"
                        else{
                            newBilling.phone = "is-invalid"
                            allOk=false;
                        }
                        break;
                    case "email":
                        let mailPattern = new RegExp(/^\w+@\w+(\.[A-z]+){1,2}$/);
                        if (emailRef.current.value.match(mailPattern))
                            newBilling.email = "is-valid"
                        else{
                            newBilling.email = "is-invalid"
                            allOk=false
                        }
                        break;
                    default:
                        break;
                }
            }
        }

        for (const [key, value] of Object.entries(newShipping)) {
            if (!value){
                switch (key){
                    case "fname":
                        if (shipFnameRef.current.value)
                            newShipping.fname = "is-valid"
                        else{
                            newShipping.fname = "is-invalid"
                            allOk=false
                        }
                        break;
                    case "lname":
                        if (shipLnameRef.current.value)
                            newShipping.lname = "is-valid"
                        else{
                            newShipping.lname = "is-invalid"
                            allOk=false;
                        }
                        break;
                    case "street":
                        if (streetRef.current.value)
                            newShipping.street = "is-valid"
                        else{
                            newShipping.street = "is-invalid"
                            allOk=false;
                        }
                        break;
                    case "apt":
                        if (aptRef.current.value)
                            newShipping.apt = "is-valid"
                        else{
                            newShipping.apt = "is-invalid"
                            allOk=false
                        }
                        break;
                    case "city":
                        if (cityRef.current.value)
                            newShipping.city = "is-valid"
                        else{
                            newShipping.city = "is-invalid"
                            allOk=false;
                        }
                        break;
                    default:
                        break;
            }
        }
        }
        setBilling(newBilling)
        setShipping(newShipping)

        if (allOk === true){
            let itemsAllData = []
            props.chosenProducts.map((product)=>{
                for (let obj of props.allProducts){
                    if (obj.id === product.id){
                        itemsAllData.push(
                            {
                                name:obj.name,
                                unitPrice: obj.discount || obj.price,
                                count:product.count,
                                finalPrice: (obj.discount || obj.price)*product.count
                            }
                        )
                    }
                }
            })

            props.addTempInvoice({
                uid: currentUser.uid,
                billName: billFnameRef.current.value+" "+billLnameRef.current.value,
                email: emailRef.current.value,
                phone:phoneRef.current.value,

                shipName: shipFnameRef.current.value+" "+shipLnameRef.current.value,
                address: streetRef.current.value +" "+aptRef.current.value,
                city: cityRef.current.value,
                notes: notesRef.current.value,

                purchaseDetails:itemsAllData,
                sum: priceOfAll.toFixed(2),
                sumWithDiscount: coupon? (priceOfAll * coupon).toFixed(2): "",
                shipping: (priceOfAll*(coupon || 1) < 100 ? Number(shippingFee) : 0).toFixed(2),
                finalSum:(priceOfAll * (coupon || 1) + (priceOfAll*(coupon || 1) < 100 ? Number(shippingFee) : 0)).toFixed(2)
            })
        }

        setAllOk(allOk)
    }

    async function clickDiscount(e){
        e.preventDefault()
        await props.getDiscounts()
        props.applyDiscount(discountRef.current.value.toLowerCase())
    }

    return (
        <div className="py-5">
            {props.loggedIn? "": <Redirect to="/login"/>}
            {allOkStatus? <Redirect to="/payment"/> : ""}
            {!props.chosenProducts? 
            <EmptyCart/>:
            <div>
                <h1 className="text-center">Checkout</h1>
                {!props.allProducts? <Spinner/>:
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <h5 className="my-3">Billing details</h5>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="fname" className="fw-bold form-label">First name
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input ref={billFnameRef} onChange={()=>validateBilling("fname")} id="fname" type="text" className={`form-control ${billingValid.fname}`} defaultValue={myData.name}/>
                                        <div className="invalid-feedback">Please fill your first name.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname" className="fw-bold form-label">Last name
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input ref={billLnameRef} onChange={()=>validateBilling("lname")} id="lname" type="text" className={`form-control ${billingValid.lname}`} defaultValue={myData.lastname} />
                                        <div className="invalid-feedback">Please fill your last name.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="phone" className="fw-bold form-label">Phone Number
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input ref={phoneRef} onChange={()=>validateBilling("phone")} id="phone" type="text" className={`form-control ${billingValid.phone}`} defaultValue={myData.phone}/>
                                        <div className="invalid-feedback">Invalid phone number.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="fw-bold form-label">Email Address<span className="text-danger">*</span></label>
                                        <input ref={emailRef} onChange={()=>validateBilling("email")} id="email" type="text" className={`form-control ${billingValid.email}`} defaultValue={myData.email} />
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
                                        <label htmlFor="fname2" className="fw-bold form-label">First name
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input id="fname2" ref={shipFnameRef} onChange={()=>validateShipping("fname")}  defaultValue={myData.name} type="text" className={`form-control ${shippingValid.fname}`}/>
                                        <div className="invalid-feedback">Please fill the recepient's first name.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lname2" className="fw-bold form-label">Last name
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input id="lname2" ref={shipLnameRef} onChange={()=>validateShipping("lname")}  defaultValue={myData.lastname} className={`form-control ${shippingValid.lname}`} type="text"/>
                                        <div className="invalid-feedback">Please fill the recepient's last name.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="add1" className="fw-bold form-label">Address
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input id="add1" ref={streetRef} onChange={()=>validateShipping("street")}  
                                            defaultValue={myData.address? myData.address.street : ""}
                                            className={`form-control ${shippingValid.street}`} placeholder="123 Main St" type="text"/>
                                        <div className="invalid-feedback">Please fill the recepient's address.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="add2" className="fw-bold form-label">Address 2 (Apartment, studio or floor)
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input id="add2" ref={aptRef} onChange={()=>validateShipping("apt")} className={`form-control ${shippingValid.apt}`}
                                        defaultValue={myData.address? myData.address.apt : ""}
                                        type="text"/>
                                        <div className="invalid-feedback">Please fill the recepient's address.</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="city" className="fw-bold form-label">City<span className="text-danger">*</span></label>
                                        <input ref={cityRef} id="city" onChange={()=>validateShipping("city")} 
                                            defaultValue={myData.address? myData.address.city : ""}
                                            className={`form-control ${shippingValid.city}`} type="text"/>
                                        <div className="invalid-feedback">Please fill the recepient's city.</div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea maxLength="200" ref={notesRef} id="notes" className="form-control" style={{height: "100px"}}></textarea>
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
                                    {props.chosenProducts.map((product,key)=>{
                                        for (let obj of props.allProducts){
                                            if (obj.id === product.id){
                                                let totalPrice = (( obj.discount || obj.price) * product.count).toFixed(2)
                                                priceOfAll+= Number(totalPrice)
                                                return(
                                                    <tr key={key}>
                                                        <td>{obj.name} x{product.count}</td>
                                                        <td>${totalPrice}</td>
                                                    </tr>
                                                )
                                            }
                                        }
                                            return null;
                                        })}
                                    {coupon?
                                    <>
                                        <tr className="text-danger">
                                            <th>Total (before discount)</th>
                                            <td>${priceOfAll.toFixed(2)}</td>
                                        </tr>
                                        <tr className="text-success">
                                            <th>Coupon Applied - You've saved</th>
                                            <td>-${(priceOfAll*(coupon?(1-coupon):1)).toFixed(2)}</td>
                                        </tr>
                                    </> : <></>
                                    }
                                    <tr>
                                        <th>Total before shipping</th>
                                        <td>${(priceOfAll*(coupon?coupon:1)).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping method</th>
                                        <td>
                                            <select className="form-select" onChange={(e)=>setshippingFee(e.target.value)} defaultValue="0">
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
                                            {(priceOfAll * (coupon || 1) + (priceOfAll*(coupon || 1) < 100 ? Number(shippingFee) : 0)).toFixed(2)}
                                            </span>
                                        </td>
                                    </tr>
                                        
                                </tbody>
                            </table>
                            <div className="row justify-content-center">
                                <button className="btn btn-primary btn-lg py-3 w-50" onClick={()=>checkAll()}>
                                    Confirm Order
                                </button>
                                <p className="text-center">Still missing something? 
                                    <Link className="ps-1" to="/store/" style={{textDecoration:"none"}}>
                                        Continue Shopping
                                    </Link>
                                </p>
                            </div>
                            <div className="my-2">
                                <form onSubmit={(e)=>clickDiscount(e)} className="row g-3">
                                    <div>
                                        <h6>Apply Discount Code</h6>
                                        <input className="me-1 mb-2 form-control" ref={discountRef} type="text"/>
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


const mapStateToProps = state => ({
    discount:state.discount.discount,
    allProducts: state.products.allProducts,
    chosenProducts:state.products.chosenProducts,
    loggedIn: state.user.loggedIn,
})

export default connect(mapStateToProps, {applyDiscount, getDiscounts, addTempInvoice})(Checkout)