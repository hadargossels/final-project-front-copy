import React, { Component } from 'react'
import './Cart.css'

const myCoupon = {
    code: "VALENTINE",
    discountPrecent: 10,
    messege: "10% OFF for valentine's day"
}

export class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: JSON.parse(localStorage.getItem("cart")),
            total: 0,
            shipping: 10,
            discount: 0,
            valid: "",
            discountMsg: "",
            valid: "",
            validColor: "",
            amount: 0,
        }
        this.total()
        this.amount()
    }

    amount () {
        let cart = [...this.state.cart]
        let amount = cart.length
        setTimeout(()=>{this.setState({amount})},5)
        
    }

    coupon (e) {
        e.preventDefault();
        let input = e.target.childNodes[1].value
        let couponCode = myCoupon.code
        let discountMsg = myCoupon.messege
        let discountVis = 'block'
        let valid = "Valid coupon"
        let validColor = "green"
        let discount = -1 * (this.state.total / 100 * myCoupon.discountPrecent)
        if (input === couponCode) {
            setTimeout(()=>{this.setState({discountMsg, discount, discountVis,valid,validColor})},5)
        }
        else {
            valid = "Invalid coupon"
            validColor = "red"
            setTimeout(()=>{this.setState({valid,validColor})},5)
        }
    }

    addQnty (e) {
        let name = e.target.parentNode.parentNode.childNodes[1].innerText
        let cart = [...this.state.cart]
        let quantity = e.target.parentNode.innerText
        quantity = parseFloat(quantity)
        quantity++
        for (const element of cart) {
            if (element.name === name){
                element.quantity = quantity
            }
        }
        setTimeout(()=>{this.setState({cart})
        localStorage.setItem("cart",JSON.stringify(cart))},5)
        this.total()
        
    }

    reduceQnty (e) {
        let name = e.target.parentNode.parentNode.childNodes[1].innerText
        let cart = [...this.state.cart]
        let quantity = e.target.parentNode.innerText
        quantity = parseFloat(quantity)
        quantity--
        for (const element of cart) {
            if (element.name === name){
                element.quantity = quantity
            }
        }
        setTimeout(()=>{this.setState({cart})
        localStorage.setItem("cart",JSON.stringify(cart))},5)
        this.total()
    }

    total () {
        let total = 0;
        for (const element of this.state.cart) {
            let quantity = element.quantity
            let price = element.price
            quantity = parseFloat(quantity)
            price = parseFloat(price)
            total += quantity * price
        }
        setTimeout(()=>{this.setState({total})},5)
    }

    deleteItem (e) {
        let prodName = e.target.parentNode.parentNode.childNodes[1].innerText
        let cart = [...this.state.cart]
        cart = cart.filter((v)=> {return v.name !== prodName})
        setTimeout(()=>{this.setState({cart})
        localStorage.setItem("cart",JSON.stringify(cart));
        this.total()
        this.amount()},5)
        
    }

    render() {
        return (
            <div>
                <div className='cartCont'>
                    <div className='tableDiv'>
                    <table>
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
                    {this.state.cart.map((v) => 
                        <tr key={v.itemId}>
                            <td><img src={v.src} alt='product' width='100px'/></td>
                            <td>{v.name}</td>
                            <td>{v.price}$</td>
                            <td><button className='fas fa-plus-circle Qbtn' onClick={(e)=>{this.addQnty(e)}}></button>{v.quantity}<button className='fas fa-minus-circle Qbtn' onClick={(e)=>{this.reduceQnty(e)}}></button></td>
                            <td>{(parseFloat(v.price) * parseFloat(v.quantity))}$</td>
                            <td><button className="fas fa-times delBtn" onClick={(e)=>{this.deleteItem(e)}}></button></td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Subtotal</td>
                            <td>
                                {this.state.total}$
                            </td>
                        </tr>
                    </tfoot>
                </table>
                    </div>
                    <div className='checkOut'>
                        <table className='checkOutTab'>
                            <tbody>
                                <tr>
                                    <td className="left">Items:</td>
                                    <td className="right">{this.state.amount}</td>
                                </tr>
                                <tr>
                                    <td className="left">Subtotal:</td>
                                    <td className="right">{this.state.total}$</td>
                                </tr>
                                <tr>
                                    <td  className="left">Shipping:</td>
                                    <td className="right">{this.state.shipping}$</td>
                                </tr>
                                <tr>
                                    <td  className="left disc">Discount:</td>
                                    <td className="right">{this.state.discount}$</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="left disNote">{this.state.discountMsg}</td>
                                </tr>
                                <tr>
                                <td colSpan="2" className="left">
                                    <form onSubmit={e => {this.coupon(e)}}>
                                    <label htmlFor="coupon">COUPON CODE: </label>
                                    <input type="text" id="couponText" name="coupon" size="8"/>
                                    <input type="submit" value="Submit" id="couponBtn"/>
                                    </form>
                                </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{color: this.state.validColor}}>
                                        {this.state.valid}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td  className="left">Total:</td>
                                    <td className="right">{this.state.total + this.state.shipping + this.state.discount}$</td>
                                </tr>
                                <tr>
                                <td colSpan="2" ><button className='ckotBtn'>CHECKOUT</button></td>
                                </tr>
                            </tfoot>
                        </table>                        
                    </div>
                </div>

            </div>
        )
    }
}

export default Cart
