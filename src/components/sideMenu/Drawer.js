import React from "react";
import "./drawerStyle.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  let callRef = React.createRef();
      if (props.show) {
        drawerClasses = ["side-drawer", "open"];
      }

      let searchRefDrawer=()=>{
        const node = callRef.current.value;
        window.location.href = "/search?q=" + node;

    }
  return (
    <nav className={drawerClasses.join(" ")}>
       
      <ul>
          <li className="input-group" >
            <input ref={callRef} type="text" className="form-control" placeholder="Search"/>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={searchRefDrawer} style={{height:'100%'}}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Shop">Shop</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
