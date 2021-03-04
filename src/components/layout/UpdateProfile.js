import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../layout/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../layout/Firebase"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function UpdateProfile() {
    const [currUser, setUser] = useState()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const userNameRef = useRef()
    const userPhoneRef = useRef()
    const addrCountryRef = useRef()
    const addrCityRef = useRef()
    const addrStreetRef = useRef()
    const addrZipcodeRef = useRef()
    const { currentUser, updatePassword, updateEmail, updateDisplayName, updateDataBase } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        const promises = []
        setLoading(true)
        setError("")

        if ((emailRef.current.value !== currentUser.email) && passwordRef.current.value) {
            setError("Canno't change email and password at the same time")
            setLoading(false)
            return
        }
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value,))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }
        if (userNameRef.current.value) {
            promises.push(updateDisplayName(userNameRef.current.value))
        }
        Promise.all(promises)
            .then(() => {
                updateDataBase(userNameRef.current.value, emailRef.current.value, userPhoneRef.current.value, addrCountryRef.current.value, addrCityRef.current.value, addrStreetRef.current.value, addrZipcodeRef.current.value)
                history.push("/profile")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    function handlePhoneValue(e) {
        userPhoneRef.current.value = e
    }

    function handleClear() {
        setError("")
        emailRef.current.value = currUser && currUser.email
        passwordRef.current.value = ""
        passwordConfirmRef.current.value = ""
        userNameRef.current.value = currUser && currUser.name
        userPhoneRef.current.value = ""
        addrCountryRef.current.value = ""
        addrCityRef.current.value = ""
        addrStreetRef.current.value = ""
        addrZipcodeRef.current.value = ""
    }

    function getUserData() {
        db.ref('users/' + currentUser.uid).get().then(function (snapshot) {
            if (snapshot.exists()) {
                setUser(snapshot.val());
            }
            else {
                console.log("No data available");
            }
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getUserData()
    })

    return (
        <div style={{ height: "52rem", marginTop: '30px' }}>
            <Card style={{ height: "49rem", width: "50%", margin: "0 auto" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>

                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                                defaultValue={currUser && currUser.email}
                            />
                        </Form.Group>

                        <Form.Group id="name">
                            <Form.Label>User name</Form.Label>
                            <Form.Control
                                type="text"
                                ref={userNameRef}
                                required
                                defaultValue={currUser && currUser.name}
                            />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                placeholder="Leave it empty to keep the old one."
                            />
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordConfirmRef}
                                placeholder="Leave it empty to keep the old one."
                            />
                        </Form.Group>

                        <p>Phone number</p>
                        <PhoneInput
                            placeholder="Leave it empty to keep the old one."
                            value={currUser && currUser.phone}
                            onChange={handlePhoneValue}
                            ref={userPhoneRef}
                            style={{ width: '50%' }}
                        />
                        <br />

                        <strong>Address</strong>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Form.Group id="country" style={{ width: '30%' }}>
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={addrCountryRef}
                                    placeholder="No changes"
                                />
                            </Form.Group>
                            <Form.Group id="city" style={{ width: '20%' }} >
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={addrCityRef}
                                    placeholder="No changes"
                                />
                            </Form.Group>
                            <Form.Group id="street" style={{ width: '30%' }} >
                                <Form.Label>Street</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={addrStreetRef}
                                    placeholder="No changes"
                                />
                            </Form.Group>
                            <Form.Group id="zipcode" style={{ width: '20%' }} >
                                <Form.Label>Zipcode</Form.Label>
                                <Form.Control
                                    type="text"
                                    ref={addrZipcodeRef}
                                    placeholder="No changes"
                                />
                            </Form.Group>
                        </div>
                        <br />
                        <Button disabled={loading} style={{ width: "45%" }} type="submit">
                            Update
                        </Button>
                        <Button style={{ width: "45%", float: "right" }} variant="warning" onClick={handleClear}>
                            Clear
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Go to home page</Link>
            </div>
        </div>
    )
}