import * as React from "react";

import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from '../../firebase'
import "firebase/database";
import "./AdminPage.css"
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import createAdminStore from '../../createAdminStore';

import { Admin, Resource} from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import {UserList, UserEdit} from './users'
import { PostList } from "./posts";
import {ProductList, ProductEdit, ProductCreate} from "./products"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PostAddIcon from '@material-ui/icons/PostAdd';

const history = createHashHistory();
const dataProvider= firebaseDataProvider(firebase, {})


export default function AdminPage() { 

  return(
  <Provider
    store={createAdminStore({
    dataProvider,
    history
  })}
  >
    <h1 className="text-center text-danger py-2">Management interface</h1>
      <Admin dashboard={Dashboard} dataProvider={dataProvider} history={history}>
        <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon}/>
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={ShoppingCartIcon}/>
        <Resource name="posts" list={PostList} icon={PostAddIcon}/>
      </Admin>
    </Provider>
  );
}






  