import React, { useRef,useState } from 'react'
import './login.css';
import Title from './Title'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase"
import firebase from "firebase/app"
import "firebase/auth"

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { loginGoogle } = useAuth()
    const { loginFacebook } = useAuth()
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }
        return (
            <>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
            <Title name="log" title="in" />
            <Card style = {{width:"30%" , marginLeft:"33%"}}>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                    <Button id="login" disabled={loading} className="w-100" type="submit">
                    Log In
                    </Button>
              </Form>
              <Button className="google-btn btn-primary mt-3 w-100" onClick = {loginGoogle}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <p className="btn-text">Log in with google</p>
                </Button>
                <Button className="google-btn btn-primary mt-3 w-100" onClick = {loginFacebook}>
                        <div className="google-icon-wrapper">
                            <img style = {{width:"25px" , height:"25px" , marginBottom:"3px"}}className="google-icon" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"/>
                        </div>
                        <p className="btn-text">Log in with facebook</p>
                </Button>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/register">Sign Up</Link>
          </div>
          </>
            
        )
}

