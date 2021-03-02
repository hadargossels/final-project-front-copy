import React, {useRef, useState} from "react";
import {Alert, Container, Card, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import { useAuth } from "../../contexts/AuthContext";

function Profile(props) {
  const { currentUser , updateEmail } = useAuth();
  const emailRef = useRef()
  const fnameRef= useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(){
      const promises = []
      setLoading(true)
      setError("")
      if (emailRef.current.value !== currentUser.email){
          promises.push(updateEmail(emailRef.current.value))
      }

      Promise.all(promises).then(()=>{
        console.log(currentUser)
      }).catch(()=>{
          setError("not updated")
      }).finally(()=>{
        setLoading(false)
      })
  }

  return (
    <Container className="d-flex justify-content-center py-5">
      {error && <Alert variant="danger">{error}</Alert>}

      <div className="col-4 me-3">
        <Card style={{ backgroundColor: "rgb(246,248,250)" }}>
          <Card.Body className="text-center">
            <img className="rounded-circle" alt="userPic" width="100px" src="/img/users/userPic.jpg"></img>
            <h4 className="mb-4">{currentUser.email}</h4>
            <Button className="w-100">Upload Picture</Button>
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
            <form>
              <div className="row g-2 my-2">
                <div className="col-md form-floating">
                    <input ref={fnameRef} type="text" className="form-control" id="firstName" defaultValue={"John"}/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="col-md form-floating">
                    <input type="text" className="form-control" id="lastName" defaultValue="Smith"/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
              </div>

              <div className="row g-2 my-2">
                <div className="col-md form-floating">
                    <input ref={emailRef} type="text" className="form-control" id="email" defaultValue={currentUser.email}/>
                    <label htmlFor="email">Email Address</label>
                </div>
                <div className="col-md form-floating">
                    <input type="text" className="form-control" id="phone" defaultValue="000-000-0000"/>
                    <label htmlFor="phone">Phone</label>
                </div>
              </div>

              <div className="row g-2 my-2">
                <div className="col-md form-floating">
                    <input type="text" className="form-control" id="address1" defaultValue="123 Main St."/>
                    <label htmlFor="address1">Address</label>
                </div>
                <div className="row g-2 my-2">
                  <div className="col-md form-floating">
                      <input type="text" className="form-control" id="address2" defaultValue="Apartment, studio or floor"/>
                      <label htmlFor="address2">Address 2 (Apartment, studio or floor)</label>
                  </div>
                </div>

                <div className="row g-2 my-2">
                    <div className="col-md form-floating">
                      <input type="text" className="form-control" id="city" defaultValue="London"/>
                      <label htmlFor="city">City</label>
                    </div>
                </div>
              </div>
            </form>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "rgb(246,248,250)" }}>
          <Card.Body className="text-center">
            <Button disabled={loading} onClick={handleSubmit} className="float-end">Save details</Button>
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