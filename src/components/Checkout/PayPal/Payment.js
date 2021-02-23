import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PayPalBtn from './PayPalBtn'

export default class Payment extends Component {
  constructor(){
    super()
    this.state = {tracking:""}
  }
    paymentHandler = (details, data) => {
      localStorage.setItem("tracking",data.orderID)
      window.location.reload()
    }
    render() {
        return ( 
            <div className="container my-5 text-center">
              <h1 className="text-danger py-3">Checkout - Payment</h1>
              <h3 className="pb-3">Final price - ${localStorage.getItem("totalPrice")}</h3>
              <h4>Please choose a paying method:</h4>
              {localStorage.getItem("tracking")? <Redirect to="/confirmed"/>:""}
                <PayPalBtn
                    amount = {localStorage.getItem("totalPrice")}
                    currency = {'USD'}
                    onSuccess={this.paymentHandler}/>
            </div>
        )
    }
}