import React, { Component } from "react";
import DepartmentsBtn from "../../../components/department-btn/department-btn.component";
import SortingBtn from "../../../components/sorting-btn/sorting-btn.component";
import CollectionDisplay from "../../../components/collection-display/collection-display.component";
import SHOP_DATA from "../shop.data";
import "./store.styles.scss";
import CollectionTopic from "../../../components/collection-topic/collection-topic.component";
import { useLocation } from "react-router";

import queryString from "query-string";
import FilterSidebar from "../../../components/filter-sidebar/filter-sidebar.component";

class StorePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
      chooseItems: ["all"],
      allCounter: 1,
      searchData: "",
    };
  }

  componentDidMount() {
    console.log(this.props.location.search);

    const values = queryString.parse(this.props.location.search);
    console.log("values :", values.q);

    this.setState({ searchData: values.q });
  }

  putItemInArr = (str) => {
    this.setState({ searchData: "" });
    if (!this.state.chooseItems.includes(str) || str === "all") {
      // console.log("str :", str);

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
    // console.log("strssort :", str);

    switch (str) {
      case "Price: Low to High":
        this.setState((prevState) => {
          prevState.collections.map((col) => {
            return col.items.sort((a, b) => a.price - b.price);
          });
          return {
            collections: prevState.collections,
          };
        });
        break;

      case "Price: High to Low":
        this.setState((prevState) => {
          prevState.collections.map((col) => {
            return col.items.sort((a, b) => b.price - a.price);
          });
          return {
            collections: prevState.collections,
          };
        });

        break;

      case "Price: Under $25":
        const newData = [...SHOP_DATA]
          .map((cat) => {
            return {
              ...cat,
              items: cat.items.filter((item) => item.price <= 25),
            };
          })
          .filter((a) => a.items.length);
        // console.log(newData);
        this.setState({ collections: newData });

        break;

      case "Price: $25 to $50":
        const newData2 = [...SHOP_DATA]
          .map((cat) => {
            return {
              ...cat,
              items: cat.items.filter(
                (item) => item.price >= 25 && item.price <= 50
              ),
            };
          })
          .filter((a) => a.items.length);
        // console.log(newData);
        this.setState({ collections: newData2 });

        break;

      case "Price: $50 to $100":
        const newData3 = [...SHOP_DATA]
          .map((cat) => {
            return {
              ...cat,
              items: cat.items.filter(
                (item) => item.price >= 50 && item.price <= 100
              ),
            };
          })
          .filter((a) => a.items.length);
        // console.log(newData);
        this.setState({ collections: newData3 });

        break;

      case "Price: $100 to $150":
        const newData4 = [...SHOP_DATA]
          .map((cat) => {
            return {
              ...cat,
              items: cat.items.filter(
                (item) => item.price >= 100 && item.price <= 150
              ),
            };
          })
          .filter((a) => a.items.length);
        // console.log(newData);
        this.setState({ collections: newData4 });

        break;

      case "Price: $150 to $200":
        const newData5 = [...SHOP_DATA]
          .map((cat) => {
            return {
              ...cat,
              items: cat.items.filter(
                (item) => item.price >= 150 && item.price <= 200
              ),
            };
          })
          .filter((a) => a.items.length);
        // console.log(newData);
        this.setState({ collections: newData5 });

        break;

      case "Price: $200 & Above":
        const newData6 = [...SHOP_DATA]
          .map((cat) => {
            return {
              ...cat,
              items: cat.items.filter((item) => item.price >= 200),
            };
          })
          .filter((a) => a.items.length);
        // console.log(newData);
        this.setState({ collections: newData6 });

        break;

      case "Name: A to Z":
        this.setState((prevState) => {
          prevState.collections.map((col) => {
            return col.items.sort((a, b) => {
              var x = a.name.toLowerCase();
              var y = b.name.toLowerCase();
              if (x < y) {
                return -1;
              }
              if (x > y) {
                return 1;
              }
              return 0;
            });
          });
          return {
            collections: prevState.collections,
          };
        });

        break;

      case "Name: Z to A":
        this.setState((prevState) => {
          prevState.collections.map((col) => {
            return col.items.sort((a, b) => {
              var x = a.name.toLowerCase();
              var y = b.name.toLowerCase();
              if (x < y) {
                return 1;
              }
              if (x > y) {
                return -1;
              }
              return 0;
            });
          });
          return {
            collections: prevState.collections,
          };
        });

        break;

      default:
        break;
    }
  };

  /* */
  render() {
    const { collections, chooseItems, allCounter, searchData } = this.state;
    return (
      <div className="store-page">
        {/* <FilterSidebar /> */}
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
        <br />
        <h1>
          {searchData !== undefined &&
            searchData !== "" &&
            `
            
            showing results for ` +
              `"` +
              searchData +
              `" :`}
        </h1>
        {(chooseItems.length === 1 && chooseItems[0] === "all") ||
        allCounter % 2 === 0
          ? collections.map(({ id, ...otherCollectionProps }) => (
              <CollectionTopic
                searchData={searchData}
                key={id}
                {...otherCollectionProps}
              />
            ))
          : collections
              .filter((collection) =>
                chooseItems.includes(collection.routeName)
              )
              .map(({ id, ...otherCollectionProps }) => (
                <CollectionTopic
                  searchData={searchData}
                  key={id}
                  {...otherCollectionProps}
                />
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
