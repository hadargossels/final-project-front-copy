import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-topic.styles.scss";

const CollectionTopic = ({ title, items }) => (
  <div className="topic-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="topic-display">
      {items.map(({ id, ...otherItemProps }) => (
        <CollectionItem key={items.id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

export default CollectionTopic;
