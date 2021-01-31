import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
        <div>
        <div className="card" style="width: 18rem;">
        <img src="/imgs/img1.png" className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">ESSENZA MINI PIANO BLACK</h5>
            <p className="card-text">749<i class="fas fa-shekel-sign"></i></p>
        </div>
        </div>
        </div>
    );
  }
}
export default Card;