import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { FormLabel } from "react-bootstrap";

export default class Newaddress extends Component {
  render() {
    return (
      <div>
        <div>My delivery address is *</div>

        <Form.Row>
          <Col>
            <FormLabel style={{ fontWeight: "bolder", marginTop: "1rem" }}>
              First Name*
            </FormLabel>
            <Form.Control
              // onChange={(e) => this.isInvalid(e.target)}
              type="text"
              placeholder="First name"
              style={{ width: "20rem", margin: "1rem 0" }}
              required
              // isInvalid
            />
            <Form.Control.Feedback type="invalid">
              Please Enter your First Name
            </Form.Control.Feedback>
            <FormLabel style={{ fontWeight: "bolder" }}>Last Name*</FormLabel>
            <Form.Control
              // onChange={(e) => this.isInvalid(e.target)}
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
                // onChange={(e) => this.isInvalid(e.target)}
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
                // onChange={(e) => this.isInvalid(e.target)}
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
                // onChange={(e) => this.isInvalid(e.target)}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                //   isInvalid
              />
              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridEntrance">
              <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                Entrance*
              </Form.Label>
              <Form.Control
                // onChange={(e) => this.isInvalid(e.target)}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                //   isInvalid
              />
              <Form.Control.Feedback type="invalid">
                This is a required field
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
                // onChange={(e) => this.isInvalid(e.target)}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                //   isInvalid
              />
              <Form.Text id="textareaHelpBlock" muted>
                *If there are no floor details, enter 0
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGridEntrance">
              <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                Apartment number *
              </Form.Label>
              <Form.Control
                // onChange={(e) => this.isInvalid(e.target)}
                style={{ width: "20rem", margin: "1rem 0" }}
                required
                //   isInvalid
              />
              <Form.Text id="textareaHelpBlock" muted>
                *If there is no apartment number, register 0
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Label htmlFor="inputTextarea">Courier message</Form.Label>
            <Form.Control
              type="textarea"
              id="inputTextarea5"
              aria-describedby="textareaHelpBlock"
            />
            <Form.Text id="textareaHelpBlock" muted>
              *Special instructions for Nespresso courier(36 characters max)
            </Form.Text>
            <Form.Text id="textareaHelpBlock" muted>
              * Deliveries from 08:00 to 21:00 | You can choose an agreed place
              to place the package to save waiting / dependency on the courier
            </Form.Text>
            <hr />

            <Form.Group controlId="formGridPhoneNumber">
              <Form.Label style={{ fontWeight: "bolder", marginTop: "1rem" }}>
                Phone number *
              </Form.Label>
              <Form.Control
                // onChange={(e) => this.isInvalid(e.target)}
                type="number"
                style={{ width: "20rem", margin: "1rem 0" }}
                title="only numbers 0-9"
                pattern="[0-9]{1,}"
                required
              />
              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Form.Row>
      </div>
    );
  }
}
