import React, { useContext, useState, useEffect} from 'react';
import {firebasedb} from '../firebase';

const CartContext = React.createContext();

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const [displayAlert, setDisplayAlert] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const [myCoupon, setMyCoupon] = useState({});
    const tax = 0.17;

    // const [totalAmount, setTotalAmount] = useState(0);
    // const [taxesAmount, setTaxesAmount] = useState(0);
    // const [totalAfterCoupon, setTotalAfterCoupon] = useState(0);
    // const [totalAfterDelivery, setTotalAfterDelivery] = useState(0);

    useEffect(() => {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
        if (cartProducts !== null) {
            setCartProducts(cartProducts)
        }

        firebasedb.ref('coupons').get()
        .then ( snapshot => {
            setCoupons(snapshot.val())
            } 
        )

        const coupon = JSON.parse(localStorage.getItem('myCoupon'));
        if (coupon){
            setMyCoupon(coupon);
        }  

    }, [])

    
    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    },[cartProducts])


    const handleAddToCart = (product, qty) => {
        setDisplayAlert(true);
        setTimeout(() => {
            setDisplayAlert(false);
        }, 5000);
    
        const updatedCartProducts = [...cartProducts];
    
        const productsFound = cartProducts.filter(element => element.id === product.id)
        if (productsFound.length > 0){
            updatedCartProducts.forEach((element) => {
            if(element.id === product.id)
              element.quantity = parseInt(element.quantity) + parseInt(qty);
          })
        }
        else{
            updatedCartProducts.push({...product, quantity: qty});
        }
        
        setCartProducts(updatedCartProducts);
    }

    const handleQtyChange = (product, qty) => {
        const updatedCartProducts = [...cartProducts];
        updatedCartProducts.forEach(element => {
          if(element.id === product.id)
            element.quantity = parseInt(qty);
        });
        setCartProducts(updatedCartProducts);
    }

    const handleDeleteCartProduct = (product) => {
        const updatedCartProducts = cartProducts.filter(element => element.id !== product.id);
        setCartProducts(updatedCartProducts);
    }

    const calculateSumQtyCart = () => {
        return cartProducts.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.quantity), 0)
    }

    const getSubTotalAmount = () => {
        return cartProducts.reduce((accumulator, currentValue) => 
        accumulator + (currentValue.price * (1-currentValue.discount) * currentValue.quantity), 0);
    }

    const getTaxesAmount = () => {
        return getSubTotalAmount() * tax;
    }

    const getTotalAfterTaxes = () => {
        return getSubTotalAmount() + getTaxesAmount()
    }

    const getCouponDiscountAmount = () => {
        return getTotalAfterTaxes * myCoupon.discount
    }

    const getTotalBeforeDelivert = () => {
        if (myCoupon.code)
            return getTotalAfterTaxes() * (1 - myCoupon.discount);
        else
            return getTotalAfterTaxes()
    }

    const activateCoupon = (couponCode) => {
        
        Object.keys(coupons).forEach(element => {
            if (element === couponCode) {
                const coupon = {code: element, discount: coupons[element]}
                setMyCoupon(coupon);
                localStorage.setItem('myCoupon', JSON.stringify(coupon));
                return true
            }
        });

        return false;
    }

    const cancelCoupon = () => {
        setMyCoupon({});
        localStorage.removeItem('myCoupon')
    }


    const value = {
        cartProducts,
        displayAlert,
        tax,
        myCoupon,
        handleAddToCart,
        handleQtyChange,
        handleDeleteCartProduct,
        calculateSumQtyCart,
        setDisplayAlert,
        getSubTotalAmount,
        getTaxesAmount,
        getTotalAfterTaxes,
        getCouponDiscountAmount,
        getTotalBeforeDelivert,
        activateCoupon,
        cancelCoupon,
        setMyCoupon,
        coupons
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
