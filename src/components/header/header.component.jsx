import React from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

// import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/pug.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import SearchBar from "./../search-bar/search-bar.component";

import { signOutStart } from "../../redux/user/user.actions";

const activeStyle = {
  color: "#f7a116",
};

const Header = ({ currentUser, hidden, signOutStart }) => (
  <>
    <div className="header-component">
      <div className="header">
        <NavLink className="logo-container" to="/">
          <Logo className="logo" />
        </NavLink>{" "}
        {currentUser && <h4>Welcome {currentUser.displayName}</h4>}
        <div className="options">
          <SearchBar />

          {/* <NavLink className="option" activeStyle={activeStyle} to="/shop">
        COLLECTIONS
      </NavLink> */}

          <NavLink className="option" activeStyle={activeStyle} to="/shop">
            Shop
          </NavLink>

          <NavLink className="option" activeStyle={activeStyle} to="/about">
            ABOUT
          </NavLink>

          <NavLink className="option" activeStyle={activeStyle} to="/blog">
            BLOG
          </NavLink>

          <NavLink className="option" activeStyle={activeStyle} to="/contact">
            CONTACT
          </NavLink>

          {currentUser && (
            <NavLink
              className="option dash"
              activeStyle={activeStyle}
              to="/dashboard"
            >
              <i className="far fa-user fa-1x"></i>
              <h6> DASHBOARD</h6>
            </NavLink>
          )}

          {currentUser ? (
            <div className="option" onClick={signOutStart}>
              SIGN OUT
            </div>
          ) : (
            <NavLink className="option" activeStyle={activeStyle} to="/signin">
              SIGN IN
            </NavLink>
          )}

          {currentUser && (
            <NavLink
              className="option"
              activeStyle={activeStyle}
              to="/shopping-cart"
            >
              Cart
            </NavLink>
          )}

          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
