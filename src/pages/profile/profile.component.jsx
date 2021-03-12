import React, { useState, useContext } from "react";
import { Alert } from "react-bootstrap";
// import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CurrentUserContext from "../../contexts/current-user/current-user.context";
import { auth } from "../../firebase/firebase.utils";

import "./profile.styles.scss";
import { CartContext } from "./../../providers/cart/cart.provider";
import OrderConfirmation from "./../../components/order-confirmation/order-confirmation.component";
import UpdateProfile from "../update-profile/update-profile.component";
export default function Profile() {
  const [error, setError] = useState("");

  const [newEmail, setNewEmail] = useState(null);
  const history = useHistory();

  //   const { currentUser, logout } = useAuth();
  const currentUser = useContext(CurrentUserContext);

  const { cartItems, cartTotal, cartItemsCount, receipt } = useContext(
    CartContext
  );

  console.log("currentUser :", currentUser);

  async function handleLogout() {
    setError("");

    try {
      await auth.signOut();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  const changeEmailDisplay = (givenEmail) => {
    setNewEmail(givenEmail);
  };

  return (
    <div className="profile">
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container">
          <div className="row flex-lg-nowrap">
            <div className="col-12 col-lg-auto mb-3" style={{ width: 200 }}>
              <div className="card p-3">
                <div className="e-navlist e-navlist--active-bg">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link px-2 active">
                        <i className="fa fa-fw fa-bar-chart mr-1" />
                        <span>Overview</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2">
                        <i className="fa fa-fw fa-th mr-1" />
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-2">
                        <i className="fa fa-fw fa-cog mr-1" />
                        <span>Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="e-profile">
                        <div className="row">
                          <div className="col-12 col-sm-auto mb-3">
                            <div className="mx-auto" style={{ width: 140 }}>
                              {currentUser.photoURL ? (
                                <div
                                  type="file"
                                  className="d-flex justify-content-center align-items-center rounded"
                                  style={{
                                    height: 140,
                                    backgroundColor: "rgb(233, 236, 239)",

                                    backgroundImage: `url(${currentUser.photoURL})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                >
                                  {/* <span
                                  style={{
                                    color: "rgb(166, 168, 170)",
                                    font: "bold 8pt Arial",
                                  }}
                                >
                                  140x140
                                </span> */}
                                </div>
                              ) : (
                                <div
                                  type="file"
                                  className="d-flex justify-content-center align-items-center rounded"
                                  style={{
                                    height: 140,
                                    backgroundColor: "rgb(233, 236, 239)",

                                    backgroundImage: `url(${"https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_960_720.jpg"})`,
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                  }}
                                >
                                  {/* <span
                                  style={{
                                    color: "rgb(166, 168, 170)",
                                    font: "bold 8pt Arial",
                                  }}
                                >
                                  140x140
                                </span> */}
                                </div>
                              )}
                              {error && <Alert variant="danger">{error}</Alert>}
                            </div>
                          </div>
                          <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                              <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                                {currentUser.displayName}
                              </h4>
                              {newEmail ? (
                                <p className="mb-0">{newEmail}</p>
                              ) : (
                                <p className="mb-0">{currentUser.email}</p>
                              )}
                              <div className="text-muted">
                                <small>Last seen 1 hours ago</small>
                              </div>
                              <div className="mt-2">
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                >
                                  <i className="fa fa-fw fa-camera" />
                                  <span>Change Photo</span>
                                </button>
                              </div>
                            </div>
                            <div className="text-center text-sm-right">
                              <span className="badge badge-secondary">
                                Customer
                              </span>
                              <div className="text-muted">
                                <small>Joined 09 Feb 2021</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <a href className="active nav-link">
                              Settings
                            </a>
                          </li>
                        </ul>
                      </div>

                      <UpdateProfile changeEmailDisplay={changeEmailDisplay} />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 mb-3">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="px-xl-3">
                        <button
                          className="btn btn-block btn-secondary"
                          onClick={handleLogout}
                        >
                          <i className="fa fa-sign-out" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title font-weight-bold">Support</h6>
                      <p className="card-text">
                        Get fast, free help from our friendly assistants.
                      </p>

                      <Link to="/contact">
                        <button type="button" className="btn btn-primary">
                          Contact Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
