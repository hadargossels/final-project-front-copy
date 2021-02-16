import React ,{useRef,useEffect} from 'react'

export default function PaypalButton() {
    let myOrder
    const paypal=useRef()
    let cart=JSON.parse(localStorage.getItem("counters")).length
    console.log(cart)
   let myOrderConfirmation=(myOrder)=>{
       let msg=document.querySelector("#msgOfconfirmation")
       let msgErr=document.querySelector("#msgErrorOfconfirmation")
        if(myOrder=="correct"){
                msg.style.display=""
                setTimeout(() => {
                    msg.style.display="none"
                }, 10000);
            } else {
                msgErr.style.display=""
                setTimeout(() => {
                    msgErr.style.display="none"
                }, 3000);
            }
            myOrder=""
   } 
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
                                value:localStorage.getItem("total"),
                            }
                        }
                    ]
                })

            },
            onApprove:async (data,actions)=>{
                const order = await actions.order.capture()
                console.log(order)
                myOrder="correct"
                localStorage.setItem("order","correct")
                localStorage.setItem("msgOfConfirm",Math.floor(Math.random()*1000000000+1000000000000000))
            },
            onError: (err)=>{
                console.log(err)
                localStorage.setItem("order","error")
                myOrder="error"
            }
            
        }).render(paypal.current)

    }, [])
    return (
        <div>
            <div ref={paypal}></div>
            <button className="btn btn-success" onClick={()=>myOrderConfirmation(myOrder)}>Get your confirmation number</button>
            <div id="msgOfconfirmation" style={{margin:"2rem 0",fontSize:"30px",fontFamily:"monospace",display:"none"}}>your order confirmation number is:<br/><span style={{color:"red"}}>{Math.floor(Math.random()*1000000000+1000000000000000)}</span></div>
            <div id="msgErrorOfconfirmation" style={{margin:"2rem 0",fontSize:"30px",fontFamily:"monospace",display:"none",color:"red"}}>Your payment didn't go ... You might not have enough funds in your account to make the payment.</div>

        </div>
    )
}
