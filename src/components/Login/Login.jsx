
import React, { Component } from 'react'
import './Login.css';


export default class Login extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Login Page</h1><br/>
                <button style={{backgroundColor:"green"}}>Login</button><br/>
                <button style={{backgroundColor:"red"}}>Logout</button><br/>
            </div>
        )
    }
}
