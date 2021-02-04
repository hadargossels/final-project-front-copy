import React, { Component } from "react";
import DepartmentsBtn from "../../../components/department-btn/department-btn.component";
import SortingBtn from "../../../components/sorting-btn/sorting-btn.component";
import CollectionDisplay from "../../../components/collection-display/collection-display.component";
import SHOP_DATA from "../shop.data";
import "./store.styles.scss";
import CollectionTopic from "../../../components/collection-topic/collection-topic.component";

class StorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
      chooseItems: ["all"],
      allCounter: 1,
      sorting: "none",
    };
  }

  putItemInArr = (str) => {
    if (!this.state.chooseItems.includes(str) || str === "all") {
      console.log("str :", str);

      if (str === "all") {
        this.setState((prevState) => ({
          allCounter: prevState.allCounter + 1,
        }));
      }
      this.setState((prevState) => ({
        chooseItems: [...prevState.chooseItems, str],
      }));
    } else {
      this.setState((prevState) => ({
        chooseItems: [...prevState.chooseItems.filter((item) => item !== str)],
      }));
    }
  };

  sortBtnClick = (str) => {
    console.log("strssort :", str);
    if (str === "price") {
      this.setState((prevState) => {
        prevState.collections.map((col) => {
          return col.items.sort((a, b) => a.price - b.price);
        });

        return {
          collections: prevState.collections,
        };
      });

      // this.setState({

      //   // collections: this.collections.sort(function (a, b) {
      //   //   return a.items.price - b.items.price;
      //   // }),
      // });
    }
  };

  /* */
  render() {
    const { collections, chooseItems, allCounter, sorting } = this.state;
    return (
      <div className="store-page">
        <div className="upper-store-content">
          <DepartmentsBtn
            key={0}
            title={"ALL"}
            handleClick={this.putItemInArr}
          />
          {collections.map((item) => (
            <div class="department-btn">
              <DepartmentsBtn
                key={item.id}
                title={item.title.toLocaleUpperCase()}
                handleClick={this.putItemInArr}
              />{" "}
            </div>
          ))}

          <div className="sorting-btn">
            <SortingBtn sortBtnClick={this.sortBtnClick} />
          </div>
        </div>

        {(chooseItems.length === 1 && chooseItems[0] === "all") ||
        allCounter % 2 === 0
          ? collections.map(({ id, ...otherCollectionProps }) => (
              <CollectionTopic key={id} {...otherCollectionProps} />
            ))
          : collections
              .filter((collection) =>
                chooseItems.includes(collection.routeName)
              )
              .map(({ id, ...otherCollectionProps }) => (
                <CollectionTopic key={id} {...otherCollectionProps} />
              ))}
      </div>
    );
  }
}

export default StorePage;
// {collections.map(({ id, ...otherCollectionProps }) => (
//         <CollectionDisplay key={id} {...otherCollectionProps} />
//       ))}

//  {
//    collections
//      .filter((collection) => chooseItems.includes(collection.title))
//      .map(({ id, ...otherCollectionProps }) => (
//        <CollectionTopic key={id} {...otherCollectionProps} />
//      ));
//  }
