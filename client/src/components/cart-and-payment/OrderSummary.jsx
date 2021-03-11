import React, { useEffect, useRef, useState } from 'react';
import {firebasedb} from '../../firebase';
import { useCart } from '../../context/CartContext';


export default function OrderSummary() {
    const { getSubTotalAmount, tax } = useCart();

    const cuponInputRef = useRef();
    const cuponDiscountRef = useRef();
    const totalAmountRef = useRef();
    const amountAfterCupon = useRef();
    
    const [coupons, setCoupons] = useState([]);
    const [myCoupon, setMyCoupon] = useState({});
    


    useEffect(() => {
        console.log("effect1")
        const fetchData = async () => {
            const snapshot = await firebasedb.ref('coupons').get()
            setCoupons(snapshot.val());
        };
        
        fetchData();
    },[])   

    useEffect(() => {
        console.log("effect3")
        const coupon = JSON.parse(localStorage.getItem('myCoupon'));
        if (coupon)
            setMyCoupon(coupon);
    }, [])


    const getTotalAmount = () => {
        return getSubTotalAmount() * (1 + tax);
    }

    const onActivateCoupon = (e) => {
        e.preventDefault();
        
        if (cuponInputRef.current.value) {   
            let cuponConfirmed = false
            Object.keys(coupons).forEach(element => {
                if (element === cuponInputRef.current.value){
                    {console.log(coupons)}
                    {console.log(myCoupon)}
                    cuponConfirmed = true;
                    const coupon = {code: element, discount: coupons[element]}
                    setMyCoupon(coupon);
                    localStorage.setItem('myCoupon', JSON.stringify(coupon));
                    totalAmountRef.current.style.textDecorationLine = "line-through";
                }
            });
            if (!cuponConfirmed){
                alert("Coupon code is invalid")
            }
        }
    }

    const onCancelCoupon = (e) => {
        e.preventDefault();
        setMyCoupon({});
        localStorage.removeItem('myCoupon')
    }

        
    return (
    <>
    {console.log(coupons)}
    {console.log(myCoupon)}
        <h4 className="border-bottom pb-2">Order Summary</h4>
        <p>Subtotal: ${(getSubTotalAmount()).toLocaleString()}</p>
        <p>Taxes: ${((getSubTotalAmount() * tax).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <form>
            <div className="form-group">
                <label htmlFor="cupon">Cupon-code:</label>
                <input type="text" className="form-control d-inline" id="cuponInput" ref={cuponInputRef} defaultValue={myCoupon ? myCoupon.code : ''}></input>
                <div className="mt-2">
                    <button type="submit" className="btn btn-outline-primary btn-sm d-inline mr-2" onClick={onActivateCoupon}>Activate coupon</button>
                    <button type="submit" className="btn btn-outline-primary btn-sm d-inline" onClick={onCancelCoupon}>Cancel coupon</button>
                </div>
            </div>
        </form>

        {myCoupon.code ?
            <div className="text-success" ref={cuponDiscountRef}>
                {myCoupon.discount * 100}% discount
            </div>
        : null
        }
        <p className="mt-1">
            <b>Total:</b> 
            {/* <span className={`text-success ${myCoupon.code ? 'line-through': ''}}`} ref={totalAmountRef} > */}
            <span className="text-success" style={myCoupon.code ? {textDecorationLine: 'line-through'} : {}} ref={totalAmountRef} >
                ${(getTotalAmount()).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
        </p>
        {myCoupon.code ?
            <p className="text-success" ref={amountAfterCupon}>
                ${(getTotalAmount() * (1 - myCoupon.discount)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
        : null
        }
                    
    </>
    )

}




