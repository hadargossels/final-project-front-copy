import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './shipping.css'

export class Shipping extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shipping: []
        }
    }

    componentDidMount () {
        this.getShipping();
     }


     
     async getShipping() {
     try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/shipping/`);
        this.setState({shipping: response.data});        
     } catch (error) {
        console.error(error);
     }
     }


    render() {
        return (
            <div className="shippingCont">
                <h1 className="shipphead">Shipping & Return Policy</h1>
                <h2>Shipping</h2>
                <table className="shippTable">
                    <thead>
                        <tr>
                            <td>Region</td>
                            <td>Cost</td>
                            <td>Estimated Time</td>
                            <td>Service</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shipping.map((v)=>
                        <tr>
                            <td>{v.region}</td>
                            <td>{v.cost}</td>
                            <td>{v.estimatedTime}</td>
                            <td>{v.service}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <div>
                    <h2>Return & Refund Policy</h2>
                    <p>Thanks for shopping at The Stationary Shop.<br/>
                    If you are not entirely satisfied with your purchase, we're here to help.</p>
                    <h3>Returns</h3>
                    <p>You have 30 calendar days to return an item from the date you received it.<br/>
                    To be eligible for a return, your item must be unused and in the same condition that you received it.<br/>
                    Your item must be in the original packaging.<br/>
                    Your item needs to have the receipt or proof of purchase.</p>
                    <h3>Refunds</h3>
                    <p>Once we receive your item, we will inspect it and notify you that we have received your returned
                    item. We will immediately notify you on the status of your refund after inspecting the item.<br/>
                    If your return is approved, we will initiate a refund to your credit card (or original method of payment).<br/>
                    Your item must be in the original packaging.<br/>
                    You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
                    <h3>Shipping</h3>
                    <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable.<br/>
                    If your return is approved, we will initiate a refund to your credit card (or original method of payment).<br/>
                    If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                    <h3>Contact Us</h3>
                    <p>If you have any questions on how to return your item to us, <Link to="/contact" style={{color: "#7e486e"}}>Contact Us!</Link></p>
                </div>
                
            </div>
        )
    }
}

export default Shipping
