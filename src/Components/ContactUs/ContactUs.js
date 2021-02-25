import React, { Component } from 'react';
import Map from '../Map/Map';
import './Contact.css';

class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            nameTxt: null,
            email: null,
            msgTtl: null,
            msgBody: null,
            errorMessage:null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            errorMessage: 
                <h1 className="text-3xl text-green-700 text-center pb-5 pt-5">
                    <i className="fas fa-check-circle" /> 
                    Message has been sent
                </h1>
        })
        setTimeout(() => {
            event.target.style.border =  "0"; 
            this.setState({
                errorMessage:null
            })
        }, 10000);
        this.resetStates();
    }

    resetStates = () => {
        this.setState({
            nameTxt: null,
            email: null,
            msgBody: null,
            msgTtl: null,
        })
    }

    validateMessage = (event) => {
        let inputId = event.target.id;
        let validation;
        let res;
        let exp;
        switch(inputId) {
            case "nameTxt":
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
                        event.target.style.border =  "4px solid #9CA3AF"; 
                        this.setState({
                            errorMessage:null
                        })
                    }, 10000);
                } else {
                    this.setState({
                        nameTxt: event.target.value
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
                        event.target.style.border =  "4px solid #9CA3AF"; 
                        this.setState({
                            errorMessage:null
                        })
                    }, 10000);
                } else {
                    this.setState({
                        email: event.target.value
                    })
                }
                break;
            case "msgTtl":
                exp = event.target.value
                if (exp.length < 5) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                The title must contain at least 5 notes
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "4px solid #9CA3AF"; 
                        this.setState({
                            errorMessage:null
                        })
                    }, 10000);
                } else {
                    this.setState({
                        msgTtl: event.target.value
                    })
                }
                break;
            case "msgBody":
                exp = event.target.value
                if (exp.length < 10) {
                    event.target.style.border =  "5px solid red"
                    this.setState({
                        errorMessage: 
                            <h1 className="text-3xl text-red-600 text-center pb-5 pt-5"> 
                                The message body must contain at least 10 notes
                            </h1>
                    })
                    setTimeout(() => {
                        event.target.style.border =  "4px solid #9CA3AF"; 
                        this.setState({
                            errorMessage:null
                        })
                    }, 10000);
                } else {
                    this.setState({
                        msgBody: event.target.value
                    })
                }
                break;
            default:
                break;
        }
    }

    render () {
        let btn;
        if (this.state.nameTxt !== null && this.state.email !== null && this.state.msgTtl !== null && this.state.msgBody !== null) {
            btn = 
                <input 
                    type="submit" 
                    value="Send Message" 
                    className="py-2 px-4 bg-yellow-100 border-2 border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-yellow-100 rounded mb-6"
                />
        } else {
            btn = 
                <input 
                    type="submit" 
                    value="Send Message" 
                    className="py-2 px-4 bg-yellow-100 border-2 border-yellow-700 text-yellow-700 rounded mb-6 opacity-60"
                />
        }

        return(    
            <main className="ContactUs p-4">
                <h1 className="text-center text-5xl py-5 font-medium text-yellow-500">
                    Contact Us!
                </h1>
                <div className="text-2xl text-gray-200 text-center pb-10">
                    <p>
                        <span className="text-yellow-600 text-3xl">At</span> FUNNYBOOKS
                        <br/>
                        Sit amet 48 consectetur 13553
                        <br/>
                        Quisque aliquam, Proin
                        <br/>
                        Tel.: 077-8956434
                    </p>
                </div>
                <Map/>
                <h1 className="text-center text-4xl py-5 font-medium text-yellow-500">Send us a message</h1>
                <div className="w-1/2 mx-auto bg-gray-300 text-2xl rounded border-4 border-gray-500 text-center mb-5">
                    <form onSubmit={this.handleSubmit}>
                        {this.state.errorMessage}
                        <div className="grid gap-5 grid-cols-2 grid-row-4 pt-4">
                            <div className="col-span-1 text-center"> 
                                <label htmlFor="nameTxt">Name:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input 
                                    type="text" 
                                    id="nameTxt" 
                                    className="w-72 border-4 border-gray-400" 
                                    onBlur={(event) => {this.validateMessage(event)}} 
                                    required
                                />
                            </div>
                            <div className="col-span-1 text-center">
                                <label htmlFor="email">Email:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-72 border-4 border-gray-400" 
                                    onBlur={(event) => {this.validateMessage(event)}} 
                                    required
                                />
                            </div>
                            <div className="col-span-2 text-center">
                                <label htmlFor="msgTtl">Message Title:</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input 
                                    type="text" 
                                    id="msgTtl" 
                                    className="border-4 border-gray-400" 
                                    style={{width: '780px'}} 
                                    onBlur={(event) => {this.validateMessage(event)}} 
                                    required
                                />
                            </div>
                            <div className="col-span-2 row-span-2 text-center">
                                <textarea 
                                    id="msgBody" 
                                    className="border-4 border-gray-400 mb-4" 
                                    style={{
                                        width: '880px', 
                                        height: '200px', 
                                        paddingTop: '0', 
                                        resize: 'none'
                                    }} 
                                    placeholder="Please enter your message"
                                    onBlur={(event) => {this.validateMessage(event)}} 
                                    required
                                />
                            </div>
                        </div>
                        {btn}
                    </form>
                </div>
            </main>
        )
    }
}

export default ContactUs;