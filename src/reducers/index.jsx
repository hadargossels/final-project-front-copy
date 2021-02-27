import {combineReducers} from 'redux'

import discountReducer from './discountReducer'
import productReducer from './productReducer'

export default combineReducers({
    discount:discountReducer,
    products: productReducer,
})