import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";
import {auth} from '../../firebase';

const ListItemLink = ({ to, name }) => (
    <Route path={to} children={({ match }) => (
        <Link className="btn btn-dark m-2" to={to}>{name}</Link>
    )}/>)

class Sign extends Component{
    constructor(){
        super();
        this.useremail = React.createRef();
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
                <input ref={this.useremail} name="email" type="email" className="m-4" placeholder="email" required/><br/>
                <input ref={this.userPassword} name="password" type="password" className="m-4" placeholder="password" required/><br/>
                <input type="button" onClick={()=>this.userLogin()} className="btn btn-dark" value="Login"/><br/><br/>
            </div>
            <br/>
            <span className="fw-bolder">Dont have an acount?  <ListItemLink to="/signup" name="Sign Up"/></span>
        </div>
       )
    }

    userLogin(){
        // const userName= localStorage.getItem("userName");
        // const password = localStorage.getItem('userPassword');
        auth.signInWithEmailAndPassword(this.useremail.current.value,this.userPassword.current.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            this.props.history.push('/personal')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
    });
        // if(this.userName.current.value == userName && this.userPassword.current.value == password){
        //     localStorage.setItem('login',true)
        //     alert(`Welcome back ${userName}`)
        //     this.props.history.push('/');
        // }
    }

}

export default Sign;