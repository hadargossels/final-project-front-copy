import React from 'react';
import CartProduct from './CartProduct.jsx';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container py-5">
            <h2 className="text-center mb-5">Shopping Cart</h2>
            {this.props.cartProducts.map(cartProduct => 
                <CartProduct 
                    key={cartProduct.id} 
                    cartProduct={cartProduct} 
                    onQtyChange={this.props.onQtyChange}
                    onDeleteCartProduct={this.props.onDeleteCartProduct}
                />)}
            </div>
        )
    }
}


export default ShoppingCart;