import { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLoading } from '../../../actions/actions';
import { auth, db } from '../../../functions/firebase';

function PayPalButton(props) {

    const paypal = useRef()

    const shipping = []
    const products = []

    props.review[0].checked ?
                        shipping.push(props.review[0].value.split(",")[0], "₪" + props.review[0].value.split(",")[1] + ".00"): 
                        props.review[1].checked ? shipping.push(props.review[1].value.split(",")[0], "₪" + props.review[1].value.split(",")[1] + ".00"): 
                        shipping.push(props.review[2].value.split(",")[0], "₪" + props.review[2].value.split(",")[1] + ".00")
    
    for (const [key, value] of Object.entries(props.params.productsInCart)) {

        products.push({prodId: key, prodQuantity: value})
    }
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

                props.setLoading();

                const order = await actions.order.capture()
                // console.log("order", order)
                // console.log("data", data)

                await auth().onAuthStateChanged(async (user) => {

                    if (user) {
        
                        await db.child("orders").child(order.id).set({

                            "id": order.id,
                            "datetime": order.create_time,
                            "uid": user.uid,
                            "total": "₪" + props.amount,
                            "coupons": props.params.couponsArr,
                            "productsInCart": products,
                            "shipping": shipping,
                            "payment": props.review[3].value,
                            "status": "Received"
                        });
                    }

                })
                
                localStorage.setItem("Order", JSON.stringify(order))
                //alert("The payment has been received successfully")
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


export default connect("", { setLoading })(PayPalButton)
