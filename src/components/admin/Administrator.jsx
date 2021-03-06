import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, userCreate,userEdit } from './users';
import {productList, productCreate,productEdit} from './product'
import {
    FirebaseAuthProvider,
    FirebaseRealTimeSaga
  } from 'react-admin-firebase';
  import firebaseDataProvider from 'ra-data-firebase-client'
  import firebase from '../../firebase'


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL
  };

  const dataProvider=firebaseDataProvider(firebase, {})
const authProvider = FirebaseAuthProvider(config);

const Administrator = () => (

    <Admin dataProvider={dataProvider} authProvider={authProvider}>
           <Resource name="users" list={UserList} edit={userEdit} create={userCreate}/>
           <Resource name="product" list={productList} edit={productEdit} create={productCreate}/>
    </Admin>
    
);

export default Administrator;