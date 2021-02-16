
import React,{useRef,useEffect} from 'react'

export default function Paypal() {

    const paypal=useRef()

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder:(data,actions,err)=>{
                    return actions.order.create({

                        
                    })
            }
        }).render(paypal.current)

    },[])

    return (
        <div>
            <div ref={Paypal}></div>
        </div>
    )
}
