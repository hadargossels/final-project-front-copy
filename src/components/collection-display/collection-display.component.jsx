import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-display.styles.scss";

const CollectionDisplay = ({
  title,
  items,
  history,
  linkUrl,
  match,
  routeName,
}) => (
  <div
    className="collection-display"
    onClick={() => history.push(`${routeName.toLowerCase()}`)}
  >
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="display">
      {items.map(({ id, ...otherItemProps }) => (
        <CollectionItem
          // key={items.id}
          {...otherItemProps}
          // width={"200px"}
          // height={"200px"}
        />
      ))}
    </div>
  </div>
);

// export default CollectionPreview;

export default withRouter(CollectionDisplay);
