import React, { Component } from 'react'
import './Contact.css'
export default class Contact extends Component {
    render() {
        return (
            <div id="contactForm">
                <form id="formSignUp">
           <h1>CONTACT US &nbsp;<i class="fas fa-envelope"></i></h1>
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
             Email
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
            <label htmlfor="exampleInputEmail1" class="form-label">
            Telephone
            </label>
            <input
              type="tel"
              class="form-control"
              id="exampleInputTel"
              aria-describedby="telHelp"
            />
            
          </div>
          <div class="mb-3">
            <label htmlfor="exampleInputPassword1" class="form-label">
                Message
            </label>
            <textarea 
              class="form-control"
              rows="10" cols="50"
              id="textarea"
            />
          </div>
          
          <div>
          Offices<br/>
            Tel Aviv Head Office – 2, Kaufmann St, Tel Aviv.
            *We suggest making an appointment before showing up, in order to make sure we have an available specialist
          </div>
          <div id="btnSignIn"><button type="submit" class="btn btn-success btnSignUp">
            Submit
          </button>
          
          </div>
          
        </form>
            </div>
        )
    }
}
