import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div className="container text-primary">
          <div className="row py-3  text-center text-lg-start">
            <div className="col-12 col-lg-4 pb-4">
              <p className="h5 text-light py-2 pb-3">Stay in touch!</p>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <i className="far fa-envelope fa-2x me-2"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook fa-2x mx-2"></i>
              </a>
              <a href="https://www.linkedin.com/feed/">
                <i className="fab fa-linkedin fa-2x mx-2"></i>
              </a>
              <a href="https://twitter.com/home">
                <i className="fab fa-twitter fa-2x mx-2"></i>
              </a>
            </div>

            <div className="col-12 col-lg-4  pb-4">
              <p className="h5 text-light list-style-none py-2">Quick Links</p>
              <p>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  About
                </Link>
              </p>
              <p>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  Contact
                </Link>
              </p>
            </div>

            <div className="col-12 col-lg-4  pb-4">
              <p className="h5 text-light list-style-none py-2">Copyright</p>
              <p className=" mb-0">© 2021 PenguinGames All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
