import React from 'react';
import {Link} from 'react-router-dom';
import CartProduct from './CartProduct.jsx';
import OrderSummary from './OrderSummary.jsx';


class ShoppingCart extends React.Component {

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
                            
                            <OrderSummary
                                cartProducts={this.props.cartProducts}
                                getSubTotalAmount={this.props.getSubTotalAmount}
                                tax={this.props.tax} 
                            ></OrderSummary>
                            
                            <div className="text-center">
                                <Link to="/payment">
                                <button type="button" className="btn btn-primary">Check-Out</button>
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