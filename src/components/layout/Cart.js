import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
            additionalHight: 20
        }
        this.state.additionalHight += 10 * this.props.cartProducts.length;
    }

    getTotalPrice() {
        let tmpTot = 0;
        for (let index = 0; index < this.props.cartProducts.length; index++) {
            tmpTot += parseInt(this.props.cartProducts[index].price);
        }
        this.setState({ totalPrice: tmpTot });
    }

    updatePageHeight = () => {
        let prevHeight = this.state.additionalHight;
        prevHeight -= 10;
        this.setState({ additionalHight: prevHeight });
    }

    updateTotPrice = (updatedPrice) => {
        this.setState({ totalPrice: updatedPrice });
    }

    updateTotPriceAfterDel = (clicks, productPrice) => {
        let prevTotPrice = this.state.totalPrice;
        prevTotPrice -= parseInt(productPrice) * clicks;
        this.setState({ totalPrice: prevTotPrice });
    }

    componentDidMount() {
        this.getTotalPrice();
    }

    render() {
        const mainStyle = {
            margin: '10px',
            border: '2px solid gold',
            height: `${this.state.additionalHight}rem`,
            position: 'relative',
            textAlign: 'center'
        }
        const cartStyle = {
            margin: '20px 0',
            padding: '15px',
            fontSize: '1.2em',
            border: '1px solid gold',
            maxWidth: '100%'
        }
        const linkStyle = {
            color: 'white',
            textDecoration: 'none'
        }
        let prodArr = this.props.cartProducts;
        return (
            <div style={mainStyle}>
                <h1>Your shopping list</h1>
                <div className="container" style={{ height: '100%' }}>
                    {prodArr.map((prod, index) => {
                        return <div key={index} className="row">
                            <div className="col" style={cartStyle}>
                                <CartItem product={prod} totalPrice={this.state.totalPrice} updateTotPrice={this.updateTotPrice} updatePriceDel={this.updateTotPriceAfterDel} handleDelete={this.props.handleDelete} updateHeight={this.updatePageHeight} updateQuantity={this.props.updateQuantity} />
                            </div>
                        </div>
                    })}
                    <div className="row">
                        <div style={{ fontSize: '1.3em' }}>Total Price: <span style={{ color: 'red' }}>{this.state.totalPrice.toLocaleString()}$</span></div>
                    </div>
                    <br />
                    <div className="row">
                        <Link to="/checkout" style={linkStyle}><Button variant="outline-primary" disabled={this.props.cartProducts.length <= 0}>Go to checkout</Button></Link>
                    </div>

                </div>
            </div >
        )
    }
}
