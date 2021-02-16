import React, { Component } from 'react'

export default class PaymentConfirm extends Component {
    render() {
        let confirm = [0,0,0,0,0,0,0,0]
        return (
            <div className="container text-center"><br/><br/>
                    <h2>Your order has been Confirmed</h2><br/>
                    <span>Confirmation was sent yo your Email address</span><br/><br/>
                    <h4 className="text-danger">Confirmation number : {confirm.map(x=>x+Math.floor(Math.random()*10))}</h4>
            </div>
        )
    }
}
