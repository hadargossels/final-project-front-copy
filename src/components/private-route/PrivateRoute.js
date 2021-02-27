import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

function PrivateRoute({ component: Component, currentUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(PrivateRoute);
