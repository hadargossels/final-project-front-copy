import { Link, NavLink } from "react-router-dom";
import React, { Component } from "react";
import "./Header.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Cart from "../Cart/Cart";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numItems:JSON.parse(
        localStorage.getItem("counters") || "[]"
      ).filter((c) => c.value > 0).length,
    };
  }
  // componentWillUnmount = () => {
  //   let numOfItems=JSON.parse(localStorage.getItem("counters") || "[]").filter(c => c.value > 0).length
  //   this.setState({numItems:numOfItems})
  // };
  componentDidMount = () => {
    let numOfItems = JSON.parse(
      localStorage.getItem("counters") || "[]"
    ).filter((c) => c.value > 0).length;
    this.setState({ numItems: numOfItems });
  };
  
  handleRestart = () => {
    window.location.reload();
  };
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          id="header"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <Link to='/'><img
                src="/images/logo1.png"
                width="100"
                height="24"
                alt=""
                className="d-inline-block align-top logoimg"
              /></Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeStyle={{ color: "green" }}
                    to="/"
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "green" }}
                    to="/about"
                    className="nav-link"
                    href="#"
                  >
                    About Us!
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "green" }}
                    to="/contact"
                    className="nav-link"
                    href="#"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "green" }}
                    to="/blog"
                    className="nav-link"
                    href="#"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "green" }}
                    to="/store"
                    className="nav-link"
                    href="#"
                  >
                    Store
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex shop" action="/store/">
                <input
                  title="only letters a-z A–Z"
                  required="required"
                  pattern="[a-z A-Z]{1,}"
                  name="q"
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              {/* <ul className="navbar-nav mr-auto icons"> */}
              {/* <li> */}
              <div className="icons">
                <button
                  type="button"
                  className="btn signinBtn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@"
                >
                  <i className="fas fa-sign-in-alt"></i>
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Sign in
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label
                              htmlfor="exampleInputEmail1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail2"
                              aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                              We'll never share your email with anyone else.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlfor="exampleInputPassword1"
                              className="form-label"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                            />
                          </div>
                          <div className="mb-3 form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlfor="exampleCheck1"
                            >
                              Check me out
                            </label>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Sign in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/signup" className="navbar-brand" alt="Sign up">
                  <i className="fas fa-user-plus"></i>
                </Link>

                {/* <Link to='/cart' className="navbar-brand" href="#">
                <i className="fas fa-shopping-cart"></i>
                </Link>
             */}

                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">My Cart</Popover.Title>
                        <Popover.Content>
                          <Cart />
                          <NavLink
                            style={{
                              textDecoration: "none",
                              color: "red",
                              fontSize: "18",
                            }}
                            to="/cart"
                          >
                            to Cart
                          </NavLink>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <Button className="btnCartIcon" variant="secondary">
                      <i className="fas fa-shopping-cart">
                        <span className="numItems">{this.state.numItems}</span>
                      </i>
                    </Button>
                  </OverlayTrigger>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
