import React from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/pug.svg";
import SearchBar from "../search-bar/search-bar.component";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const activeStyle = {
  color: "#f7a116",
};

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="options">
      {/* <form class="example" action="/">
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form> */}

      <SearchBar />

      {/* <NavLink className="option" activeStyle={activeStyle} to="/shop">
        COLLECTIONS
      </NavLink> */}

      <NavLink className="option" activeStyle={activeStyle} to="/store">
        STORE
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

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink className="option" activeStyle={activeStyle} to="/signin">
          SIGN IN
        </NavLink>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

// currentUser: state.user.currentUser,
// hidden : state.cart.hidden,

export default connect(mapStateToProps)(Header);
