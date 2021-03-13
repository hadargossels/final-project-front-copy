import React, { Component } from 'react';
import './ProfileForm.css';
import {auth, db} from '../../../firebase'
import firebase from 'firebase/app'

class ProfileForm extends Component {
    constructor() {
        super();
        this.state = {
            userId: null,
            firstName: null,
            newFN: null,
            lastName: null,
            newLN: null,
            email: null,
            newEmail: null,
            phoneNumber: null,
            newPN: null,
            country: null,
            newCountry: null,
            city: null,
            newCity:null,
            address: null,
            newAddress: null,
            errorMessage: null,
        }
    }

    componentDidMount = () => {
        this.getDetails()
    }

    getDetails = () => {
        db.ref('users').on('value', (snapshot)=>{
            let arr = [];
            for (let obj in snapshot.val()) {
                arr.push(snapshot.val()[obj])
            }

            let currEmail = localStorage.getItem('currentUser')

            for (let item of arr) {
                if(item.email === currEmail) {
                    this.setState({
                        userId: item.id,
                        firstName: item.firstName,
                        lastName: item.lastName,
                        email: item.email,
                        phoneNumber: item.phoneNum,
                        country: item.country,
                        city: item.city,
                        address: item.address,
                    })
                }
            }
        })
    }

    handleForm = (event) => {
        event.preventDefault();
        this.updateMyProfile();
    }

    checkObj = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    updateMyProfile = () => {

        let newObj = {}

        if (this.state.newFN && this.state.newFN !== this.state.firstName) {
            newObj.firstName = this.state.newFN

            let user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: this.state.newFN
            })
            .then(() => {
                this.props.curUserName(this.state.newFN)
                localStorage.setItem('userName',this.state.newFN)
            })
        }

        if (this.state.newLN && this.state.newLN !== this.state.lastName) {
            newObj.lastName = this.state.newLN
        }

        if (this.state.newEmail && this.state.newEmail !== this.state.email) {
            newObj.email = this.state.newEmail

            let user = firebase.auth().currentUser;

            console.log(user)

            user.updateEmail(this.state.newEmail)
            .then(() => {
                console.log(user)
                localStorage.setItem('currentUser', this.state.newEmail)
            })
            .catch((error) => {
                newObj.email = this.state.email
                this.setState({
                    errorMessage: <h3 className="text-3xl text-red-600 text-center pb-5"><i className="far fa-times-circle"></i> {error.message}</h3>
                })
            })
        }

        if (this.state.newPN && this.state.newPN !== this.state.phoneNumber) {
            newObj.phoneNum = this.state.newPN
        }

        if (this.state.newCountry && this.state.newCountry !== this.state.country) {
            newObj.country = this.state.newCountry
        }

        if (this.state.newCity && this.state.newCity !== this.state.city) {
            newObj.city = this.state.newCity
        }

        if (this.state.newAddress && this.state.newAddress !== this.state.address) {
            newObj.address = this.state.newAddress
        }

        if(Object.keys(newObj).length) {
            let user = firebase.auth().currentUser;

            console.log(user)

            db.ref().child("users").child(this.state.userId).update(
                {
                    ...newObj
                }
            )
        }

        this.props.updateState()

        // let user = firebase.auth().currentUser;

        // user.updateProfile({
        //     email: this.state.newEmail
        // })
        // .then(() => {console.log("success")})

    }

    changeState = (event) => {
        let inputId = event.target.id
        let validation;
        let exp;
        switch(inputId) {
            case "firstName":
                if(event.target.value.replace(/\s/g, '').length > 1) {
                    this.setState({
                        newFN: event.target.value
                    })
                } else {
                    this.setState({
                        newFN: null,
                    })
                }
                break;
            case "lastName":
                if(event.target.value.replace(/\s/g, '').length > 1 ) {
                    this.setState({
                        newLN: event.target.value
                    })
                } else {
                    this.setState({
                        newLNN: null,
                    })
                }
                break;
            case "email":
                validation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //eslint-disable-line
                exp = event.target.value
                if(validation.test(exp)) {
                    this.setState({
                        newEmail: event.target.value
                    })
                } else {
                    this.setState({
                        newEmail: null,
                    })
                }
                break;
            case "phoneNum":
                validation = /^[0-9]{2,3}-[0-9]{7}$/
                exp = event.target.value
                if(validation.test(exp)) {
                    this.setState({
                        newPN: event.target.value
                    })
                } else {
                    this.setState({
                        newPN: null,
                    })
                }
                break;
            case "country":
                if(event.target.value.replace(/\s/g, '').length > 1 ) {
                    this.setState({
                        newCountry: event.target.value
                    })
                } else {
                    this.setState({
                        newCountry: null,
                    })
                }
                break;
            case "city":
                if(event.target.value.replace(/\s/g, '').length > 1 ) {
                    this.setState({
                        newCity: event.target.value
                    })
                } else {
                    this.setState({
                        newCity: null,
                    })
                }
                break;
            case "address":
                if(event.target.value.replace(/\s/g, '').length > 3 ) {
                    this.setState({
                        newAddress: event.target.value
                    })
                } else {
                    this.setState({
                        newAddress: null,
                    })
                }
                break;
            default:
                break;
        }
    }


    render () {
        console.log("auth:", auth.currentUser)

        return(    
            <main className="ProfileForm">
                <div className="detailsForm bg-yellow-100 w-10/12 rounded-lg px-4 py-4">
                    <h1 className="text-4xl">Personal Details</h1>
                    <h3 className="text-2xl">You can change your personal details</h3>
                    <hr className="border-yellow-800 my-4"/>
                    <form className="text-2xl" onSubmit={(event) => {this.handleForm(event)}}>
                        <div className="grid gap-y-6 grid-cols-2 grid-rows-4 pb-2">
                            <div>
                                <label htmlFor="firstName">First Name:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" id="firstName" defaultValue={this.state.firstName} onChange={(event) => {this.changeState(event)}}/>
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" id="lastName" defaultValue={this.state.lastName} onChange={(event) => {this.changeState(event)}}/>
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <br/>
                                <input type="email" className="w-10/12 h-10 border border-gray-400 px-2 py-1" id="email" defaultValue={this.state.email} onChange={(event) => {this.changeState(event)}}/>
                            </div>
                            <div>
                                <label htmlFor="phoneNum">Phone Number:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" id="phoneNum" defaultValue={this.state.phoneNumber} onChange={(event) => {this.changeState(event)}}/>
                            </div>
                            <div>
                                <label htmlFor="country">Country:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" id="country" defaultValue={this.state.country} onChange={(event) => {this.changeState(event)}}/>
                            </div>
                            <div>
                                <label htmlFor="city">City:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" id="city" defaultValue={this.state.city} onChange={(event) => {this.changeState(event)}}/>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="address">Address:</label>
                                <br/>
                                <input type="text" className="w-11/12 h-10 border border-gray-400 px-2 py-1" id="address" defaultValue={this.state.address} onChange={(event) => {this.changeState(event)}}/>
                            </div>
                        </div>
                        <hr className="border-yellow-800 my-4"/>
                        <div className="text-right">
                            <input type="submit" className="bg-yellow-700 py-2 px-4 text-yellow-100 rounded" value="Save Changes"/>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

export default ProfileForm;