import React, { useContext } from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

// import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionsContext from "../../contexts/collections/collections.context";

import "./collection.styles.scss";
// import { withRouter } from "react-router-dom";

const CollectionPage = ({ match, history }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];

  const { title, items } = collection;
  return (
    <>
      {" "}
      <button
        type="button"
        class="btn btn-dark"
        onClick={() => history.push(`/shop/`)}
      >
        See all categories
      </button>
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

export default CollectionPage;
