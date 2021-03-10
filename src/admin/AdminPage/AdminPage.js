import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource, EditGuesser, ListGuesser, ShowGuesser } from 'react-admin';
import createAdminStore from '../../createAdminStore';
import { UserList,UserCreateReactAdmin, UserEditReactAdmin ,UserListReactAdmin, UserEdit,UserCreate} from "./UsersAdmin";
import {FirebaseAuthProvider} from 'react-admin-firebase';
import firebase,{config} from '../../fireBase.config';
import firebaseDataProvider from 'ra-data-firebase-client'
import { ProductsCreate, ProductsEdit, ProductsList } from "./ProductsAdmin";
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import { OrderEdit, OrderList, OrderShow } from "./OrderAdmin";

// const dataProvider = jsonServerProvider('http://localhost:3000');
const dataProvider=firebaseDataProvider(firebase, {})
const options = {
    logging: true,
    // rootRef: "bamba/hummos",
  };
const authProvider = FirebaseAuthProvider(config,options);
const history = createHashHistory();

function AdminPage(){
    // const dataProvider=firebaseDataProvider(firebase, {})
    return(
    <Provider
    store={createAdminStore({
        authProvider,
        dataProvider,
        history
    })}
>
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        history={history}
        dashboard={Dashboard}
    >
        {/* <Resource name="usersReactAdmin" list={UserListReactAdmin} edit={UserEditReactAdmin} create={UserCreateReactAdmin}/> */}
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="Products" list={ProductsList} edit={ProductsEdit} create={ProductsCreate}/>
        <Resource name="orders" list={OrderList} edit={OrderEdit} show={OrderShow}/>
    </Admin>
</Provider>
);
}
   

export default AdminPage;