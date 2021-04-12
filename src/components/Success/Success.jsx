import React, { Component } from 'react'
import './Success.css'
let orderId = localStorage.getItem("orderId")
export class Success extends Component {
    render() {
        return (
            <div className='success'>
                Order completed successfully!<br/>
                Your order number is: <strong>{localStorage.getItem("orderId")}</strong><br/>
                Confirmation mail was sent to <strong>{this.props.email}</strong>               
            </div>
        )
    }
}

export default Success
