// import React, { Component } from "react";
// import DepartmentsBtn from "../../../components/department-btn/department-btn.component";
// import SortingBtn from "../../../components/sorting-btn/sorting-btn.component";
// import CollectionDisplay from "../../../components/collection-display/collection-display.component";
// import SHOP_DATA from "../shop.data";
// import "./store.styles.scss";
// import CollectionTopic from "../../../components/collection-topic/collection-topic.component";

// class StorePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: STORE_DATA,
//       chooseItems: ["all"],
//       allCounter: 1,
//     };
//   }

//   componentDidMount() {
//     console.log(this.props.location.search);

//     const values = queryString.parse(this.props.location.search);
//     console.log("values :", values.q);
//   }

//   putItemInArr = (str) => {
//     if (!this.state.chooseItems.includes(str) || str === "all") {
//       // console.log("str :", str);

//       if (str === "all") {
//         this.setState((prevState) => ({
//           allCounter: prevState.allCounter + 1,
//         }));
//       }
//       this.setState((prevState) => ({
//         chooseItems: [...prevState.chooseItems, str],
//       }));
//     } else {
//       this.setState((prevState) => ({
//         chooseItems: [...prevState.chooseItems.filter((item) => item !== str)],
//       }));
//     }
//   };

//   sortBtnClick = (str) => {
//     // console.log("strssort :", str);

//     switch (str) {
//       case "Price: Low to High":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.sort((a, b) => a.price - b.price);
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });
//         break;

//       case "Price: High to Low":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.sort((a, b) => b.price - a.price);
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });

//         break;
//       case "Price: Under $25":
//         console.log("SHOP_DATA :", SHOP_DATA);

//       //   this.setState((prevState) => {

//       //  var arr=[]
//       //   for (let i = 0; i < SHOP_DATA.length; i++) {
//       //     for (let j = 0; j < SHOP_DATA[i].items.length; j++) {
//       //       if (SHOP_DATA[i].items[j].price <= 25) {
//       //         console.log("dddddd");
//       //       }

//       //     }
//       //   }
//       //   })

//       //   break;

//       case "Price: Under $25":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.filter((collection) => collection.price <= 25);
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });
//         break;

//       case "Price: $25 to $50":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.sort((a, b) => a.price - b.price);
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });
//         break;

//       case "Price: $50 to $100":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.sort((a, b) => a.price - b.price);
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });
//         break;

//       case "Price: $100 to $200":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.sort((a, b) => a.price - b.price);
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });
//         break;

//       case "Price: $200 & Above":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.sort((a, b) => a.price - b.price);
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });
//         break;

//       case "Name: A to Z":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.sort((a, b) => {
//               var x = a.name.toLowerCase();
//               var y = b.name.toLowerCase();
//               if (x < y) {
//                 return -1;
//               }
//               if (x > y) {
//                 return 1;
//               }
//               return 0;
//             });
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });

//         break;

//       case "Name: Z to A":
//         this.setState((prevState) => {
//           prevState.collections.map((col) => {
//             return col.items.sort((a, b) => {
//               var x = a.name.toLowerCase();
//               var y = b.name.toLowerCase();
//               if (x < y) {
//                 return 1;
//               }
//               if (x > y) {
//                 return -1;
//               }
//               return 0;
//             });
//           });
//           return {
//             collections: prevState.collections,
//           };
//         });

//         break;

//       default:
//         break;
//     }
//     // if (str === "Price: Low to High") {
//     //   this.setState((prevState) => {
//     //     prevState.collections.map((col) => {
//     //       return col.items.sort((a, b) => a.price - b.price);
//     //     });

//     //     return {
//     //       collections: prevState.collections,
//     //     };
//     //   });

//     // }
//   };

//   /* */
//   render() {
//     const { collections, chooseItems, allCounter, sorting } = this.state;
//     return (
//       <div className="store-page">
//         <div className="upper-store-content">
//           <DepartmentsBtn
//             key={0}
//             title={"ALL"}
//             handleClick={this.putItemInArr}
//           />
//           {collections.map((item) => (
//             <div class="department-btn">
//               <DepartmentsBtn
//                 key={item.id}
//                 title={item.title.toLocaleUpperCase()}
//                 handleClick={this.putItemInArr}
//               />{" "}
//             </div>
//           ))}

//           <div className="sorting-btn">
//             <SortingBtn sortBtnClick={this.sortBtnClick} />
//           </div>
//         </div>

//         {(chooseItems.length === 1 && chooseItems[0] === "all") ||
//         allCounter % 2 === 0
//           ? collections.map(({ id, ...otherCollectionProps }) => (
//               <CollectionTopic key={id} {...otherCollectionProps} />
//             ))
//           : collections
//               .filter((collection) =>
//                 chooseItems.includes(collection.routeName)
//               )
//               .map(({ id, ...otherCollectionProps }) => (
//                 <CollectionTopic key={id} {...otherCollectionProps} />
//               ))}
//       </div>
//     );
//   }
// }

// export default StorePage;
// // {collections.map(({ id, ...otherCollectionProps }) => (
// //         <CollectionDisplay key={id} {...otherCollectionProps} />
// //       ))}

// //  {
// //    collections
// //      .filter((collection) => chooseItems.includes(collection.title))
// //      .map(({ id, ...otherCollectionProps }) => (
// //        <CollectionTopic key={id} {...otherCollectionProps} />
// //      ));
// //  }
