import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "./../../redux/shop/shop.selectors";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils.js";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionPage from "../collection/collection.component";
import CollectionsOverviewAll from "./../../components/collections-overview-All/collections-overview-all.component";

// const ShopPage = ({ match }) => (
//   <div className="shop-page">
//     <Route exact path={`${match.path}`} component={CollectionsOverviewAll} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverviewAll);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    // const { updateCollections } = this.props;

    // const collectionRef = firestore.collection("collections");

    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   // console.log("collectionsMap :", collectionsMap);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetchingCollection, isCollectionsLoaded } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isFetchingCollection}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollection: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
