import * as React from "react";
// import { usersCreate, usersEdit, usersList } from "./users";
import { UserCreate, UserEdit, UserList } from "./CreateUser";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import { FirebaseAuthProvider } from "react-admin-firebase";
import firebaseDataProvider from "ra-data-firebase-client";
import firebase from "firebase/app";

import CustomLoginPage from "./CustomLoginPage";
import { ProductsCreate, ProductsEdit, ProductsList } from "./products";

const settings = { context: "dev", imagekey: "images", filekey: "files" };
const options = {
  logging: true,
  rootRef: "root_collection/some_document",
  persistence: "local",
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
};
const authProvider = FirebaseAuthProvider(firebase, options);
const createuserSignUp = () => (
  <Admin
    dataProvider={firebaseDataProvider(firebase, {})}
    loginPage={CustomLoginPage}
    authProvider={authProvider}
  >
    <Resource
      name="users"
      create={UserCreate}
      edit={UserEdit}
      list={UserList}
    />
  </Admin>
);

export default createuserSignUp;
