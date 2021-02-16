import React, { Component } from "react";
import ReactPlayer from "react-player";

export default class About extends Component {
  render() {
    return (
      <div style={{ margin: "0 2rem",backgroundColor:"wheat" }}>
        <div className="container" style={{paddingBottom:"5rem" }}>
          <div className="row">
            <div className="col-12">
              <img src="./images/about.png" width="100%" />
            </div>
          </div>
          <div className="row mt-5 pl-3">
            <div className="col-6">
              <h5 style={{ margin: "2rem 0 1rem 0" }}>OUR COFFEE EXPERTISE</h5>
              <p style={{ fontSize: "14px" }}>
                WE LIKE TO DO THINGS DIFFERENTLY Who we are and what we stand
                for is rooted in our coffee expertise, our innovative spirit and
                the farmers we work with. We’ve spent the last 30 years
                fine-tuning our know-how, partnering with the finest craftsmen
                along the way.We want to work with people who care as much about
                the little details as we do. Because in the end, that’s what
                makes the difference. Throughout our coffee value chain – from
                our skilled agronomists and farmers to our in-house coffee
                development experts, factory teams and coffee ambassadors, right
                through to our customers – we’ve assembled a team of coffee
                experts that share our obsession with uncompromising quality.
              </p>
            </div>
            <div className="col-6">
              <img src="./images/about2.png" width="100%" />
            </div>
          </div>
          <div className="row mt-5 pl-3">
            <div className="col-6">
              <img src="./images/about3.png" width="100%" />
            </div>
            <div className="col-6">
              <p style={{ fontSize: "14px" }}>
                Together, we’ve developed a range of exceptional coffees,
                machines and services tailored to every preference, and
                developed to meet the strictest quality standards. We have 29
                Original coffees, 28 Vertuo coffees, and 15 Professional
                coffees, as well as Limited Editions that showcase rare
                varieties from around the world. We have a range of convenient
                and revolutionary coffee systems that consistently deliver the
                perfect cup of coffee, whether it’s an espresso, a long cup or a
                milk-based coffee. We have a range of personalised services to
                anticipate your every need including next day delivery, mobile
                apps for coffee ordering and an exclusive loyalty program,
                “Nespresso & You”.
              </p>
            </div>
          </div>

          <div className="row mt-5 pl-3">
            <div className="col-6">
              <h5 style={{ margin: "2rem 0 1rem 0" }}>OUR SYSTEM RANGE</h5>
              <p style={{ fontSize: "14px" }}>
                FOR EVERY TASTE
                <br />
                Our suite of Original, Vertuo and Professional machines combine
                technology, quality and design to deliver a barista-like
                experience. Our Original coffees cater for those of you who love
                a powerful and intense short cup. Our Vertuo coffees brew a
                variety of coffees, from ristrettos to altos. And our
                Professional solutions give businesses the ability to provide
                their customers a truly memorable experience.
              </p>
            </div>
            <div className="col-6">
              <img src="./images/about4.png" width="100%" />
            </div>
          </div>

          <div className="row mt-5 pl-3">
            <div className="col-6">
              <img src="./images/about5.png" width="100%" />
            </div>
            <div className="col-6">
              <h5 style={{ margin: "2rem 0 1rem 0" }}>
                SUSTAINABILITY COMMITMENT
              </h5>
              <p style={{ fontSize: "14px" }}>
                WE WANT TO HAVE A POSITIVE IMPACT Sustainability is rooted in
                the heart of everything we do. That’s because we believe doing
                good is simply good business. We’ve built our company, our
                products and our practices on one simple premise: that every cup
                of Nespresso should have a positive impact. Whether it is in
                supporting the people who nurture, grow and harvest our coffee
                beans, to our choice of materials, production processes and what
                we do to help people recycle our coffee capsules – every aspect
                of our value chain is designed to unlock shared value for our
                partners, employees and customers.
              </p>
            </div>
          </div>

          <div className="row mt-5 pl-3 ">
            <div className="col-6">
              <p style={{ fontSize: "14px" }}>
                At the heart of this lies our Nespresso AAA Sustainable Quality™
                Program. Developed with our NGO partner the Rainforest Alliance
                back in 2003, it is a coffee sourcing program that works
                directly with farmers to implement sustainable farming practices
                through free technical assistance. Thanks to the program, more
                than 110,000 farmers across 14 countries are committed to
                improving the quality and productivity of their coffee trees
                while protecting the environment and preserving their
                communities against wider social and economic challenges.
                Through the Nespresso AAA Sustainable Quality™ Program we
                develop lasting relationships with farming communities and work
                together to develop innovative solutions that make them stronger
                and more resilient.
              </p>
            </div>
            <div className="col-6">
              <img src="./images/about6.png" width="100%" />
            </div>
          </div>
          <div className="row mt-5 pl-3 " style={{textAlign:"center"}}>
                  <h3>Nespresso - Our Commitments</h3>
              <div style={{margin:"0 0 2rem 14rem"}}>
                  
              <ReactPlayer
                     url="https://www.youtube.com/watch?v=i7F4-mXGy1A&feature=youtu.be"
                    />
              </div>
          </div>
        </div>
      </div>
    );
  }
}
