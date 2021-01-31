import React, { Component } from "react";

class Header extends Component {
  render(props) {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="imgs/logo1.png"
                alt=""
                width="100"
                height="24"
                className="d-inline-block align-top"
              />
            </a>
            
            <div className="d-flex">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About Us!
            </a>
            <a className="nav-link" href="#">
            Contact Us
            </a>
            </div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div>
            <a className="navbar-brand" href="#">
            <i class="fas fa-sign-in-alt"></i>Sign in
            </a>
            <a className="navbar-brand" href="#">
            <i className="fas fa-shopping-cart"></i>
            </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
//  ReactDOM.render(< App myHeader = "this is my Header....."/> , document.getElementById('app'));
