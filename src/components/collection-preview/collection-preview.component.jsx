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
  <div
    className="collection-preview"
    onClick={() => history.push(`${routeName.toLowerCase()}`)}
  >
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={items.id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

// export default CollectionPreview;

export default withRouter(CollectionPreview);
