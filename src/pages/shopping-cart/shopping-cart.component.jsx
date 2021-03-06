import React, { useContext } from "react";

import ShoppingCartItem from "./../../components/shopping-cart-item/shopping-cart-item.component";

import { CartContext } from "../../providers/cart/cart.provider";

import "./shopping-cart.styles.scss";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ShoppingCartPage = () => {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      {cartItems.map((cartItem) => (
        <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>

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
};

export default ShoppingCartPage;
