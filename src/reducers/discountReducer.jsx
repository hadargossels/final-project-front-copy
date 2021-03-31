import { APPLY_DISCOUNT, GET_DISCOUNTS } from '../constants/action-types'

const initialState = {
    allCoupons: "",
    discount:false
}

export default function discount(state = initialState, action) {
    switch(action.type) {
        case GET_DISCOUNTS:
            return {
                ...state,
                allCoupons:action.payload
            }
        case APPLY_DISCOUNT:
            for (let coupon of state.allCoupons){
                if (coupon.couponName.toLowerCase() === action.payload){
                    let discount = coupon.couponSize / 100
                    localStorage.setItem("discount",discount)
                    return {...state, discount: discount}
                }
            }
            return state;
        default:
            return state;
    }
}

