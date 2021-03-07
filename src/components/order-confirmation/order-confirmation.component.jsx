import React, { useContext } from "react";

import "./order-confirmation.styles.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../../providers/cart/cart.provider";

const OrderConfirmation = (props) => {
  const { clearCart } = useContext(CartContext);

  return (
    <>
      <div className="order-confirmation">
        <div className="card mt-50 mb-50">
          <div className="col d-flex">
            <span className="text-muted" id="orderno">
              order #{props.orderId}
              <br />
              {new Date().toLocaleString()}
            </span>{" "}
          </div>

          <div className="gap">
            <div className="col-2 d-flex mx-auto shape-U"> </div>
          </div>
          <div className="title mx-auto"> Thank you for your order! </div>
          <div className="main">
            {" "}
            <span id="sub-title">
              <p>
                <b>Payment Summary</b>
              </p>
            </span>
            <hr />
            {props.cartItems.map((cartItem) => (
              <div className="row row-main">
                <div className="col-3">
                  {" "}
                  <img className="img-fluid" src={cartItem.imageUrl} />{" "}
                </div>
                <div className="col-6">
                  <div className="row d-flex">
                    <p>
                      <b>{cartItem.name}</b>
                    </p>
                  </div>
                  <div className="row d-flex">
                    <p className="text-muted">quantity: {cartItem.quantity}</p>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <p>
                    <b>${cartItem.price}</b>
                  </p>
                </div>
              </div>
            ))}
            <hr />
            <div className="total">
              <div className="row">
                <div className="col">
                  {" "}
                  <b> Total:</b>{" "}
                </div>
                <div className="col d-flex justify-content-end">
                  {" "}
                  <b>${props.total}</b>{" "}
                </div>
              </div>{" "}
              <Link
                onClick={() => {
                  clearCart();
                }}
                to="/order-tracking"
              >
                <button className="btn d-flex mx-auto">
                  {" "}
                  Track your order{" "}
                </button>
              </Link>
            </div>{" "}
            <Link
              onClick={() => {
                props.clearCart();
              }}
              to="/store"
            >
              <button type="button" class="btn btn-warning back">
                Back to store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderConfirmation;
