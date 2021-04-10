import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Total from "../Cart/Total";
import ListOfItems from "../Cart/ListOfItems";
import axios from "axios";
import firebase from "firebase";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCorrect: false,
      isSameAddress: false,
      myData: "",
      dataForm: {
        userId: firebase.auth().currentUser.uid,
        fname: "",
        lname: "",
        city: "",
        street: "",
        houseNumber: "",
        entrance: "",
        floorNumber: "",
        apartmentNumber: "",
        message: "",
        phoneNumber: "",
      },
    };
    this.callRef = React.createRef();
  }

  isInvalid(e) {
    if (!e.value) {
      e.setAttribute("class", "form-control is-invalid");
    } else {
      e.setAttribute("class", "form-control");
    }
    let type = e.type;
    let myStr = e.value;
    let result = true;
    let patt;
    switch (type) {
      case "text":
        patt = /^[a-zA-Z-' ]+$/;
        result = patt.test(myStr);

        break;
      case "tel":
        patt = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;
        result = patt.test(myStr);

        break;
      case "number":
        patt = /^[0-9' ]+$/;
        result = patt.test(myStr);
        break;
      case "textarea":
        if (myStr.length > 36) result = false;
        else result = true;

        break;

      default:
        break;
    }
    if (!result) {
      e.setAttribute("class", "form-control is-invalid");
    } else {
      e.setAttribute("class", "form-control");
    }
  }

  async allCorrectFun(e) {
    localStorage.setItem("orderDetails", JSON.stringify(this.state.dataForm));

    setTimeout(() => {
      this.callRef.current.click();
    }, 0);
  }
  selectDelivery(e) {
    if (e.id === "different") {
      this.setState({ isSameAddress: true });
    } else if (e.id === "same") {
      this.setState({ isSameAddress: false });
    }
  }
  render() {
    // console.log("firebase", firebase.auth().currentUser.getIdToken());

    let counters = [];
    return (
      <div style={{ margin: "0 auto", width: "800px" }}>
        <h2 style={{ marginTop: "2rem", color: "orange" }}>My Cart:</h2>
        {counters.map((counter) => (
          <ListOfItems key={counter.id} counter={counter} />
        ))}
        <Total products={this.props.products} total={this.props.total} />

        <Link to="/store">
          <button
            className="btn btn-success"
            style={{ fontWeight: "bolder", margin: "1rem 0 " }}
          >
            Go to Store
          </button>
        </Link>
        <h1>My billing address</h1>
        <h6>
          Please complete the form below. Fields marked with * are required.
        </h6>
        <form
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            this.allCorrectFun(e.target);
          }}
        >
          <label
            style={{ fontWeight: "bolder", marginTop: "1rem" }}
            className="form-label"
          >
            First Name*
          </label>
          <input
            className="inputOrder form-control"
            name="firstName"
            onChange={(e) => {
              this.isInvalid(e.target);
              this.setState((prevState) => ({
                dataForm: {
                  ...prevState.dataForm,
                  fname: e.target.value,
                },
              }));
            }}
            type="text"
            placeholder="First name"
            style={{ width: "20rem", margin: "1rem 0" }}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Enter your First Name
            <br />* Just letters
          </Form.Control.Feedback>
          <Form.Row>
            <Col>
              <label style={{ fontWeight: "bolder" }} className="form-label">
                Last Name*
              </label>
              <input
                className="inputOrder form-control"
                name="lastName"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      lname: e.target.value,
                    },
                  }));
                }}
                type="text"
                placeholder="Last name"
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                isInvalid
              />
              <div className="invalid-feedback">
                Please Enter your Last Name
              </div>
              <hr />
              <label
                style={{ fontWeight: "bolder", marginTop: "1rem" }}
                className="form-label"
              >
                City*
              </label>
              <input
                className="inputOrder form-control"
                type="text"
                name="city"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      city: e.target.value,
                    },
                  }));
                }}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                isInvalid
              />

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>

              <label
                style={{ fontWeight: "bolder", marginTop: "1rem" }}
                className="form-label"
              >
                Street
              </label>
              <input
                className="inputOrder form-control"
                type="text"
                name="street"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      street: e.target.value,
                    },
                  }));
                }}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                isInvalid
              />
              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
              <label
                style={{ fontWeight: "bolder", marginTop: "1rem" }}
                className="form-label"
              >
                House number*
              </label>
              <input
                className="inputOrder form-control"
                type="number"
                name="houseNumber"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      houseNumber: e.target.value,
                    },
                  }));
                }}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                isInvalid
              />
              <Form.Control.Feedback type="invalid">
                This is a required field
                <br />
                *Just numbers 0-9
              </Form.Control.Feedback>

              <label
                style={{ fontWeight: "bolder", marginTop: "1rem" }}
                className="form-label"
              >
                Entrance*
              </label>
              <input
                className="inputOrder form-control"
                type="number"
                name="entrance"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      entrance: e.target.value,
                    },
                  }));
                }}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                This is a required field
                <br />
                *Just numbers 0-9
              </Form.Control.Feedback>
              <label
                style={{ fontWeight: "bolder", marginTop: "1rem" }}
                className="form-label"
              >
                Floor number*
              </label>
              <input
                className="inputOrder form-control"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      floorNumber: e.target.value,
                    },
                  }));
                }}
                name="floorNumber"
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                type="number"
              />
              <Form.Text id="textareaHelpBlock" muted>
                *If there are no floor details, enter 0
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                This is a required field *Just numbers 0-9
              </Form.Control.Feedback>

              <label
                style={{ fontWeight: "bolder", marginTop: "1rem" }}
                className="form-label"
              >
                Apartment number *
              </label>
              <input
                className="inputOrder form-control"
                type="number"
                name="apartmentNumber"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      apartmentNumber: e.target.value,
                    },
                  }));
                }}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
              />
              <Form.Text id="textareaHelpBlock" muted>
                *If there is no apartment number, register 0
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                This is a required field
                <br />
                *Just numbers 0-9
              </Form.Control.Feedback>

              <label className="form-label">Courier message</label>

              <textarea
                className="form-control inputOrder"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      message: e.target.value,
                    },
                  }));
                }}
                name="message"
                maxLength="36"
                type="textarea"
                id="inputTextarea5"
                aria-describedby="textareaHelpBlock"
                style={{ resize: "none" }}
                rows="3"
                cols="40"
              />
              <Form.Text id="textareaHelpBlock" muted>
                *Special instructions for Nespresso courier(36 characters max)
              </Form.Text>
              <Form.Text id="textareaHelpBlock" muted>
                * Deliveries from 08:00 to 21:00 | You can choose an agreed
                place to place the package to save waiting / dependency on the
                courier
              </Form.Text>
              <hr />
              <label
                style={{ fontWeight: "bolder", marginTop: "1rem" }}
                className="form-label"
              >
                Phone number *
              </label>
              <input
                className="inputOrder form-control"
                onChange={(e) => {
                  this.isInvalid(e.target);
                  this.setState((prevState) => ({
                    dataForm: {
                      ...prevState.dataForm,
                      phoneNumber: e.target.value,
                    },
                  }));
                }}
                name="phoneNumber"
                type="tel"
                style={{ width: "20rem", margin: "1rem 0" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </Col>
          </Form.Row>

          <div
            style={{
              backgroundColor: "grey",
              padding: "1rem",
              fontWeight: "bolder",
            }}
          >
            Keep me informed
          </div>
          <Form.Group
            style={{ margin: "1rem 0" }}
            controlId="formHorizontalCheck1"
          >
            <Form.Check label="I would like to receive promotional & informative communication emails from Nespresso regarding their products and related information. I understand I can withdraw my consent in reference to Nespresso Privacy Notice or change my Contact preferences at any time." />
          </Form.Group>
          <button
            style={{ backgroundColor: "green", borderColor: "grey" }}
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            CONTINUE
          </button>
          <Link to="/paymentdetails">
            <button
              // type="submit"
              style={{
                backgroundColor: "green",
                borderColor: "grey",
                display: "none",
              }}
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={this.callRef}
            >
              CONTINUE
            </button>
          </Link>
        </form>
        {/* {(this.state.allCorrect)?<Paymentdetails/>:""} */}
      </div>
    );
  }
}
