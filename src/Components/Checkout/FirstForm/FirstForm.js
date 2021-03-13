import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './FirstForm.css';

class FirstForm extends Component {
    constructor(props) {
        super(props);
        this.formRed = React.createRef();
        this.state = {
            val: null,
            input: null,
            page: 1,
            errorMessage: null,
            fullName: null,
            phoneNum: null,
            email: null,
            offers: "none",
            firstName: null,
            lastName: null,
            fullAd: null,
            zipCode: null,
            city: null,
            notes: "none",
            payment: null,
            cardNum: null,
            security: null,
            expDate: null,
            country: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.changePageForward = this.changePageForward.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        this.changePageForward();
    }

    validateContent = (event) => {
        let inputId = event.target.id;
        let validation;
        let res;
        let exp;
        switch(inputId) {
            case "fullName":
                validation = /^[a-zA-Z\s]*$/;  
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Name can only contain letters and spaces!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        fullName: event.target.value
                    },() => {
                        this.props.addToOrder("fullName",this.state.fullName)
                    })
                }
                break;
            case "phoneNum":
                validation = /^[0-9]{2,3}-[0-9]{7}$/
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Phone number can only contain 9 or 10 digits in the specified format!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        phoneNum: event.target.value
                    },() => {
                        this.props.addToOrder("phoneNum",this.state.phoneNum)
                    })
                }
                break;
            case "email":
                validation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //eslint-disable-line
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Pleaese enter a valid email address!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        email: event.target.value
                    },() => {
                        this.props.addToOrder("email",this.state.email)
                    })
                }
                break;
            case "ads":
                if (this.state.offers === "none") {
                    this.setState({
                        offers: true
                    },() => {
                        this.props.addToOrder("offers",this.state.offers)
                    })
                } else {
                    this.setState({
                        offers: false
                    },() => {
                        this.props.addToOrder("offers",this.state.offers)
                    })
                }
                break;
            case "firstName":
                validation = /^[a-zA-Z\s]*$/;
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Names can only contain letters and spaces!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        firstName: event.target.value
                    },() => {
                        this.props.addToOrder("firstName",this.state.firstName)
                    })
                }
                break;
            case "lastName":
                validation = /^[a-zA-Z\s]*$/;
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Names can only contain letters and spaces!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        lastName: event.target.value
                    },() => {
                        this.props.addToOrder("lastName",this.state.lastName)
                    })
                }
                break;
            case "fullAddress":
                exp = event.target.value
                if (exp === "") {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Please enter a valid address!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        fullAd: event.target.value
                    },() => {
                        this.props.addToOrder("fullAd",this.state.fullAd)
                    })
                }
                break;
            case "zipCode":
                validation = /^[0-9]{5}$/
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                A zip code can only contain 5 digits!
                            </h1>
                        })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        zipCode: event.target.value
                    },() => {
                        this.props.addToOrder("zipCode",this.state.zipCode)
                    })
                }
                break;
            case "city":
                validation = /^[a-zA-Z\s]*$/;
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                City names can only contain letters and spaces!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        city: event.target.value
                    },() => {
                        this.props.addToOrder("city",this.state.city)
                    })
                }
                break;
            case "country":
                validation = /^[a-zA-Z\s]*$/;
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Country names can only contain letters and spaces!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        country: event.target.value
                    },() => {
                        this.props.addToOrder("country",this.state.country)
                    })
                }
                break;
            case "notes":
                exp = event.target.value
                if (exp !== "") {
                    this.setState({
                        notes: exp,
                    },() => {
                        this.props.addToOrder("notes",this.state.notes)
                    })
                } else {
                    this.setState({
                        notes: "none"
                    },() => {
                        this.props.addToOrder("notes",this.state.notes)
                    })
                }
                break;
            case "cash":
                if (this.state.payment !== "cash") {
                    this.setState({
                        payment: "cash"
                    },() => {
                        this.props.addToOrder("payment",this.state.payment)
                    })
                }
                break;
            case "credit":
                if (this.state.payment !== "credit") {
                    this.setState({
                        payment: "credit"
                    },() => {
                        this.props.addToOrder("payment",this.state.payment)
                    })
                }
                break;
            case "paypal":
                if (this.state.payment !== "paypal") {
                    this.setState({
                        payment: "paypal"
                    },() => {
                        this.props.addToOrder("payment",this.state.payment)
                    })
                }
                break;
            case "cardNum":
                validation = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Please enter a valid credit card number in the specified format!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        cardNum: event.target.value
                    },() => {
                        this.props.addToOrder("cardNum",this.state.cardNum)
                    })
                }
                break;
            case "security":
                validation = /^[0-9]{3}$/
                exp = event.target.value
                res = validation.test(exp)
                if (!res) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                Security code includes 3 digits only!
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "0"; 
                        this.setState({errorMessage:null})
                    }, 10000);
                } else {
                    this.setState({
                        security: event.target.value
                    },() => {
                        this.props.addToOrder("security",this.state.security)
                    })
                }
                break;
            case "expDate":
                exp = event.target.value
                this.setState({
                    expDate: exp,
                },() => {
                    this.props.addToOrder("expDate",this.state.expDate)
                })
                break;
            default: 
                break;
        }
    }

    changePageForward = () => {
        let curPage = this.state.page
        switch (curPage) {
            case 1:
                this.setState({page:2})
                break;
            case 2:
                this.setState({page:3})
                break;
            case 3:
                this.setState({page:4})
                break;
            default:
                this.setState({page:1})
                break;
        }
        
    }

  render () {
    let payment;
    let year = new Date().getFullYear()
    let month = (new Date().getMonth()) + 1
    if (month < 10) {
        month = `0${month}`
    }
    let thisDate = `${year}-${month}`
    if (this.state.payment === "credit") {
        payment = (
            <div className="mb-2">
                <div className="mb-2">
                    <label htmlFor="cardNum">Credit Card Number: </label>
                    <input 
                        type="text" 
                        id="cardNum" 
                        placeholder="XXXXX-XXXX-XXXX-XXXX" 
                        onBlur={(event) => {this.validateContent(event)}}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="security">Security Code: </label>
                    <input 
                        type="text" 
                        id="security" 
                        className="w-16" 
                        onBlur={(event) => {this.validateContent(event)}}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="expDate">Expiration Date: </label>
                    <input 
                        type="month" 
                        id="expDate" 
                        className="w-36 text-lg" 
                        onBlur={(event) => {this.validateContent(event)}} 
                        min={thisDate} 
                        defaultValue={thisDate}
                    />
                </div>
            </div>
        )
    }

    let basicsBtn;
    if (this.state.fullName !== null && this.state.phoneNum !== null && this.state.email !== null) {
        basicsBtn = 
            <input 
                type="submit" 
                value="PROCEED" 
                className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800"
            />
    } else {
        basicsBtn = 
            <input 
                type="submit" 
                value="PROCEED" 
                className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 border border-yellow-800 opacity-50" 
                disabled
            />
    }

    let addressBtn;
    if (this.state.firstName !== null && this.state.lastName !== null && this.state.fullAd !== null && this.state.zipCode !== null && this.state.city !== null) {
        addressBtn = 
            <input 
                type="submit" 
                value="PROCEED" 
                className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800"
            />
    } else {
        addressBtn = 
            <input 
                type="submit" 
                value="PROCEED" 
                className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 border border-yellow-800 opacity-50" 
                disabled
            />
    }

    let finalBtn;
    if (this.state.payment !== null && this.props.delivery !== null) {
        if (this.state.payment === "credit") {
            if (this.state.cardNum !== null && this.state.expDate !== null && this.state.security !== null) {
                finalBtn = 
                    <Link to="/finalstage">
                        <input 
                            type="submit" 
                            value="ORDER" 
                            className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800"
                        />
                    </Link>
            } else {
                finalBtn = 
                    <input 
                        type="submit" 
                        value="ORDER" 
                        className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 border border-yellow-800 opacity-50" 
                        disabled
                    />
            }
        } else {
            finalBtn = 
                <Link to="/finalstage">
                    <input 
                        type="submit" 
                        value="ORDER" 
                        className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800"
                    />
                </Link>
        }
    } else {
        finalBtn = 
            <input 
                type="submit" 
                value="ORDER" 
                className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 border border-yellow-800 opacity-50" 
                disabled
            />
    }

    let page;
    switch(this.state.page) {
        case 2:
            page = (
                <div className="basics bg-gray-300 rounded mx-48 my-48 text-3xl border-solid border-8 border-gray-400">
                    <h1 className="text-5xl text-yellow-600 py-4 font-bold">Personal Details</h1>
                    {this.state.errorMessage}
                    <form onSubmit={this.handleSubmit} className="mb-6">
                        <div className="mb-2">
                            <label htmlFor="fullName">Full Name: </label>
                            <input 
                                type="text" 
                                id="fullName" 
                                required 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="phoneNum">Phone Number: </label>
                            <input 
                                type="tel" 
                                id="phoneNum" 
                                placeholder="XXX-XXXXXXX" 
                                pattern="[0-9]{2,3}-[0-9]{7}" 
                                required 
                                className="pl-2" 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email: </label>
                            <input 
                                type="email" 
                                id="email" 
                                required 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                        </div>
                        <div className="mb-2">
                            <input 
                                type="checkbox" 
                                id="ads" 
                                value="ads" 
                                onChange={(event) => {this.validateContent(event)}}
                            />
                            <label htmlFor="ads">I would like to recieve news and special offers in my email</label>
                        </div>
                        {basicsBtn}
                    </form>
                </div>
            )
            break;
        case 3:
            page = (
                <div className="deliveryDetails bg-gray-300 rounded mx-48 my-48 text-3xl border-solid border-8 border-gray-400">
                    <h1 className="text-5xl text-yellow-600 py-4 font-bold">Delivery Details</h1>
                    {this.state.errorMessage}
                    <form onSubmit={this.handleSubmit} className="mb-6">
                        <div className="mb-2">
                            <label htmlFor="firstName">First Name: </label>
                            <input 
                                type="text" 
                                id="firstName" 
                                className="w-44" 
                                defaultValue="" 
                                required onBlur={(event) => {this.validateContent(event)}}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="lastName">Last Name: </label>
                            <input 
                                type="text" 
                                id="lastName" 
                                className="w-44" 
                                required 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="fullAddress">Full Address: </label>
                            <input 
                                type="text" 
                                id="fullAddress" 
                                className="w-96" 
                                required 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="zipCode">Zip Code: </label>
                            <input 
                                type="text" 
                                id="zipCode" 
                                className="w-32" 
                                required 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="city">City: </label>
                            <input 
                                type="text" 
                                id="city" 
                                className="w-32" 
                                required 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="country">Country: </label>
                            <input 
                                type="text" 
                                id="country" 
                                className="w-32" 
                                required 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="notes">Notes: </label>
                            <input 
                                type="textarea" 
                                id="notes" 
                                className="h-16" 
                                onBlur={(event) => {this.validateContent(event)}}
                            />
                        </div>
                        {addressBtn}
                    </form>
                </div>
            )
            break;
        case 4:
            page = (
                <div className="paymentDetails bg-gray-300 rounded mx-48 my-48 text-3xl border-solid border-8 border-gray-400">
                    <h1 className="text-5xl text-yellow-600 py-4 font-bold">Payment</h1>
                    {this.state.errorMessage}
                    <form onSubmit={this.handleSubmit} className="mb-6">
                        <div className="mb-2">
                            <h1>Choose a payment method: </h1>
                            <input 
                                type="radio" 
                                id="cash" 
                                name="payment" 
                                value="cash" 
                                required 
                                onChange={(event) => {this.validateContent(event)}}
                            />
                            <label htmlFor="cash">Cash</label>
                            <br />
                            <input 
                                type="radio" 
                                id="credit" 
                                name="payment" 
                                value="credit" 
                                required 
                                onChange={(event) => {this.validateContent(event)}}
                            />
                            <label htmlFor="credit">Credit Card</label>
                            <br/>
                            <input 
                                type="radio" 
                                id="paypal" 
                                name="payment" 
                                value="paypal" 
                                required 
                                onChange={(event) => {this.validateContent(event)}}
                            />
                            <label htmlFor="paypal">PayPal</label>
                        </div>
                        {payment}
                        {finalBtn}
                    </form>
                </div>
            )
            break;
        default:
            page = (
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
                        <input 
                            type="submit" 
                            value="ENTER" 
                            className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800"
                        />
                    </form>
                    <h1>Not a memebr?</h1>
                    <button 
                        className="shadow-lg mb-4 bg-yellow-100 rounded px-4 py-2 hover:shadow-none text-yellow-800" 
                        onClick={() => {this.changePageForward()}}
                    >
                        Procceed as a Guest
                    </button>
                </div> 
            )
            break;
    }

    return (
      <div className="FirstForm">
        {page}
      </div>
    )
  }
}

export default FirstForm;