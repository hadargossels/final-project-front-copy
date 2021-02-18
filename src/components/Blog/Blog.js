import React, { Component } from "react";
import Singlblog from "./Singlblog";
import datablog from "../../datablog";

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  displayBlogs = () => {
     return datablog.map(
      (element, key) => (
        <div className="row mb-5"  key={key}>
          <Singlblog
          name={element.name}
          src={element.src}
          title={element.title}
          date={element.date}
          key={key}
        />
        </div>
      )
    );
  };
  render() {
    return (
      <div style={{margin:"0 auto"}}>
        <div><img src="/images/bloglogo.jpg" width="100%"/><span style={{position:"relative",zIndex:"2",left:"28%",top:"-250px",color:"white",fontFamily:"serif",fontSize:"50px"}}>======OUR BLOG======</span></div>
        <div></div>
        <div className="container" style={{margin:"2rem auto",width:"50%"}} >{this.displayBlogs()}</div>
      </div>
    );
  }
}
