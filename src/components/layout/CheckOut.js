import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            additionalHight: 70,
            phoneValue: '',
            paymentOption: 'PayPal',
            numOfPayments: 1,
            deliveryMethod: 0,
        }
        this.state.additionalHight += 3 * this.props.cartProducts.length;
    }

    handlePhoneValue = (e) => {
        this.setState({ phoneValue: e })
    }

    handlePaymentMethodChange = (e) => {
        this.setState({ paymentOption: e.target.value })
    }

    handlePaymentNumChange = (e) => {
        this.setState({ numOfPayments: parseInt(e.target.value) })
    }

    handleDeliveryMethodChange = (e) => {
        this.setState({ deliveryMethod: parseInt(e.target.value) })
    }

    getTotalPrice = () => {
        let tmpTot = this.state.deliveryMethod;
        for (let index = 0; index < this.props.cartProducts.length; index++) {
            tmpTot += parseInt(this.props.cartProducts[index].price) * this.props.cartProducts[index].quantity;
        }
        return tmpTot.toLocaleString();
    }

    formSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const mainStyle = {
            margin: '10px',
            border: '2px solid gold',
            height: `${this.state.additionalHight}rem`,
            position: 'relative'
        }
        const prodStyle = {
            backgroundColor: 'DarkGrey',
            width: '60%',
            margin: '10px auto',
            padding: '5px',
            color: 'white',
            justifyContent: 'center'
        }
        const containerStyle = {
            height: '80%',
            margin: '0 auto',
        }
        let prodArr = this.props.cartProducts;
        return (
            <div style={mainStyle}>
                <h1 style={{ textAlign: 'center' }}>Check Out</h1>

                <div className="container" style={containerStyle}>
                    {prodArr.map((prod, index) => {
                        return <div key={index} style={prodStyle} className="row"> {prod.name}
                        &nbsp;&nbsp; <span style={{ fontWeight: 'bold', color: 'black' }}>Color: &nbsp; </span> {prod.color}
                        &nbsp;&nbsp; <span style={{ fontWeight: 'bold', color: 'black' }}>Price (per unit): &nbsp; </span>  {prod.price}
                        &nbsp;&nbsp; <span style={{ fontWeight: 'bold', color: 'black' }}>X  </span> {prod.quantity}
                        </div>
                    })}

                    <div className="row" style={{ justifyContent: 'center', marginTop: '40px' }}>
                        <Link to="/">Continue shopping</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/shoppingCart">Go to shopping cart</Link>
                    </div>

                    <div className="row" style={{ margin: '40px' }}>
                        You have an account ? &nbsp;&nbsp; <Link to="/register"> Click here to register </Link>
                    </div>

                    <Form onSubmit={this.formSubmit}>
                        <div className="row">
                            <div className="col">
                                <span style={{ fontWeight: 'bold', color: 'black' }}>Costumer details</span>
                                <Form.Group controlId="validationCustomName">
                                    <Form.Control placeholder="*Full Name" required />
                                </Form.Group>

                                <PhoneInput
                                    placeholder="*Enter phone number"
                                    value={this.state.phoneValue}
                                    onChange={this.handlePhoneValue}
                                    required
                                    style={{ marginBottom: '15px' }} />

                                <Form.Group controlId="validationCustomEmail">
                                    <Form.Control type="email" placeholder="*Enter email" required />
                                </Form.Group>

                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="I would like to recieve extra information"
                                />
                            </div>
                            <div className="col">
                                <span style={{ fontWeight: 'bold', color: 'black' }}>Details for the shipment</span>
                                <Form.Control placeholder="*First name" required /><br />
                                <Form.Control placeholder="*Last name" required /><br />
                                <Form.Control placeholder="*Street" required /><br />
                                <Form.Control placeholder="Home number" /><br />
                                <Form.Control placeholder="*City" required /><br />
                                <Form.Control as="textarea" rows={3} placeholder="Comments to delivery person" /><br />
                                <div>Payment method</div>
                                <span className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="PayPal"
                                            checked={this.state.paymentOption === "PayPal"}
                                            onChange={this.handlePaymentMethodChange}
                                        />
                                        PayPal
                                    </label>
                                </span>
                                &nbsp;&nbsp;
                                <span className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="VISA"
                                            checked={this.state.paymentOption === "VISA"}
                                            onChange={this.handlePaymentMethodChange}
                                        />
                                        VISA
                                    </label>
                                </span><br />
                                <Form.Label>Number of payments</Form.Label>
                                <Form.Control as="select" onChange={this.handlePaymentNumChange} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Control><br />
                                <Form.Label>Delivery method</Form.Label>
                                <Form.Control as="select" onChange={this.handleDeliveryMethodChange}>
                                    <option value="0">Self pickup - 0$</option>
                                    <option value="4">Regular post - 4$</option>
                                    <option value="10">Official post - 10$</option>
                                    <option value="20">To home delivery - 20$</option>
                                </Form.Control><br />
                                <div style={{ textAlign: 'center' }}>
                                    Total price is : <span style={{ color: 'red' }}>{this.getTotalPrice()}$</span>
                                </div> <br />
                                <div style={{ textAlign: 'center' }}>
                                    <Button variant="danger" type="submit">
                                        Click to submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div >
            </div >
        )
    }
}
