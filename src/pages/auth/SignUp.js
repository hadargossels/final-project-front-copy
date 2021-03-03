import React, {useRef, useState} from 'react'
import {Container, Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {auth, db} from '../../firebase'
import {logIn} from '../../actions'
import {connect} from 'react-redux'


function Signup(props) {
    const emailRef = useRef()
    const fnameRef =useRef()
    const lnameRef=useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            props.logIn()
            db.child("users").child(auth.currentUser.uid).set(
                {
                    "id":auth.currentUser.uid,
                    "name":fnameRef.current.value,
                    "lastname":lnameRef.current.value,
                    "email":auth.currentUser.email,
                    "roleId":"Customer",
                    "active":true,
                }
            )
            history.push("/account")
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }
    
    return (
        <Container className="d-flex align-items-center justify-content-center py-5">
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="firstname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" ref={fnameRef} required/>
                            </Form.Group>
                            <Form.Group id="lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" ref={lnameRef} required/>
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            <Form.Group id="passwordConfirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required/>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 my-2" type="submit">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps,{logIn})(Signup)