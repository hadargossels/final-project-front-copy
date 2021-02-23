import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./signin.styles.scss";
import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      // invalidUser: false,

      // info: [],
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });

    // name === "email"
    //   ? this.setState({ email: value })
    //   : this.setState({ password: value });
  };

  handleSubmit = async (event) => {
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

  render() {
    const { googleSignInStart } = this.props;

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
          {/* ///// start validation/////// */}
          <p
            style={{ display: this.state.invalidUser ? "block" : "none" }}
            className="invalid"
          >
            Wrong Email or Password
          </p>

          {/* ///// end validation/////// */}
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
