

import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Users';
import { ProductList, ProductEdit, ProductCreate } from './Products';
import UserIcon from '@material-ui/icons/Group';
import CakeIcon from '@material-ui/icons/Cake';
// import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from '../../firebase'
import './MyDashboard.css'


export default class MyDashboard extends Component {
    render() {
        return (
            <div>
                 <Admin dashboard={Dashboard} dataProvider={firebaseDataProvider(firebase,{})}>
                        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
                        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={CakeIcon}/>
                 </Admin>
            </div>
        )
    }
}
