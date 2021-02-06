import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      info: [],
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });

    // name === "email"
    //   ? this.setState({ email: value })
    //   : this.setState({ password: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("ssssss");

    this.setState((prevState) => ({
      info: [...prevState.info, [this.state.email, this.state.password]],
    }));
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2> I already have Account </h2>

        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
