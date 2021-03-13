import React, { useContext, useState } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import "./my-tickets.styles.scss";

import "../../components/side-header/side-header.styles.scss";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CurrentUserContext from "./../../contexts/current-user/current-user.context";
import { Alert } from "react-bootstrap";
import SideHeader from "./../../components/side-header/side-header.component";
import { NavLink } from "react-router-dom";

const MyTickets = () => {
  const activeStyle = {
    color: "black",
  };

  const currentUser = useContext(CurrentUserContext);
  const { cartItemsCount, wishItemsCount } = useContext(CartContext);

  return (
    <>
      <div className="my-tickets">
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container padding-bottom-3x mb-2">
          <div className="row">
            {currentUser && (
              <div className="col-lg-4">
                <aside className="user-info-wrapper">
                  <div
                    className="user-cover"
                    style={{
                      backgroundImage:
                        "url(https://bootdey.com/img/Content/bg1.jpg)",
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
                    <a className="list-group-item with-badge">
                      <i className="fa fa-heart" />
                      Wishlist
                      <span className="badge badge-primary badge-pill">
                        {wishItemsCount}
                      </span>
                    </a>{" "}
                  </NavLink>
                  <NavLink activeStyle={activeStyle} to="/my-tickets">
                    <a className="list-group-item with-badge active" href="#">
                      <i className="fa fa-tag" />
                      My Tickets
                      <span className="badge badge-primary badge-pill">4</span>
                    </a>{" "}
                  </NavLink>
                </nav>
              </div>
            )}
            <div className="col-lg-8">
              <div className="padding-top-2x mt-2 hidden-lg-up" />
              <div className="table-responsive margin-bottom-2x">
                <table className="table margin-bottom-none">
                  <thead>
                    <tr>
                      <th>Date Submitted</th>
                      <th>Last Updated</th>
                      <th>Type</th>
                      <th>Priority</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>08/08/2017</td>
                      <td>08/14/2017</td>
                      <td>Website problem</td>
                      <td>
                        <span className="text-warning">High</span>
                      </td>
                      <td>
                        <span className="text-primary">Open</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Messages*/}
              <div className="comment">
                <div className="comment-author-ava">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Avatar"
                  />
                </div>
                <div className="comment-body">
                  <p className="comment-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi.
                  </p>
                  <div className="comment-footer">
                    <span className="comment-meta">Daniel Adams</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="comment-author-ava">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="Avatar"
                  />
                </div>
                <div className="comment-body">
                  <p className="comment-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <div className="comment-footer">
                    <span className="comment-meta">Jacob Hammond, Staff</span>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="comment-author-ava">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="Avatar"
                  />
                </div>
                <div className="comment-body">
                  <p className="comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="comment-footer">
                    <span className="comment-meta">Jacob Hammond, Staff</span>
                  </div>
                </div>
              </div>
              {/* Reply Form*/}
              <h5 className="mb-30 padding-top-1x">Leave Message</h5>
              <form method="post">
                <div className="form-group">
                  <textarea
                    className="form-control form-control-rounded"
                    id="review_text"
                    rows={8}
                    placeholder="Write your message here..."
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="text-right">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTickets;
