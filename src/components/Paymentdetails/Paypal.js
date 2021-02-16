import React, { Component } from 'react';
import {useState} from 'react';
import PaypalButton from './PaypalButton';


function Paypal() {
    const [checkout, setCheckOut] = useState(false) 

    return(
        <div id="paypal-button-container">
            {checkout ? (
                <PaypalButton />
            ) :(
                <button
                style={{color:"white",fontWeight:"bolder"}}
                className='btn btn-warning'
                    onClick={()=> {
                    setCheckOut(true)
                  }}>
                      Checkout with Paypal/Credit Card
                      </button>
                      
            )}

                </div>


    )

}
export default Paypal;