import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton'
import {ProductConsumer} from '../../context';
    export default class Checkout extends Component {

        render() {

            return (
            <div className="container">
                <div className="row ">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                     text-capitalize text-end"style={{fontSize:"50px"}}>               
                    <ProductConsumer>
                        {value => {

                            return(
                                        <React.Fragment>
                                        <span className="text-title " >
                                        total:
                                    </span>
                                    <strong>${value.cartTotal}</strong>

                                   <PaypalButton total={value.total} clearCart={value.clearCart} history={this.props.history}/>
                            </React.Fragment>
                            )}}
                    </ProductConsumer>
                    
                    </div>
                </div>
            </div> 
            )
        }
    }











//     console.log(props ,"asdasd")
//     console.log(this.props.clearCart)
//     const total= this.props.total;
//     const clearCart= this.props.clearCart;
//     return (
//         <React.Fragment>
//             <div className="container">
//                 <div className="row ">
//                     <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
//                      text-capitalize text-end">
                           
//                             <h5>
//                                 <span className="text-title">
//                                     total:
//                                 </span>
//                                 <strong>${total}</strong>
//                             </h5>

                            
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

