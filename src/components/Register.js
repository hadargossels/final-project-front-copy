import Title from './Title'
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  let filldsArray =  [{filld:"email",isFilled:false},
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
      && filldsArray[5].isFilled){
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }

      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to create an account")
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
        filldsArray[0].isFilled = true;
        event.target.setAttribute("class","form-control is-valid")
    }
    else{
      filldsArray[0].isFilled = false;
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
        filldsArray[1].isFilled = true;
          event.target.setAttribute("class", "form-control is-valid");
          
      }
      else if(event.target.id==="password-confirm"){
          filldsArray[2].isFilled = true;
          event.target.setAttribute("class", "form-control is-valid")
      }
      
  }
  else{
      if(event.target.id==="password"){
          filldsArray[1].isFilled = false;
          event.target.setAttribute("class", "form-control is-invalid")
      }
      else if(event.target.id==="password-confirm"){
          filldsArray[2].isFilled = false;
          event.target.setAttribute("class", "form-control is-invalid")
      }
  }
}
function addressValidation(event){
  let regex=/^[a-zA-Z]+\s[a-zA-Z0-9]+/;                
  if(regex.test(event.target.value))
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[3].isFilled = true;
  }
  else{
      event.target.setAttribute("class", "form-control is-invalid")
      filldsArray[3].isFilled = false;
  }

}
function cityValidation(event){
  let regex=/^[a-zA-Z]*$/;
  if(regex.test(event.target.value) && event.target.value.length>2)
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[4].isFilled = true;
      
  }
  else{
      filldsArray[4].isFilled = false;
      event.target.setAttribute("class", "form-control is-invalid")
  }
  
}
function zipValidation (event){
  let regex=/^[0-9]{6}(?:-[0-9]{4})?$/; 
  if(regex.test(event.target.value))
  {
      event.target.setAttribute("class", "form-control is-valid")
      filldsArray[5].isFilled = true;
  }
  else{
      event.target.setAttribute("class", "form-control is-invalid")
      filldsArray[5].isFilled = false;
     
  }
}
  return (
    <>
      <div className="container">
                 <Title name="regi" title="ster"/>
                 {error && <Alert variant="danger">{error}</Alert>}
                     <form onSubmit={(e)=>{handleSubmit(e)}} >
                         <div className="row">
                             <div className="form-group col-md-6 p-0">
                            <label htmlFor="inputEmail4" required>Email</label>
                             <input ref={emailRef} type="email" className="form-control" id="inputEmail4" placeholder="Email" required
                            onChange={(e)=> {
                                emailValidation(e);
                                }}/>
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control" required>
                                <option selected>USA</option>
                                <option>Israel</option>
                                <option>French</option>
                                <option>England</option>
                            </select>
                            </div>
                        </div>    
                        <div className="row">
                            <div className="form-group col-md-6 p-0">
                            <label htmlFor="inputPassword4" required>Password</label>
                            <input  ref={passwordRef} type="password" className="form-control" id="password" placeholder="Password" required
                            onChange={(e)=> {
                                passwordValidation(e);
                                }}/>
                            </div>
                            
                            <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="City" required
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
                            <input type="text" className="form-control" id="inputZip" placeholder="Zip" required
                            onChange={(e)=> {
                                zipValidation(e);
                                }}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required
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

