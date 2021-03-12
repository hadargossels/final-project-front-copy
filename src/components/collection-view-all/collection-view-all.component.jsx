import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-view-all.styles.scss";

const CollectionViewAll = ({
  title,
  items,
  selectedSorting,
  searchData,
  history,
  handleNoMatchingItems,
}) => {
  return (
    <div className="collection-preview row item-grid-component ">
      {!searchData && <h1 className="title">{title.toUpperCase()}</h1>}

      {/* <button
        onClick={() => {
          handleNoMatchingItems();
        }}
      >
        click
      </button> */}

      {/* {searchData &&
        items.some((item) =>
          item.name.toLowerCase().includes(searchData.toLowerCase())
        ) === false &&
        setState()} */}
      <div className="preview">
        {searchData &&
          items
            .filter((item) =>
              item.name.toLowerCase().includes(searchData.toLowerCase())
            )
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {!selectedSorting &&
          !searchData &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Price: Low to High" &&
          !searchData &&
          items
            .sort((a, b) => a.price - b.price)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Price: High to Low" &&
          !searchData &&
          items
            .sort((a, b) => b.price - a.price)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Price: Under $25" &&
          !searchData &&
          items
            .filter((item) => item.price <= 25)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Price: $25 to $50" &&
          !searchData &&
          items
            .filter((item) => item.price >= 25 && item.price <= 50)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Price: $50 to $100" &&
          !searchData &&
          items
            .filter((item) => item.price >= 50 && item.price <= 100)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Price:$100 to $150" &&
          !searchData &&
          items
            .filter((item) => item.price >= 100 && item.price <= 150)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Price:$150 to $200" &&
          !searchData &&
          items
            .filter((item) => item.price >= 150 && item.price <= 200)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Price: $200 & Above" &&
          !searchData &&
          items
            .filter((item) => item.price >= 200)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Name: A to Z" &&
          !searchData &&
          items
            .sort((a, b) => {
              var x = a.name.toLowerCase();
              var y = b.name.toLowerCase();
              if (x < y) {
                return -1;
              }
              if (x > y) {
                return 1;
              }
              return 0;
            })
            .map((item) => <CollectionItem key={item.id} item={item} />)}
        {selectedSorting === "Name: Z to A" &&
          !searchData &&
          items
            .sort((a, b) => {
              var x = a.name.toLowerCase();
              var y = b.name.toLowerCase();
              if (x < y) {
                return 1;
              }
              if (x > y) {
                return -1;
              }
              return 0;
            })
            .map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CollectionViewAll;
