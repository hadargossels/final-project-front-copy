import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class CartItem extends Component {
    IncrementItem = () => {
        let prevTotPrice = this.props.totalPrice;
        prevTotPrice += parseInt(this.props.product.price);
        this.props.updateTotPrice(prevTotPrice);
        this.props.updateQuantity(this.props.product, this.props.product.quantity + 1);
    }

    DecreaseItem = () => {
        if (this.props.product.quantity > 1) {
            let prevTotPrice = this.props.totalPrice;
            prevTotPrice -= parseInt(this.props.product.price);
            this.props.updateTotPrice(prevTotPrice);
            this.props.updateQuantity(this.props.product, this.props.product.quantity - 1);
        }
    }

    DeleteItem = () => {
        this.props.updatePriceDel(this.props.product.quantity, this.props.product.price);
        this.props.handleDelete(this.props.product);
        this.props.updateHeight();
    }

    render() {
        return (
            <div>
                <span style={{ color: 'green' }}> {this.props.product.name} </span>
                <br /><span style={{ fontWeight: 'bold' }}> Model: </span> {this.props.product.model} <span style={{ fontWeight: 'bold' }}> Color: </span> {this.props.product.color}
                <br /> <span style={{ fontWeight: 'bold' }}> Price: </span> {this.props.product.price}

                <br />
                <Button variant="danger" style={{ float: 'right' }} onClick={this.DeleteItem}>Delete</Button>

                <div style={{ position: 'absolute', left: '31rem', marginTop: '5px' }}>
                    <Button variant="primary" onClick={this.IncrementItem}> + </Button>
                    <span> {this.props.product.quantity} </span>
                    <Button variant="warning" onClick={this.DecreaseItem}> - </Button>
                </div>
            </div>
        )
    }
}
