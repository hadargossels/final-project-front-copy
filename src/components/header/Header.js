import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./Header.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Cart from "../Cart/Cart";
import auth from "../../auth";
import Login from "../Login/Login";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// import CustomLoginPage from "../admin/CustomLoginPage";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      numItems: 1,
      // numItems: JSON.parse(localStorage.getItem("counters") || "[]").filter(
      //   (c) => c.value > 0
      // ).length,
      login: false,
    };
    this.callRefBtn = React.createRef();
  }
  // componentWillUnmount = () => {
  //   let numOfItems=JSON.parse(localStorage.getItem("counters") || "[]").filter(c => c.value > 0).length
  //   this.setState({numItems:numOfItems})
  // };
  componentDidMount = () => {
    //   let numOfItems = JSON.parse(
    //     localStorage.getItem("counters") || "[]"
    //   ).filter((c) => c.value > 0).length;
    //   this.setState({ numItems: numOfItems });
  };

  handleRestart = () => {
    window.location.reload();
  };
  loginHeader() {
    setTimeout(() => {
      this.callRefBtn.current.click();
    }, 0);
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          id="header"
        >
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="/#"> */}
            <Link to="/">
              <img
                src="/images/logo1.png"
                width="100"
                height="24"
                alt=""
                className="d-inline-block align-top logoimg"
              />
            </Link>
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
                    href="/#"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "green" }}
                    to="/about"
                    className="nav-link"
                    href="/#"
                  >
                    About Us!
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "green" }}
                    to="/contact"
                    className="nav-link"
                    href="/#"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "green" }}
                    to="/blog"
                    className="nav-link"
                    href="/#"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "green" }}
                    to="/store"
                    className="nav-link"
                    href="/#"
                  >
                    Store
                  </NavLink>
                </li>
              </ul>
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                <div className="icons nav-item">
                  <div className="d-flex shop">
                    <input
                      id="inputSearch"
                      title="only letters a-z A–Z"
                      required="required"
                      pattern="[a-z A-Z]{1,}"
                      name="q"
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={this.state.search}
                      onChange={({ target }) =>
                        this.setState({
                          search: target.value,
                        })
                      }
                    />
                    <button
                      className="btn btn-outline-success"
                      onClick={(e) => {
                        if (!this.state.search)
                          return this.props.history.push(`/store`);
                        this.setState({ search: "" });
                        this.props.history.push(`store?q=${this.state.search}`);
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="nav-item">
                  <div
                    className="modal fade nav-item"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          {/* <h5 className="modal-title" id="exampleModalLabel">
                          Sign in
                        </h5> */}
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <Login history={this.props.history} />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          {/* <button type="button" className="btn btn-primary">
                          Sign in
                        </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <Link to="/signup" className="navbar-brand" alt="Sign up">
                    <i className="fas fa-user-plus"></i>
                  </Link>
                </div>
                <div className="nav-item">
                  {["bottom"].map((placement) => (
                    <OverlayTrigger
                      trigger="click"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Title as="h3">My Cart</Popover.Title>
                          <Popover.Content>
                            <Cart
                              total={this.props.total}
                              data={this.props.data}
                              updateProducts={this.props.updateProducts}
                              handleIncrement={this.props.handleIncrement}
                              handleDecrement={this.props.handleDecrement}
                              products={this.props.products}
                              numberProducts={this.props.numberProducts}
                              handleRestart={this.props.handleRestart}
                              handleDelete={this.props.handleDelete}
                              handleReset={this.props.handleReset}
                            />
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
                          <span className="numItems">
                            {/* {this.state.numItems} */}
                            {this.props.products.length}
                          </span>
                        </i>
                      </Button>
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ marginLeft: "5px" }} className="nav-item">
                  {firebase.auth().currentUser ? (
                    <div>
                      <button
                        alt="logout"
                        className="btn btn-danger"
                        onClick={() => {
                          auth.logout(() => {
                            this.props.history.push("/");
                          });
                          firebase
                            .auth()
                            .signOut()
                            .then(() => {
                              alert("Sign-out successful.");
                              this.setState({ login: false });
                            })
                            .catch((error) => {
                              alert(error);
                            });
                        }}
                      >
                        <i className="fas fa-sign-out-alt"></i>
                      </button>
                      &nbsp;
                      <Link
                        to="/account/profile"
                        className="btn btn-warning"
                        alt="profile"
                      >
                        <i className="far fa-user"></i>
                      </Link>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="btn signinBtn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@"
                    >
                      <i className="fas fa-sign-in-alt"></i>
                    </button>
                  )}
                </div>
              </div>

              {/* <ul className="navbar-nav mr-auto icons"> */}
              {/* <li> */}
              <div>
                {/* <Link to="/cart" className="navbar-brand" href="/#">
                  <i className="fas fa-shopping-cart"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
