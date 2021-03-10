import React, { useRef, useState } from 'react'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {auth, signInOptions} from "../../firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading]= useState(false);
    const history = useHistory();

    //login with google/facebook
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: signInOptions,
        callbacks: { signInSuccess: () => history.push("") }
    }
  
    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch(err) {
            console.log(err);
            setError('Failed to log in')
        }
        setLoading(false)
    }

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                            </Form>

                            {/* login with google/facebook */}
                            <StyledFirebaseAuth
                                uiConfig={uiConfig}
                                firebaseAuth={auth}
                            />

                            <div className="w-100 text-center mt-3">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

