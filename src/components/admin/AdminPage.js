import * as React from "react";
import { UserCreate, UserEdit, UserList } from "./users";
import { Roll } from "./roll";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";
import firebase from "firebase";
import { db } from "../../firebase";
// import localFirebase from "./firebase";

// const authProvider = FirebaseAuthProvider(localFirebase.App);

const dataProvider = jsonServerProvider("http://localhost:3000");
const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource name="rolls" list={Roll} />
  </Admin>
);

export default AdminPage;
