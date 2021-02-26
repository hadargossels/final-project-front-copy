import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    return (
      <div style={{margin:"1rem 1rem"}}>
        <div className="card w-100">
          <div className="card-body p-3" >
            <h5 className="card-title"  style={{color:"",width:"100%",textAlign:"left"}}><span>{this.props.number}</span>&nbsp;&nbsp;<img src="/images/user.png" width="45px" style={{borderRadius:"50%"}} />&nbsp;{this.props.name}</h5>
            <p className="card-text" style={{fontSize:"16px",color:"slategrey",textAlign:"left",paddingLeft:"2rem"}}>
              {this.props.comment}
            </p>
            <span style={{fontSize:"12px",color:"grey"}}>{this.props.time}</span>
          </div>
        </div>
      </div>
    );
  }
}
