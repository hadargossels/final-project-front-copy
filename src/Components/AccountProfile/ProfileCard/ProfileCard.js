import React, { Component } from 'react';
import './ProfileCard.css';
import girl from './girl.png'
import {auth} from '../../../firebase'

class ProfileCard extends Component {
    render () {
        return(    
            <main className="ProfileCard">
                <div className="cardBody bg-yellow-700 w-10/12 rounded-lg">
                    <div className="imageDiv py-5">
                        <img src={girl} alt="profile shot" className="profileImg rounded-full mx-auto border-4 border-yellow-900" width="200"/>
                    </div>
                    <div className="personalDetails opacity-90 text-center pb-4 text-yellow-100">
                        <h3 className="text-2xl font-medium">Someplace, Some Country</h3>
                        <h3 className="text-2xl font-medium">{auth.currentUser.email}</h3>
                        <h3 className="text-2xl font-medium">{auth.currentUser.firstName}</h3>
                        <h3 className="text-2xl font-medium">25:00 30/02/2001</h3>
                    </div>
                    <hr className="SepLine border-yellow-900 mx-8 mb-4"/>
                    <div className="chngImg">
                        <button className="text-3xl font-light py-2 px-4 mx-auto bg-yellow-100 mb-6 rounded ml-20 text-yellow-900 hover:text-yellow-100 hover:bg-yellow-900">
                            <i className="far fa-image"/>
                            &nbsp;
                            Change Picture
                        </button>
                    </div>
                </div>
            </main>
        )
    }
}

export default ProfileCard;