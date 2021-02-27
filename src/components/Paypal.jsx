import React, { useRef, useEffect } from "react";
export default function Paypal() {

const totalF = JSON.parse(localStorage.getItem("total"))

let items = JSON.parse(localStorage.getItem("cart")).length

let orderId = 0

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Number of items: " + items,
                amount: {
                  currency_code: "USD",
                  value: totalF,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          localStorage.setItem("orderId",JSON.stringify(order.id))
        },
        onError: (err) => {
          localStorage.setItem("orderErr",JSON.stringify(err))
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