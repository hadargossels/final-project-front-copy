import React from 'react'
import {Link} from 'react-router-dom'
import emptySVG from './svg/empty-cart.svg'


export const EmptyCart = (props) => {
    if (!props.empty){
    return (
        <div className="text-center">
            <img src={emptySVG} className="w-50" alt=""/>
            <h2 className="text-danger">You have no items in your shopping cart.</h2>
            <button className="btn btn-primary"><Link to="/store/" style={{textDecoration:"none",color:'white'}}>Continue Shopping</Link></button>
        </div>
    )}
    return null
}
