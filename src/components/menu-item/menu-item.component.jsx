import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// ({title})= props.title
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <div
    className="menu-item"
    onClick={() => history.push(`/shop/${linkUrl.toLowerCase()}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">View Products</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
