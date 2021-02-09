import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import QuickView from "../quick-view/quick-view.component";
import "./collection-topic.styles.scss";

const CollectionTopic = ({ imageUrl, title, items, searchData }) => {
  return (
    <div className="topic-preview">
      <h1>{!searchData && title.toUpperCase()}</h1>
      <div className="topic-display">
        {!searchData
          ? items.map(({ ...otherItemProps }) => {
              {
                /* console.log(
                "...otherItemProps :",
                { ...otherItemProps }.imageUrl
              ); */
              }
              {
                var imglink = { ...otherItemProps }.imageUrl;
              }
              return (
                <>
                  {/* <QuickView img={imglink} /> */}
                  <CollectionItem {...otherItemProps} />
                </>
              );
            })
          : items
              .filter((item) => item.name.toLowerCase().includes(searchData))
              .map(({ ...otherItemProps }) => (
                <CollectionItem {...otherItemProps} />
              ))}
      </div>
    </div>
  );
};
export default CollectionTopic;
