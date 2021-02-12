import React from "react";
import CartItem from "../cart-item/cart-item.component";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
const CartDropdown = ({ cartItems, history, dispatch }) => (
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
        dispatch(toggleCartHidden());
      }}
    >
      GO TO SHOPPING CART
    </CustomButton>

    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
