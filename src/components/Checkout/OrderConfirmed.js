import React, { Component } from 'react'

export default class OrderConfirmed extends Component {
    constructor(){
        super()
        this.state= {orderNum: Math.floor(Math.random() * 10**8)}
    }
    render() {
        return (
            <div className="text-center py-5">
                <h1>Order Confirmed!</h1>
                <h4>Your order number is {this.state.orderNum}</h4>
            </div>
        )
    }
}
