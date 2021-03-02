import React, { Component } from 'react';
import './AccountProfile.css';
import ProfileCard from './ProfileCard/ProfileCard';
import ProfileForm from './ProfileForm/ProfileForm';

class AccountProfile extends Component {
    render () {
        return(    
            <main className="AccountProfile ml-96 mt-20">
                <div className="profileCard">
                    <ProfileCard />
                </div>
                <div className="profileForm">
                    <ProfileForm />
                </div>
            </main>
        )
    }
}

export default AccountProfile;