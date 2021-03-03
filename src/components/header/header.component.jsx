import React, { useContext, useState } from "react";

import CurrentUserContext from "../../contexts/current-user/current-user.context";
import { CartContext } from "../../providers/cart/cart.provider";

import { auth } from "../../firebase/firebase.utils";

import { NavLink } from "react-router-dom";

// import { createStructuredSelector } from "reselect";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/pug.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
// import { selectCartHidden } from "../../redux/cart/cart.selectors";
import SearchBar from "./../search-bar/search-bar.component";

// import { signOutStart } from "../../redux/user/user.actions";

const activeStyle = {
  color: "#f7a116",
};

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <>
      <div className="header-component">
        <div className="header">
          <NavLink className="logo-container" to="/">
            <Logo className="logo" />
          </NavLink>

          {currentUser && <h4>Welcome {currentUser.displayName}</h4>}

          <div className="options">
            <SearchBar />

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
              <div className="option" onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            ) : (
              <NavLink
                className="option"
                activeStyle={activeStyle}
                to="/signin"
              >
                SIGN IN
              </NavLink>
            )}

            {currentUser && (
              <NavLink
                className="option"
                activeStyle={activeStyle}
                to="/shopping-cart"
              >
                My Cart
              </NavLink>
            )}

            <CartIcon />
          </div>
          {hidden ? null : <CartDropdown />}
        </div>
      </div>
    </>
  );
};

export default Header;
