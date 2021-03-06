import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {markAsPaid} from '../../actions'

import PayPalBtn from '../../components/Paypal/PayPalBtn'

function Payment(props) {

  function paymentHandler(details, data) {
    props.markAsPaid(data.orderID)
  }

  return (
    <div className="container my-5 text-center">
      <h1 className="text-danger py-3">Checkout - Payment</h1>
      <h3 className="pb-3">Final price - ${props.current_invoice.finalSum}</h3>
      <h4>Please choose a paying method:</h4>
      {props.current_invoice.reference? <Redirect to="/confirmed"/>:""}
        <PayPalBtn
            amount = {props.current_invoice.finalSum}
            currency = {'USD'}
            onSuccess={paymentHandler}/>
    </div>
  )
}


const mapStateToProps = state => ({
  current_invoice:state.invoice.current_invoice
})

export default connect(mapStateToProps, {markAsPaid})(Payment)