import React from 'react'
import {Link} from 'react-router-dom'
import Checkout from './Checkout';
import PaypalButton from './PaypalButton'
export default function CartTotals({value , history}) {
    const{cartSubTotal,cartTax, cartTotal,clearCart}= value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row ">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                     text-capitalize text-end">
                            <Link to="/cart">
                                <button type="button" className="btn btn-outline-danger text-uppercase mb-3
                                px-5" style={{height:'30%' , color:'black'}} onClick={()=>clearCart()}>
                                        clear cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">
                                    subtotal:
                                </span>
                                <strong>${cartSubTotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    tax:
                                </span>
                                <strong>${cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    total:
                                </span>
                                <strong>${cartTotal}</strong>
                            </h5>
                            <Link to="/checkout" total={cartTotal} clearCart={clearCart} history={history} >
                            <button type="button" className="btn btn-outline-primary text-uppercase mb-3
                                px-5" style={{height:'30%' , color:'black'}}>
                                        checkout
                                        
                                </button>
                            </Link>
                            {/* <Link to="/checkout"> */}
                                {/* <Checkout value={value} history={history}/> */}

                                
                            {/* </Link> */}
                           
                            {/* <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/> */}

                            
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
