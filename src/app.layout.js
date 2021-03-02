import React from "react";
import auth from "./auth";
import Signup from "./components/Signup/Signup";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { Link } from "react-router-dom";

export const AppLayout = (props) => {
  return (
    <div
      style={{ margin: "200px auto", width: "600px", fontFamily: "cursive" }}
    >
      <h1>
        Hello{" "}
        <span style={{ color: "red" }}>
          {JSON.parse(localStorage.getItem("newUser")).fname}
          <br />
        </span>{" "}
        Welcome to your acount!!
        <br />
      </h1>
      <p
        style={{
          color: "pink",
          fontSize: "40px",
          margin: "100px 100px 0 100px",
        }}
      >
        Have Fun <i className="fas fa-smile-wink"></i>
      </p>
      {/* <button
        style={{ margin: "100px 0" }}
        onClick={() => {
          auth.logout(() => {
            props.history.push("/login");
          });
          firebase
            .auth()
            .signOut()
            .then(() => {
              alert("Sign-out successful.");
            })
            .catch((error) => {
              alert(error);
            });
        }}
      >
        Logout
      </button> */}
      <br />
      <Link to="/store" className="btn btn-success">
        Continue to shopping
      </Link>
      <br />
      <Link
        to="/cart"
        style={{ marginTop: "10px" }}
        className="btn btn-success"
      >
        Continue to my cart
      </Link>
    </div>
  );
};
