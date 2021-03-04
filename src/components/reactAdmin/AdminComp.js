import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import { FirebaseAuthProvider } from 'react-admin-firebase'
import firebaseDataProvider from 'ra-data-firebase-client';
import { config } from '../layout/Firebase'
import firebase from 'firebase/app'
import "firebase/database";

const authProvider = FirebaseAuthProvider(config);

const dataProvider = firebaseDataProvider(firebase, {});

const AdminComp = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin >
)

export default AdminComp;