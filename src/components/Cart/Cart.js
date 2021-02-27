import React from 'react'
import {connect} from 'react-redux'
import CartTable from './CartTable'
import { EmptyCart } from './EmptyCart'

function Cart(props) {
    return (
        <div className="py-5">
            <h1 className ="text-center">Cart</h1>
            {props.chosenProducts ? <CartTable/> : <EmptyCart/>}
        </div>
    )
}

const mapStateToProps = state => ({
    chosenProducts:state.products.chosenProducts
})

export default connect(mapStateToProps)(Cart)