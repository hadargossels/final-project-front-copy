import React, { Component } from 'react'
import CartTable from './CartTable'
import { EmptyCart } from './EmptyCart'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state= {productsArr:JSON.parse(localStorage.getItem("productsArr"))}
    }
    cartEmptied(){
        this.setState({productsArr:null})
    }
    render() {
        return (
            <div className="py-5">
                <h1 className ="text-center">Cart</h1>
                <EmptyCart empty={this.state.productsArr}/>
                <CartTable productsArr={this.state.productsArr} cartEmptied={()=>this.cartEmptied()}/>    
            </div>
        )
    }
}
