import React, {useRef, useState, useEffect} from "react";
import {Alert, Container, Card, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext";
import {db} from '../../firebase'

function Profile(props) {
  const { currentUser , updateEmail } = useAuth();

  const emailRef = useRef()
  const fnameRef= useRef()
  const lnameRef = useRef()
  const phoneRef = useRef()
  const streetRef = useRef()
  const aptRef = useRef()
  const cityRef = useRef()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [myData, setMyData] = useState("")
  const [myKey, setMyKey] = useState("")

  useEffect(()=> {
    const updateDatabase = ()=>{
      db.on("value", (snapshot) =>{
          let myData = ""
          myData = (snapshot.val().users);
          for (const [key,value] of Object.entries(myData)){
            if (value.id === currentUser.uid){
              setMyData(value)
              setMyKey(key)
            }
          }
      })
  }

    updateDatabase()
  
  },[])

  

  function handleSubmit(){
      const promises = []
      setLoading(true)
      setError("")
      if (emailRef.current.value !== currentUser.email){
          promises.push(updateEmail(emailRef.current.value))
      }
      promises.push(db.child("users").child(myKey).update(
        {
          "email": emailRef.current.value || currentUser.email,
          "lastname": lnameRef.current.value || myData.lastname,
          "name": fnameRef.current.value || myData.name,
          "id":currentUser.uid,
          "phone": phoneRef.current.value || "",
          "address": {
            "street": streetRef.current.value || "",
            "apt": aptRef.current.value || "",
            "city": cityRef.current.value || ""
          }
        }
      ))

      Promise.all(promises).then(()=>{
      }).catch(()=>{
          setError("not updated")
      }).finally(()=>{
        setLoading(false)
      })
  }

  return (
    <Container className="d-flex justify-content-center py-5">

      <div className="col-4 me-3">
        <Card style={{ backgroundColor: "rgb(246,248,250)" }}>
          <Card.Body className="text-center">
            <img className="rounded-circle" alt="userPic" width="100px" src="/img/users/userPic.jpg"></img>
            <h4 className="mb-4">{currentUser.email}</h4>
            <Button className="w-100">Upload Picture</Button>
            <Link to="/account">
                <Button className="w-100 my-2 btn-danger" type="submit">Back to Account</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col-8">
        <Card style={{ backgroundColor: "rgb(246,248,250)" }}>
          <Card.Body className="text-center">
            <h2>Profile</h2>
            <span>The information can be edited</span>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}

            <form>
              <div className="row g-2 my-2">
                <div className="col-md form-floating">
                    <input ref={fnameRef} type="text" className="form-control" id="firstName" defaultValue={myData.name}/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="col-md form-floating">
                    <input ref={lnameRef} type="text" className="form-control" id="lastName" defaultValue={myData.lastname}/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
              </div>

              <div className="row g-2 my-2">
                <div className="col-md form-floating">
                    <input ref={emailRef} type="text" className="form-control" id="email" defaultValue={currentUser.email}/>
                    <label htmlFor="email">Email Address</label>
                </div>
                <div className="col-md form-floating">
                    <input ref={phoneRef} type="text" className="form-control" id="phone" defaultValue={myData.phone || ""}/>
                    <label htmlFor="phone">Phone</label>
                </div>
              </div>

              <div className="row g-2 my-2">
                <div className="col-md form-floating">
                    <input ref={streetRef} type="text" className="form-control" id="address1" defaultValue={myData.address? (myData.address.street || "") : ""}/>
                    <label htmlFor="address1">Address</label>
                </div>
                <div className="row g-2 my-2">
                  <div className="col-md form-floating">
                      <input ref={aptRef} type="text" className="form-control" id="address2" defaultValue={myData.address? (myData.address.apt || "") : ""}/>
                      <label htmlFor="address2">Address 2 (Apartment, studio or floor)</label>
                  </div>
                </div>

                <div className="row g-2 my-2">
                    <div className="col-md form-floating">
                      <input ref={cityRef} type="text" className="form-control" id="city" defaultValue={myData.address? (myData.address.city || "") : ""}/>
                      <label htmlFor="city">City</label>
                    </div>
                </div>
              </div>
            </form>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "rgb(246,248,250)" }}>
          <Card.Body className="text-center">
            <Button  onClick={handleSubmit} disabled={loading} className="float-end">Save details</Button>
          </Card.Body>

        </Card>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps)(Profile)