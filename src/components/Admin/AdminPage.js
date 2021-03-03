import * as React from "react";

import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from '../../firebase'
import "firebase/database";

import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import createAdminStore from '../../createAdminStore';

import { Admin, Resource} from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import {UserList, UserEdit, UserCreate} from './users'
import { PostList } from "./posts";
import {ProductList} from "./products"

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
        <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} create={UserCreate}/>
        <Resource name="products" list={ProductList}/>
        <Resource name="posts" list={PostList}/>
      </Admin>
    </Provider>
  );
}



  