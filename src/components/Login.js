import React, { Component } from 'react'
import './login.css';
import Title from './Title'


export default class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                <Title name="log" title="in" />
                    <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
                    <input type="password" className="form-control" name="password" placeholder="Password" required=""/> 
                    <div className="row">  
                        <div className="col-6">    
                            <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                            </label>
                        </div>
                        <div className="col-6">    
                            <button className="btn btn-lg btn-primary btn-block " type="submit">Login</button>   
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
