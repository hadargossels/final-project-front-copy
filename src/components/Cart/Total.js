import React, { Component } from "react";

export default class Total extends Component {

  render() {
    console.log()
    return (
      <div style={{marginTop:"1rem"}}>
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            padding: "10px",
            marginBottom:"1rem"
          }}
        >
          <div  style={{fontWeight:"bolder"}}>Sub-Total (Excl. Tax) :{localStorage.getItem("total")}<i style={{fontSize:"10px"}} class="fas fa-shekel-sign"></i></div>
          <div style={{fontWeight:"bolder"}}>Coupon: -<span style={{color:"red"}}>{localStorage.getItem("coupon")||0}<i style={{fontSize:"10px"}} class="fas fa-shekel-sign"></i></span></div>
          <div  style={{fontWeight:"bolder"}}>
            Tax (0.35%): {((+localStorage.getItem("total") * 0.35) / 100).toFixed(2)}<i style={{fontSize:"10px"}} class="fas fa-shekel-sign"></i>
          </div>
          <div style={{fontWeight:"bolder"}}>Delivery:<span style={{ color: "red" }}>{localStorage.getItem("delivery")}<i style={{fontSize:"10px"}} class="fas fa-shekel-sign"></i></span></div>
          <div style={{fontWeight:"bolder",border:"1px solid grey",width:"10rem",padding:"1px"}} >
            Total:<span style={{ color: "green" }}>
            { (+localStorage.getItem("total"))+(+localStorage.getItem("delivery")) +
              (+localStorage.getItem("total") * 0.35/100) -
              (+localStorage.getItem("coupon")||0).toFixed(2)}<i style={{fontSize:"10px"}} class="fas fa-shekel-sign"></i></span>
          </div>
        </div>
      </div>
    );
  }
}
