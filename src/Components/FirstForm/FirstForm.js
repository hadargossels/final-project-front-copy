import React, { Component } from 'react';
import './FirstForm.css';

class FirstForm extends Component {
    constructor() {
        super();
        this.state = {
            val: null,
            input: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    setInput = (e) => {
        this.setState({
            input: e.target.value,
        })
    }

    setVal = () => {
        this.setState({
            val: this.state.input
        })
    }

  render () {
    return (
      <div className="FirstForm">
        <div className="signIn bg-gray-300 rounded mx-48 my-48 text-3xl border-solid border-8 border-gray-400">
            <h1 className="text-5xl text-yellow-600 py-4 font-bold">Sign In</h1>
            <form onSubmit={this.handleSubmit} className="mb-6">
                <div className="mb-2">
                    <label htmlFor="myMail">Email: </label>
                    <input type="email" id="myMail"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password"/>
                </div>
                <input type="submit" value="ENTER" className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border
                border-yellow-800"/>
            </form>
            <h1>Not a memebr?</h1>
            <button className="shadow-lg mb-4 bg-yellow-100 rounded px-4 py-2 hover:shadow-none text-yellow-800">Procceed as a Guest</button>
        </div>
        {/* <div className="basics">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fullName">Full Name: </label>
                <input type="text" id="fullName"/>
                <br/>
                <label htmlFor="phoneNum">Phone Number: </label>
                <input type="text" id="phoneNum"/>
                <br/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email"/>
                <br/>
                <input type="checkbox" id="ads" value="ads" />
                <label htmlFor="ads">I would like to recieve news and special offers in my email</label>
                <br/>
                <input type="submit" value="PROCEED"/>
            </form>
        </div>
        <div className="personalDetails">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName"/>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName"/>
                <br/>
                <label htmlFor="fullAddress">Full Address: </label>
                <input type="text" id="fullAddress"/>
                <label htmlFor="zipCode">Zip Code: </label>
                <input type="text" id="zipCode"/>
                <label htmlFor="city">City: </label>
                <input type="text" id="city"/>
                <br/>
                <label htmlFor="notes">Notes: </label>
                <input type="textarea" id="notes"/>
                <br/>
                <input type="submit" value="PROCEED"/>
            </form>
        </div>
        <div className="paymentDetails">
            <form onSubmit={this.handleSubmit}>
                <h1>Choose a payment method: </h1>
                <input type="radio" id="cash" name="payment" value="cash" />
                <label htmlFor="cash">Cash</label>
                <br />
                <input type="radio" id="credit" name="payment" value="credit" />
                <label htmlFor="credit">Credit Card</label>
                <br/>
                <label htmlFor="cardNum">Credit Card Number: </label>
                <input type="text" id="cardNum"/>
                <br/>
                <input type="submit" value="ORDER"/>
            </form>
        </div> */}
      </div>
    )
  }
}

export default FirstForm;