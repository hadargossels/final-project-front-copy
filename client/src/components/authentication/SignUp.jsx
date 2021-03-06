import React, { useRef, useState } from 'react'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from 'react-router-dom';
import {firebasedb} from '../../firebase';
import {auth} from '../../firebase';

export default function SignUp() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading]= useState(false);
    const history = useHistory();
  
    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            const a = await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            console.log(a)
            console.log(firstNameRef.current.value)
            await auth.onAuthStateChanged((user)  => {
                firebasedb.ref('users').child(user.uid).set(
                    {
                        id: user.uid,
                        email: user.email,
                        role: "client",
                        active: true
                    }
                )
            })
            const updates = {};
            updates['/users/' + a.user.uid + '/firstName'] = firstNameRef.current.value;
            updates['/users/' + a.user.uid + '/lastName'] = lastNameRef.current.value;
            updates['/users/' + a.user.uid + '/phone'] = phoneRef.current.value;
            firebasedb.ref().update(updates);

            history.push("/")
        } 
        catch(err) {
            console.log(err);
            setError('Failed to create an account')
        }
        finally {
            setLoading(false)
        }   
    }

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Card className="px-3">
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="firstName">
                                    <Form.Control type="text" placeholder="First name" ref={firstNameRef} required></Form.Control>
                                </Form.Group>

                                <Form.Group id="lastName">
                                    <Form.Control type="text" placeholder="Last name" ref={lastNameRef} required></Form.Control>
                                </Form.Group>

                                <Form.Group id="email">
                                    <Form.Control type="email" placeholder="Email" ref={emailRef} required></Form.Control>
                                </Form.Group>

                                <Form.Group id="phone">
                                    <Form.Control type="tel" placeholder="Phone" ref={phoneRef} required></Form.Control>
                                </Form.Group>

                                <Form.Group id="password">
                                    <Form.Control type="password" placeholder="Password" ref={passwordRef} required></Form.Control>
                                </Form.Group>

                                <Form.Group id="password-confirm">
                                    <Form.Control type="password" placeholder="Password Confirmation" ref={passwordConfirmRef} required></Form.Control>
                                </Form.Group>

                                <Button disabled={loading} className="w-100 mt-3" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

