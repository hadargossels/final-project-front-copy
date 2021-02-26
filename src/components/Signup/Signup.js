import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: "",
    };
    this.callRefBtn1 = React.createRef();
  }
  allCorrectFun(e) {
    let input = document.querySelectorAll("input");
    let newUser = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    for (let i = 0; i < input.length; i++) {
      switch (input[i].name) {
        case "fname":
          newUser.fname = input[i].value;
          input[i].value = "";
          break;
        case "lname":
          newUser.lname = input[i].value;
          input[i].value = "";
          break;
        case "email":
          newUser.email = input[i].value;
          input[i].value = "";
          break;
        case "password":
          newUser.password = input[i].value;
          input[i].value = "";
          break;
        case "confirmPassword":
          input[i].value = "";
          break;
        default:
          break;
      }
    }

    this.newUser(newUser.email, newUser.password, newUser.fname);
    // this.setState({ myData: newUser });
    localStorage.setItem("newUser", JSON.stringify(newUser));
    console.log(newUser);

    setTimeout(() => {
      this.callRefBtn1.current.click();
    }, 0);
  }
  checkedPassword(e) {
    console.log("e", e);
    // if (e.value.length < 8)
    //   e.setAttribute("class", "form-control password is-invalid");
    // else {
    //   e.setAttribute("class", "form-control password ");
    // }
    let input = document.querySelectorAll(".password");
    let confirm = document.querySelector("#msgconfirm");

    if (input[0].value.length > 0 && input[1].value.length > 0) {
      if (input[0].value !== input[1].value) {
        confirm.style.display = "";
        input[1].setAttribute("class", "form-control password is-invalid");
      } else {
        // input[0].setAttribute("class", "form-control password ")
        input[1].setAttribute("class", "form-control password ");
        confirm.style.display = "none";
      }
    }
  }

  newUser(email, password, fname) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert(
          "Hi " + fname + " ,you have successfully created a New account. "
        );
        alert("you can now login to your acount");
        let user = userCredential.user;
        console.log("user", user);
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // ..
      });
  }
  render() {
    return (
      <div className="signUp">
        <form
          id="formSignUp"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            this.allCorrectFun(e.target);
          }}
        >
          <h1>Create an account</h1>
          <div className="mb-3 firstLast">
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                First name
              </label>
              <input
                type="text"
                name="fname"
                className="form-control"
                id="firstName"
                title="Please enter your First Name"
                required
              />
            </div>

            <div className="divLast">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Last name
              </label>
              <input
                type="text"
                name="lname"
                className="form-control"
                id="lastName"
                title="Please enter your Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              What's your email?
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              title="Please enter your Email"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              //   onChange={(e) => this.checkedPassword(e.target)}
              name="password"
              type="password"
              className="form-control password"
              id="InputPassword1"
              title="Please enter a Password"
              required
            />
            <div
              id="passwordHelp"
              className="form-text"
              style={{ marginBottom: "1rem", color: "tomato" }}
            >
              *your password should be at least 8 characters
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm password
            </label>
            <input
              onChange={(e) => this.checkedPassword(e.target)}
              name="confirmPassword"
              type="password"
              className="form-control password"
              id="InputPassword2"
              title="Please confirm your password"
              required
            />
            <div
              id="msgconfirm"
              className="form-text"
              style={{ marginBottom: "1rem", color: "tomato", display: "none" }}
            >
              *your password dosn`t match
            </div>
            <div
              id="passwordconfirmHelp"
              className="form-text"
              style={{ marginBottom: "1rem", color: "tomato" }}
            >
              *your password should be at least 8 characters
            </div>
          </div>

          <div>
            By creating a Reach account you agree to our{" "}
            <a className="linkSign" href="#">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a className="linkSign" href="#">
              Privacy Notice
            </a>{" "}
            , which contains information about how we use your data and your
            data protection rights. We may send you emails about new features.
            You can unsubscribe at any time.
          </div>
          <div id="btnSignIn">
            <button className="btn btn-success btnSignUp">SIGN UP</button>
            <Link to="/login">
              <button
                type="submit"
                className="btn btn-success btnSignUp"
                ref={this.callRefBtn1}
                style={{ display: "none" }}
              >
                SIGN UP
              </button>
            </Link>
            <p>
              Have an account?
              <Link className="linkSign" to="/login">
                Log in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    );
  }
}
