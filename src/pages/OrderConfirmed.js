import React, { Component } from 'react'

export default class OrderConfirmed extends Component {

    render() {
        return (
            <div className="text-center py-5">
                <h1 className="py-2">Order Confirmed!</h1>
                <h4>Your order number is {localStorage.getItem("tracking")}</h4>
            </div>
        )
    }
}
