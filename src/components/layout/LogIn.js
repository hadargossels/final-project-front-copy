import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useAuth } from "../layout/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { auth } from '../layout/Firebase'
import firebase from "firebase/app"

export default function Login() {
    const inputEmail = useRef()
    const inputPassword = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    const signInWithGoogle = () => auth.signInWithPopup(provider);
    const handleGoogle = async (e) => {
        e.preventDefault()
        setLoading(true)
        await signInWithGoogle();
        history.push("/profile")
        setLoading(false)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(inputEmail.current.value, inputPassword.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }

    function handleClear() {
        setError("")
        inputEmail.current.value = ""
        inputPassword.current.value = ""
    }

    const iconsStyle = {
        color: 'white',
        fontSize: '1.3em',
    }

    return (
        <div style={{ height: "40rem", marginTop: '30px' }}>
            <Card style={{ height: "35rem", width: "50%", margin: "0 auto" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={inputEmail} required />
                        </Form.Group>
                        <br />
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={inputPassword} required />
                        </Form.Group>
                        <br /><br />
                        <Button disabled={loading} style={{ width: "45%" }} type="submit">
                            Sign In
                        </Button>
                        <Button style={{ width: "45%", float: "right" }} variant="warning" onClick={handleClear}>
                            Clear
                        </Button>
                        <br /><br />
                        <Button variant="danger" style={{ width: "45%" }} onClick={handleGoogle} >
                            <span className="px-1">Sing In with </span>
                            <FontAwesomeIcon icon={faGoogle} style={iconsStyle} />
                        </Button>
                    </Form>
                    <br />
                    <div className="w-100 text-center mt-3">
                        <Link to="/reset-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/register">Register</Link>
            </div>
        </div>
    )
}