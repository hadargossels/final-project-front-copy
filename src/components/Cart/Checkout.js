import React from 'react'
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton'
export default function Checkout({value , history}) {
    console.log(value ,"asdasd")
    console.log(history)
    const total= value.cartTotal;
    const clearCart= value.clearCart;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row ">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                     text-capitalize text-end">
                           
                            <h5>
                                <span className="text-title">
                                    total:
                                </span>
                                <strong>${total}</strong>
                            </h5>
                            <PaypalButton total={total} clearCart={clearCart} history={history}/>

                            
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
