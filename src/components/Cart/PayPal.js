import React, { useRef, useEffect } from "react";

export default function Paypal(props) {
  const paypal = useRef();
console.log(props)
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "CAD",
                  value:props.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          props.clearCart();
        //   console.log(order);
          window.location.href = "/succeeded";
        },
        onError: (err) => {
          console.log(err);
          alert("Error!", err);
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