import React, { useContext, useState } from "react";

import CurrentUserContext from "../../contexts/current-user/current-user.context";
import { CartContext } from "../../providers/cart/cart.provider";

import { NavLink } from "react-router-dom";

// import { createStructuredSelector } from "reselect";

import "./side-header.styles.scss";

import { ReactComponent as Logo } from "../../assets/pug.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
// import { selectCartHidden } from "../../redux/cart/cart.selectors";

// import { signOutStart } from "../../redux/user/user.actions";

const activeStyle = {
  color: "black",
};

const SideHeader = () => {
  const currentUser = useContext(CurrentUserContext);
  const { cartItemsCount, wishItemsCount } = useContext(CartContext);

  return (
    <>
      {currentUser && (
        <div className="col-lg-4">
          <aside className="user-info-wrapper">
            <div
              className="user-cover"
              style={{
                backgroundImage: "url(https://bootdey.com/img/Content/bg1.jpg)",
              }}
            >
              <div
                className="info-label"
                data-toggle="tooltip"
                title
                data-original-title="You currently have 290 Reward Points to spend"
              >
                <i className="icon-medal" />
                290 points
              </div>
            </div>
            <div className="user-info">
              <div className="user-avatar">
                <a className="edit-avatar" href="#" />
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="User" />
                ) : (
                  <img
                    src="https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_960_720.jpg"
                    alt="User"
                  />
                )}{" "}
              </div>{" "}
              <div className="user-data">
                <h4>{currentUser.displayName}</h4>
                <span>Joined February 06, 2020</span>
              </div>
            </div>
          </aside>
          <nav className="list-group">
            <NavLink activeStyle={activeStyle} to="/orders">
              <a className="list-group-item with-badge ">
                <i className=" fa fa-th" />
                Orders
                <span className="badge badge-primary badge-pill">6</span>
              </a>
            </NavLink>

            <NavLink activeStyle={activeStyle} to="/profile">
              <a className="list-group-item">
                <i className="fa fa-user" />
                Profile
              </a>{" "}
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/shopping-cart">
              <a className="list-group-item with-badge">
                <i class="fas fa-shopping-cart"></i>
                Cart
                <span className="badge badge-primary badge-pill">
                  {cartItemsCount}
                </span>
              </a>{" "}
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/wishlist">
              <a className="list-group-item with-badge active ">
                <i className="fa fa-heart" />
                Wishlist
                <span className="badge badge-primary badge-pill">
                  {wishItemsCount}
                </span>
              </a>{" "}
            </NavLink>
            <NavLink activeStyle={activeStyle} to="/my-tickets">
              <a className="list-group-item with-badge ">
                <i className="fa fa-tag" />
                My Tickets
                <span className="badge badge-primary badge-pill">4</span>
              </a>{" "}
            </NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default SideHeader;
