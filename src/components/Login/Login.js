import React, { Component } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Link } from "react-router-dom";
import auth from "../../auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
    this.callRefBtn = React.createRef();
  }
  componentDidMount() {
    localStorage.setItem("login", false);
  }
  allCorrectFun(e) {
    console.log("in");
    let input = document.querySelectorAll(".myInputLogin");
    console.log("input", input[0].value, input[1].value);
    this.login(input[0].value, input[1].value);
    // input[0].value = "";
    // input[1].value = "";

    // localStorage.setItem("login", true);
  }
  login(email, password) {
    let user;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        user = userCredential.user;
        // console.log("userlogin", user);
        // if (user) {
        alert("Login Successful");
        this.changeBtnLogin();

        setTimeout(() => {
          this.callRefBtn.current.click();
        }, 0);
        // }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert(
          "Sorry, your password or Email was incorrect. Please double-check your password and Email."
        );
      });

    // return user;
  }
  changeBtnLogin() {
    this.setState({ login: true });
  }
  checkedPassword(e) {
    if (e.value.length < 8)
      e.setAttribute("class", "form-control myInputLogin is-invalid");
    else {
      e.setAttribute("class", "form-control myInputLogin ");
    }
  }
  loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        let credential = result.credential;
        let token = credential.accessToken;
        let user = result.user;
        console.log("googleUser", user);
        alert("Login Successful");
        this.changeBtnLogin();
        let newUser = {
          fname: user.displayName,
          email: user.email,
        };
        localStorage.setItem("newUser", JSON.stringify(newUser));
        setTimeout(() => {
          this.callRefBtn.current.click();
        }, 0);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        alert(
          "Sorry, your password or Email was incorrect. Please double-check your password and Email."
        );
        alert(errorCode, errorMessage, email, credential);
      });
  }
  loginWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        var accessToken = credential.accessToken;
        alert("Login Successful");
        this.changeBtnLogin();
        let newUser = {
          fname: user.displayName,
          email: user.email,
        };
        localStorage.setItem("newUser", JSON.stringify(newUser));
        setTimeout(() => {
          this.callRefBtn.current.click();
        }, 0);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        alert(
          "Sorry, your password or Email was incorrect. Please double-check your password and Email."
        );
        alert(errorCode, errorMessage, email, credential);
      });
  }
  render() {
    console.log("currentUser", firebase.auth().currentUser);

    return (
      <div style={{ width: "auto", margin: "0 auto" }}>
        <form
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            // console.log("e onsubmit", e.target);
            this.allCorrectFun(e.target);
          }}
          id="formLogin"
        >
          <h1 style={{ marginTop: "1rem" }}>Sign in</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              style={{ width: "auto", minWidth: "460px" }}
              name="email"
              type="email"
              className="form-control myInputLogin"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
              style={{ width: "auto", minWidth: "460px" }}
              onChange={(e) => this.checkedPassword(e.target)}
              name="password"
              type="password"
              className="form-control myInputLogin"
              id="exampleInputPassword1"
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
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              className="form-check-label"
              htmlFor="exampleCheck1"
              style={{ marginBottom: "20px" }}
            >
              Remember me
            </label>
            <br />
            {/* <button type="submit" className="btn btn-success btnLogin">
              Sign in
            </button> */}
            <button
              type="submit"
              className="btn btn-success btnLogin"
              onClick={(e) => {
                // auth.login(() => {
                //   this.props.history.push("/user");
                // });
                // this.allCorrectFun(e.target);
                this.setState({ login: true });
              }}
            >
              Login
            </button>
            <Link to="/user">
              <button
                ref={this.callRefBtn}
                onClick={(e) => {
                  auth.login(() => {
                    this.props.history.push("/user");
                  });
                }}
                style={{ display: "none" }}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </Link>
            <br />
            <button
              style={{ margin: "10px 0", color: "white" }}
              className="btn btn-danger"
              onClick={() => this.loginWithGoogle()}
            >
              <i className="fab fa-google"></i> Sign in with Google
            </button>
            <br />
            <button
              className="btn btn-primary"
              style={{ color: "white" }}
              onClick={() => this.loginWithFacebook()}
            >
              <i className="fab fa-facebook-f"></i> Login with Facebook
            </button>
          </div>
          <h6>
            Don't have an account yet?
            <Link to="/signup">Sign Up</Link>
          </h6>
        </form>
      </div>
    );
  }
}
