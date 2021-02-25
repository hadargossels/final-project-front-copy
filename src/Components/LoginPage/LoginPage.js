import React, { Component } from 'react';
import './LoginPage.css';
import {auth} from '../../firebase'
import CurrAuth from '../../auth';

class LoginPage extends Component {
    constructor() {
        super();
        this.state= {
            user: localStorage.getItem('currentUser'),
            errorMessage: null,
        }
    }

    signOutFunc = async () => {
        auth.signOut().catch((error) => {
            this.setState({
                errorMessage: <h3 style={{ color: "red" }}>{error.message}</h3>
            })
        })

        localStorage.removeItem('currentUser');
        CurrAuth.logout(() => {
            this.props.history.push("/")
        })
    }

    render () {
        console.log(auth.currentUser)
        return(    
            <main className="LoginPage pt-64">
                <div className="bg-gray-300 mx-auto w-1/3 text-center text-3xl shadow shadow-md border-4 rounded border-solid border-8 border-gray-400">
                    <h1 className="text-6xl text-yellow-600 py-4 font-medium">Welcome {auth.currentUser.email}!</h1>
                    <br/>
                    <button 
                        className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800 mb-3 mt-3"
                        onClick= {() => {this.signOutFunc()}}
                    >
                        Sign Out
                    </button>
                </div>
            </main>
        )
    }
}

export default LoginPage;