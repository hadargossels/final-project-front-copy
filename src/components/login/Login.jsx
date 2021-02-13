import React, { Component } from 'react'
import './Login.css'
import {NavLink} from 'react-router-dom'

const users = [
    {username: "user1", email: "user1@email.com", password: "a123456"},
    {username: "user2", email: "user2@email.com", password: "b123456"},
    {username: "user3", email: "user3@email.com", password: "c123456"},
    {username: "user4", email: "user4@email.com", password: "d123456"}
]



export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailMsg: 'none',
            passMsg: 'none',
            success: 'none',
            login: 'block',
            username: ""

        }
        
    }
    validate (e) {
        e.preventDefault()
        let email = e.target.childNodes[2].value
        let password = e.target.childNodes[8].value
        for (const element of users) {
            if (element.email == email && element.password == password) {
                
                setTimeout(()=>{this.setState({success: "block",login: "none", username:element.username })},5)
            }
            else if (element.email !== email) {
                setTimeout(()=>{this.setState({emailMsg: "block"})},5)
            }
            else if (element.password !== password) {
                setTimeout(()=>{this.setState({passMsg: "block"})},5)
            }           
        }
    }
    render() {
        return (
            <div>
                <div style={{display: this.state.success}}>Hello, {this.state.username}</div>
                <div className="login" style={{display: this.state.login}}>
                    <h1 style={{display: this.props.visibilty}}>LOGIN</h1>
                    <form action="" onSubmit={(e)=>{this.validate(e)}}>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="email" id="emaillog" name="email"/><br/>
                    <span style={{display: this.state.emailMsg}} className="validMsg">Invalid Email</span><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input type="text" id="password" name="password"/><br/>
                    <span style={{display: this.state.passMsg}} className="validMsg">Invalid Password</span><br/><br/>
                    <span>Forgot your password?</span><br/><br/>
                    <input type="submit" id="sublog" value="LOG IN"></input><br/><br/>
                    <NavLink exact to="/NewAccount">Create account</NavLink>
                    </form>
                </div>
            </div>
        )
    }
}



export default Login
