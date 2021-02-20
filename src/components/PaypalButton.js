import React ,{useRef,useEffect} from 'react'

export default function PaypalButton(props) {
    const paypal=useRef()
    let cart=props.numberItem
    let total=props.total

    useEffect(() => {

        window.paypal.Buttons({
            createOrder:(data,actions,err)=>{
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units:[
                        {
                            description:"there is "+ cart +"items on your cart ",
                            amount:{
                                currency_code:"ILS",
                                value: total,
                            }
                        }
                    ]
                })

            },
            onApprove:async (data,actions)=>{
                const order = await actions.order.capture()
                console.log(order)
                localStorage.setItem("order","correct")
            },
            onError: (err)=>{
                console.log(err)
                localStorage.setItem("order","error")

            }
            
        }).render(paypal.current)

    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
