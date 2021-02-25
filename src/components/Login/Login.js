import React, {useRef, useState} from 'react'
import {Link, Redirect, useHistory} from 'react-router-dom'
import {Form, Button, Card, Alert, Container} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import firebase, {auth} from '../../firebase'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    //trying google
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({prompt: 'select_account'})
    const signInWithGoogle = () => auth.signInWithPopup(provider);
    const handleGoogle = async (e) => {
        e.preventDefault()

        setLoading(true)
        await signInWithGoogle();
        localStorage.setItem("login",auth.currentUser.email)
        history.push("/dashboard")
        setLoading(false)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            localStorage.setItem("login",auth.currentUser.email)
            history.push("/dashboard")
        } catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }

    return (
        <Container className="d-flex align-items-center justify-content-center py-5">
            {localStorage.getItem("login") && <Redirect to="/dashboard"/>}
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log-in</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 my-2" type="submit">Log-in</Button>
                            <Button disabled={loading} onClick={handleGoogle} className=" w-100 my-2 btn-danger">
                                <i className="fab fa-google-plus-g px-1"></i>
                                <span className="px-1">Log-in with google</span>
                            </Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Don't have an account yet? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </Container>
    )
}
