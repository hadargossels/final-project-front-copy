import React, { useContext, useState, useEffect } from "react";
// import { createStructuredSelector } from "reselect";

// import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview-all.styles.scss";
import CollectionViewAll from "./../collection-view-all/collection-view-all.component";
import CollectionsContext from "../../contexts/collections/collections.context";

import DepartmentsBtn from "./../department-btn/department-btn.component";
import SortingBtn from "./../sorting-btn/sorting-btn.component";

import queryString from "query-string";
import { useLocation } from "react-router";

import { CartContext } from "./../../providers/cart/cart.provider";
const CollectionsOverviewAll = () => {
  // const collectionsMap = useContext(CollectionsContext);

  const selectedCollection = useContext(CartContext);

  // const collections = Object.keys(collectionsMap).map(
  //   (key) => collectionsMap[key]
  // );

  const [displayAll, setDisplayAll] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  // const [selectedCollection, setSelectedCollection] = useState(collections);

  const [noMatchingItems, setNoMatchingItems] = useState(false);
  const { search } = useLocation();

  // console.log(search);
  const { q } = queryString.parse(search);

  // console.log("q :", q);
  const [selectedSorting, setSelectedSorting] = useState();

  const [searchData, setSearchData] = useState(q);

  const putItemInArr = (str) => {
    setSearchData(null);
    setDisplayAll(false);
    if (!selectedItems.includes(str)) {
      setSelectedItems((prevState) => [...prevState, str]);
    } else {
      setSelectedItems((prevState) => [
        ...prevState.filter((item) => item !== str),
      ]);
    }
  };

  const sortBtnClick = (str) => {
    setSearchData(null);

    setSelectedSorting(str);
  };

  const handleNoMatchingItems = () => {
    setNoMatchingItems(!noMatchingItems);
  };

  return (
    selectedCollection && (
      <div className="collections-overview">
        <div className="upper-store-content">
          {displayAll ? (
            <div
              className="btn-group-toggle"
              data-toggle="buttons"
              onClick={() => {
                setDisplayAll(false);
              }}
            >
              <label className="btn btn-secondary active">
                <input type="checkbox" defaultChecked autoComplete="off" /> ALL
              </label>
            </div>
          ) : (
            <div
              className="btn-group-toggle"
              data-toggle="buttons"
              onClick={() => {
                setDisplayAll(true);
              }}
            >
              <label className="btn btn-secondary ">
                <input type="checkbox" defaultChecked autoComplete="off" /> ALL
              </label>
            </div>
          )}

          {selectedCollection.map((item) => (
            <div class="department-btn">
              <DepartmentsBtn
                key={item.id}
                title={item.title.toLocaleUpperCase()}
                handleClick={putItemInArr}
              />{" "}
            </div>
          ))}

          <div className="sorting-btn">
            <SortingBtn sortBtnClick={sortBtnClick} />
          </div>
        </div>

        {searchData && <h1>Showing results for: "{searchData}"</h1>}

        {/* {searchData &&
        selectedCollection
          .map((collection) => collection.items)
          .map((items) => items.name)
          .some((item) =>
            item.toLowerCase().includes(searchData.toLowerCase())
          ) === false && <h1>there are no matching Items</h1>} */}

        {displayAll
          ? selectedCollection.map(({ id, ...otherCollectionProps }) => (
              <CollectionViewAll
                searchData={searchData}
                handleNoMatchingItems={handleNoMatchingItems}
                selectedSorting={selectedSorting}
                key={id}
                {...otherCollectionProps}
              />
            ))
          : selectedCollection
              .filter((collection) =>
                selectedItems.includes(collection.routeName)
              )
              .map(({ id, ...otherCollectionProps }) => (
                <CollectionViewAll
                  searchData={searchData}
                  handleNoMatchingItems={handleNoMatchingItems}
                  selectedSorting={selectedSorting}
                  key={id}
                  {...otherCollectionProps}
                />
              ))}
      </div>
    )
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview,
// });

// export default connect(mapStateToProps)(CollectionsOverviewAll);

export default CollectionsOverviewAll;

// import React, { useContext, useState, useEffect } from "react";
// // import { createStructuredSelector } from "reselect";

// // import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
// import { fireInfo } from "./../../firebase/firebase.utils";

// import "./collections-overview-all.styles.scss";
// import CollectionViewAll from "./../collection-view-all/collection-view-all.component";
// import CollectionsContext from "../../contexts/collections/collections.context";

// import DepartmentsBtn from "./../department-btn/department-btn.component";
// import SortingBtn from "./../sorting-btn/sorting-btn.component";

// import queryString from "query-string";
// import { useLocation } from "react-router";

// const CollectionsOverviewAll = () => {
//   // const collectionsMap = useContext(CollectionsContext);

//   // const [collectionsMap, setCollectionsMap] = useState({});

//   // useEffect(() => {
//   //   const shopRef = fireInfo.database().ref("SHOP_DATA");
//   //   shopRef.on("value", (snapshot) => {
//   //     const data = snapshot.val();
//   //     console.log("snapshot :", snapshot.val());
//   //     const info = snapshot.val();

//   //     setCollectionsMap(info);
//   //   });
//   // }, [info]);

//   // const collections = Object.keys(collectionsMap).map(
//   //   (key) => collectionsMap[key]
//   // );

//   const [displayAll, setDisplayAll] = useState(true);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [selectedCollection, setSelectedCollection] = useState(null);

//   const [noMatchingItems, setNoMatchingItems] = useState(false);

//   const [collections, setCollectionsArr] = useState(null);

//   useEffect(() => {
//     const shopRef = fireInfo.database().ref("SHOP_DATA");
//     shopRef.on("value", (snapshot) => {
//       let collectionsMap = snapshot.val();
//       console.log("snapshot :", snapshot.val());
//       // const info = snapshot.val();

//       const data = Object.keys(collectionsMap).map(
//         (key) => collectionsMap[key]
//       );

//       console.log("data :", data);
//       setCollectionsArr(data);
//       setSelectedCollection(data);
//     });
//   }, []);

//   const { search } = useLocation();

//   // console.log(search);
//   const { q } = queryString.parse(search);

//   // console.log("q :", q);
//   const [selectedSorting, setSelectedSorting] = useState();

//   const [searchData, setSearchData] = useState(q);

//   const putItemInArr = (str) => {
//     setSearchData(null);
//     setDisplayAll(false);
//     if (!selectedItems.includes(str)) {
//       setSelectedItems((prevState) => [...prevState, str]);
//     } else {
//       setSelectedItems((prevState) => [
//         ...prevState.filter((item) => item !== str),
//       ]);
//     }
//   };

//   const sortBtnClick = (str) => {
//     setSearchData(null);

//     setSelectedSorting(str);
//   };

//   const handleNoMatchingItems = () => {
//     setNoMatchingItems(!noMatchingItems);
//   };

//   return (
//     collections && (
//       <div className="collections-overview">
//         <div className="upper-store-content">
//           {displayAll ? (
//             <div
//               className="btn-group-toggle"
//               data-toggle="buttons"
//               onClick={() => {
//                 setDisplayAll(false);
//               }}
//             >
//               <label className="btn btn-secondary active">
//                 <input type="checkbox" defaultChecked autoComplete="off" /> ALL
//               </label>
//             </div>
//           ) : (
//             <div
//               className="btn-group-toggle"
//               data-toggle="buttons"
//               onClick={() => {
//                 setDisplayAll(true);
//               }}
//             >
//               <label className="btn btn-secondary ">
//                 <input type="checkbox" defaultChecked autoComplete="off" /> ALL
//               </label>
//             </div>
//           )}

//           {selectedCollection.map((item) => (
//             <div class="department-btn">
//               <DepartmentsBtn
//                 key={item.id}
//                 title={item.title.toLocaleUpperCase()}
//                 handleClick={putItemInArr}
//               />{" "}
//             </div>
//           ))}

//           <div className="sorting-btn">
//             <SortingBtn sortBtnClick={sortBtnClick} />
//           </div>
//         </div>

//         {searchData && <h1>Showing results for: "{searchData}"</h1>}

//         {/* {searchData &&
//         selectedCollection
//           .map((collection) => collection.items)
//           .map((items) => items.name)
//           .some((item) =>
//             item.toLowerCase().includes(searchData.toLowerCase())
//           ) === false && <h1>there are no matching Items</h1>} */}

//         {displayAll
//           ? selectedCollection.map(({ id, ...otherCollectionProps }) => (
//               <CollectionViewAll
//                 searchData={searchData}
//                 handleNoMatchingItems={handleNoMatchingItems}
//                 selectedSorting={selectedSorting}
//                 key={id}
//                 {...otherCollectionProps}
//               />
//             ))
//           : selectedCollection
//               .filter((collection) =>
//                 selectedItems.includes(collection.routeName)
//               )
//               .map(({ id, ...otherCollectionProps }) => (
//                 <CollectionViewAll
//                   searchData={searchData}
//                   handleNoMatchingItems={handleNoMatchingItems}
//                   selectedSorting={selectedSorting}
//                   key={id}
//                   {...otherCollectionProps}
//                 />
//               ))}
//       </div>
//     )
//   );
// };

// // const mapStateToProps = createStructuredSelector({
// //   collections: selectCollectionsForPreview,
// // });

// // export default connect(mapStateToProps)(CollectionsOverviewAll);

// export default CollectionsOverviewAll;
