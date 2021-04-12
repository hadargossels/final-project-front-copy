import React, { useRef, useState,useEffect } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import './profile.css';
import axios from 'axios'

export default function Profile() {
  const emailRef = useRef();
    const passwordRef= useRef();
    const passwordConfirmRef= useRef();
    const firstNameRef= useRef();
    const lastNameRef= useRef();
    const phoneNumberRef= useRef();
    const addressRef= useRef();
    const cityRef= useRef();
    const countryRef= useRef();
    const postalCodeRef  = useRef()
    const imgRef = useRef()
  // const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState("")
  // const [photo, setPhoto] = useState("")
  let userId;
  useEffect(()=> {
     userId = JSON.parse(localStorage.getItem("usernameID"))
    axios.get(`http://localhost:5000/api/user/${userId}`, {userId:userId}).then(response=>{
      setUser(response.data)
    })
  },[])

  async function handleSubmit(e) {
    
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    var formData = new FormData();
     // var imagefile = imgRef.current.files[0]
      // console.log(imgRef.current.files[0])
      // formData.append("yourImage", imagefile);
      formData.append("id", user.id);
      formData.append("activity", user.activity);
      formData.append("email", emailRef.current.value)
      formData.append("password", passwordRef.current.value)
      formData.append("firstName", firstNameRef.current.value)
      formData.append("lastName", lastNameRef.current.value)
      formData.append("phone", phoneNumberRef.current.value)
      formData.append("state", countryRef.current.value)
      formData.append("city", cityRef.current.value)
      formData.append("zip", postalCodeRef.current.value)
      formData.append("address", addressRef.current.value)
      formData.append("cart", user.cart)
      formData.append("posts", user.post)
      //try {
        setError("")
        console.log(user.id)
        axios.put(`http://localhost:5000/api/user/${user.id}`, 
        {
          id:user.id,
          address:addressRef.current.value,
          city:cityRef.current.value,
          state:countryRef.current.value,
          email:emailRef.current.value,
          firstName:firstNameRef.current.value,
          lastName:lastNameRef.current.value,
          password:passwordRef.current.value,
          phone:phoneNumberRef.current.value,
          zip:postalCodeRef.current.value,
          //yourImage:imgRef.current.files[0],
          cart: user.cart,
          posts:user.posts,
          activity: user.activity
           //formData
        })//,{headers:{'Content-Type': 'multipart/form-data;boundary=<calculated when request is sent>'},'Authorization':'Bearer '+ localStorage.getItem('token') })//,'headers': { 'Authorization':'Bearer '+ localStorage.getItem('token') }}//{ 'headers': { 'Authorization':'Bearer '+ localStorage.getItem('token') } }
      .then(() =>{
        alert("Profile Updated")
        setLoading(false)
      })
      .catch(err=>{
        console.log(err)

      })
    
  }
  function clear(){
    document.getElementById("input-first-name").value = '';
    document.getElementById("input-last-name").value = '';
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPassword").value = "";
    document.getElementById("inputePasswordConfirm").value = "";
    document.getElementById("input-address").value = "";
    document.getElementById("input-city").value = "";
    document.getElementById("input-country").value = "";
    document.getElementById("input-postal-code").value = "";
    document.getElementById("input-phone").value = "";

    
       
  }
  return (
    <>

          <div className="main-content">
            <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{minHeight: "600px", backgroundImage: "", backgroundSize: "cover" ,backgroundPosition: "center top"}}>
              <span className="mask bg-gradient-default opacity-8"></span>
              <div className="container-fluid d-flex align-items-center">
                <div className="row">
                  <div className="col-lg-7 col-md-10">
                    <h1 className="display-2 text-white">Hello &nbsp;
                     {user.firstName}</h1>
                    <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
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
                        <div className="card-profile-image mb-5">
                            <img  alt="profileImage" src={`http://localhost:5000/uploads/${user.yourImage}`} className="rounded-circle"/>
                        </div>
                      </div>
                    </div>
                    <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      <div className="d-flex justify-content-between">
                      </div>
                    </div>
                    <div className="card-body" style={{marginTop:"100px"}}>
                      <div className="row">
                        <div className="col">
                          <div className="card-profile-stats d-flex justify-content-center mt-md-6">
                            <div className="text-center">
                              <h3>
                              {user.firstName +' '+ user.lastName}
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
                                <input ref={firstNameRef} type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" defaultValue={user.firstName} required/>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                                <input ref={lastNameRef} type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" defaultValue={user.lastName} required/>
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
                                <Form.Control id="inputEmail" type="email" ref={emailRef} placeholder="email" required defaultValue={user.email}/>
                              </Form.Group>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-phone">Phone number</label>
                                <input ref={phoneNumberRef} type="text" id="input-phone" className="form-control form-control-alternative" required placeholder="Phone number" defaultValue={user.phone}/>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                              <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="inputPassword" type="password" placeholder="Password" ref={passwordRef} required />
                              </Form.Group>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                              <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control id="inputePasswordConfirm" type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
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
                                <input id="input-address" ref={addressRef}  className="form-control form-control-alternative" required placeholder="Home Address" defaultValue={user.address} type="text"/>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-city">City</label>
                                <input ref={cityRef} type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" required defaultValue={user.city}/>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" htmlFor="input-country">Country</label>
                                <input ref={countryRef} type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" required defaultValue={user.state}/>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-country">Postal code</label>
                                <input ref={postalCodeRef} type="text" id="input-postal-code" className="form-control form-control-alternative" required defaultValue={user.zip}/>
                              </div>
                            </div>
                            {/* <div className="col-lg-4">
                              <div className="form-group">
                                <label className="form-control-label" htmlFor="input-country">Image Profile</label>
                                <input type="file" ref={imgRef} className="form-control" name="yourImage" defaultValue={user.yourImage}/>
                              </div>
                            </div> */}
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