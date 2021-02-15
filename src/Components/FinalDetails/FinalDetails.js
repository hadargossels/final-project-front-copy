import React, { Component } from 'react';
import './FinalDetails.css';
import formatPrice from '../utility/Price'
import formatPrecent from '../utility/Pecent'

class FinalDetails extends Component {
    constructor() {
        super();
        this.state = {
            taxRate: 5,
            totalProductsSum: localStorage.getItem('finalPrice'),
            totalPrice: 0,
            coupon: ((localStorage.getItem('coupon')) ? "15%" : "None"),
        }
    }

    componentDidMount = () => {
        let addOn = (this.state.totalProductsSum/100) * this.state.taxRate;
        let finalPrice = Number(this.state.totalProductsSum) + addOn;
        if (this.state.coupon !== "none") {
            let couponAdd = (finalPrice/100) * 15
            finalPrice += couponAdd;
        }
        this.setState({
            totalPrice: finalPrice,
        })
    }

    render () {
        return (
        <div className="m-5">
            <div className="bg-gray-300 text-3xl p-0 rounded border border-yellow-700 text-center my-36">
                <h1 className="bg-yellow-700 m-0 pt-1 pl-3 text-white text-3xl rounded-t-sm">
                    Shipment Details
                </h1>
                <p className="pl-3 pt-5">Items: 
                    <span>
                        {formatPrice(Number(this.state.totalProductsSum))}
                    </span>
                </p>
                <p className="pl-3">Taxes: <span>{formatPrecent(this.state.taxRate,null)}</span></p>
                <p className="pl-3">Coupon: <span>{this.state.coupon}</span></p>
                <hr className="mx-6 border-yellow-800"/>
                <h1>Choose a delivery method:</h1>
                <input type="radio" id="dropoff" name="delivery" value="dropoff" />
                <label htmlFor="dropoff">Dropoff Point - Two Weeks - 10$</label>
                <br/>
                <input type="radio" id="mail" name="delivery" value="mail" />
                <label htmlFor="mail">Standard Mail Delivery - One to Two Weeks - 15$</label>
                <br/>
                <input type="radio" id="special" name="delivery" value="special" />
                <label htmlFor="special">Personal Home Delivery - Five Days - 25$</label>
                <hr className="mx-6 border-yellow-800"/>
                <p className="pl-3 py-5">Total sum: <span>{formatPrice(Number(this.state.totalPrice))}</span></p>
            </div>
        </div>
        )
    }
}

export default FinalDetails;