import React from "react";

import "./shopping-cart.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { selectCartTotal } from "./../../redux/cart/cart.selectors";
import ShoppingCartItem from "./../../components/shopping-cart-item/shopping-cart-item.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { clearCart } from "./../../redux/cart/cart.actions";
const ShoppingCartPage = ({ cartItems, total, clearCart }) => (
  <div className="shopping-cart">
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
        <button type="button" className="btn btn-primary btn-lg">
          Store{" "}
        </button>
      </Link>
      <Link to="/checkout">
        <button type="button" className="btn btn-success btn-lg checkout-btn">
          Checkout
        </button>
      </Link>
      <button
        onClick={() => clearCart()}
        type="button"
        className="btn btn-secondary  btn-lg clear-cart"
      >
        Clear Cart
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
