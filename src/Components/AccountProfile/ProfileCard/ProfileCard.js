import React, { Component } from 'react';
import './ProfileCard.css';
import girl from './girl.png'
import {auth} from '../../../firebase'
import CurrAuth from '../../../auth';
import { Link } from 'react-router-dom';

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
        }
    }

    signOutFunc = async () => {

        auth.signOut()
        .then(() => {
            this.props.isUserSignedIn(false)
        })
        .catch((error) => {
            this.setState({
                errorMessage: <h3 style={{ color: "red" }}>{error.message}</h3>
            })
        })

        localStorage.removeItem('currentUser');
        localStorage.setItem('signIn', false)
        CurrAuth.logout(() => {
            this.props.history.push("/account/profile")
        })
    }

    render () {
        let livingPlace= `${this.props.city}, ${this.props.country}`
        let fullName = `${this.props.firstName} ${this.props.lastName}`

        let buttons;

        if(this.props.role === 2) {
            buttons = <div><button className="text-3xl font-light py-2 px-4 mx-auto bg-yellow-100 mb-6 rounded ml-32 text-yellow-900 hover:text-yellow-100 hover:bg-yellow-900" onClick= {() => {this.signOutFunc()}}>Sign Out</button></div>
        } else {
            buttons = <div>                    <button 
            className="text-xl font-light py-2 px-4 mx-auto bg-yellow-100 mb-6 rounded mr-2 ml-4 text-yellow-900 hover:text-yellow-100 hover:bg-yellow-900"
            onClick= {() => {this.signOutFunc()}}
        >
            Sign Out
        </button>
        <Link to="/admin-dashboard">
            <button 
                className="text-xl font-light py-2 px-4 mx-auto bg-yellow-100 mb-6 rounded mr-2 ml-2 text-yellow-900 hover:text-yellow-100 hover:bg-yellow-900"
            >
                Admin Dashboard
            </button>
        </Link>
        <Link to="/addproduct">
            <button 
                className="text-xl font-light py-2 px-4 mx-auto bg-yellow-100 mb-6 rounded mr-2 ml-2 text-yellow-900 hover:text-yellow-100 hover:bg-yellow-900"
            >
                Add Product
            </button>
        </Link>
        </div>
        }

        return(    
            <main className="ProfileCard">
                <div className="cardBody bg-yellow-700 w-10/12 rounded-lg">
                    <div className="imageDiv py-5">
                        <img src={girl} alt="profile shot" className="profileImg rounded-full mx-auto border-4 border-yellow-900" width="200"/>
                    </div>
                    <div className="chngImg">
                        <button className="text-3xl font-light py-2 px-4 mx-auto bg-yellow-100 mb-6 rounded ml-20 text-yellow-900 hover:text-yellow-100 hover:bg-yellow-900">
                            <i className="far fa-image"/>
                            &nbsp;
                            Change Picture
                        </button>
                    </div>
                    <hr className="SepLine border-yellow-900 mx-8 mb-4"/>
                    <div className="personalDetails opacity-90 text-center pb-4 text-yellow-100">
                        <h3 className="text-2xl font-medium">{fullName}</h3>
                        <h3 className="text-2xl font-medium">{livingPlace}</h3>
                        <h3 className="text-2xl font-medium">{this.props.email}</h3>
                        <h3 className="text-2xl font-medium">{this.props.phoneNum}</h3>
                    </div>
                    <hr className="SepLine border-yellow-900 mx-8 mb-4"/>
                    {buttons}
                    <hr className="SepLine border-yellow-900 mx-8 mb-4"/>
                    <Link to="/track-order">
                        <button 
                            className="text-3xl font-light py-2 px-4 mx-auto bg-yellow-100 mb-6 rounded ml-32 text-yellow-900 hover:text-yellow-100 hover:bg-yellow-900"
                        >
                            Track Order
                        </button>
                    </Link>
                </div>
            </main>
        )
    }
}

export default ProfileCard;