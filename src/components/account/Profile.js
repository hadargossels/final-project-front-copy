import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import {useHistory } from "react-router-dom"
import './profile.css';

export default function Profile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
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

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }
  function clear(){
    document.getElementById("input-first-name").value = 'lucky.jesse';
    document.getElementById("input-last-name").value = 'Jesse';
    document.getElementById("inputEmail").value = currentUser.email;
    document.getElementById("inputPassword").value = "";
    document.getElementById("inputePasswordConfirm").value = "";
    document.getElementById("input-address").value = "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09";
    document.getElementById("input-city").value = "New York";
    document.getElementById("input-country").value = "United States";
    document.getElementById("input-postal-code").value = "Postal code";

       
  }
  return (
    <>

          <div className="main-content">
            <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px", backgroundImage: "url(https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/profile-cover.jpg)", backgroundSize: "cover" ,backgroundPosition: "center top"}}>
              <span className="mask bg-gradient-default opacity-8"></span>
              <div className="container-fluid d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-7 col-md-10">
                    <h1 className="display-2 text-white">Hello &nbsp;
                     {currentUser.email}</h1>
                    <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                    {/* <a href="/account/profile-update" className="btn btn-info">Edit profile</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid mt--7">
              <div className="row">
                <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                  <div className="card card-profile shadow">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 order-lg-2">
                        <div className="card-profile-image">
                            <img alt="profileImage" src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" className="rounded-circle"/>
                        </div>
                      </div>
                    </div>
                    <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      <div className="d-flex justify-content-between">
                      </div>
                    </div>
                    <div className="card-body pt-0 pt-md-4">
                      <div className="row">
                        <div className="col">
                          <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                            <div className="text-center">
                              <h3>
                              {currentUser.email}
                              </h3>
                              <div className="h5 font-weight-300">
                                <i className="ni location_pin mr-2"></i>Bucharest, Romania
                              </div>
                              <div className="h5 mt-4">
                                <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                              </div>
                              <div>
                                <i className="ni education_hat mr-2"></i>University of Computer Science
                              </div>
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 order-xl-1">
                  <div className="card ">
                    <div className="card-header bg-white border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h2 className="mb-0">My account</h2>
                        </div>
                      </div>
                    </div>
                    <div className="card-body bg-white">
                    {error && <Alert variant="danger">{error}</Alert>}
                      <Form onSubmit={handleSubmit}>
                        <h6 className="heading-small text-muted mb-4">User information</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-first-name">First name</label>
                                <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" defaultValue="lucky.jesse" required/>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                                <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" defaultValue="Jesse" required/>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                {/* <label className="form-control-label" htmlFor="input-email">Email address</label>
                                <input type="email" id="input-email" className="form-control form-control-alternative"  defaultValue={currentUser.email}/> */}
                               <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="inputEmail" type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                              </Form.Group>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-phone">Phone number</label>
                                <input type="text" id="input-phone" className="form-control form-control-alternative" required placeholder="Phone number" defaultValue="054"/>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                              <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="inputPassword" type="password" ref={passwordRef} required />
                              </Form.Group>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                              <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control id="inputePasswordConfirm" type="password" ref={passwordConfirmRef} required />
                              </Form.Group>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4"/>
                        <h6 className="heading-small text-muted mb-4">Contact information</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-address">Address</label>
                                <input id="input-address" className="form-control form-control-alternative" required placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text"/>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-city">City</label>
                                <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" required defaultValue="New York"/>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-country">Country</label>
                                <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" required defaultValue="United States"/>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-country">Postal code</label>
                                <input type="text" id="input-postal-code" className="form-control form-control-alternative" required placeholder="Postal code"/>
                              </div>
                            </div>
                          </div>
                          <div className="w-20 text-center mt-2">                                
                          <Button disabled={loading} className="btn" type="submit">
                                  Update
                           </Button>
                            <Button style={{background:"red"}} onClick={clear}>Clear</Button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}