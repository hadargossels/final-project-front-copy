import React, {useRef,useState} from 'react'
import './Login.css';
import { Form, Button, Card, Container,Alert } from "react-bootstrap";
import {Link} from "react-router-dom"
import Auth from '../../Auth'
import {auth,db} from '../../firebase'
import 'firebase/auth'
import firebase from 'firebase/app'

export default function Login (props) {

    const emailRef=useRef()
    const passwordRef=useRef()
  
    const [error,setError] = useState('')

    function GoogleLogin(){
        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then((result) => {
            if(result.additionalUserInfo.isNewUser){
                auth.onAuthStateChanged((user)=>{
                    let time=(new Date()).toUTCString()
                    db.ref().child('users').child(user.uid).set({
                        id:user.uid,
                        username:user.displayName,
                        email:user.email,
                        role:"User",
                        activity:"Active",
                        date:time
                    })
                })     
            }
            Auth.login(()=>props.history.push("/account/profile"))
      
        }).catch((error) => {
          console.log("error")
        });
    }
    function FacebookLogin(){
        var provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
        .then((result) => {
            if(result.additionalUserInfo.isNewUser){
                auth.onAuthStateChanged((user)=>{
                    let time=(new Date()).toUTCString()
                    db.ref().child('users').child(user.uid).set({
                        id:user.uid,
                        username:user.displayName,
                        email:user.email,
                        role:"User",
                        activity:"Active",
                        date:time
                    })
                })     
            }
            Auth.login(()=>props.history.push("/account/profile"))
      
        }).catch((error) => {
          console.log("error")
        });
    }
    
    function GithubLogin(){
        var provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider)
        .then((result) => {
            if(result.additionalUserInfo.isNewUser){
                auth.onAuthStateChanged((user)=>{
                    let time=(new Date()).toUTCString()
                    db.ref().child('users').child(user.uid).set({
                        id:user.uid,
                        username:user.displayName,
                        email:user.email,
                        role:"User",
                        activity:"Active",
                        date:time
                    })
                })     
            }
            Auth.login(()=>props.history.push("/account/profile"))
      
        }).catch((error) => {
          console.log("error")
        });
    }



    function userLogin(e){
    e.preventDefault()

        auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
            .then(() => {
                Auth.login(()=>props.history.push("/account/profile"))
            })
            .catch(() => {
                setError('Failed to sign in');
        });
    }

        return (
            <>
            <Container style={{width:"400px"}} className="mb-3 mt-3">
                <Card>
                    <Card.Body>
                        <h2 className="text-center">Sign In</h2>
                        {error&& <Alert variant="danger">{error}</Alert>}
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control  ref={emailRef} type="email"required/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  ref={passwordRef} type="password" required/>
                            </Form.Group>
                            <Button type="submit" className="d-block mx-auto btn-warning" onClick={(e)=>userLogin(e)}>Log in</Button>      
                         </Form>
                        

                            <button onClick={(e)=>GoogleLogin(e)} className="loginBtn loginBtn--google d-block mx-auto mb-3 mt-3">
                            Login with Google
                            </button>
                            <button onClick={(e)=>FacebookLogin(e)} className="loginBtn loginBtn--facebook d-block mx-auto">
                            Login with Facebook
                            </button>
                            <button onClick={(e)=>GithubLogin(e)} className="btn-github btn-social d-block mx-auto mb-3 mt-3">
                            <i className="fab fa-github"></i> Login with Github
                            </button>
                    </Card.Body>
                </Card> 
                </Container>
              <div className="text-center mb-4" >
                  Dont have an account? <Link to="/register">Sign up</Link>
            </div>
        </>
        )
}
