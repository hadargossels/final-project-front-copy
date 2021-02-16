import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./shopping-cart-item.styles.scss";
import { connect } from "react-redux";

import { compose } from "redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const ShoppingCartItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
  history,
}) => {
  const { imageUrl, price, name, quantity, id } = cartItem;
  // console.log("cartItem :", cartItem);

  const handelClick = (event) => {
    // console.log(event.target.id);
    history.push(`/product/${name.split(" ").join("-")}`);
  };

  const [displayMessage, setDisplayMessage] = useState(false);
  const [displayRemoveMessage, setDisplayRemoveMessage] = useState(false);
  return (
    <div className="shopping-cart-item">
      <div
        id={id}
        name={name.split(" ").join("").toLowerCase()}
        onClick={handelClick}
        className="image-container"
      >
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">
        {name}

        <div
          className="text-line"
          className="item-add"
          style={{ display: displayMessage ? "block" : "none" }}
        >
          {" "}
          <h6>Item was add to your shopping cart </h6>
        </div>

        <div
          className="item-remove"
          style={{ display: displayRemoveMessage ? "block" : "none" }}
        >
          {" "}
          <h6>The item was remove to your shopping cart </h6>
        </div>
      </span>
      <span className="quantity">
        <div
          onClick={() => {
            setDisplayRemoveMessage(true);

            setTimeout(() => {
              setDisplayRemoveMessage(false);
            }, 2000);
            removeItem(cartItem);
          }}
          className="arrow"
        >
          &#10094;
        </div>
        <div className="value">{quantity}</div>

        <div
          onClick={() => {
            setDisplayMessage(true);

            setTimeout(() => {
              setDisplayMessage(false);
            }, 2000);

            addItem(cartItem);
          }}
          className="arrow"
        >
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div
        onClick={() => {
          setDisplayRemoveMessage(true);

          setTimeout(() => {
            setDisplayRemoveMessage(false);
          }, 2000);
          clearItem(cartItem);
        }}
        className="remove-button"
      >
        {" "}
        &#10005;{" "}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),

  addItem: (item) => dispatch(addItem(item)),

  removeItem: (item) => dispatch(removeItem(item)),
});

// export default connect(null, mapDispatchToProps)(ShoppingCartItem);

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(ShoppingCartItem);
