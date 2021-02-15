import React, { Component } from 'react'
import {users} from './Users.json'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {loggedIn: localStorage.getItem("login")}
        this.userRef = React.createRef();
        this.passRef = React.createRef();
    }

    checkUser(e){
        e.preventDefault()
        let inputUsername = this.userRef.current.value
        let inputPassword = this.passRef.current.value
        for (let user of users){
            if (user.username === inputUsername && user.password === inputPassword){
                localStorage.setItem("login",user.id)
                this.setState({loggedIn:true})
                break;
            }
        }
    }

    render() {
        return (
            <div className="py-5 container">
                {this.state.loggedIn ? <Redirect to="/checkout"/>:""}
                <h1 className="text-center">Login</h1>
                <div className="row justify-content-center">
                <form className="mx-5 col-6" onSubmit = {(e) => this.checkUser(e)}>
                    <label className="form-label" htmlFor="username">Username</label>
                    <input ref={this.userRef} className="form-control" id="username" type="text"/>
                    <label className="form-label" htmlFor="pass">Password</label>
                    <input ref={this.passRef} className="form-control" id="pass" type="password"/>
                    <button className="btn btn-primary">Sign in</button>
                </form>

                </div>
            </div>
        )
    }
}
