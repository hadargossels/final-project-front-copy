import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import {auth} from '../../firebase'
import firebase from 'firebase/app'
import CurrAuth from '../../auth';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            isSignedIn: false,
            errorMessage: null,
        }
    }

    componentDidMount = () => {
        let info = localStorage.getItem('signupSuccess')
        if (info) {
            this.setState({
                errorMessage: <h1 className="text-3xl text-yellow-300 text-center pb-5 pt-5">
                                    <i className="fas fa-check-square"></i> 
                                    You're now signed in!
                                </h1>
            }, () => {
                setTimeout(() => {
                    this.setState({
                        errorMessage: null
                    }, () => {
                        localStorage.removeItem('signupSuccess')
                    })
                }, 10000);
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.signinAuthFunct();
    }

    handleGoogle = () => {
        this.signInWithGoogle();
    }

    signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.setCustomParameters({prompt: 'select_account'})
        let signinAuth = await auth.signInWithPopup(provider).catch((error) => {
            this.setState({
                errorMessage: <h3 style={{ color: "red" }}>{error.message}</h3>
            })
        })

        if (signinAuth) {
            localStorage.setItem('currentUser',auth.currentUser.email)
            this.setState({
                isSignedIn: true,
            }, () => {CurrAuth.login(() => {
                this.props.history.push("/signindone")
            })
        })
        }
    };

    signinAuthFunct = async () => {
        let signinAuth = auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            this.setState({
                errorMessage: <h3 className="text-3xl text-red-600 text-center pb-5"><i className="far fa-times-circle"></i> {error.message}</h3>
            })
        })
        if (signinAuth) {
            localStorage.setItem('currentUser',this.state.email)
            this.setState({
                isSignedIn: true,
            }, () => {CurrAuth.login(() => {
                this.props.history.push("/signindone")
            })
        })
        }
    }

    enterDetails = (event) => {
        if (event.target.id === "email") {
            this.setState({
                email: event.target.value
            })
        } else if (event.target.id === "password") {
            this.setState({
                password: event.target.value
            })
        }
    }

    render () {
        return(    
            <main className="Login pt-52">
                {this.state.errorMessage}
                <div className="bg-gray-300 mx-auto w-1/3 text-center text-3xl shadow shadow-md border-4 rounded border-solid border-8 border-gray-400">
                    <h1 className="text-6xl text-yellow-600 py-4 font-medium">Sign In</h1>
                    <form onSubmit={(event) => {this.handleSubmit(event)}}>
                        <p  className="pb-4">
                        <label htmlFor="email">Email:&nbsp;&nbsp;&nbsp;</label>
                        <input type="email" id="email" name="email" onChange={(event) => {this.enterDetails(event)}}/>
                        </p>
                        <p className="pb-4">
                        <label htmlFor="password">Password:&nbsp;&nbsp;&nbsp;</label>
                        <input type="password" id="password" name="password" onChange={(event) => {this.enterDetails(event)}}/>
                        </p>
                        <input 
                            type="submit" 
                            value="Enter" 
                            className="bg-yellow-600 text-white active:bg-yellow-600 uppercase text-xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-2 mt-2"
                        />
                    </form>
                    <hr className="border border-yellow-700 mx-12 my-5"/>
                        <button 
                            className="bg-red-700 my-2 px-4 py-2 rounded text-white font-light"
                            onClick={(event) => {this.handleGoogle(event)}}
                        >
                            <i className="fab fa-google-plus"></i>
                            &nbsp;&nbsp;
                            Sign in with a Google Account
                        </button>
                    <hr className="border border-yellow-700 mx-12 my-5"/>
                    <p className="mt-6 mb-1 pb-1.5">
                        New?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                    <Link to="/sign-up">
                        <button className="bg-yellow-800 text-yellow-100 rounded px-4 py-2 hover:bg-yellow-100 hover:text-yellow-800 border border-yellow-800 mb-3">
                            Sign Up Now!
                        </button>
                    </Link>
                </div>
            </main>
        )
    }
}

export default Login;