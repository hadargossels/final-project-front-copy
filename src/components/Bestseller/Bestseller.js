import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Bestseller.css";

export default class Bestseller extends Component {
  render() {
    return (
      <div className="bestsellerdiv col-3 ">
        <Link to={`/product/${this.props.name}`}> <div className="card border itemBest">
          
            <img src={this.props.categoryimg} className="imgsub"/>
            <img
              src={this.props.src}
              className="card-img-top"
              alt={this.props.name}
            />
          
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            {/* <p>{this.props.subcategory}</p> */}
            <p className="card-text">
              {this.props.price}
              <i className="fas fa-shekel-sign shekel"></i>
            </p>
            <button className="col btn btn-success btnAdd" type="button">
              <i className="fas fa-cart-plus "></i>&thinsp;Add to
            </button>
          </div>
        </div></Link>
      </div>
    );
  }
}
