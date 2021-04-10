import axios from "axios";
import React, { Component } from "react";
import Map from "../Map/Map";
import "./Contact.css";
export default class Contact extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    show: false,
  };

  fname = React.createRef();
  lname = React.createRef();
  email = React.createRef();
  phone = React.createRef();
  topic = React.createRef();
  message = React.createRef();

  handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      phone: this.state.phone,
      topic: this.state.topic,
      message: this.state.message,
    };
    const { status } = await axios.post(
      "http://localhost:4000/mail/sendMailFromClient",
      body
    );
    if (status === 200) {
      this.fname.current.value = "";
      this.lname.current.value = "";
      this.email.current.value = "";
      this.topic.current.value = "";
      this.phone.current.value = "";
      this.message.current.value = "";
      this.setState({ show: true });
    }
  };
  render() {
    return (
      <div
        id="contactForm"
        style={{ margin: "3rem auto", fontFamily: "cursive" }}
      >
        <form
          id="formSignUp"
          style={{ marginBottom: "2rem" }}
          onSubmit={this.handleSubmit}
        >
          <h1>
            CONTACT US &nbsp;<i className="fas fa-envelope"></i>
          </h1>
          <div className="mb-3 firstLast">
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                ref={this.fname}
                onChange={({ target }) =>
                  this.setState({
                    fname: target.value,
                  })
                }
              />
            </div>

            <div className="divLast">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                ref={this.lname}
                onChange={({ target }) =>
                  this.setState({
                    lname: target.value,
                  })
                }
              />
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
              required
              aria-describedby="emailHelp"
              ref={this.email}
              onChange={({ target }) =>
                this.setState({
                  email: target.value,
                })
              }
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
              required
              ref={this.phone}
              onChange={({ target }) =>
                this.setState({
                  phone: target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Select the topic of your message
            </label>
            <select
              className="form-control"
              required
              rows="10"
              cols="50"
              ref={this.topic}
              onChange={({ target }) =>
                this.setState({
                  topic: target.value,
                })
              }
            >
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
            <textarea
              className="form-control"
              rows="10"
              cols="50"
              id="textarea"
              required
              ref={this.message}
              onChange={({ target }) =>
                this.setState({
                  message: target.value,
                })
              }
            />
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
          {this.state.show ? (
            <div
              style={{
                color: "green",
                fontSize: "1.2rem",
                border: "1px solid red",
                fontWeight: "2rem",
                textAlign: "center",
              }}
            >
              Your message was sent successfully
            </div>
          ) : (
            ""
          )}
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
            Nespresso Club Israel
            <br />
            Tel Aviv Head Office – 2, Kaufmann St, Tel Aviv
            <br />
          </p>
        </div>
      </div>
    );
  }
}
