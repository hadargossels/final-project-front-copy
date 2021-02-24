import React, { Component} from 'react'
import {Link,Route} from "react-router-dom";
import '../signup/signup.css'
import {auth} from '../../../firebase'

const ListItemLink = ({ to, name }) => (
    <Route path={to} children={({ match }) => (
        <Link className="btn btn-dark m-2" to={to}>{name}</Link>
    )}/>)

export default class SignUp extends Component {
    constructor(){
        super();
        this.userName = React.createRef();
        this.userEmail = React.createRef();
        this.userPassword = React.createRef();
        this.userConfirmPassword = React.createRef()
    }
    render() {
        return (
            <div id="signUpForm" className="text-center"
            style={{
                backgroundImage:"url('/images/fitness-background.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                height: "50rem",
                backgroundPosition:"center" 
              }}
            >
                <h1 className="pt-5">Sign Up</h1>
                <div>
                    <input ref={this.userName} name="userName" type="name" className="m-4" placeholder="user name" required/><br/>
                    <input ref={this.userEmail} name="email" type="email" className="m-4" placeholder="Email" required/><br/>
                    <input ref={this.userPassword} name="password" type="password" className="m-4" placeholder="password" required/><br/>
                    <input ref={this.userConfirmPassword} name="confirmPassword" type="password" className="m-4" placeholder="confirm password" required/><br/>
                    <input type="button" onClick={()=>this.addUser()} className="btn btn-dark" value="Register"/><br/><br/>
                </div>
                <br/>
                <span className="fw-bolder">Have an acount?  <ListItemLink to="/login" name="Sign In"/></span>
            </div>
        )
    }
    addUser(event){
        const checkEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let emailval=false, passwordVal=false , userVal=false;
        emailval= checkEmail.test(this.userEmail.current.value);
        if (emailval==false){
            alert("Invalid Email");
        }
        if(this.userPassword.current.value.length>5 && this.userPassword.current.value==this.userConfirmPassword.current.value){
            passwordVal= true;
        }
        else {
            if(this.userPassword.current.value.length>5)
                alert('Password doesnt match!')
            else
                alert('Password needs to be more than five chars')
                passwordVal= false;
        }
        if(this.userName.current.value.length>2){
            userVal= true;
        }
        else{
            userVal= false;
            alert('User name needs to be more than five chars')
        }
        if (userVal && emailval && passwordVal){
            console.log("registered");
            localStorage.setItem("userName",this.userName.current.value);
            localStorage.setItem("userEmail",this.userEmail.current.value);
            localStorage.setItem("userPassword",this.userPassword.current.value);
            alert("Success Welcom to Experis sports")
            auth.createUserWithEmailAndPassword(this.userEmail.current.value, this.userPassword.current.value)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                this.props.history.push('/login');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
        }
    }
}
