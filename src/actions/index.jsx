import axios from 'axios'
import {APPLY_DISCOUNT, GET_DISCOUNTS} from '../constants/action-types'

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
