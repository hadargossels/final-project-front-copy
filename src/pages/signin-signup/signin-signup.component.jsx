import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/signin/signin.component";

import "./signin-signup.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
