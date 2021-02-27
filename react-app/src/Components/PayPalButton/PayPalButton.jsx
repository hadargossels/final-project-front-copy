import {useRef,useEffect} from 'react';

export default function PayPalButton(props) {

    const paypal=useRef()
    // let cart=JSON.parse(localStorage.getItem("counters")).length
    // console.log(cart)
    useEffect(() => {
        window.paypal.Buttons({
            createOrder:(data,actions,err)=>{
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units:[
                        {
                            // description:"there is "+ cart +"items on your cart ",
                            description:"LIEL'S LTD",
                            amount:{
                                currency_code:"ILS",
                                // value:localStorage.getItem("total"),
                                value: props.amount,
                            }
                        }
                    ]
                })

            },
            onApprove:async (data,actions)=>{
                const order = await actions.order.capture()
                // console.log(order)
                // console.log(data)
                localStorage.setItem("Order", JSON.stringify(order))
                alert("The payment has been received successfully")
            },
            onError: (err)=>{
                localStorage.setItem("Order",null)
                alert(err)

            }
            
        }).render(paypal.current)

    }, [])
    return (
        <div ref={paypal}></div>
    )
}
