import React, { useRef, useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CurrentUserContext from "../../contexts/current-user/current-user.context";
import { auth } from "../../firebase/firebase.utils";

export default function UpdateProfile(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { currentUser, updatePassword, updateEmail } = useAuth();

  const currentUser = useContext(CurrentUserContext);
  console.log("currentUser :", currentUser);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email);
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password);
  // }
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // auth.currentUser
    //   .updateEmail(emailRef.current.value)
    //   .then(function () {
    //     console.log("Update successful");
    //     setLoading(false);
    //   })
    //   .catch(function (error) {
    //     // An error happened.
    //     setError("Failed to update account");
    //   });

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(auth.currentUser.updateEmail(emailRef.current.value));

      props.changeEmailDisplay(emailRef.current.value);
    }
    if (passwordRef.current.value) {
      promises.push(auth.currentUser.updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
}
