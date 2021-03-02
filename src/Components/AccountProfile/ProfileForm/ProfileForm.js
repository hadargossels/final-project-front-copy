import React, { Component } from 'react';
import './ProfileForm.css';
import {auth} from '../../../firebase'
import firebase from 'firebase/app'

class ProfileForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "firstName",
            lastName: "lastName",
            email: auth.currentUser.email,
            phoneNumber: "XXX-XXXXXXX",
            country: "Country",
            city: "City"
        }
    }

    handleForm = (event) => {
        event.preventDefault();
        this.updateMyProfile();
    }

    updateMyProfile = () => {
        let user = firebase.auth().currentUser;

        console.log(user)

        user.updateProfile({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            country: this.state.country,
            city: this.state.city
        }).then(function() {
            console.log("success")
            console.log(user)
        }).catch(function(error) {
            console.log(error)
        });
    }





    render () {
        return(    
            <main className="ProfileForm">
                <div className="detailsForm bg-yellow-100 w-10/12 rounded-lg px-4 py-4">
                    <h1 className="text-4xl">Personal Details</h1>
                    <h3 className="text-2xl">You can change your personal details</h3>
                    <hr className="border-yellow-800 my-4"/>
                    <form className="text-2xl" onSubmit={(event) => {this.handleForm(event)}}>
                        <div className="grid gap-y-6 grid-cols-2 grid-rows-3 pb-2">
                            <div>
                                <label>First Name:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" defaultValue="firstName"/>
                            </div>
                            <div>
                                <label>Last Name:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" defaultValue="lastName"/>
                            </div>
                            <div>
                                <label>Email:</label>
                                <br/>
                                <input type="email" className="w-10/12 h-10 border border-gray-400 px-2 py-1" defaultValue={auth.currentUser.email}/>
                            </div>
                            <div>
                                <label>Phone Number:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" defaultValue="XXX-XXXXXXX"/>
                            </div>
                            <div>
                                <label>Country:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" defaultValue="Country"/>
                            </div>
                            <div>
                                <label>City:</label>
                                <br/>
                                <input type="text" className="w-10/12 h-10 border border-gray-400 px-2 py-1" defaultValue="City"/>
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