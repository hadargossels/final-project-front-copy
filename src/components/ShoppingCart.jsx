import React, { createRef } from 'react';
import {Link} from 'react-router-dom';
import CartProduct from './CartProduct.jsx';


class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.selectDelivery = createRef();
        this.cuponInputRef = createRef();
        this.cuponDiscountRef = createRef();
        this.totalAmountRef = createRef();
        this.amountAfterCupon = createRef();
        
        this.state = {
            deliveryAmount: 0,
            cupons: {"1234A": 0.15, "5555B": 0.2, "5678C": 0.3},
            myDiscount: 0
        }
    }

    getSubTotalAmount = () => {
        let totalAmount = this.props.cartProducts.reduce((accumulator, currentValue) => 
        accumulator + (currentValue.price * (1-currentValue.discount) * currentValue.quantity), 0);
        return totalAmount;
    }

    calculateDelivery = () => {
        let totalAmount = this.getSubTotalAmount();
        if (totalAmount < 50){
            return 50;
        }
        else if (totalAmount >= 50 && totalAmount < 125){
            return 75;
        }
        else if (totalAmount >= 125 && totalAmount < 200){
            return 100;
        }
        else{
            return 0;
        }
    }

    onChangeDelivery = () => {
        console.log(this.state)
        switch (this.selectDelivery.current.value){
            case 'Self-pickup':
                this.setState({deliveryAmount: 0}, () => {console.log(this.state.deliveryAmount)});
                break;
            case 'Postal-service':
                this.setState({deliveryAmount: 10}, () => {console.log(this.state.deliveryAmount)});
                break;
            case 'Registered-mail':
                this.setState({deliveryAmount: 30}, () => {console.log(this.state.deliveryAmount)});
                break;
            case 'emissary':
                let deliveryAmount = this.calculateDelivery();
                this.setState({deliveryAmount}, () => {console.log(this.state.deliveryAmount)});
                break;
        }
    }

    ActivateCoupon = (e) => {
        e.preventDefault();
        let cuponConfirmed = false
        Object.keys(this.state.cupons).forEach(element => {
            if (element == this.cuponInputRef.current.value){
                cuponConfirmed = true;
                let myDiscount = this.state.cupons[element];
                this.setState({myDiscount});
                this.cuponDiscountRef.current.style.display = "block";
                this.totalAmountRef.current.style.textDecorationLine = "line-through";
                this.amountAfterCupon.current.style.display = "block";
            }
        });
        if (!cuponConfirmed){
            alert("Coupon code is invalid")
        }   
    }

    getTotalAmount = () => {
        return this.getSubTotalAmount() * (1 +this.props.tax) + this.calculateDelivery() + this.state.deliveryAmount;
    }

    render() {
        return (
            <div className="container py-5">
                <h2 className="text-center mb-5">Shopping Cart</h2>
                <div className="row">
                    <div className="col-12 col-md-8">
                        {this.props.cartProducts.map(cartProduct => 
                        <CartProduct 
                            key={cartProduct.id} 
                            cartProduct={cartProduct} 
                            onQtyChange={this.props.onQtyChange}
                            onDeleteCartProduct={this.props.onDeleteCartProduct}
                        />)}
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="border py-3 px-3" style={{borderColor: '#e6e6e6'}}>
                            <h4 className="border-bottom pb-2">Order Summary</h4>
                            <p>Subtotal: ${(this.getSubTotalAmount()).toLocaleString()}</p>
                            <p>Taxes: ${((this.getSubTotalAmount() * this.props.tax).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="deliverySelect">Delivery:</label>
                                    <select className="form-control" ref={this.selectDelivery} onChange={this.onChangeDelivery}>
                                        <option value="Self-pickup">Self-pickup: $0</option>
                                        <option value="Postal-service">Postal service: $10</option>
                                        <option value="Registered-mail">Registered mail: $30</option>
                                        <option value="emissary">emissary: ${this.calculateDelivery().toLocaleString()} - Free over $200</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cupon">Cupon-code:</label>
                                    <input type="text" className="form-control d-inline" id="cupon" ref={this.cuponInputRef}></input>
                                    <button type="submit" className="btn btn-outline-primary btn-sm d-inline" onClick={this.ActivateCoupon}>Activate coupon</button>
                                </div>
                            </form>
                            <div className="text-success" ref={this.cuponDiscountRef} style={{display:'none'}}>{this.state.myDiscount * 100}% discount</div>
                            <p className="mt-1"><b>Total:</b> <span className="text-success" ref={this.totalAmountRef}>{(this.getTotalAmount()).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
                            <p className="text-success" ref={this.amountAfterCupon} style={{display:'none'}}>${(this.getTotalAmount() * (1 - this.state.myDiscount)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            <div className="text-center">
                                <Link to="/payment">
                                <button type="button" className="btn btn-primary">Continue to Payment</button>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}


export default ShoppingCart;