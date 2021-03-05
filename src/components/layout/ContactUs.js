import React, { Component } from 'react'
import { Form, Col, Button } from "react-bootstrap"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Map from '../layout/Map'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            userName: '',
            userEmail: '',
            userMessage: ''
        }
    }
    nameRef = React.createRef()
    emailRef = React.createRef()
    messageRef = React.createRef()

    handleName = (e) => {
        this.setState({ userName: e.target.value })
    }
    handleEmail = (e) => {
        this.setState({ userEmail: e.target.value })
    }
    handleMessage = (e) => {
        this.setState({ userMessage: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.nameRef.current.value = ""
        this.emailRef.current.value = ""
        this.messageRef.current.value = ""
        this.setState({ open: true })
    }

    handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };

    render() {
        const mainStyle = {
            margin: '10px',
            border: '2px solid gold',
            height: '42rem',
            position: 'relative',
            textAlign: 'center'
        }
        return (
            <div style={mainStyle}>
                <h1>Contact Us</h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: "50%", marginTop: '25px' }}>
                        <Map />
                        <br /> <br />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <div style={{ margin: "0 10px" }}>
                                <h5 className="text-primary">Address</h5>
                                <span>Al-soltani St.</span>
                                <br />
                                <span>Tira, Israel 4491500</span>
                            </div>
                            <div style={{ margin: "0 10px" }}>
                                <h5 className="text-primary">Working Hours</h5>
                                <span>Sunday-Thursday: 9:00-21:300</span>
                                <br />
                                <span>Friday: 15:00-19:00</span>
                                <br />
                                <span>Saturday: 19:00-22:00</span>
                            </div>
                            <div style={{ margin: "0 10px" }}>
                                <h5 className="text-primary">Contact Info</h5>
                                <span>Phone: 09-793-4444</span>
                                <br />
                                <span>Email: M-Store@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "45%", margin: '25px 0 0 30px', float: 'right' }}>
                        <h4 className="text-primary">Leave us a message</h4>
                        <br />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Col>
                                    <Form.Control placeholder="Enter your name" onChange={this.handleName} ref={this.nameRef} required />
                                </Col>
                                <Col>
                                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmail} ref={this.emailRef} required />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Control as="textarea" rows={4} placeholder="Enter your message" onChange={this.handleMessage} ref={this.messageRef} required />
                            </Form.Row>
                            <br /><br />
                            <Button type="submit">
                                Submit the message
                            </Button>
                            <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
                                <Alert onClose={this.handleClose} severity="success">
                                    The message was successfully sent, Thank you.
                                </Alert>
                            </Snackbar>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}