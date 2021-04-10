import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Singlblog extends Component {
  render() {
    return (
      <div>
        <div
          className="card mb-3"
          style={{ width: "100%", fontFamily: "serif" }}
        >
          <Link to={`/blog/${this.props.name}`}>
            <img src={this.props.src} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.title}</p>
            <p className="card-text">
              <small className="text-muted">{this.props.date}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
