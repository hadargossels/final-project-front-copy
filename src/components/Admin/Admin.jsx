import * as React from "react";
import { Admin, Resource} from 'react-admin';
import { ProductList,ProductCreate,ProductEdit } from './products'
import { UserList, UserCreate} from './users'
import { PostList,PostEdit, PostCreate } from './posts';
import { BlogList,BlogEdit, BlogCreate } from './blogs';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from 'firebase/app'
import "firebase/database";
import {FirebaseAuthProvider} from 'react-admin-firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  }


const dataProvider = firebaseDataProvider(firebase,{})
const authProvider = FirebaseAuthProvider(config);

const App = () => (
      <Admin dataProvider={dataProvider} authProvider={authProvider} >
          <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
          <Resource name="users" list={UserList} icon={UserIcon} create={UserCreate}/>
          <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate}/>
          <Resource name="blogs" list={BlogList} edit={BlogEdit} create={BlogCreate} icon={PostIcon}/>
     </Admin>
  );
export default App;
