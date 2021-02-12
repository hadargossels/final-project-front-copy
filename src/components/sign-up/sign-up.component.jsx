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
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword,
      validName,
    } = this.state;

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
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  patterns = {
    displayName: /(^[a-z ,.'-]{1,})+$/i,
    email: /^\d{10,11}$/gim,
    password: /(^[a-z ,.'-]{1,})+$/i,
  };

  handleKeyUp = (typeOfInput, cValue) => {
    console.log("typeOfInput :", typeOfInput);
    console.log("value :", cValue);
    this.validate(cValue, this.patterns[typeOfInput], typeOfInput);
  };

  validate = (cValue, regex, typeOfInput) => {
    let validationState = regex.test(cValue);

    console.log(validationState);

    switch (typeOfInput) {
      case "displayName":
        validationState
          ? this.setState({ validName: true })
          : this.setState({ validName: false });
        break;

      // case "email":
      //   validationState ? setValidEmail(true) : setValidEmail(false);
      //   break;

      // case "password":
      //   validationState ? setValidPassword(true) : setValidPassword(false);
      //   break;

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
            handleKeyUp={this.handleKeyUp}
            label="Display Name"
            required
          />
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
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
