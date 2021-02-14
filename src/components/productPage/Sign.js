import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";

const ListItemLink = ({ to, name }) => (
    <Route path={to} children={({ match }) => (
        <Link className="btn btn-dark m-2" to={to}>{name}</Link>
    )}/>)

class Sign extends Component{
    constructor(){
        super();
        this.userName = React.createRef();
        this.userPassword = React.createRef();
    }

    render(){
       return( 
        <div id="signUpForm" className="text-center"
        style={{
            backgroundImage:"url('/images/fitness-background.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            height: "50rem",
            backgroundPosition:"center" 
          }}
        >
            <h1 className="pt-5">Login</h1>
            <div>
                <input ref={this.userName} name="userName" type="name" className="m-4" placeholder="user name" required/><br/>
                <input ref={this.userPassword} name="password" type="password" className="m-4" placeholder="password" required/><br/>
                <input type="button" onClick={()=>this.userLogin()} className="btn btn-dark" value="Login"/><br/><br/>
            </div>
            <br/>
            <span className="fw-bolder">Dont have an acount?  <ListItemLink to="/signup" name="Sign Up"/></span>
        </div>
       )
    }

    userLogin(){
        const userName= localStorage.getItem("userName");
        const password = localStorage.getItem('userPassword');
        console.log(userName,password);
        if(this.userName.current.value == userName && this.userPassword.current.value == password){
            localStorage.setItem('login',true)
            alert(`Welcome back ${userName}`)
            this.props.history.push('/');
        }
    }

}

export default Sign;