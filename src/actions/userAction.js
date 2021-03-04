
import {SAVE_USER,REMOVE_USER} from './constants'

export const saveUser = (user) => dispatch =>{
    dispatch({
        type: SAVE_USER,
        payload: user
    })
}

export const removeUser = () => dispatch =>{
    dispatch({
        type: REMOVE_USER,
        payload: null
    })
}