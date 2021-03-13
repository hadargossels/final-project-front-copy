import React, { Component } from 'react';
import './SignUp.css';
import { Redirect } from 'react-router-dom';
import {auth, db} from '../../firebase';
import firebase from 'firebase/app';
import CurrAuth from '../../auth';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tryPassword: null,
            trySamePassword: null,
            email: null,
            password: null,
            firstName: null,
            lastName: null,
            phoneNum: "XXX-XXXXXXX",
            DOB: "DD/MM/YY",
            country: "none",
            city: "none",
            address: "none",
            signUp: false,
            errorMessage: null,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.authfunc();
    }

    authfunc = async () => {

        await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {

            let data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password,
                email: this.state.email,
                country: this.state.country,
                city: this.state.city,
                address: this.state.address,
                phoneNum: this.state.phoneNum,
                dateOfBirth: this.state.DOB,
                role: 2,
                active: true,
            }

            db.ref().child("users").child(auth.currentUser.uid).set(
                {
                    'id': user.user.uid,
                    ...data
                }
            )

            localStorage.setItem('signupSuccess',"yes")

            this.setState({
                signUp: true,
            })

        })
        .then(() => {
            this.signingIn()
        })
        .catch((error) => {
            this.setState({
                errorMessage: <h3 className="text-3xl text-red-600 text-center pb-5"><i className="far fa-times-circle"></i> {error.message}</h3>
            })
        })
    }

    signingIn = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            let user = userCredential.user

            user.updateProfile({
                displayName: this.state.firstName
            })
        })
        .catch((error) => {console.log(error)})
    }

    checkvalidty = (event) => {
        if (event.target.id === "email") {
            this.setState({
                email: event.target.value
            })
        } else if (event.target.id === "password") {
            this.setState({
                tryPassword: event.target.value
            }, () => {this.checkSame()})
        } else if (event.target.id === "samepassword") {
            this.setState({
                trySamePassword: event.target.value
            }, () => {this.checkSame()})
        } else if (event.target.id === "firstName") {
            if (event.target.value.replace(/\s/g, '').length) {
                this.setState({
                    firstName: event.target.value,
                    errorMessage: null,
                })
            } else {
                this.setState({
                    errorMessage:                 
                        <h1 className="text-3xl text-red-600 text-center pb-5">
                            <i className="far fa-times-circle"></i> 
                            First name needs to have letters!
                        </h1>
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            errorMessage: null
                        })
                    }, 5000);
                })
            }
        } else if (event.target.id === "lastName") {
            if (event.target.value.replace(/\s/g, '').length) {
                this.setState({
                    lastName: event.target.value,
                    errorMessage: null,
                })
            } else {
                this.setState({
                    errorMessage:                 
                        <h1 className="text-3xl text-red-600 text-center pb-5">
                            <i className="far fa-times-circle"></i> 
                            Last name needs to have letters!
                        </h1>
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            errorMessage: null
                        })
                    }, 5000);
                })
            }
        } else if(event.target.id === "city") {
            if(!event.target.value.replace(/\s/g, '').length) {
                this.setState({
                    city: "none"
                })
            } else {
                this.setState({
                    city: event.target.value
                })
            }
        } else if(event.target.id === "country") {
            if(!event.target.value.replace(/\s/g, '').length) {
                this.setState({
                    country: "none"
                })
            } else {
                this.setState({
                    country: event.target.value
                })
            }
        } else if(event.target.id === "address") {
            if(!event.target.value.replace(/\s/g, '').length) {
                this.setState({
                    address: "none"
                })
            } else {
                this.setState({
                    address: event.target.value
                })
            }
        } else if (event.target.id === "phoneNumber") {
            if(!event.target.value.replace(/\s/g, '').length) {
                this.setState({
                    phoneNum: "XXX-XXXXXXX",
                })
            } else {
                this.setState({
                    phoneNum: event.target.value
                })
            }
        } else if (event.target.id === "birthDate") {
            this.setState({
                DOB: event.target.value
            })
        }
    }

    checkSame = () => {
        if (this.state.tryPassword === this.state.trySamePassword) {
            this.setState({
                password: this.state.tryPassword
            })
        } else {
            this.setState({
                password: null,
            })
        }
    }



    render () {

        let submitBtn;
        if (this.state.email && this.state.password && this.state.firstName && this.state.lastName) {
            submitBtn = <input 
                            type="submit" 
                            value="Sign Up" 
                            className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800 mb-3 mt-3"
                        />
        } else {
            submitBtn = <input 
                            type="submit" 
                            value="Sign Up" 
                            className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 border border-yellow-800 mb-3 mt-3 opacity-50 cursor-not-allowed"
                            disabled
                        />
        }

        if (this.state.signUp === false) {
            return(    
                <main className="signupForm pt-10">
                    {this.state.errorMessage}
                    <div className="bg-gray-300 mx-auto w-1/3 text-3xl shadow shadow-md border-4 rounded border-solid border-8 border-gray-400 pl-4">
                        <h1 className="text-6xl text-yellow-600 py-4 font-medium">Enter Your Details</h1>
                        <form onSubmit={(event) => {this.handleSubmit(event)}}>
                            <div className="grid gap-y-4 grid-cols-2 grid-rows-4 pb-2">
                                <p  className="pb-4">
                                    <label htmlFor="firstName">First Name*:&nbsp;&nbsp;&nbsp;</label>
                                    <br/>
                                    <input type="text" id="firstName" name="firstName" onBlur={(event) => {this.checkvalidty(event)}} />
                                </p>
                                <p  className="pb-4">
                                    <label htmlFor="lastName">Last Name*:&nbsp;&nbsp;&nbsp;</label>
                                    <br/>
                                    <input type="text" id="lastName" name="lastName" onBlur={(event) => {this.checkvalidty(event)}} />
                                </p>
                                <p  className="pb-4">
                                    <label htmlFor="phoneNumber">Phone Number:&nbsp;&nbsp;&nbsp;</label>
                                    <br/>
                                    <input type="text" id="phoneNumber" name="phoneNumber" onBlur={(event) => {this.checkvalidty(event)}} className="col-span-1 row-span-1"/>
                                </p>
                                <p  className="pb-4">
                                    <label htmlFor="birthDate">Date of Birth:&nbsp;&nbsp;&nbsp;</label>
                                    <br/>
                                    <input type="date" id="birthDate" name="birthDate" onBlur={(event) => {this.checkvalidty(event)}} className="w-72 pr-2"/>
                                </p>
                                <p  className="pb-4">
                                    <label htmlFor="country">Country:&nbsp;&nbsp;&nbsp;</label>
                                    <br/>
                                    <input type="text" id="country" name="country" onBlur={(event) => {this.checkvalidty(event)}} />
                                </p>
                                <p  className="pb-4">
                                    <label htmlFor="city">City:&nbsp;&nbsp;&nbsp;</label>
                                    <br/>
                                    <input type="text" id="city" name="city" onBlur={(event) => {this.checkvalidty(event)}} />
                                </p>
                                <p  className="pb-4">
                                    <label htmlFor="address">Address:&nbsp;&nbsp;&nbsp;</label>
                                    <br/>
                                    <input type="text" id="address" name="address" onBlur={(event) => {this.checkvalidty(event)}} className="addressInput col-span-2 row-span-1" />
                                </p>
                            </div>
                            <hr className="mb-4 border-yellow-800 mr-4"/>
                            <p  className="pb-4">
                                <label htmlFor="email">Email*:&nbsp;&nbsp;&nbsp;</label>
                                <input type="email" id="email" name="email" onChange={(event) => {this.checkvalidty(event)}} />
                            </p>
                            <p className="pb-4">
                                <label htmlFor="password">Password*:&nbsp;&nbsp;&nbsp;</label>
                                <input type="password" id="password" name="password" onChange={(event) => {this.checkvalidty(event)}} />
                            </p>
                            <p className="pb-4">
                                <label htmlFor="samepassword">Repeat Password*:&nbsp;&nbsp;&nbsp;</label>
                                <input type="password" id="samepassword" name="samepassword" onChange={(event) => {this.checkvalidty(event)}} />
                            </p>
                            {submitBtn}
                        </form>
                    </div>
                </main>
            )
        } else {
            return (
                <Redirect to={
                    {
                        pathname: "/login",
                        state: {
                            from: this.props.location
                        }
                    }
                }/>
            )
        }

    }
}

export default SignUp;