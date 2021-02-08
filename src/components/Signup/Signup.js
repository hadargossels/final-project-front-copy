import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Signup.css'


export default class Signup extends Component {
  render() {
    return (
      <div className="signUp">
        <form id="formSignUp">
            <h1>Create an account</h1>
        <div class="mb-3 firstLast">
            <div><label htmlfor="exampleInputEmail1" class="form-label">
             First name
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
            /></div>
            
            <div className="divLast"><label htmlfor="exampleInputEmail1" class="form-label">
             Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
            /></div>
            
            
          </div>
          <div class="mb-3">
            <label htmlfor="exampleInputEmail1" class="form-label">
             What's your email?
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
         
          <div class="mb-3">
            <label htmlfor="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label htmlfor="exampleInputPassword1" class="form-label">
            Confirm password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
      
          <div>
          By creating a Reach account you agree to our <a className="linkSign" href="#">Terms and Conditions</a> and <a className="linkSign" href="#">Privacy Notice</a> , which contains information about how we use your data and your data protection rights. We may send you emails about new features. You can unsubscribe at any time.
          </div>
          <div id="btnSignIn"><button type="submit" class="btn btn-success btnSignUp">
            SIGN UP
          </button>
          <p>Have an account? <Link className="linkSign" to="/login">Log in</Link>.</p></div>
          
        </form>
      </div>
    );
  }
}
