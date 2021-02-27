import React from "react";
import { connect } from "react-redux";

// import FormInput from "../form-input/form-input.component";
// import CustomButton from "../custom-button/custom-button.component";

import {
  facebookSignInStart,
  googleSignInStart,
  emailSignInStart,
  gitSignInStart,
  signUpStart,
} from "../../redux/user/user.actions";

import "./sign-up.styles.scss";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
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
    };
  }

  handleClick = () => {
    console.log("====================================");
    console.log("click");
    console.log("====================================");
  };

  handleSignIn = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.error(error);
    //   this.setState({ invalidUser: true });
    // }
  };

  //   this.setState((prevState) => ({
  //     info: [...prevState.info, [this.state.email, this.state.password]],
  //   }));
  //   this.setState({ email: "", password: "" });
  // };

  handleSignup = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  patterns = {
    displayName: /(^[a-z ,.'-]{2,})+$/i,
    email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    password: /^[0-9a-zA-Z]{6,}$/,
    // confirmPassword: /(password)/,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("value :", value);
    // console.log("name :", name);

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
      newUser,
      password,
      confirmPassword,
      validName,
      validEmail,
      validPassword,
    } = this.state;
    const {
      googleSignInStart,
      facebookSignInStart,
      gitSignInStart,
    } = this.props;

    return (
      <div className="sign-in-page-form">
        <body>
          <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
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
                        onClick={googleSignInStart}
                        className="btn btn-lg btn-google btn-block text-uppercase"
                        type="button"
                      >
                        <i className="fab fa-google mr-2" /> Sign in with Google
                      </button>
                      <button
                        onClick={facebookSignInStart}
                        className="btn btn-lg btn-facebook btn-block text-uppercase"
                        type="button"
                      >
                        <i className="fab fa-facebook-f mr-2" /> Sign in with
                        Facebook
                      </button>
                      <button
                        onClick={gitSignInStart}
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

    // return (
    //   <div className="sign-up">
    //     <h2 className="title">I do not have a account</h2>
    //     <span>Sign up with your email and password</span>
    //     <form
    //       className="sign-up-form"
    //       onClick={this.handleClick}
    //       onSubmit={this.handleSubmit}
    //     >
    //       <FormInput
    //         type="text"
    //         name="displayName"
    //         value={displayName}
    //         handleChange={this.handleChange}
    //         label="Display Name"
    //         required
    //       />
    //       {/* ///// start validation/////// */}
    //       <p
    //         style={{ display: validName ? "none" : "block" }}
    //         className="invalid"
    //       >
    //         invalid
    //       </p>
    //       <p
    //         style={{ display: validName ? "block" : "none" }}
    //         className="valid"
    //       >
    //         valid
    //       </p>
    //       {/* ///// end validation/////// */}
    //       <FormInput
    //         type="email"
    //         name="email"
    //         value={email}
    //         handleChange={this.handleChange}
    //         label="Email"
    //         required
    //       />
    //       {/* ///// start validation/////// */}
    //       <p
    //         style={{ display: validEmail ? "none" : "block" }}
    //         className="invalid"
    //       >
    //         invalid
    //       </p>
    //       <p
    //         style={{ display: validEmail ? "block" : "none" }}
    //         className="valid"
    //       >
    //         valid
    //       </p>
    //       {/* ///// end validation/////// */}
    //       <FormInput
    //         type="password"
    //         name="password"
    //         value={password}
    //         handleChange={this.handleChange}
    //         label="Password"
    //         required
    //       />
    //       {/* ///// start validation/////// */}
    //       <p
    //         style={{ display: validPassword ? "none" : "block" }}
    //         className="invalid"
    //       >
    //         invalid
    //       </p>
    //       <p
    //         style={{ display: validPassword ? "block" : "none" }}
    //         className="valid"
    //       >
    //         valid
    //       </p>
    //       {/* ///// end validation/////// */}
    //       <FormInput
    //         type="password"
    //         name="confirmPassword"
    //         value={confirmPassword}
    //         handleChange={this.handleChange}
    //         label="Confirm Password"
    //         required
    //       />
    //       {/* ///// start validation/////// */}
    //       <p
    //         style={{
    //           display:
    //             confirmPassword !== password || !validPassword
    //               ? "block"
    //               : "none",
    //         }}
    //         className="invalid"
    //       >
    //         invalid
    //       </p>
    //       <p
    //         style={{
    //           display:
    //             confirmPassword === password && validPassword
    //               ? "block"
    //               : "none",
    //         }}
    //         className="valid"
    //       >
    //         valid
    //       </p>
    //       {/* ///// end validation/////// */}
    //       <CustomButton type="submit">SIGN UP</CustomButton>
    //     </form>
    //   </div>
    // );
  }
}

const mapDispatchToProps = (dispatch) => ({
  facebookSignInStart: () => dispatch(facebookSignInStart()),

  googleSignInStart: () => dispatch(googleSignInStart()),

  gitSignInStart: () => dispatch(gitSignInStart()),

  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
