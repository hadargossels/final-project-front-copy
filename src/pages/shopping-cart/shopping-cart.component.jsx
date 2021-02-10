import React from "react";

import "./shopping-cart.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { selectCartTotal } from "./../../redux/cart/cart.selectors";
import ShoppingCartItem from "./../../components/shopping-cart-item/shopping-cart-item.component";
const ShoppingCartPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <span className="total">Total: ${total}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(ShoppingCartPage);
