import Title from '../additionsComp/Title'
import React, { useRef, useState } from "react"
import {  Alert } from "react-bootstrap"
import {  useHistory } from "react-router-dom"
import axios from 'axios';

export default function Signup() {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const phoneNumberRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const stateRef = useRef()
  const cityRef = useRef()
  const zipRef = useRef()
  const addressRef = useRef()
  const passwordConfirmRef = useRef()
  const imgRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  let filldsArray =  [{filld:"firstName",isFilled:false},
  {filld:"lastName",isFilled:false},
  {filled:"phoneNumber",isFilled:false},
  {filld:"email",isFilled:false},
  {filld:"password",isFilled:false},
  {filld:"passwordConfirmation",isFilled:false},
  {filld:"address",isFilled:false},
  {filld:"city",isFilled:false},
  {filld:"zip",isFilled:false},]
  async function handleSubmit(e) {
    e.preventDefault()
    if( filldsArray[0].isFilled
      && filldsArray[1].isFilled
      && filldsArray[2].isFilled
      && filldsArray[3].isFilled
      && filldsArray[4].isFilled
      && filldsArray[5].isFilled
      && filldsArray[6].isFilled
      && filldsArray[7].isFilled
      && filldsArray[8].isFilled){
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
      var formData = new FormData();
      var imagefile = imgRef.current.files[0]
      formData.append("yourImage", imagefile);
      formData.append("email", emailRef.current.value)
      formData.append("password", passwordRef.current.value)
      formData.append("firstName", firstNameRef.current.value)
      formData.append("lastName", lastNameRef.current.value)
      formData.append("phone", phoneNumberRef.current.value)
      formData.append("state", stateRef.current.value)
      formData.append("city", cityRef.current.value)
      formData.append("zip", zipRef.current.value)
      formData.append("address", addressRef.current.value)
      try {
        setError("")
        setLoading(true)
        await axios.post("/auth/signup",formData ,{headers:{'Content-Type': 'multipart/form-data'}})
        .then((response)=>{
            localStorage.setItem("token",response.data.token);
          }).catch((err)=>{  setError({error:err})})
        history.push("/login")
      } catch {
        setError("Failed to create an account - password or email already exist")
      }

      setLoading(false)
    }
    else{
      setError("Failed to create an account")      
    }

    


  }
  function emailValidation(event){
    
    let regex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regex.test(event.target.value))
    {
        filldsArray[3].isFilled = true;
        event.target.setAttribute("class","form-control is-valid")
    }
    else{
      filldsArray[3].isFilled = false;
        event.target.setAttribute("class", "form-control is-invalid")
    }
}
function passwordValidation(event){
  let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
  // Min 1 uppercase letter.
  // Min 1 lowercase letter.
  // Min 1 special character.
  // Min 1 number.
  // Min 8 characters.
  // Max 30 characters.
  if(regex.test(event.target.value))
  {
      if(event.target.id==="password"){
        filldsArray[4].isFilled = true;
          event.target.setAttribute("class", "form-control is-valid");
          
      }
      else if(event.target.id==="password-confirm"){
          filldsArray[5].isFilled = true;
          event.target.setAttribute("class", "form-control is-valid")
      }
      
  }
  else{
      if(event.target.id==="password"){
          filldsArray[4].isFilled = false;
          event.target.setAttribute("class", "form-control is-invalid")
      }
      else if(event.target.id==="password-confirm"){
          filldsArray[5].isFilled = false;
          event.target.setAttribute("class", "form-control is-invalid")
      }
  }
}
function firstNameValidation(event){
  let regex=/^[a-zA-Z ]{2,30}$/;          
  if(regex.test(event.target.value))
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[0].isFilled = true;
  }
  else{
      event.target.setAttribute("class", "form-control is-invalid")
      filldsArray[0].isFilled = false;
  }
}
function lastNameValidation(event){
  let regex=/^[a-zA-Z ]{2,30}$/;          
  if(regex.test(event.target.value))
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[1].isFilled = true;
  }
  else{
      event.target.setAttribute("class", "form-control is-invalid")
      filldsArray[1].isFilled = false;
  }
}
function phoneNumberValidation(event){
  let regex=/^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;          
  if(regex.test(event.target.value))
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[2].isFilled = true;
  }
  else{
      event.target.setAttribute("class", "form-control is-invalid")
      filldsArray[2].isFilled = false;
  }
}
function addressValidation(event){
  let regex=/^[a-zA-Z]+\s[a-zA-Z0-9]+/;                
  if(regex.test(event.target.value))
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[6].isFilled = true;
  }
  else{
      event.target.setAttribute("class", "form-control is-invalid")
      filldsArray[6].isFilled = false;
  }

}
function cityValidation(event){
  let regex=/^[a-zA-Z]*$/;
  if(regex.test(event.target.value) && event.target.value.length>2)
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[7].isFilled = true;
      
  }
  else{
      filldsArray[7].isFilled = false;
      event.target.setAttribute("class", "form-control is-invalid")
  }
  
}
function zipValidation (event){
  let regex=/^[0-9]{6}(?:-[0-9]{4})?$/; 
  if(regex.test(event.target.value))
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[8].isFilled = true;
  }
  else{
      event.target.setAttribute("class", "form-control is-invalid")
      filldsArray[8].isFilled = false;
     
  }
}


  return (
    <>
      <div className="container">
                 <Title name="regi" title="ster"/>
                 {error && <Alert variant="danger">{error}</Alert>}
                     <form onSubmit={(e)=>{handleSubmit(e)}} >
                        <div className="row">
                                <div className="form-group col-md-4 p-0">
                                <label htmlFor="inputFirstName4" required>First Name</label>
                                <input ref={firstNameRef} name="firstName" type="text" className="form-control" id="inputFirstName4" placeholder="First Name" required
                                onChange={(e)=> {
                                  firstNameValidation(e);
                                    }}/>
                                </div>
                                <div className="form-group col-md-4 p-0">
                                <label htmlFor="inputLastName4" required>Last Name</label>
                                <input ref={lastNameRef} name="lastName"  type="text" className="form-control" id="inputLastName4" placeholder="Last Name" required
                                onChange={(e)=> {
                                  lastNameValidation(e);
                                    }}/>
                                </div>
                                <div className="form-group col-md-4 p-0">
                                <label htmlFor="inputPhoneNumber4" required>Phone Number</label>
                                <input ref={phoneNumberRef} name='phoneNumber' type="number" className="form-control" id="inputPhoneNumber4" placeholder="Phone Number" required
                                onChange={(e)=> {
                                  phoneNumberValidation(e);
                                    }}/>
                                </div>
                            </div>  
                         <div className="row">
                             <div className="form-group col-md-6 p-0">
                            <label htmlFor="inputEmail4" required>Email</label>
                             <input ref={emailRef} name='email' type="email" className="form-control" id="inputEmail4" placeholder="Email" required
                            onChange={(e)=> {
                                emailValidation(e);
                                }}/>
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputState">State</label>
                            <select ref={stateRef} name="state" id="inputState" className="form-control" required>
                                <option >USA</option>
                                <option>Israel</option>
                                <option>French</option>
                                <option>England</option>
                            </select>
                            </div>
                        </div>    
                        <div className="row">
                            <div className="form-group col-md-6 p-0">
                            <label htmlFor="inputPassword4" required>Password</label>
                            <input  ref={passwordRef} name ="password" type="password" className="form-control" id="password" placeholder="Password" required
                            onChange={(e)=> {
                                passwordValidation(e);
                                }}/>
                            </div>
                            
                            <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input ref={cityRef} name ="city" type="text" className="form-control" id="inputCity" placeholder="City" required
                            onChange={(e)=> {
                                cityValidation(e);
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6 p-0">
                            <label htmlFor="inputPasswordCon4" required>Password Confirmation</label>
                            <input  ref={passwordConfirmRef} type="password" className="form-control" id="password-confirm" placeholder="Password Confirmation" required
                            onChange={(e)=> {
                                passwordValidation(e);
                                }}/>
                            </div>
                            <div className="form-group col-md-2">
                            <label htmlFor="inputZip" required>Zip</label>
                            <input ref={zipRef} name ="zip" type="text" className="form-control" id="inputZip" placeholder="Zip" required
                            onChange={(e)=> {
                                zipValidation(e);
                                }}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input ref={addressRef} name ="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required
                            onChange={(e)=> {
                                addressValidation(e);
                                }}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                            onChange={(e)=> {
                                addressValidation(e);
                                }}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="img">Your image</label>
                            <input  ref={imgRef} type="file" className="form-control" name="yourImage" defaultValue=""/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                send me emails about new sales and new products.
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary"
                         disabled={loading} >Sign in</button>
                    </form>
            </div>
    </>
  )
}

