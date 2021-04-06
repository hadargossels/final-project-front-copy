import React, { useEffect, useState } from 'react'
import {Container, Card} from 'react-bootstrap'
import axios from 'axios'
import Spinner from '../../components/Spinner/Spinner'


export default function Invoices() {
    let Authorization = `bearer ${localStorage.getItem("token")}`
    const [user, setUser] = useState("")
    const [invoices, setInvoices] = useState("")

    useEffect(()=> {
      axios.post(`${process.env.REACT_APP_SERVER}/auth/userfromtoken`, {token:localStorage.getItem("token")}).then(response=>{
        setUser(response.data)
        axios.get(`${process.env.REACT_APP_SERVER}/orders?userId=${response.data.id}`, {headers: {Authorization}}).then(response=>{
            setInvoices(response.data)
        })
      })
      
    },[Authorization])
    console.log(invoices)
    return (
        <Container className="d-flex align-items-center justify-content-center py-5">
            {user? <div className="w-100" >
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Purchase History</h2>
                        <strong>Email: </strong> {user.email}
                    </Card.Body>
                </Card>
                {invoices?
                <>
                    {!invoices.length? "no orders yet :-(":
                        <Card>
                            <Card.Body>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Reference</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Total Price</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {invoices.map(invoice=>(
                                        <tr key={invoice.id}>
                                            <td className="text-start">{invoice.reference}</td>
                                            <td className="text-start">
                                                {new Date(invoice.orderDate).toLocaleDateString() +" "+ new Date(invoice.orderDate).toLocaleTimeString()}
                                            </td>
                                            <td className="text-start">{invoice.finalSum}</td>
                                            <td className="text-start">{invoice.status}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Card>
                        
                    }
                </>: <Spinner/> 
            }
            </div>: <Spinner/>}
        </Container>
    )
}
