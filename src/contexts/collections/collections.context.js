import { createContext } from "react";
import { fireInfo } from "../../firebase/firebase.utils";
import SHOP_DATA from "./shop.data";
import axios from "axios";

const shopRef = fireInfo.database().ref("SHOP_DATA");
shopRef.on("value", (snapshot) => {
  const data = snapshot.val();
  console.log("snapshot :", snapshot.val());
  //   const data = snapshot.val();
});
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;

// componentDidMount(){
//       var arrProductRef = db.ref(`Products`);
//       arrProductRef.on('value', (snapshot) => {
//       let data = snapshot.val();
//       if(!Array.isArray(data)){
//         let arr=[];
//         for (const property in data) {
//           arr.push(data[property])
//         }
//         data=arr;
//       }
//       this.setState({arrayAllProduct:data});
//     });

// async componentDidMount() {

//   let data;

// await GetRequest('http://localhost:3001/','db').then(res => { data = res.data });

// await db.on("value", async (snapshot) => {

//   data = await (snapshot.val());

//   for (const [key, value] of Object.entries(data)) {

//     data[key] = Object.keys(data[key]).map((iKey) => data[key][iKey])
//   }

//   console.log(data)
//   this.props.fetchData(data);

// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// this.props.fetchData(data);
// }
