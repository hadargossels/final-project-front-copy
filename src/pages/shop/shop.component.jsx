// import React from "react";
// // import SHOP_DATA from "./shop.data";
// // import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// // import SortingBtn from "../../components/sorting-btn/sorting-btn.component";

// import "./shop.styles.scss";
// // import DepartmentsBtn from "../../components/department-btn/department-btn.component";
// // import { selectCollections } from "./../../redux/shop/shop.selectors";
// // import { connect } from "react-redux";
// // import { createStructuredSelector } from "reselect";
// import CollectionsOverview from "./../../components/collections-overview/collections-overview.component";

// import { Route } from "react-router-dom";

// // class ShopPage extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       collections: SHOP_DATA,
// //     };
// //   }

// //   render() {
// //     const { collections } = this.state;
// //     return (
// //       <div className="shop-page">
// //         <h1>Categories</h1>
// //         {collections.map(({ id, ...otherCollectionProps }) => (
// //           <CollectionPreview key={id} {...otherCollectionProps} />
// //         ))}
// //       </div>
// //     );
// //   }
// // }

// const ShopPage = ({ match }) => {
//   console.log("match :", match);

//   return (
//     <div className="shop-page">
//       <h1>Categories</h1>
//       {/* {collections.map(({ id, ...otherCollectionProps }) => (
//       <CollectionPreview key={id} {...otherCollectionProps} />
//     ))} */}
//       <CollectionsOverview />
//     </div>
//   );
// };
// // const mapStateToProps = createStructuredSelector({
// //   collections: selectCollections,
// // });

// // export default connect(mapStateToProps)(ShopPage);

// export default ShopPage;

import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
