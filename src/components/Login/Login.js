import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="loginDiv">
                <div className="containerLogin">
                    <h2>Login</h2>
                    <form>
                        <input className="inputs" type="email" id="email" name="email" placeholder="Email Address" required/><br/>
                        <input className="inputs" type="password" id="pass" name="password" placeholder="Password" minlength="6" required/><br/>
                        <input type="checkbox" id="checkbox" name="remember-me" value="yes"/>
                        <label id="labelRemomber" for="remember-me"> Remember me</label><br/>
                        <a id="forgatA">Forgot password?</a><br/>
                        <button id="signInBtn">Sign in</button>
                    </form>
                    <hr/>
                    <p>Not registered yet?</p>
                    <NavLink id="nanLink" to="/login/signup"><button id="signUpBtn">Sign up</button></NavLink>
                
                </div>
            </div>
        )
    }
}
