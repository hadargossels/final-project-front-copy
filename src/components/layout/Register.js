import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../layout/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Register() {
    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputPasswordConfirm = useRef()
    const { register } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if (inputPassword.current.value !== inputPasswordConfirm.current.value) {
            return setError("Passwords not matched !")
        }
        try {
            setError("")       // We have no error:
            setLoading(true)
            await register(inputEmail.current.value, inputPassword.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account!")
        }
        setLoading(false)
    }

    function handleClear() {
        setError("")
        inputEmail.current.value = ""
        inputPassword.current.value = ""
        inputPasswordConfirm.current.value = ""
    }
    return (
        <div style={{ height: "40rem", marginTop: '30px' }}>
            <Card style={{ height: "35rem", width: "50%", margin: "0 auto" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
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
                        <br />
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={inputPasswordConfirm} required />
                        </Form.Group>
                        <br /><br />
                        <Button disabled={loading} style={{ width: "45%" }} type="submit">
                            Sign Up
                        </Button>
                        <Button style={{ width: "45%", float: "right" }} variant="warning" onClick={handleClear}>
                            Clear
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Sign In</Link>
            </div>
        </div>
    )
}
