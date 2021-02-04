import React, { Component } from 'react'
import './Login.css'

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <h1>LOGIN</h1>
                <form action="">
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="emaillog" name="email"/><br/><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="text" id="password" name="password"/><br/><br/>
                <span>Forgot your password?</span><br/><br/>
                <input type="submit" id="sublog" value="LOG IN"></input><br/><br/>
                <span>Create account</span>
                </form>
            </div>
        )
    }
}

export default Login
