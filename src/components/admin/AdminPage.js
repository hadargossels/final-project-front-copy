import * as React from "react";
import { usersEdit, usersList } from "./users";

import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";

import { ProductsCreate, ProductsEdit, ProductsList } from "./products";
import simpleRestProvider from "ra-data-simple-rest";

import { OrderDisplay, OrderEdit, OrderList } from "./orders";
import Dashboard from "./dashboard";

const dataProvider = simpleRestProvider(
  "http://localhost:4000"
  // fetchUtils.fetchJson,
  // "X-Total-Count"
);

const AdminPage = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    // dataProvder={dataProvider}
    // loginPage={CustomLoginPage}
    // authProvider={authProvider}
  >
    <Resource
      name="users"
      list={usersList}
      edit={usersEdit}
      // create={usersCreate}
    />
    <Resource
      name="products"
      list={ProductsList}
      edit={ProductsEdit}
      create={ProductsCreate}
    />
    <Resource
      name="blogs"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="orders"
      list={OrderList}
      edit={OrderEdit}
      show={OrderDisplay}
    />
    <a href="http://localhost:3000/">Home</a>
  </Admin>
);

export default AdminPage;
