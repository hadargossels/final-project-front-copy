import React, { useState, useContext } from "react";
import { Card, Button, Alert } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CurrentUserContext from "../../contexts/current-user/current-user.context";
import { auth } from "../../firebase/firebase.utils";

import "./profile.styles.scss";
import { CartContext } from "./../../providers/cart/cart.provider";
import OrderConfirmation from "./../../components/order-confirmation/order-confirmation.component";
export default function Profile() {
  const [error, setError] = useState("");
  //   const { currentUser, logout } = useAuth();
  const currentUser = useContext(CurrentUserContext);

  const { cartItems, cartTotal, cartItemsCount, receipt } = useContext(
    CartContext
  );

  console.log("currentUser :", currentUser);

  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await auth.signOut();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="profile">
      <Card>
        <Card.Body>
          <img
            src={`https://robohash.org/${toString(
              currentUser.displayName
            )}?set=set2`}
            alt="robo-img"
          />
          <br />
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Name:</strong> {currentUser.displayName}
          <br />
          <strong>Email:</strong> {currentUser.email}
          {/* <strong>Created At:</strong> {currentUser.createdAt} */}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          {/* {receipt && (
            <OrderConfirmation
              orderId={""}
              cartItems={cartItems}
              total={cartTotal}
            />
          )} */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}
