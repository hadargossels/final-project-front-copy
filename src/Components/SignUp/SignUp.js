import React, { Component } from 'react';
import './SignUp.css';
import { Redirect } from 'react-router-dom';
import {auth, db} from '../../firebase'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tryPassword: null,
            trySamePassword: null,
            email: null,
            password: null,
            userName: null,
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
            let username = this.state.userName
            let email = this.state.email
            let password = this.state.password
            let data = {
                username,
                email,
                password
            }

            db.ref('users').push(
                {
                    'uid': user.user.uid,
                    ...data
                }
            )

            localStorage.setItem('signupSuccess',"yes")

            this.setState({
                signUp: true,
            })
        })
        .then ()
        .catch((error) => {
            this.setState({
                errorMessage: <h3 className="text-3xl text-red-600 text-center pb-5"><i className="far fa-times-circle"></i> {error.message}</h3>
            })
        })



        // let userauth = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
        //     this.setState({
        //         errorMessage: <h3 className="text-3xl text-red-600 text-center pb-5"><i className="far fa-times-circle"></i> {error.message}</h3>
        //     })
        // })
        // if (userauth) {

        //     let time = Date.now()
        //     let userObj = {
        //         "id": time,
        //         "username": this.state.userName,
        //         "email": this.state.email,
        //         "password": this.state.password
        //     }
        //     let usersList = JSON.parse(localStorage.getItem('newUsers'))
        //     if (usersList) {
        //         usersList.push(userObj)
        //         localStorage.setItem('newUsers',(JSON.stringify(usersList)))
        //     } else {
        //         let someList = [];
        //         someList.push(userObj)
        //         localStorage.setItem('newUsers',(JSON.stringify(someList)))
        //     }
        //     localStorage.setItem('signupSuccess',"yes")
        //     this.setState({
        //         signUp: true,
        //     })
        // }
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
        } else if (event.target.id === "username") {
            let userName = event.target.value
            if (userName.length > 3) {
                this.setState({
                    userName: event.target.value,
                    errorMessage: null,
                })
            } else {
                this.setState({
                    errorMessage:                 
                        <h1 className="text-3xl text-red-600 text-center pb-5">
                            <i className="far fa-times-circle"></i> 
                            Username needs to be longer than 3 characters!
                        </h1>
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            errorMessage: null
                        })
                    }, 5000);
                })
            }
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
        if (this.state.email && this.state.password && this.state.password) {
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
                <main className="signupForm pt-64">
                    {this.state.errorMessage}
                    <div className="bg-gray-300 mx-auto w-1/3 text-center text-3xl shadow shadow-md border-4 rounded border-solid border-8 border-gray-400">
                        <h1 className="text-6xl text-yellow-600 py-4 font-medium">Personal Details</h1>
                        <form onSubmit={(event) => {this.handleSubmit(event)}}>
                            <p  className="pb-4">
                            <label htmlFor="username">Username:&nbsp;&nbsp;&nbsp;</label>
                            <input type="text" id="username" name="username" onBlur={(event) => {this.checkvalidty(event)}} />
                            </p>
                            <p  className="pb-4">
                            <label htmlFor="email">Email:&nbsp;&nbsp;&nbsp;</label>
                            <input type="email" id="email" name="email" onChange={(event) => {this.checkvalidty(event)}} />
                            </p>
                            <p className="pb-4">
                            <label htmlFor="password">Password:&nbsp;&nbsp;&nbsp;</label>
                            <input type="password" id="password" name="password" onChange={(event) => {this.checkvalidty(event)}} />
                            </p>
                            <p className="pb-4">
                            <label htmlFor="samepassword">Repeat Password:&nbsp;&nbsp;&nbsp;</label>
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