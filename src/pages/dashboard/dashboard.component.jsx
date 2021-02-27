import React, { useState } from "react";
import { connect } from "react-redux";

import { Card, Button, Alert } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./../../redux/user/user.selector";

function Dashboard({ currentUser }) {
  console.log("currentUser :", currentUser);
  const [error, setError] = useState("");
  //   const { currentUser, logout } = useAuth();

  const history = useHistory();

  // async function handleLogout() {
  //   setError("");

  //   try {
  //     await auth.signOut();
  //     history.push("/signin");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

  return (
    <div className="dashboard">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Name:</strong> {currentUser && currentUser.displayName}
          <br />
          <strong>Email:</strong> {currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        {/* <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> */}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Dashboard);
