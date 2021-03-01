import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../layout/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
    const inputEmail = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(inputEmail.current.value)
            setMessage("Check your inbox an follow the instructions.")
        } catch {
            setError("Failed to reset the password!")
        }
        setLoading(false)
    }

    function handleClear() {
        setError("")
        setMessage("")
        inputEmail.current.value = ""
    }

    return (
        <div style={{ height: "30rem", marginTop: '30px' }}>
            <Card style={{ height: "20rem", width: "50%", margin: "0 auto" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={inputEmail} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading} style={{ width: "45%" }} type="submit">
                            Reset Password
                        </Button>
                        <Button style={{ width: "45%", float: "right" }} variant="warning" onClick={handleClear}>
                            Clear
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/register">Register</Link>
            </div>
        </div>
    )
}