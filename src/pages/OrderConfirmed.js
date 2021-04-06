import axios from 'axios'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {emptyCart} from '../actions'
class OrderConfirmed extends Component {
    componentDidMount(){
        let invoice = this.props.current_invoice
        let Authorization = `bearer ${localStorage.getItem("token")}`

        axios.post(`${process.env.REACT_APP_SERVER}/orders`, {...invoice, status:"606378a4545fd24c70ff8dc5", orderDate:new Date()}, {headers: {Authorization}})
        .then(
            this.props.emptyCart
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
  
export default connect(mapStateToProps, {emptyCart})(OrderConfirmed)
