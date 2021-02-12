import React from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/signin/signin.component";

import "./signin-signup.styles.scss";

const SignInAndSignUpPage = (props) => {
  console.log("props :", props);

  return (
    <>
      <h1
        style={{
          display: props.forCheckIn === "forCheckIn" ? "block" : "none",
        }}
      >
        You most sign in or sign up to proceed the checkout
      </h1>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default SignInAndSignUpPage;
