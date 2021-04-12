import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import Title from '../additionsComp/Title'
import axios from 'axios'
export default function ForgotPassword() {
  const emailRef = useRef()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await axios.put("http://localhost:5000/api/forgotpass",{email: emailRef.current.value})
      setMessage("Check your email inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Card style = {{width:"30%" , marginLeft:"33%"}}>
        <Card.Body >
        <Title name="Password" title="Reset" />
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/register">Sign Up</Link>
      </div>
    </>
  )
}