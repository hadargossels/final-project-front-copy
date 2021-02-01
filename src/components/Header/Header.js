import React, { Component } from "react";

import "./Header.css";

function Header() {
  return (
    <>
      <div class="header2 bg-success-gradiant">
        <div class="">
          <nav class="navbar navbar-expand-lg h2-nav">
            {" "}
            <a class="navbar-brand" href="#">
              Dog&CatWorld
            </a>{" "}
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#header2"
              aria-controls="header2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span class="icon-menu"></span>{" "}
            </button>
            <div class="collapse navbar-collapse hover-dropdown" id="header2">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown position-relative">
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="h2-dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    Product <i class="fa fa-angle-down ml-1 font-12"></i>{" "}
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li class="divider" role="separator"></li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                    <li class="divider" role="separator"></li>
                    <li>
                      <a class="dropdown-item" href="#">
                        One more separated link
                      </a>
                    </li>
                    <li class="dropdown-submenu position-relative">
                      {" "}
                      <a
                        class="dropdown-toggle dropdown-item"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Dropdown{" "}
                        <i class="fa fa-long-arrow-right float-right mt-1"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li class="dropdown-submenu position-relative">
                          {" "}
                          <a
                            class="dropdown-toggle dropdown-item"
                            href="#"
                            data-toggle="dropdown"
                          >
                            Dropdown{" "}
                            <i class="fa fa-long-arrow-right float-right mt-1"></i>
                          </a>
                          <ul class="nav navbar-nav dropdown-menu">
                            <li class="dropdown-submenu position-relative">
                              {" "}
                              <a
                                class="dropdown-toggle dropdown-item"
                                href="#"
                                data-toggle="dropdown"
                              >
                                Dropdown{" "}
                                <i class="fa fa-long-arrow-right float-right mt-1"></i>
                              </a>
                              <ul class="dropdown-menu">
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                                <li class="divider" role="separator"></li>
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Separated link
                                  </a>
                                </li>
                                <li class="divider" role="separator"></li>
                                <li>
                                  <a class="dropdown-item" href="#">
                                    One more separated link
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>

              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    <i class="icon-bubble"></i> Need help?
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="btn rounded-pill btn-dark py-2 px-4 signupBtn"
                    href="#"
                  >
                    Sign up
                  </a>
                </li>
                <div class="cart largenav col-sm-2">
                  {" "}
                  <a class="cart-button">
                    {" "}
                    <svg
                      class="cart-svg "
                      width="16 "
                      height="16 "
                      viewBox="0 0 16 16 "
                    >
                      <path
                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 "
                        fill="#fff "
                      ></path>
                    </svg>{" "}
                    Cart <span class="item-number ">2</span>{" "}
                  </a>{" "}
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
