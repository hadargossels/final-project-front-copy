import axios from 'axios'
import {
    APPLY_DISCOUNT, GET_DISCOUNTS,
    GET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, PLUS_ONE, MINUS_ONE, EMPTY_CART,
    LOG_IN, LOG_OUT
} from '../constants/action-types'

//Discount actions
export const applyDiscount = (data) => ({
    type: APPLY_DISCOUNT,
    payload: data
})

export const getDiscounts = () => dispatch => {
    return axios
    .get("http://localhost:3000/coupons")
    .then (allCoupons =>
        dispatch({
            type: GET_DISCOUNTS,
            payload: allCoupons.data
        })
    )
}

//Product actions
export const getProducts = () => dispatch => {
    return axios
    .get("http://localhost:3000/objectsArr")
    .then (allProducts =>
        dispatch({
            type:GET_PRODUCTS,
            payload: allProducts.data
        }))
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