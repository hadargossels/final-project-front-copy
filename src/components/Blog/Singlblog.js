import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Singlblog extends Component {
  render() {
    return (
      <div>
        <div class="card mb-3" style={{width:"100%",fontFamily:"serif"}}>
        <Link to={`/blog/${this.props.name}`}><img src={this.props.src} class="card-img-top" alt="..." /></Link>  
          <div class="card-body" >
            <h5 class="card-title">{this.props.name}</h5>
            <p class="card-text">
              {this.props.title}
            </p>
            <p class="card-text">
              <small class="text-muted">{this.props.date}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
