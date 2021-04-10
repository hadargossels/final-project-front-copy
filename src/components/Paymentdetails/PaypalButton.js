import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";

export default function PaypalButton({ products, total }) {
  console.log("total", total, "products", products);
  let myOrder;
  let dataOrder = {};
  const paypal = useRef();
  const [confirm, setConfirm] = useState(false);
  // const [confirmNum, setConfirmNum] = useState(0);
  // let cart = JSON.parse(localStorage.getItem("counters")).length;
  let cart = products;
  let myOrderConfirmation = () => {
    let msg = document.querySelector("#msgOfconfirmation");
    let msgErr = document.querySelector("#msgErrorOfconfirmation");
    if (confirm) {
      msg.style.display = "";
      setTimeout(() => {
        msg.style.display = "none";
      }, 10000);
    } else {
      msgErr.style.display = "";
      setTimeout(() => {
        msgErr.style.display = "none";
      }, 3000);
    }
    myOrder = "";
  };
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "there is " + cart + "items on your cart ",
                amount: {
                  currency_code: "ILS",
                  value: localStorage.getItem("totalWithShipping"),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          // console.log("my order", order.id);
          // console.log(
          //   "myDataOrederDetails: ",
          //   localStorage.getItem("orderDetails") || ""
          // );
          dataOrder = JSON.parse(localStorage.getItem("orderDetails") || {});
          dataOrder.confirmNumber = order.id;
          dataOrder.total = total;
          dataOrder.address =
            dataOrder.city +
            ", " +
            dataOrder.street +
            ", " +
            dataOrder.houseNumber;
          dataOrder.shippingMethod = localStorage.getItem("delivery");
          dataOrder.email = firebase.auth().currentUser.email;
          dataOrder.theOrder = [...products];
          dataOrder.total = total;
          dataOrder.itemsNumber = products.length;
          dataOrder.totalWithShipping = localStorage.getItem(
            "totalWithShipping"
          );
          console.log("with confirm number ", dataOrder);
          localStorage.setItem("orderDetails", dataOrder);

          // const {
          //   dataOrderConfirm,
          // } = await axios.post(
          //   `https://my-react-store-default-rtdb.firebaseio.com/orders.json`,
          //   JSON.stringify(dataOrder),
          //   { headers: { "Content-Type": "application/json" } }
          // );
          // console.log(JSON.stringify(dataOrder));
          axios
            .post(`http://localhost:4000/orders`, dataOrder)
            .then((res) => {});

          if (dataOrder.confirmNumber) {
            setConfirm(true);
          } else setConfirm(false);

          //   localStorage.setItem("order", "correct");
          // localStorage.setItem("confirmNumber", order.id);

          // setConfirm(true);
          // console.log("state", confirm);
          // if (order) numbeConfirmOrder(order);
        },
        onError: (err) => {
          console.log("error", err);
          localStorage.setItem("order", "error");
          setConfirm(false);
          myOrder = "error";
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
      <button className="btn btn-success" onClick={() => myOrderConfirmation()}>
        Get your confirmation number
      </button>
      <div
        id="msgOfconfirmation"
        style={{
          margin: "2rem 0",
          fontSize: "30px",
          fontFamily: "monospace",
          display: "none",
        }}
      >
        your order confirmation number is:
        <br />
        <span style={{ color: "red" }}>{}</span>
      </div>
      <div
        id="msgErrorOfconfirmation"
        style={{
          margin: "2rem 0",
          fontSize: "30px",
          fontFamily: "monospace",
          display: "none",
          color: "red",
        }}
      >
        Your payment didn't go ... You might not have enough funds in your
        account to make the payment.
      </div>
    </div>
  );
}
