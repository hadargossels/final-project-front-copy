import React from "react";

import { Link } from "react-router-dom";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/shiba.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <form class="example" action="/action_page.php">
        <input type="text" placeholder="Search.." name="search2" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>

      <Link className="option" to="/shop">
        Shop
      </Link>

      <Link className="option" to="/shop">
        Contact
      </Link>

      <Link className="option" to="/shop">
        Sign In
      </Link>
      <Link className="option" to="/shop">
        Sign Out
      </Link>

      <Link className="option" to="/shop">
        <i class="fa fa-cart-plus mr-2"></i>{" "}
      </Link>
    </div>
  </div>
);

export default Header;
