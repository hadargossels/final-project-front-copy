import React, { Component} from 'react'
import {Link,Route} from "react-router-dom";
import '../signup/signup.css'
import firebase, {auth} from '../../../firebase'
import {db} from '../../../firebase'

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

    // componentDidMount(){
    //     db.on("value", (snapshot) =>{
    //         let myData = ""
    //         myData = (snapshot.val().products);
    //         console.log(myData);
    //     })
    // }

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
                <div className="container container-fluid mt-3">
                    <button id="myFacebookBtn" onClick={()=>this.facebookAddUser()} className="btn mb-2"><i className="fab fa-facebook fs-3 pe-2 text-white"></i><span className="google-span mb-2"><b>Sign up with facebook</b></span></button><br/>
                    <button id="myGoogleBtn" onClick={()=>this.googleAddUser()} className="btn"><img className="google-icon pe-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" height="30 px"/><span className="google-span"><b>Sign up with google</b></span></button><br/>
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

    googleAddUser(){
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.setCustomParameters({prompt : 'select_account'})
        auth.signInWithPopup(provider)
        auth.onAuthStateChanged(user=>{
            if(user){
                localStorage.setItem('userName',user.displayName)
                window.location.reload();
                // this.props.history.push('/')
            }
        })
    }

    facebookAddUser(){
        const provider = new firebase.auth.FacebookAuthProvider();
        provider.setCustomParameters({
            'display': 'popup'
          });
        auth.signInWithPopup(provider)
        
        auth.onAuthStateChanged(user=>{
            if(user){
                localStorage.setItem('userName',user.displayName)
                window.location.reload();
                // this.props.history.push('/')
            }
        })
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
                user.updateProfile({
                    displayName: this.userName.current.value
                    // photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(()=> this.dbAddUser())
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
        }
    }

    dbAddUser(){
        auth.onAuthStateChanged(user=>{
            if(user){
                console.log(user);
                let userRef = db.child("users");
                console.log(userRef);
                userRef.child(user.uid).set({
                  "id":user.uid,
                  "userName":  this.userName.current.value,
                  "roll": "client",
                  "email":this.userEmail.current.value
                }).then(()=>window.location.reload());
            }
        })
    }
}
