import React from "react";

import "./shopping-cart.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { selectCartTotal } from "./../../redux/cart/cart.selectors";
import ShoppingCartItem from "./../../components/shopping-cart-item/shopping-cart-item.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const ShoppingCartPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    {/* <div className="checkout-header">
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
    </div> */}
    {cartItems.map((cartItem) => (
      <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <span className="total">Total: ${total}</span>

    <div class="container">
      {" "}
      <Link to="/store">
        <button type="button" className="btn btn-secondary btn-lg">
          Store{" "}
        </button>
      </Link>
      <Link to="/checkout">
        <button type="button" className="btn btn-primary  btn-lg">
          Checkout
        </button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(ShoppingCartPage);
