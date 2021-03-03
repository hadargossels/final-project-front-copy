import React, { Component } from 'react';
import './AdminMain.css';
import { Admin, Resource } from 'react-admin';
// import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserCreate, UserEdit } from './users';
// import jsonServerProvider from 'ra-data-json-server';
import { RoleCreate, RoleEdit, RoleList } from "./roles";
// import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import LabelIcon from '@material-ui/icons/Label';
import {Dashboard} from './Dashboard';
import {FirebaseAuthProvider} from 'react-admin-firebase';
import firebaseDataProvider from 'ra-data-firebase-client';
import firebase from 'firebase/app'
import "firebase/database";
import {db} from '../../firebase'
import { ProductCreate, ProductEdit, ProductList } from './productsDB';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
};

const authProvider = FirebaseAuthProvider(config);

const dataProvider = firebaseDataProvider(firebase,{})
  
// const settings = {context: 'dev', imagekey: "images", filekey: "files"}
// const dataProvider = jsonServerProvider('http://localhost:3001');

// console.log(dataProvider)

class AdminMain extends Component {
    componentDidMount(){
        db.ref('users').on('value', (snapshot)=>{
            let arr = [];
            for (let obj in snapshot.val()) {
                arr.push(snapshot.val()[obj])
            }
            console.log(arr)
        })
      }
    render () {
        return(    
            <div className="big">
                <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
                    {/* <Resource name="users" list={ListGuesser} /> */}
                    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/> */}
                    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon}/>
                    <Resource name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate} icon={LabelIcon}/>
                    <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate}/>
                </Admin>
            </div>
        )
    }
}

export default AdminMain;