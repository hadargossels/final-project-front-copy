import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionsOverviewAll from "./../../components/collections-overview-All/collections-overview-all.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverviewAll} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
