import React, { useState, useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../layout/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../layout/Firebase"

export default function Profile() {
    const [error, setError] = useState("")
    const [currUser, setUser] = useState()
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
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
        <div style={{ height: "35rem", marginTop: '30px' }}>
            <Card style={{ height: "32rem", width: "50%", margin: "0 auto" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong> {currUser && currUser.email}
                    <br /> <br />
                    <strong>User Name: </strong> {currUser && currUser.name}
                    <br /> <br />
                    <strong>Roll: </strong> {currUser && currUser.roll}
                    <br /> <br />
                    <strong>Phone number: </strong> {(currUser && currUser.phone) || <span style={{ color: 'gray' }}>No phone number available yet</span>}
                    <br /> <br />
                    <strong>Address: </strong>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>country: </strong> {(currUser && currUser.address && currUser.address.country) || <span style={{ color: 'gray' }}>Not available yet</span>}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>city: </strong> {(currUser && currUser.address && currUser.address.city) || <span style={{ color: 'gray' }}>Not available yet</span>}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>street: </strong> {(currUser && currUser.address && currUser.address.street) || <span style={{ color: 'gray' }}>Not available yet</span>}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>zipcode: </strong> {(currUser && currUser.address && currUser.address.zipcode) || <span style={{ color: 'gray' }}>Not available yet</span>}
                    <br /><br />
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </div>
    )
}