import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import CartPayment from '../CartPayment/CartPayment'
import { Link } from 'react-router-dom';
import prettyFloat from '../../js/prettyFloat';

const products = require('../../database/products.json');
const coupons = require('../../database/coupons.json')[0];

function veryPrettyFloat(num) {

    num = prettyFloat(num, 2, true);

    return num.includes(".") ? num.split(".")[1].length === 2 ? num : num = "0" : num + ".00";
}

export default class Cart extends Component {

    constructor(props) {

        super(props);

        this.state = {total: 0.00, shipping: 0.00, taxes: 0.00, coupon: 1.00, couponsArr: [], validCoupons: [], inValidCoupons: ""};

        this.callRefInp = React.createRef();
        this.callRefBtn = React.createRef();

        this.applyCoupon = this.applyCoupon.bind(this);

        if (this.props.productsInCart && Object.keys(this.props.productsInCart).length > 0) {

            Object.keys(this.props.productsInCart).map(id => this.state.total += products[id].discount ? (products[id].price * (1-products[id].discountPercentage) * this.props.productsInCart[id]) : (products[id].price * this.props.productsInCart[id]));
            
            this.state.total = veryPrettyFloat(this.state.total);
        }
    }
    
    removeSpaces(e) {

        e.target.value = e.target.value.replace(/ /g, "").toUpperCase();
    }

    applyCoupon() {

        let input = this.callRefInp.current.value;
        let arr = [...this.state.couponsArr];
        let coupon = 1.00;
        let validCoupons = [...this.state.validCoupons];

        if (input in coupons) {


            if (arr.indexOf(input) ===- 1) {

                arr.push(input);

                for (var i = 0 ; i < arr.length ; i++) {

                    coupon -= coupons[arr[i]];
                }

                validCoupons.push(<p className="text-success">"{input}" applied successfully</p>);

                this.setState({coupon, couponsArr: arr, validCoupons, inValidCoupons: <p style={{display: "none"}}></p>});
            }
        }

        else {

            let message = <p className="text-danger">"{input}" is an invalid coupon</p>;
            this.setState({inValidCoupons: message});
        }

        this.callRefInp.current.value = "";

    }

    render() {
        return(
        <div className="container lead">
            <br/><br/><br/><br/>
            
                <table className="table table-hover" style={{textAlign: "center"}}>
                    <tbody>
                    {this.props.productsInCart && Object.keys(this.props.productsInCart).length > 0 ? Object.keys(this.props.productsInCart).map((id, count) => 
                            <tr style={{fontSize: "20px"}} key={count}>
                                <th scope="row" style={{verticalAlign: "middle"}}>{++count}</th>
                                <td style={{verticalAlign: "middle"}}><Link to={"/shop/"+products[id].name}><img src={products[id].img[0]} alt={JSON.stringify(products[id].name)} width="50px"/></Link></td>
                                <td style={{verticalAlign: "middle"}}><Link to={"/shop/"+products[id].name}>{products[id].title}</Link></td>
                                <td style={{verticalAlign: "middle"}}>₪{products[id].discount ? (products[id].price * (1-products[id].discountPercentage)).toFixed(2) : (products[id].price).toFixed(2)}</td>
                                <td style={{verticalAlign: "middle"}}>x&emsp;<input type="number" min="1" max="4" defaultValue={this.props.productsInCart[id]} style={{width: "50px", textAlign: "center"}} id={"quantity"+id}/></td>
                                <td style={{verticalAlign: "middle"}}>₪{products[id].discount ? (products[id].price * (1-products[id].discountPercentage) * this.props.productsInCart[id]).toFixed(2) : (products[id].price * this.props.productsInCart[id]).toFixed(2)}</td>
                                <td style={{verticalAlign: "middle"}}> <Button variant="outline-warning" onClick={() => this.props.addProductCart(id, document.querySelector("#quantity"+id).value)}>Update</Button></td>
                                <td style={{verticalAlign: "middle"}}> <Button variant="outline-danger" onClick={() => this.props.delProductCart(id)}>Remove</Button></td>
                            </tr>
                            )

                    : 
                            <tr>
                                <td>No products in the shopping cart</td>
                            </tr>
                    }
                    </tbody>
                </table>

                {
                    this.props.productsInCart && Object.keys(this.props.productsInCart).length > 0 ?

                    <table className="table table-bordered" style={{tableLayout: "fixed"}}>
                        <tbody>
                            <tr>
                                <td>Total:</td>
                                <td style={{textAlign: "center"}}>{"₪" + this.state.total}</td>
                            </tr>
                            {/* <tr>
                                <td>Shipping:</td>
                                <td style={{textAlign: "center"}}>{"₪" + this.state.shipping.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Taxes:</td>
                                <td style={{textAlign: "center"}}>{"₪" + this.state.taxes.toFixed(2)}</td>
                            </tr> */}
                            <tr>
                                <td>Coupon:</td>
                                <td style={{textAlign: "center"}}>
                                    <form className="input-group" onSubmit={e => { e.preventDefault(); this.callRefBtn.current.click(); }}>
                                        <input type="text" className="form-control" maxLength='10' style={{textAlign: "center"}} ref={this.callRefInp} onChange={(e) => this.removeSpaces(e)}/>
                                        <input type="button" className="form-control btn btn-success" value="Apply Coupon" onClick={this.applyCoupon} ref={this.callRefBtn}/>
                                    </form>
                                    <br/>{this.state.validCoupons.map(e => e)}{this.state.inValidCoupons}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    : null
                }

                {
                    this.props.productsInCart && Object.keys(this.props.productsInCart).length > 0 ?

                    <table className="table">
                        <tbody>
                            <tr style={{fontWeight: "bold"}}>
                                <td>Total:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
                                {/* <td>Total after fees:</td> */}
                                <td>{"₪" + veryPrettyFloat(parseFloat(this.state.total.replace(/,/g,"")*(this.state.coupon))+this.state.shipping+this.state.taxes)}</td>
                            </tr>
                        </tbody>
                    </table>

                    : null
                }

                {
                    this.props.productsInCart && Object.keys(this.props.productsInCart).length > 0 ?

                    <CartPayment productsInCart={this.props.productsInCart} total={this.state.total} coupon={this.state.coupon} couponsArr={this.state.couponsArr} validCoupons={this.state.validCoupons} inValidCoupons={""} removeSpaces={this.removeSpaces} applyCoupon={this.applyCoupon} emptyProductCart={this.props.emptyProductCart}/>

                    : null
                }

                <br/><br/><br/><br/>
        </div>
        );
    }
}