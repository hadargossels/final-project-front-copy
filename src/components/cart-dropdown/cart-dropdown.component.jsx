import React, { useContext } from "react";

import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/shopping-cart");
          toggleHidden();
        }}
      >
        GO TO SHOPPING CART
      </CustomButton>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleHidden();
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
