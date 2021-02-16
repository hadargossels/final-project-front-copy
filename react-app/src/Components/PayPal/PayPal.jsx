import React from 'react';
import {useState} from 'react';
import PayPalButton from '../PayPalButton/PayPalButton';
import { Link } from 'react-router-dom';

export default function PayPal(props) {

    const [checkout, setCheckOut] = useState(false);

    const amount = props.total.current.innerText.split("₪")[1];

    let callRef = React.createRef();

    return (
        <div id="paypal-button-container">

            <Link to={{pathname: "/confirmation", params: "OK"}} onClick={() => props.emptyProductCart()}><button style={{display: "none"}} ref={callRef}></button></Link>

            {checkout ? (
                <PayPalButton amount={amount}/>
            ) :(
                <button
                className='btn btn-primary'
                    onClick={()=> {
                    setCheckOut(true)
                  }}>
                      Checkout with PayPal / Credit Card
                      </button>
                      
            )}  
                {setInterval(() => {
                    if ((localStorage.getItem("Order")) && (callRef.current))
                        callRef.current.click();
                },0)}
        </div>
    )
}
