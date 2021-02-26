import React, { Component } from "react";
import Map from "../Map/Map";
import "./Contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div id="contactForm" style={{ margin: "3rem auto" ,fontFamily: "cursive"}}>
        <form id="formSignUp" style={{marginBottom:"2rem"}}>
          <h1>
            CONTACT US &nbsp;<i className="fas fa-envelope"></i>
          </h1>
          <div className="mb-3 firstLast">
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                First name
              </label>
              <input type="text" className="form-control" id="firstName" />
            </div>

            <div className="divLast">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control" id="lastName" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Telephone
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputTel"
              aria-describedby="telHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Select the topic of your message
            </label>
            <select className="form-control" rows="10" cols="50"  >
              <option>Machine Support</option>
              <option>Orders & Order follow up</option>
              <option>Service</option>
              <option>Contact managers</option>
              <option>Site developers</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Message
            </label>
            <textarea className="form-control" rows="10" cols="50" id="textarea" />
          </div>

          <div>
            Offices
            <br />
            Tel Aviv Head Office – 2, Kaufmann St, Tel Aviv. *We suggest making
            an appointment before showing up, in order to make sure we have an
            available specialist
          </div>
          <div id="btnSignIn">
            <button type="submit" className="btn btn-success btnSignUp">
              Submit
            </button>
          </div>
        </form>
        <Map />
        <div style={{ margin: "3rem 0" }}>
          <h2 style={{ fontFamily: "cursive" }}>Contact Information </h2>
          <p
            style={{
              marginTop: "2rem",
              fontSize: "16px",
              fontFamily: "cursive",
            }}
          >
            Our coffee specialists are available for you 24/7
            <br />
            <hr />
            Phone
            <br />
            *2500 or 03-9241334
            <br />
            <hr />
            Fax
            <br />
            03-9240778
            <br />
            <hr />
            Mail
            <br />
            Nespresso Club Israel<br/>
            Tel Aviv Head Office – 2, Kaufmann St, Tel Aviv
            <br />
          </p>
        </div>
      </div>
    );
  }
}
