import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, routeName }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`/shop/${routeName.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </h1>{" "}
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
    <button
      type="button"
      class="btn btn-warning"
      onClick={() => history.push(`/shop/${routeName.toLowerCase()}`)}
    >
      See More...
    </button>
  </div>
);

export default withRouter(CollectionPreview);
