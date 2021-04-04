import axios from "axios";
import React, {useRef, useState, useEffect} from "react";
import {Alert, Container, Card, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

function Profile(props) {
  const emailRef = useRef(null)
  const fnameRef= useRef(null)
  const lnameRef = useRef(null)
  const phoneRef = useRef(null)
  const streetRef = useRef(null)
  const aptRef = useRef(null)
  const cityRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState("")

  useEffect(()=> {
    axios.post("http://localhost:5000/auth/tokenfromuser", {token:localStorage.getItem("token")}).then(response=>{
      setUser(response.data)
    })},[])

  function handleSubmit(){
      setLoading(true)
      setError("")
      axios.put(`http://localhost:5000/users/${user.id}`, 
      {
        name:fnameRef.current.value,
        lastname:lnameRef.current.value,
        email:emailRef.current.value,
        phone:phoneRef.current.value,
        address:{
          street:streetRef.current.value,
          apt:aptRef.current.value,
          city:cityRef.current.value
        }
      }
      
      ).then(response=>{
        setUser(response.data)})
        setLoading(false)
  }

  return (
    <Container className="d-flex justify-content-center py-5">

      <div className="col-4 me-3">
        <Card style={{ backgroundColor: "rgb(246,248,250)" }}>
          <Card.Body className="text-center">
            <img className="rounded-circle" alt="userPic" width="100px" src={user.photo? user.photo: "/img/users/userPic.jpg"}></img>
            <h4 className="mb-4">{user.email}</h4>
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
                    <input ref={fnameRef} type="text" className="form-control" id="firstName" defaultValue={user.name}/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="col-md form-floating">
                    <input ref={lnameRef} type="text" className="form-control" id="lastName" defaultValue={user.lastname}/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
              </div>

              <div className="row g-2 my-2">
                <div className="col-md form-floating">
                    <input ref={emailRef} type="text" className="form-control" id="email" defaultValue={user.email}/>
                    <label htmlFor="email">Email Address</label>
                </div>
                <div className="col-md form-floating">
                    <input ref={phoneRef} type="text" className="form-control" id="phone" defaultValue={user.phone || ""}/>
                    <label htmlFor="phone">Phone</label>
                </div>
              </div>

              <div className="row g-2 my-2">
                <div className="col-md form-floating">
                    <input ref={streetRef} type="text" className="form-control" id="address1" defaultValue={user.address? (user.address.street || "") : ""}/>
                    <label htmlFor="address1">Address</label>
                </div>
                <div className="row g-2 my-2">
                  <div className="col-md form-floating">
                      <input ref={aptRef} type="text" className="form-control" id="address2" defaultValue={user.address? (user.address.apt || "") : ""}/>
                      <label htmlFor="address2">Address 2 (Apartment, studio or floor)</label>
                  </div>
                </div>

                <div className="row g-2 my-2">
                    <div className="col-md form-floating">
                      <input ref={cityRef} type="text" className="form-control" id="city" defaultValue={user.address? (user.address.city || "") : ""}/>
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