import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart")),
            total: 0,
         }
         this.total()
    }
    total () {
        let total = 0;
        let cart = JSON.parse(localStorage.getItem("cart"))
        setTimeout(()=>{this.setState({cart})},5)
  
        for (const element of this.state.cart) {
            let quantity = element.quantity
            let price = element.price
            quantity = parseFloat(quantity)
            price = parseFloat(price)
            total += quantity * price
        }
        setTimeout(()=>{this.setState({total})},5)
    }
    
    render() {
        return (
            <div>
                <table className='dropTable'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {JSON.parse(localStorage.getItem("cart")).map((v) => 
                        <tr key={v.itemId}>
                            <td><img src={v.src} alt='product' width='70px'/></td>
                            <td>{v.name}</td>
                            <td>{v.price}$</td>
                            <td>{v.quantity}</td>
                            <td>{(parseFloat(v.price) * parseFloat(v.quantity))}$</td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='goto' colSpan='3'><NavLink exact to="/Cart">Go to cart</NavLink></td>
                            <td className="subtot">Subtotal</td>
                            <td className="subtot">
                                {this.state.total}$
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Dropdown
