import {combineReducers} from 'redux'

import discountReducer from './discountReducer'
import productReducer from './productReducer'
import userReducer from './userReducer'

export default combineReducers({
    discount:discountReducer,
    products: productReducer,
    user: userReducer
})