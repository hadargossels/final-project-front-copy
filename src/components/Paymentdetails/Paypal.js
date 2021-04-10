import React from "react";
import { useState } from "react";
import PaypalButton from "./PaypalButton";

function Paypal({ products, total }) {
  const [checkout, setCheckOut] = useState(false);

  return (
    <div id="paypal-button-container">
      {checkout ? (
        <PaypalButton products={products} total={total} />
      ) : (
        <button
          style={{ color: "white", fontWeight: "bolder" }}
          className="btn btn-warning"
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout with Paypal/Credit Card
        </button>
      )}
    </div>
  );
}
export default Paypal;
