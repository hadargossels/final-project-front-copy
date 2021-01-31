import React, { Component } from "react";
// const year = new Date().getFullYear();
// <p>Copyright ⓒ {year}</p>
function Footer() {
  return (
    <>
      <div id="container">
        <div id="part1">
          <div id="companyinfo">
            {" "}
            <a id="sitelink" href="#">
              Dog&CatWorld
            </a>
            <p id="title">Cool store </p>
            <p id="detail">we love dog and cats. </p>
          </div>
          <div id="explore">
            <p id="txt1">Explore</p>{" "}
            <a class="link" href="#">
              Home
            </a>{" "}
            <a class="link" href="#">
              About
            </a>{" "}
            <a class="link" href="#">
              Snippet
            </a>{" "}
            <a class="link" href="#">
              Careers
            </a>
          </div>
          <div id="visit">
            <p id="txt2">Visit</p>
            <p class="text">Gilad House </p>
            <p class="text">78 Herzel Road </p>
            <p class="text">Rehovot 400 026 </p>
            <p class="text">Phone: (22) 2363-3611 </p>
            <p class="text">Fax: (22) 2363-0350 </p>
          </div>
          <div id="legal">
            <p id="txt3">Legal</p>{" "}
            <a class="link1" href="#">
              Terms and Conditions
            </a>{" "}
            <a class="link1" href="#">
              Private Policy
            </a>
          </div>
          <div id="subscribe">
            <p id="txt4">Subscribe to US</p>
            <form>
              {" "}
              <input id="email" type="email" placeholder="Email" />{" "}
            </form>{" "}
            <a class="waves-effect waves-light btn subscribeBtn">Subscribe</a>
            <p id="txt5">Connect With US</p>
            <i className="fab fa-facebook fa-2x "></i>{" "}
            <i class="fab fa-linkedin  fa-2x"></i>{" "}
            <i class="fab fa-twitter fa-2x"></i>
          </div>
        </div>
        <div id="part2">
          <p id="txt6">
            <i class="material-icons tiny"> </i>copyright 2021 GD - All right
            reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
