// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Account';
import { ProductsList, ProductsEdit, ProductsCreate } from './ProductsStore';
import { OrdersList, OrdersEdit, OrdersCreate } from './Order';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import ShopIcon from '@material-ui/icons/Shop';
import { createMuiTheme } from '@material-ui/core/styles';
import {FirebaseAuthProvider} from 'react-admin-firebase';
import firebaseDataProvider from 'ra-data-firebase-client';
import firebase from 'firebase/app';
import "firebase/database";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://final-project-react-dev-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGING_SENDER_ID,
  appId:' 1:938789805437:web:83830fd6e24b1d83958014',
 // measurementId://////
};
const authProvider = FirebaseAuthProvider(config);
const dataProvider = firebaseDataProvider(firebase,{});



const theme = createMuiTheme({
  palette: {
    type: 'dark', //light // Switching the dark mode on is a single property value change.
  },
});
const AdminApp = () => (
    <Admin theme={theme} dashboard={Dashboard} dataProvider={dataProvider}> 
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
      <Resource name="storeProducts" list={ProductsList} edit={ProductsEdit} create={ProductsCreate} icon={ShopIcon} />
      <Resource name="orders" list={OrdersList} edit={OrdersEdit} icon={AttachMoneyIcon} />
    </Admin>
  
);

export default AdminApp;









// const setting = {context: 'dev', imagekey: "image", filekey:"files"}
// const firebaseRealtime = FirebaseRealTimeSaga(dataProvider);


// class Table extends Component {
//    render(){
//       return(
//       <Admin dataProvider={dataProvider} authProvider={authProvider}>
//          <Resource name="users" list={UserList} create={UserCreate}/>
//       </Admin>
//       )
//    }
// }

// export default Table;