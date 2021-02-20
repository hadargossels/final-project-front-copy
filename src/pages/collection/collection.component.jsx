import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";
import { withRouter } from "react-router-dom";

const CollectionPage = ({ collection, history }) => {
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
