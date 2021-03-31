import React, { useEffect, useState } from 'react'
import {Container, Card} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import {db} from '../../firebase'


export default function Invoices() {
    const {currentUser} = useAuth()
    const [myData, setMyData] = useState("")

    useEffect(()=> {
        const updateDatabase = ()=>{
          db.on("value", (snapshot) =>{
              let myData = ""
              myData = (snapshot.val().invoices);
              for (const [key,value] of Object.entries(myData)){
                if (value.uid === currentUser.uid){
                  setMyData(value)
                }
              }
          })
      }
    
    updateDatabase()
      
      },[])

    console.log(myData)
    return (
        <Container className="d-flex align-items-center justify-content-center py-5">
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Invoices</h2>
                        <strong>Email: </strong> {currentUser.email}


                    </Card.Body>
                </Card>

            </div>
        </Container>
    )
}
