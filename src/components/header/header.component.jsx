import React from "react";

import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/pug.svg";

const activeStyle = {
  color: "#f7a116",
};

const Header = ({ currentUser }) => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="options">
      <form class="example" action="/">
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>

      <NavLink className="option" activeStyle={activeStyle} to="/shop">
        Collections
      </NavLink>

      <NavLink className="option" activeStyle={activeStyle} to="/store">
        Store
      </NavLink>

      <NavLink className="option" activeStyle={activeStyle} to="/about">
        About
      </NavLink>

      <NavLink className="option" activeStyle={activeStyle} to="/blog">
        Blog
      </NavLink>

      <NavLink className="option" activeStyle={activeStyle} to="/contact">
        Contact
      </NavLink>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink className="option" activeStyle={activeStyle} to="/signin">
          SIGN IN
        </NavLink>
      )}

      <NavLink className="option" activeStyle={activeStyle} to="/shop">
        <i className="fa fa-cart-plus mr-2"></i>{" "}
      </NavLink>
    </div>
  </div>
);

export default Header;
