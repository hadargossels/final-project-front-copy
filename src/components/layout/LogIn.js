import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export default class LogIn extends Component {
    render() {
        const mainStyle = {
            margin : '10px',
            border : '2px solid gold',
            height : '40rem',
            position: 'relative',
        }
        const formStyle = {
            margin: '10vh auto',
            width: '60%',
            textAlign: 'center'
        }
        return (
            <div style={mainStyle}>
                <Form style={formStyle}>
                    <Form.Group style={{width:'40%', margin:'20px auto'}} controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group style={{width:'40%', margin:'20px auto'}} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
        )
    }
}
