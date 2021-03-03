// in src/App.js
import * as React from "react";
import { Admin, ListGuesser, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Account';
import { RoleList, RoleEdit, RoleCreate } from './Role';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Dashboard from './Dashboard';
import{ VisitorForm} from './CustomForm';
import { createMuiTheme } from '@material-ui/core/styles';
// import AuthProvider from './components/AuthProvider';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://final-project-react-dev-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGING_SENDER_ID,
};

const AuthProvider = FirebaseAuthProvider(config);


const theme = createMuiTheme({
  palette: {
    type: 'dark', //light // Switching the dark mode on is a single property value change.
  },
});
const dataProvider = jsonServerProvider('http://localhost:3000');//('https://jsonplaceholder.typicode.com');
const AdminApp = () => (
  <Admin theme={theme}dashboard={Dashboard} dataProvider={dataProvider}> 
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate} icon={SupervisorAccountIcon} />
    {/* <Resource name="CustmonForm" list={VisitorForm} /> */}

    </Admin>
);

export default AdminApp;