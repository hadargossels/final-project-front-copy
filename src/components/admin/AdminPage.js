import * as React from "react";
import { usersCreate, usersEdit, usersList } from "./users";
// import { Roll } from "./role";
// import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
// import {
//   // FirebaseDataProvider,
//   FirebaseAuthProvider,
// } from "react-admin-firebase";
import firebaseDataProvider from "ra-data-firebase-client";
import firebase from "firebase/app";

// import firebase from "../../firebase";
// import { db } from "../../firebase";
// import { auth } from "../../firebase";
import CustomLoginPage from "./CustomLoginPage";
import { ProductsCreate, ProductsEdit, ProductsList } from "./products";

// const ref = firebase.firestore().collection("root_collection");
// console.log("ref", ref);
// const firebaseConfig = {
//   apiKey: "AIzaSyDZE8Gm_4PkvUnXjdd6en75ECZzy9ZtOqc",
//   authDomain: "my-react-store.firebaseapp.com",
//   projectId: "my-react-store",
//   storageBucket: "my-react-store.appspot.com",
//   messagingSenderId: "1068840250479",
//   appId: "1:1068840250479:web:d1e058e5875454b509b19a",
//   measurementId: "G-YSZXR75F0N",
//   databaseURL: "https://my-react-store-default-rtdb.firebaseio.com",
// };
const settings = { context: "dev", imagekey: "images", filekey: "files" };
const options = {
  logging: true,
  // rootRef: "root_collection/some_document",
  // // app: firebaseApp,
  // persistence: "local",
  // dontAddIdFieldToDoc: true,
  // lazyLoading: {
  //   enabled: true,
  // },
  // firestoreCostsLogger: {
  //   enabled: true,
  // },
};
// const dataProvider = FirebaseDataProvider(firebase, {});
// const authProvider = FirebaseAuthProvider(firebaseConfig, options);
// import localFirebase from "./firebase";

// const authProvider = FirebaseAuthProvider(localFirebase.App);

// const dataProvider = jsonServerProvider(
//   "https://my-react-store-default-rtdb.firebaseio.com/"
// );
const AdminPage = () => (
  <Admin
    dataProvider={firebaseDataProvider(firebase, {})}
    // dataProvider={dataProvider}
    loginPage={CustomLoginPage}
    // authProvider={authProvider}
  >
    <Resource
      name="blogs"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="users"
      list={usersList}
      edit={usersEdit}
      create={usersCreate}
    />
    <Resource
      name="products"
      list={ProductsList}
      edit={ProductsEdit}
      create={ProductsCreate}
    />
  </Admin>
);

export default AdminPage;
