import React, { useEffect, useRef } from "react";

import { auth, db } from "../../firebase/firebase.utils";
// import "./paypal.styles.scss";

export default function PayPal(props) {
  console.log("props :", props);
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Dog Best Friends Store",
                amount: {
                  currency_code: "USD",
                  value: props.totalPay,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);

          await auth.onAuthStateChanged(async (user) => {
            if (user) {
              await db
                .child("orders")
                .child(order.id)
                .set({
                  id: order.id,
                  ...props.orderData,
                });
            }
          });

          localStorage.setItem("Order", "correct");
          alert("Payment ha");

          props.makeOrderTrue(order.id);
        },

        onError: (err) => {
          console.log(err);
          localStorage.setItem("Order", "error");
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

// import React from "react";
// import ReactDOM from "react-dom";
// import scriptLoader from "react-async-script-loader";
// import Car from "../assets/img/car.jpg";
// import Spinner from "./Spinner";

// const CLIENT = {
//   sandbox: "your_sandbox_key",
//   production: "your_production_key",
// };

// const CLIENT_ID =
//   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

// let PayPalButton = null;
// class PaypalButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showButtons: false,
//       loading: true,
//       paid: false,
//     };

//     window.React = React;
//     window.ReactDOM = ReactDOM;
//   }

//   componentDidMount() {
//     const { isScriptLoaded, isScriptLoadSucceed } = this.props;

//     if (isScriptLoaded && isScriptLoadSucceed) {
//       PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
//       this.setState({ loading: false, showButtons: true });
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

//     const scriptJustLoaded =
//       !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

//     if (scriptJustLoaded) {
//       if (isScriptLoadSucceed) {
//         PayPalButton = window.paypal.Buttons.driver("react", {
//           React,
//           ReactDOM,
//         });
//         this.setState({ loading: false, showButtons: true });
//       }
//     }
//   }
//   createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           description: +"Mercedes G-Wagon",
//           amount: {
//             currency_code: "USD",
//             value: 200,
//           },
//         },
//       ],
//     });
//   };

//   onApprove = (data, actions) => {
//     actions.order.capture().then((details) => {
//       const paymentData = {
//         payerID: data.payerID,
//         orderID: data.orderID,
//       };
//       console.log("Payment Approved: ", paymentData);
//       this.setState({ showButtons: false, paid: true });
//     });
//   };

//   render() {
//     const { showButtons, loading, paid } = this.state;

//     return (
//       <div className="main">
//         {loading && <Spinner />}

//         {showButtons && (
//           <div>
//             <div>
//               <h2>Items: Mercedes G-Wagon</h2>
//               <h2>Total checkout Amount $200</h2>
//             </div>

//             <PayPalButton
//               createOrder={(data, actions) => this.createOrder(data, actions)}
//               onApprove={(data, actions) => this.onApprove(data, actions)}
//             />
//           </div>
//         )}

//         {paid && (
//           <div className="main">
//             <img alt="Mercedes G-Wagon" src={Car} />
//             <h2>
//               Congrats! you just paid for that picture. Work a little harder and
//               you'll be able to afford the car itself{" "}
//               <span role="img" aria-label="emoji">
//                 {" "}
//                 😉
//               </span>
//             </h2>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default scriptLoader(
//   `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`
// )(PaypalButton);
