import React, { useContext, useState, useEffect } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";
import CollectionsContext from "../../contexts/collections/collections.context";

import "./collections-overview.styles.scss";
import { fireInfo } from "../../firebase/firebase.utils";

const CollectionsOverview = () => {
  // const collectionsMap = useContext(CollectionsContext);
  // const collections = Object.keys(collectionsMap).map(
  //   (key) => collectionsMap[key]
  // );

  const [collections, setSelectedCollection] = useState([]);

  useEffect(() => {
    const collectionsRef = fireInfo.database().ref("SHOP_DATA");
    console.log("collectionsRef :", collectionsRef);
    collectionsRef.on("value", (snapshot) => {
      const collectionsMap = snapshot.val();
      console.log("collectionsMap :", collectionsMap);

      const collectionsArr = Object.keys(collectionsMap).map(
        (key) => collectionsMap[key]
      );

      console.log("collectionsArr :", collectionsArr);
      setSelectedCollection(collectionsArr);
    });
  }, []);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
