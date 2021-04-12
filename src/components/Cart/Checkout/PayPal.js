import React, { useRef, useEffect } from "react";

export default function Paypal(props) {
  const paypal = useRef();
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
          props.setOrder(order ,props.orderCart ,props.textAreaReq,props.total);
          props.clearCart();
          
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

// import React, { useRef, useEffect } from "react";

// export default function Paypal() {
//   const paypal = useRef();

//   useEffect(() => {
//     window.paypal
//       .Buttons({
//         createOrder: (data, actions, err) => {
//           return actions.order.create({
//             intent: "CAPTURE",
//             purchase_units: [
//               {
//                 description: "Cool looking table",
//                 amount: {
//                   currency_code: "CAD",
//                   value: 650.0,
//                 },
//               },
//             ],
//           });
//         },
//         onApprove: async (data, actions) => {
//           const order = await actions.order.capture();
//           console.log(order);
//         },
//         onError: (err) => {
//           console.log(err);
//         },
//       })
//       .render(paypal.current);
//   }, []);

//   return (
//     <div>
//       <div ref={paypal}></div>
//     </div>
//   );
// }