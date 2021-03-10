import React, { useRef, useState } from 'react'
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from '../../context/AuthContext';

export default function ChangePassword() {
    const currentPasswordRef = useRef();
    const newPasswordRef = useRef();
    const newPasswordConfirmRef = useRef();
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { currentUser, updateMyPassword } = useAuth();


    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(false)

        if (newPasswordRef.current.value !== newPasswordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        updateMyPassword(currentPasswordRef.current.value, newPasswordRef.current.value)
            .then(() => {
                setSuccess('Password changed successfully')
            })
            .catch(() => {
                setError('Failed to change password')
            })
    }

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>
                <div className="w-100" style={{maxWidth: "600px"}}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Change Password</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">{success}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="currentPassword">
                                    <Form.Control type="password" ref={currentPasswordRef} placeholder="Current password" ></Form.Control>
                                </Form.Group>
                                <Form.Group id="newPassword">
                                    <Form.Control type="password" ref={newPasswordRef} placeholder="New password" ></Form.Control>
                                </Form.Group>
                                <Form.Group id="newPasswordConfirm">
                                    <Form.Control type="password" ref={newPasswordConfirmRef} placeholder="Password confirmation" ></Form.Control>
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">CHANGE PASSWORD</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>  
        </>
    )
}

