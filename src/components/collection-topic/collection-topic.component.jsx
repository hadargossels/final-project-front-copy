import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-topic.styles.scss";
import queryString from "query-string";
import { useLocation } from "react-router";

const CollectionTopic = ({ title, items }) => {
  const { search } = useLocation();
  const { q } = queryString.parse(search);

  console.log("yesss", q);

  if (q === "") {
    console.log("good");
  }

  return (
    <div className="topic-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="topic-display">
        {!q
          ? items.map(({ ...otherItemProps }) => (
              <CollectionItem {...otherItemProps} />
            ))
          : items
              .filter((item) => item.name.toLowerCase().includes(q))
              .map(({ ...otherItemProps }) => (
                <CollectionItem {...otherItemProps} />
              ))}
      </div>
    </div>
  );
};
export default CollectionTopic;

// items.map((item,i)=>{
//  i!==i+1?

// })
