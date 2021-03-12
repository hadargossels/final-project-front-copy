import React, { useContext, useState, useEffect } from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

// import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionsContext from "../../contexts/collections/collections.context";
import { fireInfo } from "../../firebase/firebase.utils";

import "./collection.styles.scss";
// import { withRouter } from "react-router-dom";
import {
  SpinnerContainer,
  SpinnerOverlay,
} from "./../../components/with-spinner/with-spinner.styles";

const CollectionPage = ({ match, history }) => {
  // const collections = useContext(CollectionsContext);

  const [collection, setSelectedCollection] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const collectionsRef = fireInfo.database().ref("SHOP_DATA");
    // console.log("collectionsRef :", collectionsRef);
    collectionsRef.on("value", (snapshot) => {
      const collectionsMap = snapshot.val();
      // console.log("collectionsMap :", collectionsMap);

      // console.log("match.params.collectionId :", match.params.collectionId);
      setSelectedCollection(collectionsMap[match.params.collectionId]);
    });
    setLoading(false);
  }, []);

  const { title, items } = collection;
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <div className="container">
      {" "}
      <button
        type="button"
        class="btn btn-dark"
        onClick={() => history.push(`/shop/`)}
      >
        See all categories
      </button>
      <div className="collection-page   row item-grid-component">
        <h2 className="title">{title}</h2>
        <div className="items preview   ">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

export default CollectionPage;
