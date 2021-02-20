import React, { Component } from 'react';
import {useState} from 'react';
import PaypalButton from './PaypalButton';


function Paypal(props) {
    const [checkout, setCheckOut] = useState(false) 

    return(
        <div id="paypal-button-container">
            {checkout ? (
                <PaypalButton numberItem={props.numberItem} total={props.total}/>
            ) :(
                <button
                className='btn btn-success'
                    onClick={()=> {
                    setCheckOut(true)
                  }}>
                      Checkout on Paypal/Credit Card
                      </button>
                      
            )}

                </div>


    )

}
export default Paypal;