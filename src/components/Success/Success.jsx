import React, { Component } from 'react'
let orderId = localStorage.getItem("orderId")
export class Success extends Component {
    render() {
        return (
            <div>
                Order completed successfully!<br/>
                Your order number is: {orderId}<br/>
                Confirmation mail was sent to<br/>                
            </div>
        )
    }
}

export default Success
