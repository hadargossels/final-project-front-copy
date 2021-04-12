
import * as React from "react";
import { Admin, Resource , fetchUtils } from 'react-admin';
import { UsersList, UsersEdit, UsersCreate } from './Account';
import { ProductsList, ProductsEdit, ProductsCreate } from './ProductsStore';
import { OrderList, OrderEdit } from './Order';
import { CouponsList, CouponEdit, CouponCreate } from './Coupons';
import { TicketEdit, TicketList, TicketShow } from "./Tickets";

import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import ShopIcon from '@material-ui/icons/Shop';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { createMuiTheme } from '@material-ui/core/styles';
import simpleRestProvider from 'ra-data-simple-rest';
const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token:'SRTRDFVESGNJYTUKTYTHRG'
  };
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider('http://localhost:5000/api',httpClient);

const theme = createMuiTheme({
  palette: {
    type: 'dark', //light // Switching the dark mode on is a single property value change.
  },
});
const AdminApp = () => (
    <Admin theme={theme} dashboard={Dashboard} dataProvider={dataProvider}> 
      <Resource name="user" list={UsersList} edit={UsersEdit} create={UsersCreate} icon={UserIcon} />
      <Resource name="product" list={ProductsList} edit={ProductsEdit} create={ProductsCreate} icon={ShopIcon}  options={{ myCustomAttr: "10" }}/>
      <Resource name="order" list={OrderList} edit={OrderEdit} icon={ListAltIcon} />
      <Resource name="coupon" list={CouponsList} edit={CouponEdit} create={CouponCreate} icon={ListAltIcon} />
      <Resource name="tickets" icon={MailOutlineIcon} list={TicketList} show={TicketShow} edit={TicketEdit} />

    </Admin>
  
);

export default AdminApp;
