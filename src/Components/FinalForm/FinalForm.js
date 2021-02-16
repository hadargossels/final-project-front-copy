import React, { Component } from 'react';
import './FinalForm.css';
import formatPrice from '../utility/Price'
import formatPrecent from '../utility/Pecent'
import { Link } from "react-router-dom";

class FinalForm extends Component {
    constructor() {
        super();
        this.state = {
            taxRate: 5,
            totalProductsSum: localStorage.getItem('finalPrice'),
            coupon: ((localStorage.getItem('coupon')) ? "%15" : "None"),
        }
    }
  render () {

    let offers;
    if (this.props.offers !== "none") {
        offers = 
            <p>
                <i className="far fa-check-circle"/>
                You will receive news and special offers in your email
            </p>
    } else {
        offers = 
            <p>
                <i className="far fa-times-circle text-black"/> 
                You will NOT receive news and special offers in your email
            </p>
    }

    let notes;
    if(this.props.notes !== "none") {
        notes = <p>{this.props.notes}</p>
    } else {
        notes = null
    }

    let deliver;
    if (this.props.delivery === 10) {
        deliver = <p>Delivery Method: Dropoff Point ($10)</p>
    } else if (this.props.delivery === 15) {
        deliver = <p>Delivery Method: Mail ($15)</p>
    } else {
        deliver = <p>Delivery Method: Special Delivery ($25)</p>
    }

    let finalPrice;
    let addOn = (this.state.totalProductsSum/100) * this.state.taxRate;
    finalPrice = Number(this.state.totalProductsSum) + addOn;
    if (this.state.coupon !== "None") {
        let couponAdd = (finalPrice/100) * 15
        finalPrice -= couponAdd;
    }
    if (this.props.delivery === 10) {
        finalPrice += 10
    } else if (this.props.delivery === 15) {
        finalPrice += 15
    } else {
        finalPrice += 25
    }

    let paymentMethod;
    if (this.props.payment === "cash") {
        paymentMethod = <p>Payment Method: Cash</p>
    } else if (this.props.payment === "paypal") {
        paymentMethod = <p>Payment Method: PayPal</p>
    } else {
        paymentMethod = <p>Payment Method: Credit Card</p>
    }

    let cardNum;
    let cardSecurity;
    let cardExp;
    if (this.props.payment === "credit") {
        cardNum = <span>Card Number: {this.props.cardNum}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        cardSecurity = <span>Security Number: {this.props.security}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        cardExp = <span>Expiraton Date: {this.props.expDate}&nbsp;&nbsp;&nbsp;&nbsp;</span>
    } else {
        cardNum = null;
        cardSecurity = null;
        cardExp = null;
    }


    return (
    <main className="FinalForm text-left p-12">
        <div className="bg-gray-300 text-3xl px-24 py-6 rounded">
            <div className="payerDetails">
                <h1 className="text-5xl text-yellow-700">Basic Details</h1>
                <span>Name: {this.props.fullName}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Phone Number: {this.props.phoneNum}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Email: {this.props.email}</span>
                {offers}
            </div>
            <hr className="border-yellow-800 my-6"/>
            <div className="receiverDetails">
                <h1 className="text-5xl text-yellow-700">Shipping Details</h1>
                <span>First Name: {this.props.firstName}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Last Name: {this.props.lastName}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Full Address: {this.props.fullAd}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>City: {this.props.city}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Zip Code: {this.props.zipCode}</span>
                {notes}
            </div>
            <hr className="border-yellow-800 my-6"/>
            <div className="paymentDetails">
                <h1 className="text-5xl text-yellow-700">Payment Details</h1>
                {paymentMethod}
                {cardNum}
                {cardSecurity}
                {cardExp}
            </div>
            <hr className="border-yellow-800 my-6"/>
            <div className="orderDetail">
                <h1 className="text-5xl text-yellow-700">Order Details</h1>
                <span>Order Price: {formatPrice(Number(this.state.totalProductsSum))}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Tax Rate: {formatPrecent(this.state.taxRate,null)}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>Coupon: {this.state.coupon}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {deliver}
                <span>Total Pirce: {formatPrice(finalPrice)}</span>
            </div>
            <hr className="border-yellow-800 my-6"/>
            <div className="placeOrder text-right">
                <Link to="/confirmation">
                    <button className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800">
                        Place Order
                    </button>
                </Link>
            </div>
        </div>
    </main>
    )
  }
}

export default FinalForm;