import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItemPreview from "../collection-item-preview/collection-item-preview.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, routeName }) => (
  <div className="collection-preview  row item-grid-component ">
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
          <CollectionItemPreview key={item.id} item={item} />
        ))}

      <button
        type="button"
        class="btn btn-primary"
        onClick={() => history.push(`/shop/${routeName.toLowerCase()}`)}
      >
        See More...
      </button>
    </div>
  </div>
);

export default withRouter(CollectionPreview);
