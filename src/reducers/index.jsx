import {combineReducers} from 'redux'

import discountReducer from './discountReducer'
import productReducer from './productReducer'
import userReducer from './userReducer'
import invoiceReducer from './invoiceReducer'

export default combineReducers({
    discount:discountReducer,
    products: productReducer,
    user: userReducer,
    invoice: invoiceReducer
})