import React, { Component } from 'react';
import './AccountProfile.css';
import ProfileCard from './ProfileCard/ProfileCard';
import ProfileForm from './ProfileForm/ProfileForm';
import {db} from '../../firebase'

class AccountProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList: [],
            firstName: "someName",
            lastName: "someLastName",
            email: "email@website.com",
            phoneNum: "XXX-XXXXXXX",
            country: "someCountry",
            city: "someCity",
            address: "address",
            password: "******",
            role: 2,
        }
    }

    componentDidMount = () => {

        this.updateState()

    }

    updateState = () => {

        db.ref('users').on('value', (snapshot)=>{
            let arr = [];
            for (let obj in snapshot.val()) {
                arr.push(snapshot.val()[obj])
            }

            let currEmail = localStorage.getItem('currentUser')

            for (let item of arr) {
                if(item.email === currEmail) {
                    this.setState({
                        firstName: item.firstName,
                        lastName: item.lastName,
                        email: item.email,
                        phoneNum: item.phoneNum,
                        country: item.country,
                        city: item.city,
                        address: item.address,
                        password: item.password,
                        role: item.role
                    })
                }
            }
        })

    }

    isUserSignedInCB = (bool) => {
        this.props.isUserSignedIn(bool)
    }

    curUserNameCB = (name) => {
        this.props.curUserName(name)
    }


    render () {
        return(    
            <main className="AccountProfile ml-96 mt-20">
                <div className="profileCard">
                    <ProfileCard firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} phoneNum={this.state.phoneNum} country={this.state.country} city={this.state.city} history={this.props.history} role={this.state.role} isUserSignedIn={this.isUserSignedInCB}/>
                </div>
                <div className="profileForm">
                    <ProfileForm email={this.state.email} updateState={this.updateState} curUserName={this.curUserNameCB}/>
                </div>
            </main>
        )
    }
}

export default AccountProfile;