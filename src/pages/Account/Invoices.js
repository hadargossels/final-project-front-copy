import React, { useEffect, useState } from 'react'
import {Container, Card} from 'react-bootstrap'
import axios from 'axios'


export default function Invoices() {
    const [user, setUser] = useState("")

    useEffect(()=> {
      axios.post("http://localhost:5000/auth/tokenfromuser", {token:localStorage.getItem("token")}).then(response=>{
        setUser(response.data)
      })
      
    },[])

    console.log(user)
    return (
        <Container className="d-flex align-items-center justify-content-center py-5">
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Invoices</h2>
                        <strong>Email: </strong> {user.email}


                    </Card.Body>
                </Card>

            </div>
        </Container>
    )
}
