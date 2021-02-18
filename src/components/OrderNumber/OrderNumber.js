import React, { Component } from 'react'
import './orderNumber.css'

export default class OrderNumber extends Component {
    constructor(props){
        super(props);

        this.randomOrderNumber=Math.floor(Math.random()*1000000)
    }
    render() {
        return (
            <div className="OrderNumberDiv">
                <h3>Order successfully placed</h3>
                <p>We have recived your order</p>
                <p>Your transaction number: <span>{this.randomOrderNumber}</span></p>
                <p>You will receive a email with your transaction number</p>
            </div>
        )
    }
}
