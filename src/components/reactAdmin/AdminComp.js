import * as React from "react";
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { createMuiTheme } from '@material-ui/core/styles';
import { UserList, UserEdit, UserCreate } from './users';
import { ProductList, ProductEdit, ProductCreate } from "./products"
import { FirebaseAuthProvider } from 'react-admin-firebase'
import firebaseDataProvider from 'ra-data-firebase-client';
import { config } from '../layout/Firebase';
import firebase from 'firebase/app';
import "firebase/database";

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    },
});

const authProvider = FirebaseAuthProvider(config);
const dataProvider = firebaseDataProvider(firebase, {});

const AdminComp = () => (
    <Admin theme={theme} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} icon={UserIcon} edit={UserEdit} create={UserCreate} />
        <Resource name="products" list={ProductList} icon={ShoppingCartIcon} edit={ProductEdit} create={ProductCreate} />
    </Admin >
)

export default AdminComp;