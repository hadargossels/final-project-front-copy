import { LOG_IN, LOG_OUT } from '../constants/action-types'

const initialState = {
    loggedIn: "",
}

export default function discount(state = initialState, action) {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                loggedIn:true
            }
        case LOG_OUT:
            return {
                ...state,
                loggedIn:false
            }
        default:
            return state;
    }
}

