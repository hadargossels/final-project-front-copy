import React, { Component } from "react";
import auth from "../../auth";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Link } from "react-router-dom";
// import Login from "../Login/Login";

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin:
        firebase.auth().currentUser.email === "manalsirhan13@gmail.com"
          ? true
          : false,
    };
    this.callRefLogin = React.createRef();
    this.callRefBtnclose = React.createRef();
  }
  updateProfile(e) {
    e.preventDefault();
    let user = firebase.auth().currentUser;
    console.log("phonenumber", document.querySelector("#pnum").value);
    console.log("phonenumber", document.querySelector("#inputEmail").value);
    console.log("userAfterUpdate", firebase.auth().currentUser);
    user
      .updateProfile({
        displayName:
          document.querySelector("#fname").value +
          " " +
          document.querySelector("#lname").value,
        phoneNumber: document.querySelector("#pnum").value,
        // photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
      .then(function () {
        alert("Update Profile successful.");
      })
      .catch(function (error) {
        alert("An error happened on update profile.");
      });

    user
      .updateEmail(document.querySelector("#inputEmail").value)
      .then(function () {
        console.log("Update email successful.");
      })
      .catch(function (error) {
        console.log(error);
      });

    user
      .updatePhoneNumber(document.querySelector("#pnum").value)
      .then(function () {
        console.log("Update phone number successful.");
      })
      .catch(function (error) {
        console.log("An error happened.phone number ");
      });

    // setTimeout(() => {
    //   this.callRefLogin.current.click();
    // }, 0);
    // var credential;

    // Prompt the user to re-provide their sign-in credentials

    // user
    //   .reauthenticateWithCredential(credential)
    //   .then(function () {
    //     alert("User re-authenticated.");
    //   })
    //   .catch(function (error) {
    //     alert("An error happened on User re-authenticated.");
    //   });
    // user
    //   .updateEmail(document.querySelector("#inputEmail").value)
    //   .then(function () {
    //     alert("Update Email successful.");
    //   })
    //   .catch(function (error) {
    //     alert("An error happened on update Email.");
    //   });
  }
  login(email, password, newEmail) {
    console.log(email, password, newEmail);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        userCredential.user.updateEmail(newEmail);
        alert("ok");
      })
      .catch((error) => {
        alert("error: ", error);
      });
    setTimeout(() => {
      this.callRefBtnclose.current.click();
    }, 0);
    // let user;
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     user = userCredential.user;
    //     alert("Login Successful");

    //     setTimeout(() => {
    //       this.callRefBtnclose.current.click();
    //     }, 0);
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     alert(
    //       "Sorry, your password or Email was incorrect. Please double-check your password and Email."
    //     );
    //   });
  }
  render() {
    console.log("myUser", firebase.auth().currentUser);
    return (
      <div style={{ fontFamily: "serif" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 col-md-4 d-grid"
              style={{ margin: "3rem 0" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={
                    firebase.auth().currentUser.photoURL ||
                    "/images/profile-pic.jpg"
                  }
                  width="100px"
                  height="100px"
                  style={{ borderRadius: "50%" }}
                />
                <div className="nameOfUser mt-2">
                  {firebase.auth().currentUser.displayName}
                </div>
                <div className="addressOfUser mt-2">Address</div>
                <button className="btn btn-success mt-2">UPLOAD PICTURE</button>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 d-flex">
              <form style={{ margin: "3rem 0" }}>
                <h3>Profile</h3>
                <div style={{ fontSize: "14px" }}>
                  The information can be edited
                </div>
                <div className="row mt-2">
                  <div className="col-sm-12 col-md-6">
                    <label htmlFor="fname" className="form-label">
                      First Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      defaultValue={
                        firebase.auth().currentUser.displayName.split(" ")[0] ||
                        "Katarina"
                      }
                    ></input>
                    <label htmlFor="lname" className="form-label mt-2">
                      last Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      defaultValue={
                        firebase.auth().currentUser.displayName.split(" ")[1] ||
                        "Smith"
                      }
                    ></input>
                    <label htmlFor="inputEmail" className="form-label mt-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      defaultValue={firebase.auth().currentUser.email || ""}
                    ></input>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <label className="form-label" htmlFor="pnum">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="pnum"
                      className="form-control"
                      defaultValue={
                        firebase.auth().currentUser.phoneNumber ||
                        JSON.parse(localStorage.getItem("newUser")).phoneNumber
                      }
                    ></input>
                    <label className="form-label mt-2" htmlFor="country">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      className="form-control"
                    ></input>
                    <label className="form-label mt-2" htmlFor="address">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                    ></input>
                  </div>
                </div>

                <button
                  style={{ margin: "2rem 1rem" }}
                  className="btn btn-danger"
                  onClick={(e) => this.updateProfile(e)}
                >
                  SAVE DETAILS
                </button>
                {this.state.admin ? (
                  <Link to="/adminpage">List of users</Link>
                ) : (
                  ""
                )}
                {/* <button
                  ref={this.callRefLogin}
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  style={{ display: "none" }}
                ></button> */}
              </form>
              {/* <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Sign in
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
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
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        style={{ width: "auto", minWidth: "460px" }}
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
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          this.login(
                            document.querySelector("#exampleInputEmail1").value,
                            document.querySelector("#exampleInputPassword1")
                              .value,
                            document.querySelector("#inputEmail").value
                          )
                        }
                      >
                        Login
                      </button>
                    </div>
                    <div class="modal-footer">
                      <button
                        ref={this.callRefBtnclose}
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
