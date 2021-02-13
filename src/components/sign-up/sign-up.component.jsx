import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      validName: false,
      validEmail: false,
      validPassword: false,
      validConfirmPassword: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");

      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        validName: false,
        validEmail: false,
        validPassword: false,
        validConfirmPassword: false,
      });
    } catch (error) {
      console.error(error);
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

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      validName,
      validEmail,
      validPassword,
      validConfirmPassword,
    } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
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
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
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
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
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
          {/* ///// end validation/////// */}
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
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
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
