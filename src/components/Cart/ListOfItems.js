import React, { Component } from "react";

export default class ListOfItems extends Component {
  render() {
    return (
      <div style={{ margin: "1rem 10rem" }}>
        <div
          className="row"
          style={{ border: "1px solid grey", marginBottom: "1rem" }}
        >
          <div className="col-3">
            <img
              style={{ width: "4rem", marginTop: "1rem" }}
              src={this.props.counter.src}
              alt="1"
            />
          </div>
          <div className="col-9 ">
            <div className="">
              <div className="productNameCart">
                <span className="itemNamecart">{this.props.counter.name}</span>
              </div>
              <br />
              <div className="productNameCart">
                Price:
                <span className="itemPricecart">
                  {this.props.counter.price}&nbsp;
                  <i className="fas fa-shekel-sign shekel"></i>
                </span>
                &nbsp; value:
                <span className="itemPricecart">
                  {this.props.counter.value}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
