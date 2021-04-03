import * as React from "react";

import "./AdminPage.css"
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import createAdminStore from '../../createAdminStore';

import { Admin, Resource, fetchUtils} from 'react-admin';
import Dashboard from './Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import UserIcon from '@material-ui/icons/Group';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

// import {InvoiceList, InvoiceEdit, InvoiceShow} from './invoices'
import {UserList, UserEdit, UserCreate} from './adminTables/users'
import { PostList, PostCreate, PostEdit} from "./adminTables/posts";
import {ProductList, ProductEdit, ProductCreate} from "./adminTables/products"
import { RoleEdit, RolesList, RoleCreate } from "./adminTables/roles";
import {CouponsList, CouponEdit, CouponCreate} from './adminTables/coupons'
import {PlatformCreate, PlatformEdit, PlatformsList} from './adminTables/platforms'

import simpleRestProvider from 'ra-data-simple-rest';
import { useHistory } from "react-router";


const history = createHashHistory();


export default function AdminPage() { 

  const httpClient = (url, options = {}) => {
    options.user = {
        authenticated: true,
        token: `Bearer token`
    };
    return fetchUtils.fetchJson(url, options);
};

const dataProvider= simpleRestProvider('http://localhost:5000', httpClient)


  return(
  <Provider
    store={createAdminStore({
    dataProvider,
    history
  })}
  >
      <Admin dashboard={Dashboard} dataProvider={dataProvider} history={history}>
        <Resource name="coupons" list={CouponsList} edit={CouponEdit} create={CouponCreate} icon={MoneyOffIcon}/>
        <Resource name="platforms" list={PlatformsList} icon={SportsEsportsIcon} create={PlatformCreate} edit={PlatformEdit} />
        <Resource name="posts" list={PostList} icon={PostAddIcon} create={PostCreate} edit={PostEdit} />
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={ShoppingCartIcon}/>
        <Resource name="roles" list={RolesList} edit={RoleEdit} create={RoleCreate} icon={AssignmentIndIcon}/>
        <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} create={UserCreate}/>
        {/* <Resource name="invoices" list={InvoiceList} show={InvoiceShow} edit={InvoiceEdit}/> */}
      </Admin>
    </Provider>
  );
}






  