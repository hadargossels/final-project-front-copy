import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({
  title,
  items,
  history,
  linkUrl,
  match,
  routeName,
}) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${routeName.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </h1>

    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem {...otherItemProps} />
        ))}
    </div>
    <button
      type="button"
      class="btn btn-warning"
      onClick={() => history.push(`${routeName.toLowerCase()}`)}
    >
      See More...
    </button>
  </div>
);

// export default CollectionPreview;

export default withRouter(CollectionPreview);
