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

// import { signOutStart } from "../../redux/user/user.actions";

const activeStyle = {
  color: "#007bff",
};

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const {
    hidden,
    toggleHidden,
    cartItemsCount,
    cartTotal,
    wishItemsCount,
  } = useContext(CartContext);

  const [pageMenu, setPageMenu] = useState(false);

  const showPageMenu = () => {
    setPageMenu(!pageMenu);
  };

  return (
    <>
      {/* <div className="header-component">
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
                to="/profile"
              >
                <i className="far fa-user fa-1x"></i>
                <h6> PROFILE</h6>
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
      </div> */}
      <div className="super_container main-header">
        {/* Header */}
        <header className="header">
          {/* Top Bar */}
          <div className="top_bar">
            <div className="container">
              <div className="row">
                <div className="col d-flex flex-row">
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"
                        alt
                      />
                    </div>
                    +91 9823 132 111
                  </div>
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png"
                        alt
                      />
                    </div>
                    <a href="mailto:fastsales@gmail.com">
                      contact@dogbestfriends.com
                    </a>
                  </div>
                  <div className="top_bar_content ml-auto">
                    <div className="top_bar_menu">
                      <ul className="standard_dropdown top_bar_dropdown">
                        <li>
                          {" "}
                          <a href="#">
                            English
                            <i className="fas fa-chevron-down" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">Italian</a>
                            </li>
                            <li>
                              <a href="#">Spanish</a>
                            </li>
                            <li>
                              <a href="#">Japanese</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a href="#">
                            $ US dollar
                            <i className="fas fa-chevron-down" />
                          </a>
                          <ul>
                            <li>
                              <a href="#">EUR Euro</a>
                            </li>
                            <li>
                              <a href="#">GBP British Pound</a>
                            </li>
                            <li>
                              <a href="#">JPY Japanese Yen</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="top_bar_user">
                      {!CurrentUserContext && (
                        <div className="user_icon">
                          <img
                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                            alt
                          />
                        </div>
                      )}
                      <div>
                        {currentUser ? (
                          <div
                            className="option"
                            onClick={() => auth.signOut()}
                          >
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Header Main */}
          <div className="header_main">
            <div className="container">
              <div className="row">
                {/* Logo */}
                <div className="col-lg-2 col-sm-3 col-3 order-1">
                  <div className="logo_container">
                    <NavLink className="logo-container" to="/">
                      <Logo className="logo" />
                    </NavLink>
                  </div>
                </div>{" "}
                {/* Search */}
                <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                        <form
                          action="/shop"
                          className="header_search_form clearfix"
                        >
                          {" "}
                          <input
                            type="search"
                            required="required"
                            className="header_search_input"
                            placeholder="Search for products..."
                            name="q"
                          />
                          <div
                            className="custom_dropdown"
                            style={{ display: "none" }}
                          ></div>{" "}
                          <button
                            type="submit"
                            className="header_search_button trans_300"
                            value="Submit"
                          >
                            <img
                              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"
                              alt
                            />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* Wishlist */}
                <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                  <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                    {currentUser && (
                      <div className=" user-profile wishlist d-flex flex-row align-items-center justify-content-end">
                        <div className="user_main-icon">
                          <NavLink activeStyle={activeStyle} to="/profile">
                            <img
                              className="user-main-logo"
                              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                              alt
                            />
                          </NavLink>
                        </div>
                        <div className="wishlist_content">
                          <div className="wishlist_text">
                            <NavLink activeStyle={activeStyle} to="/profile">
                              Profile
                            </NavLink>
                          </div>
                          <div className="wishlist_count">
                            {currentUser.displayName}{" "}
                          </div>
                        </div>{" "}
                      </div>
                    )}{" "}
                    <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                      <div className="wishlist_icon">
                        <NavLink
                          className="option"
                          activeStyle={activeStyle}
                          to="/wishlist"
                        >
                          <img
                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                            alt
                          />{" "}
                        </NavLink>
                      </div>

                      <div className="wishlist_content">
                        <div className="wishlist_text">
                          <NavLink
                            className="option"
                            activeStyle={activeStyle}
                            to="/wishlist"
                          >
                            <a>Wishlist</a>
                          </NavLink>
                        </div>
                        <div className="wishlist_count">{wishItemsCount}</div>
                      </div>
                    </div>{" "}
                    {/* Cart */}
                    <div className="cart">
                      <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div className="cart_icon">
                          <NavLink
                            className="option"
                            activeStyle={activeStyle}
                            to="/shopping-cart"
                          >
                            <img
                              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                              alt
                            />
                          </NavLink>

                          <div className="cart_count">
                            <span onClick={toggleHidden}>{cartItemsCount}</span>
                          </div>
                        </div>
                        <div className="cart_content">
                          <div className="cart_text">
                            <NavLink
                              className="option"
                              activeStyle={activeStyle}
                              to="/shopping-cart"
                            >
                              Cart
                            </NavLink>
                          </div>
                          <div className="cart_price">${cartTotal}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Main Navigation */}
          <nav className="main_nav">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="main_nav_content d-flex flex-row">
                    {/* Categories Menu */}
                    {/* Main Nav Menu */}
                    <div className="main_nav_menu">
                      <ul className="standard_dropdown main_nav_dropdown">
                        {/* <li>
                          <NavLink
                            className="option"
                            activeStyle={activeStyle}
                            to="/"
                          >
                            Home
                            <i className="fas fa-chevron-down" />
                          </NavLink>
                        </li> */}

                        <li>
                          <NavLink
                            className="option "
                            activeStyle={activeStyle}
                            to="/shop"
                          >
                            Shop
                            <i className="fas fa-chevron-down" />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="option "
                            activeStyle={activeStyle}
                            to="/sales"
                          >
                            Sales
                            <i className="fas fa-chevron-down" />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="option "
                            activeStyle={activeStyle}
                            to="/new"
                          >
                            New
                            <i className="fas fa-chevron-down" />
                          </NavLink>
                        </li>

                        <li>
                          {" "}
                          <NavLink
                            className="option"
                            activeStyle={activeStyle}
                            to="/about"
                          >
                            About
                            <i className="fas fa-chevron-down" />
                          </NavLink>
                        </li>

                        <li>
                          {" "}
                          <NavLink
                            className="option"
                            activeStyle={activeStyle}
                            to="/blog"
                          >
                            Blog
                            <i className="fas fa-chevron-down" />
                          </NavLink>
                        </li>

                        <li>
                          {" "}
                          <NavLink
                            className="option"
                            activeStyle={activeStyle}
                            to="/contact"
                          >
                            Contact
                            <i className="fas fa-chevron-down" />
                          </NavLink>
                        </li>
                      </ul>
                    </div>{" "}
                    {/* Menu Trigger */}
                    <div
                      onClick={showPageMenu}
                      className="menu_trigger_container ml-auto"
                    >
                      <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                        <div className="menu_burger">
                          <div className="menu_trigger_text">menu</div>
                          <div className="cat_burger menu_burger_inner">
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>{" "}
          {/* Menu */}
          {pageMenu && (
            <div className="page_menu " style={{ height: 400 }}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="page_menu_content">
                      <div className="page_menu_search">
                        <form action="/shop">
                          {" "}
                          <input
                            type="search"
                            required="required"
                            className="page_menu_search_input"
                            placeholder="Search for products..."
                            name="q"
                          />{" "}
                          <button
                            type="submit"
                            className="header_search_button trans_300"
                            value="Submit"
                          >
                            <i class="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                      <ul className="page_menu_nav">
                        <li className="page_menu_item">
                          {" "}
                          <NavLink
                            className="option "
                            activeStyle={activeStyle}
                            to="/shop"
                          >
                            {" "}
                            Shop
                            <i className="fa fa-angle-down" />
                          </NavLink>{" "}
                        </li>
                        <li className="page_menu_item">
                          {" "}
                          <NavLink
                            className="option "
                            activeStyle={activeStyle}
                            to="/sales"
                          >
                            {" "}
                            Sales
                            <i className="fa fa-angle-down" />
                          </NavLink>{" "}
                        </li>
                        <li className="page_menu_item">
                          {" "}
                          <NavLink
                            className="option "
                            activeStyle={activeStyle}
                            to="/new"
                          >
                            {" "}
                            New
                            <i className="fa fa-angle-down" />
                          </NavLink>{" "}
                        </li>
                        <li className="page_menu_item">
                          {" "}
                          <NavLink
                            className="option "
                            activeStyle={activeStyle}
                            to="/about"
                          >
                            {" "}
                            About
                            <i className="fa fa-angle-down" />
                          </NavLink>{" "}
                        </li>

                        <li className="page_menu_item">
                          {" "}
                          <NavLink
                            className="option "
                            activeStyle={activeStyle}
                            to="/blog"
                          >
                            {" "}
                            Blog
                            <i className="fa fa-angle-down" />
                          </NavLink>{" "}
                          <li className="page_menu_item">
                            {" "}
                            <NavLink
                              className="option "
                              activeStyle={activeStyle}
                              to="/contact"
                            >
                              {" "}
                              Contact
                              <i className="fa fa-angle-down" />
                            </NavLink>{" "}
                          </li>
                        </li>
                      </ul>
                      <div className="menu_contact">
                        <div className="menu_contact_item">
                          <div className="menu_contact_icon">
                            <img
                              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"
                              alt
                            />
                          </div>
                          +38 068 005 3570
                        </div>
                        <div className="menu_contact_item">
                          <div className="menu_contact_icon">
                            <img
                              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png"
                              alt
                            />
                          </div>
                          <a href="mailto:fastsales@gmail.com">
                            fastsales@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
        <div style={{ height: 0 }}></div>
      </div>{" "}
      {hidden ? null : <CartDropdown />}
    </>
  );
};

export default Header;
