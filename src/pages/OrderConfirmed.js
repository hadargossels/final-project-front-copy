import React, { Component } from 'react'
import {connect} from 'react-redux'
import {db} from '../firebase'

class OrderConfirmed extends Component {
    componentDidMount(){
        let invoice = this.props.current_invoice
        let now = new Date()
        let nowDate =   (now.getDay() < 10 ? "0"+now.getDay() : now.getDay()) + "/" +
                        (now.getMonth() + 1 < 10 ? "0"+ Number((now.getMonth()) + 1) : now.getMonth() + 1) +"/"+
                        (now.getFullYear())

        let nowTime =   (now.getHours() < 10 ? "0"+now.getHours() : now.getHours()) + ":" +
                        (now.getMinutes() < 10 ? "0"+now.getMinutes() : now.getMinutes()) +":"+
                        (now.getSeconds() < 10 ? "0"+now.getSeconds() : now.getSeconds())

        db.child("invoices").child(invoice.reference).set(
            {
                "id": invoice.reference,
                "address": invoice.address,
                "billName": invoice.billName,
                "city": invoice.city,
                "email": invoice.email,
                "finalSum": "US$"+invoice.finalSum,
                "notes": invoice.notes,
                "phone":invoice.phone,
                "purchaseDetails":invoice.purchaseDetails,
                "shipName":invoice.shipName,
                "shipping":invoice.shipping,
                "sum": invoice.sum,
                "sumWithDiscount": invoice.sumWithDiscount,
                "uid":invoice.uid,
                "refunded":false,
                "status":"ordered",
                "fulldate": nowDate+", "+nowTime,
                "date": nowDate
            }
        )
    }
    render() {
        return (
            <div className="text-center py-5">
                <h1 className="py-2">Order Confirmed!</h1>
                <h4>Your order number is {this.props.current_invoice.reference}</h4>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    current_invoice:state.invoice.current_invoice
  })
  
export default connect(mapStateToProps)(OrderConfirmed)
