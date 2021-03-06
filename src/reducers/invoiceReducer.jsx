import { ADD_TEMP_INVOICE, CLEAR_INVOICE, MARK_AS_PAID } from '../constants/action-types'

const initialState = {
    current_invoice : ""
}

export default function invoice(state = initialState, action) {
    switch(action.type) {
        case ADD_TEMP_INVOICE:
            return {
                ...state,
                current_invoice:action.payload
            }
        case CLEAR_INVOICE:
            return {...state, current_invoice:""};
        case MARK_AS_PAID:
            let updatedInvoice = {...state.current_invoice}
            updatedInvoice.reference = action.payload
            return {...state, current_invoice:updatedInvoice};
        default:
            return state;
    }
}

