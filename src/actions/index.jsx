import axios from 'axios'
import {
    APPLY_DISCOUNT, GET_DISCOUNTS,
    GET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, PLUS_ONE, MINUS_ONE, EMPTY_CART, MOVE_BESTSELL,
    LOG_IN, LOG_OUT,
    ADD_TEMP_INVOICE, CLEAR_INVOICE, MARK_AS_PAID
} from '../constants/action-types'

//invoice actions
export const addTempInvoice = (data) => ({
    type: ADD_TEMP_INVOICE,
    payload: data
})

export const clearInvoice = () => ({
    type: CLEAR_INVOICE
})

export const markAsPaid = (data) => ({
    type: MARK_AS_PAID,
    payload: data
})

//Discount actions
export const applyDiscount = (data) => ({
    type: APPLY_DISCOUNT,
    payload: data
})

export const getDiscounts = () => dispatch => {

    return axios.get(`${process.env.REACT_APP_SERVER}/coupons`, {headers: {Authorization: `bearer ${process.env.REACT_APP_PUBLIC_HEADER}`}}).then(allCoupons =>
            dispatch({
                type: GET_DISCOUNTS,
                payload: allCoupons.data
            })
        )
}


//Product actions
export const moveBestsell = (button) => ({
    type: MOVE_BESTSELL,
    payload: button
})

export const getProducts = () => dispatch => {

    return axios.get(`${process.env.REACT_APP_SERVER}/public/products`, {headers: {Authorization: `bearer ${process.env.REACT_APP_PUBLIC_HEADER}`}}).then(allProducts =>
            dispatch({
                type: GET_PRODUCTS,
                payload: allProducts.data
            })
        )
    
}

export const addToCart = (data) => ({
    type: ADD_TO_CART,
    payload: data
})

export const removeFromCart = (data) => ({
    type: REMOVE_FROM_CART,
    payload: data
})

export const plusOne = (data) => ({
    type: PLUS_ONE,
    payload: data
})

export const minusOne = (data) => ({
    type: MINUS_ONE,
    payload: data
})

export const emptyCart = () => ({
    type:EMPTY_CART
})

//User actions
export const logIn = () => ({
    type: LOG_IN,
})

export const logOut = () => ({
    type: LOG_OUT,
})