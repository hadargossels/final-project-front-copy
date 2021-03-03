import React from "react";
import { Alert } from "react-bootstrap";

// import FormInput from "../form-input/form-input.component";
// import CustomButton from "../custom-button/custom-button.component";
import {
  fireInfo,
  auth,
  createUserProfileDocument,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
} from "../../firebase/firebase.utils";

import "./sign.styles.scss";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  // const [userData, setUserData] = useState({
  //   class: "",
  //   fullName: "",
  //   rollNo: "",
  //   subject: "",
  // });

  // function handleOnChange(event) {
  //   const { name, value } = event.target;

  //   setUserData((prevNote) => {
  //     return {
  //       ...prevNote,
  //       [name]: value,
  //     };
  //   });
  // }

  // const createUser = () => {
  //   const userRef = firebase.database().ref("users");
  //   const user = userData;

  //   userRef.push(user);

  //   setUserData({ class: "", fullName: "", rollNo: "", subject: "" });
  // };

  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      newUser: false,
      validName: false,
      validEmail: false,
      validPassword: false,
      validConfirmPassword: false,
      error: false,
      userDate: {},
    };
  }

  handleClick = () => {
    const { displayName, email } = this.state;

    this.setState({ userData: { displayName, email } });

    console.log("====================================");
    console.log("click");
    console.log("====================================");
  };

  handleSignIn = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);

      this.setState({ error: "invalid details" });
      setTimeout(() => {
        this.setState({ error: false });
      }, 1000);
    }
  };

  handleSignup = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      // alert("passwords don't match");
      this.setState({ error: "passwords don't match" });

      setTimeout(() => {
        this.setState({ error: false });
      }, 3000);

      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      const userRef = fireInfo.database().ref("users");
      const userInfo = this.state.userData;
      console.log("userInfo :", userInfo);
      userRef.push(userInfo);

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: "invalid details" });
      setTimeout(() => {
        this.setState({ error: false });
      }, 3000);
    }
  };

  patterns = {
    displayName: /(^[a-z ,.'-]{2,})+$/i,
    email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    password: /^[0-9a-zA-Z]{6,}$/,
    // confirmPassword: /(password)/,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    if (name !== "confirmPassword") {
      this.validate(value, this.patterns[name], name);
    }
  };

  validate = (cValue, regex, typeOfInput) => {
    let validationState = regex.test(cValue);

    // console.log(validationState);

    switch (typeOfInput) {
      case "displayName":
        validationState
          ? this.setState({ validName: true })
          : this.setState({ validName: false });
        break;

      case "email":
        validationState
          ? this.setState({ validEmail: true })
          : this.setState({ validEmail: false });
        break;

      case "password":
        validationState
          ? this.setState({ validPassword: true })
          : this.setState({ validPassword: false });
        break;

      default:
        break;
    }
  };

  enterToSignInMode = () => {
    this.setState({ newUser: false });
  };
  enterToSignUpMode = () => {
    this.setState({ newUser: true });
  };
  render() {
    const {
      displayName,
      email,
      newUser,
      password,
      confirmPassword,
      validName,
      validEmail,
      validPassword,
      error,
    } = this.state;

    return (
      <div className="sign-in-page-form">
        <body>
          <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  {error && <Alert variant="danger">{error}</Alert>}

                  <div className="card-body">
                    {newUser ? (
                      <h5 className="card-title text-center">Sign up</h5>
                    ) : (
                      <h5 className="card-title text-center">Sign In</h5>
                    )}
                    <form className="form-signin">
                      {newUser && (
                        <div className="form-label-group">
                          <input
                            name="displayName"
                            type="name"
                            value={displayName}
                            id="inputName"
                            className="form-control"
                            placeholder="name"
                            onChange={this.handleChange}
                            required
                          />

                          <label className="name-label" htmlFor="inputName">
                            Name
                          </label>

                          {/* ///// start validation/////// */}
                          <p
                            style={{ display: validName ? "none" : "block" }}
                            className="invalid"
                          >
                            invalid
                          </p>
                          <p
                            style={{ display: validName ? "block" : "none" }}
                            className="valid"
                          >
                            valid
                          </p>
                          {/* ///// end validation/////// */}
                        </div>
                      )}
                      <div className="form-label-group">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                          onChange={this.handleChange}
                          required
                          autofocus
                        />
                        <label className="email-label" htmlFor="inputEmail">
                          Email address
                        </label>
                        {/* ///// start validation/////// */}
                        <p
                          style={{ display: validEmail ? "none" : "block" }}
                          className="invalid"
                        >
                          invalid
                        </p>
                        <p
                          style={{ display: validEmail ? "block" : "none" }}
                          className="valid"
                        >
                          valid
                        </p>
                        {/* ///// end validation/////// */}
                      </div>
                      <div className="form-label-group">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                          onChange={this.handleChange}
                          required
                        />
                        <label
                          className="password-label"
                          htmlFor="inputPassword"
                        >
                          Password
                        </label>
                        {/* ///// start validation/////// */}
                        <p
                          style={{ display: validPassword ? "none" : "block" }}
                          className="invalid"
                        >
                          invalid
                        </p>
                        <p
                          style={{ display: validPassword ? "block" : "none" }}
                          className="valid"
                        >
                          valid
                        </p>
                        {/* ///// end validation/////// */}{" "}
                      </div>
                      {newUser && (
                        <div className="form-label-group">
                          <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            id="inputConfirmPassword"
                            className="form-control"
                            placeholder=" ConfirmPassword"
                            onChange={this.handleChange}
                            required
                          />
                          <label
                            className="confirm-password-label"
                            htmlFor="inputConfirmPassword"
                          >
                            Confirm password
                          </label>
                          {/* ///// start validation/////// */}
                          <p
                            style={{
                              display:
                                confirmPassword !== password || !validPassword
                                  ? "block"
                                  : "none",
                            }}
                            className="invalid"
                          >
                            invalid
                          </p>
                          <p
                            style={{
                              display:
                                confirmPassword === password && validPassword
                                  ? "block"
                                  : "none",
                            }}
                            className="valid"
                          >
                            valid
                          </p>
                          {/* ///// end validation/////// */}
                        </div>
                      )}
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Remember password
                        </label>
                      </div>
                      {newUser ? (
                        <button
                          className="btn btn-lg btn-primary btn-block text-uppercase"
                          type="submit"
                          onClick={this.handleSignup}
                        >
                          Sign up
                        </button>
                      ) : (
                        <button
                          className="btn btn-lg btn-primary btn-block text-uppercase"
                          type="submit"
                          onClick={this.handleSignIn}
                        >
                          Sign in
                        </button>
                      )}

                      {!newUser && (
                        <div className="w-100 text-center mt-1 mb-3">
                          <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                      )}

                      {newUser ? (
                        <button
                          class="btn btn-success btn-block"
                          type="button"
                          id="btn-signup"
                          onClick={this.enterToSignInMode}
                        >
                          <i class="fas fa-user"></i> I already have Account
                        </button>
                      ) : (
                        <button
                          class="btn btn-success btn-block"
                          type="button"
                          id="btn-signup"
                          onClick={this.enterToSignUpMode}
                        >
                          <i class="fas fa-user-plus"></i> Sign up New Account
                        </button>
                      )}
                      <hr className="my-4" />
                      <button
                        onClick={signInWithGoogle}
                        className="btn btn-lg btn-google btn-block text-uppercase"
                        type="button"
                      >
                        <i className="fab fa-google mr-2" /> Sign in with Google
                      </button>
                      <button
                        onClick={signInWithFacebook}
                        className="btn btn-lg btn-facebook btn-block text-uppercase"
                        type="button"
                      >
                        <i className="fab fa-facebook-f mr-2" /> Sign in with
                        Facebook
                      </button>
                      <button
                        onClick={signInWithGithub}
                        className="btn btn-lg btn-github btn-block text-uppercase"
                        type="button"
                      >
                        <i className="fab fa-github mr-2" /> Sign in with GitHub
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default SignUp;
