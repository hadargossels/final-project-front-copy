import Tab from "react-bootstrap/Tab";
import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import Total from "../Cart/Total";
import { Col, FormLabel, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isElementOfType } from "react-dom/test-utils";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export default class Cartpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cart: JSON.parse(localStorage.getItem("counters") || []),
      cart: JSON.parse(localStorage.getItem("counters") || "[]"),
      couponPrice: 0,
      delivery: 0,
      info: "",
    };
    this.callRefBtn = React.createRef();
  }
  componentDidMount() {
    this.setState({ couponPrice: 0 });
    localStorage.setItem("coupon", 0);
    localStorage.setItem("delivery", 0);
  }
  applayCoupon() {
    let couponText = document.querySelector("#couponText").value;
    if (couponText) {
      console.log("couponText", couponText);

      let itemCoupon = this.props.data.filter(
        (item) => item.numberCoupon === couponText
      );
      let myCart = this.state.cart;
      let found = myCart.filter((item) => item.id === itemCoupon[0].id);

      if (found.length > 0) {
        let coupon = itemCoupon[0].coupon;
        let priceOfCoupon = +found[0].price * +coupon;
        let price = this.state.couponPrice;

        price += +priceOfCoupon;

        this.setState({ couponPrice: price });
        let downFromCoupon = document.querySelector("#downFromCoupon");
        localStorage.setItem("coupon", price);
        let coupontIstCorrect = document.querySelector("#iscorrect");
        coupontIstCorrect.style.display = "";
        setTimeout(() => {
          coupontIstCorrect.style.display = "none";
        }, 10000);
      } else {
        let coupontNotCorrect = document.querySelector("#noTcorrect");
        console.log(coupontNotCorrect.style.display);
        coupontNotCorrect.style.display = "";
        setTimeout(() => {
          coupontNotCorrect.style.display = "none";
        }, 10000);
      }
    } else {
      let couponTextempty = document.querySelectorAll(".couponTextcopon")[0];
      couponTextempty.setAttribute("class", "form-control is-invalid");
    }
  }
  deliveryCost = (e) => {
    let deliveryCost = e.value;
    this.setState({ delivery: deliveryCost });
    localStorage.setItem("delivery", deliveryCost);
    console.log(e.value);
  };
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
  isEmpty() {
    let classInput = document.querySelectorAll(".isEmpty");
    let estimate = document.getElementsByClassName("estimate")[0];
    console.log(estimate);
    for (let i = 0; i < classInput.length; i++) {
      if (classInput[i].value == "") {
        classInput[i].setAttribute("class", "form-control is-invalid");
        estimate.style.color = "red";
        estimate.style.display = "";
        setTimeout(() => {
          estimate.style.display = "none";
        }, 3000);
      }
    }
  }
  allCorrectFun(e) {
    this.setState({ info: e });
    setTimeout(() => {
      this.callRefBtn.current.click();
    }, 0);
  }
  render() {
    return (
      <div>
        <Cart data={this.props.data} />
        <div className="tabs">
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Use Coupon Code">
              <Form>
                <Form.Group
                  // controlId="formGroupText"
                  style={{ marginTop: "2rem" }}
                >
                  <Form.Label
                    style={{ fontWeight: "bolder", marginBottom: "2rem" }}
                  >
                    Enter your coupon here
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your coupon here"
                    id="couponText"
                    className="couponTextcopon"
                  />
                  <div
                    id="noTcorrect"
                    style={{ color: "red", fontSize: "12px", display: "none" }}
                  >
                    your coupon number is`not correct
                  </div>
                  <div
                    id="iscorrect"
                    style={{
                      color: "green",
                      fontSize: "12px",
                      display: "none",
                    }}
                  >
                    your coupon number is correct
                  </div>

                  <Button
                    style={{ marginTop: "2rem" }}
                    variant="danger"
                    type="button"
                    onClick={(e) => this.applayCoupon()}
                  >
                    Apply Coupon
                  </Button>
                </Form.Group>
              </Form>
            </Tab>
            <Tab eventKey={2} title="Estimate Shipping & Taxes">
              <Form
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.allCorrectFun(e.target);
                }}
              >
                <FormLabel style={{ fontWeight: "bolder", margin: "2rem 0" }}>
                  Enter your destination to get a shipping estimate.
                </FormLabel>
                <Form.Row>
                  <Col>
                    <Form.Control
                      className="isEmpty"
                      placeholder="Country*"
                      type="text"
                      onChange={(e) => this.isInvalid(e.target)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your Country
                      <br />* Just letters
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={7}>
                    <Form.Control
                      placeholder="City*"
                      className="isEmpty"
                      type="text"
                      onChange={(e) => this.isInvalid(e.target)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your City
                      <br />* Just letters
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Zip*"
                      className="isEmpty"
                      type="number"
                      onChange={(e) => this.isInvalid(e.target)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter Zip number
                      <br />* Enter just numbers (0-9)
                    </Form.Control.Feedback>
                  </Col>
                </Form.Row>
                <Form.Row>
                  {/* <Form.Group as={Col} controlId="formGriddelivery"> */}
                  <Form.Group as={Col}>
                    <Form.Label>Delivery</Form.Label>
                    <Form.Control
                      onClick={(e) => this.deliveryCost(e.target)}
                      onChange={(e) => this.isInvalid(e.target)}
                      className="isEmpty"
                      as="select"
                      defaultValue=""
                      required
                    >
                      <option value="0">Select Delivery</option>
                      <option value="0">Self-collection - 0 NIS</option>
                      <option value="10">Regular mail - 10 NIS</option>
                      <option value="30">Registered mail - 30 NIS</option>
                      <option value="50">
                        Courier - 50-100 NIS according to the size of the order.
                      </option>
                      <option value="0">
                        Free delivery on purchases over NIS 200 to the
                        customer's home for up to 5 business days.
                      </option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      *Please select Delivery
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <button
                  style={{ marginTop: "2rem" }}
                  variant="danger"
                  style={{ display: "none" }}
                >
                  Get Quotes
                </button>
                {firebase.auth().currentUser ? (
                  <button
                    onClick={() => this.isEmpty()}
                    className="btn btn-success"
                    style={{ marginTop: "2rem", marginBottom: "1rem" }}
                  >
                    Continue to checkout
                  </button>
                ) : (
                  <div>
                    <span style={{ color: "red", fontSize: "25px" }}>
                      You have to login to continue pay, Please log into your
                      account
                    </span>
                    <br />
                    <Link to="/login" className="btn btn-danger">
                      Login
                    </Link>
                  </div>
                )}
                <Link to="/payment">
                  <button
                    className="btn btn-success"
                    ref={this.callRefBtn}
                    style={{
                      marginLeft: "5rem",
                      marginTop: "2rem",
                      display: "none",
                    }}
                  >
                    Continue to checkout
                  </button>
                </Link>
              </Form>
            </Tab>
          </Tabs>
          <Total delivery={this.state.delivery} />
          <div className="estimate" style={{ display: "none" }}>
            please enter your Estimate Shipping & Taxes
          </div>
        </div>
      </div>
    );
  }
}
