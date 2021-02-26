import React, { Component } from "react";
import { FormLabel, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Total from "../Cart/Total";
import ListOfItems from "../Cart/ListOfItems";
import Newaddress from "./Newaddress";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCorrect: false,
      isSameAddress: false,
      myData: "",
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
  allCorrectFun(e) {
    this.setState({ myData: e });
    setTimeout(() => {
      this.callRef.current.click();
    }, 0);
  }
  selectDelivery(e) {
    if (e.id == "different") {
      this.setState({ isSameAddress: true });
    } else if (e.id == "same") {
      this.setState({ isSameAddress: false });
    }
  }
  render() {
    let counters = JSON.parse(localStorage.getItem("counters") || "[]");
    return (
      <div style={{ margin: "0 auto", width: "800px" }}>
        <h2 style={{ marginTop: "2rem", color: "orange" }}>My Cart:</h2>
        {counters.map((counter) => (
          <ListOfItems key={counter.id} counter={counter} />
        ))}
        <Total />

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
          <Form.Row>
            <Col>
              <FormLabel style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                First Name*
              </FormLabel>
              <Form.Control
                onChange={(e) => this.isInvalid(e.target)}
                type="text"
                placeholder="First name"
                style={{ width: "20rem", margin: "1rem 0" }}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter your First Name
                <br />* Just letters
              </Form.Control.Feedback>
              <FormLabel style={{ fontWeight: "bolder" }}>Last Name*</FormLabel>
              <Form.Control
                onChange={(e) => this.isInvalid(e.target)}
                type="text"
                placeholder="Last name"
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                // isInvalid
              />
              <Form.Control.Feedback type="invalid">
                Please Enter your Last Name
              </Form.Control.Feedback>
              <hr />
              <Form.Group controlId="formGridCity">
                <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                  City
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => this.isInvalid(e.target)}
                  style={{ width: "20rem", margin: "1rem 0" }}
                  required
                  //   isInvalid
                />
                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formGridStreet">
                <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                  Street
                </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => this.isInvalid(e.target)}
                  style={{ width: "20rem", margin: "1rem 0" }}
                  required
                  //   isInvalid
                />
                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formGridHouseNumber">
                <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                  House number*
                </Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => this.isInvalid(e.target)}
                  style={{ width: "20rem", margin: "1rem 0" }}
                  required
                  //   isInvalid
                />
                <Form.Control.Feedback type="invalid">
                  This is a required field
                  <br />
                  *Just numbers 0-9
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formGridEntrance">
                <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                  Entrance*
                </Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => this.isInvalid(e.target)}
                  style={{ width: "20rem", margin: "1rem 0" }}
                  required
                  //   isInvalid
                />
                <Form.Control.Feedback type="invalid">
                  This is a required field
                  <br />
                  *Just numbers 0-9
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formHorizontalCheck">
                <Form.Check label="Private house" />
              </Form.Group>

              <Form.Group controlId="formGridEntrance">
                <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                  Floor number*
                </Form.Label>
                <Form.Control
                  onChange={(e) => this.isInvalid(e.target)}
                  style={{ width: "20rem", margin: "1rem 0" }}
                  required
                  type="number"
                  //   isInvalid
                />
                <Form.Text id="textareaHelpBlock" muted>
                  *If there are no floor details, enter 0
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  This is a required field *Just numbers 0-9
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formGridEntrance">
                <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                  Apartment number *
                </Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => this.isInvalid(e.target)}
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
              </Form.Group>

              <Form.Label htmlFor="inputTextarea">Courier message</Form.Label>
              <br />
              <textarea
                className="form-control"
                onChange={(e) => this.isInvalid(e.target)}
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

              <Form.Group controlId="formGridNumber">
                <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                  Phone number *
                </Form.Label>
                <Form.Control
                  onChange={(e) => this.isInvalid(e.target)}
                  type="tel"
                  style={{ width: "20rem", margin: "1rem 0" }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>
          {/* <div
            style={{
              backgroundColor: "grey",
              padding: "1rem",
              fontWeight: "bolder",
            }}
          >
            My delivery Address
          </div> */}
          {/* 
        <Form> */}
          {/* {["radio"].map((type) => ( */}
          {/* <div key={`custom-${type}`} className="mb-3"> */}
          {/* <FormLabel>My delivery Address:</FormLabel>
              <Form.Check
                onClick={(e) => this.selectDelivery(e.target)}
                custom
                type={type}
                name="adress"
                id="same"
                label="is the same as my billing address"
              />
              <Form.Check
                onClick={(e) => this.selectDelivery(e.target)}
                custom
                type={type}
                name="adress"
                label="is different from my billing address"
                id="different"
              /> */}
          {/* </div> */}
          {/* ))} */}
          {/* {this.state.isSameAddress ? (
            <Newaddress isInvalid={this.isInvalid()} />
          ) : (
            ""
          )} */}
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
            controlId="formHorizontalCheck"
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
