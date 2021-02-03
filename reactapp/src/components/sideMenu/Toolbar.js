import React from "react";
import SideMenu from "./Menu";
import "./Toolbar.css";

const Toolbar = props => (
  // <header className="toolbar">
  //   <nav className="toolbar_navigator">
  //     <div />
  //     <div className="toggle-btn">
  //       <SideMenu click={props.drawerToggleClickHandler} />
  //     </div>
  //     <div className="toolbar_logo">
  //       <a href="/">The Logo</a>
  //     </div>
  //     <div className="spacer" />
  //     <div className="toolbar_navigation-items">
  //       <ul>
  //         <li>
  //           <a href="/">Products</a>
  //         </li>
  //         <li>
  //           <a href="/user">User</a>
  //         </li>
  //         <li>
  //           <a href="/music">Music</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // </header>
   <div className="toggle-btn">

         <SideMenu click={props.drawerToggleClickHandler} />
  </div>
);

export default Toolbar;
