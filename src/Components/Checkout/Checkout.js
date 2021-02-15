import React, { Component } from 'react';
import FirstForm from '../FirstForm/FirstForm';
import FinalDetails from '../FinalDetails/FinalDetails';
import './Checkout.css';

class Checkout extends Component {

  render () {
    return (
    <main className="Checkout text-center">
        <div className="forms">
            <FirstForm />
        </div>
        <div className="checkoutDetails">
            <FinalDetails/>
        </div>
    </main>
    )
  }
}

export default Checkout;