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
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import {OrderList, OrderEdit, OrderShow} from './adminTables/orders'
import {UserList, UserEdit, UserCreate} from './adminTables/users'
import { PostList, PostCreate, PostEdit} from "./adminTables/posts";
import {ProductList, ProductEdit, ProductCreate} from "./adminTables/products"
import { RoleEdit, RolesList, RoleCreate } from "./adminTables/roles";
import {CouponsList, CouponEdit, CouponCreate} from './adminTables/coupons'
import {PlatformCreate, PlatformEdit, PlatformsList} from './adminTables/platforms'

import simpleRestProvider from 'ra-data-simple-rest';
import { StatusCreate, StatusEdit, StatusList } from "./adminTables/status";
import { TicketEdit, TicketList, TicketShow } from "./adminTables/tickets";


const history = createHashHistory();


export default function AdminPage() { 

  const httpClient = (url, options = {}) => {
    options.user = {
        authenticated: true,
        token: `Bearer ${localStorage.getItem("token")}`
    };
    return fetchUtils.fetchJson(url, options);
};

  const dataProvider= simpleRestProvider(process.env.REACT_APP_SERVER, httpClient)

  const convertFileToBase64 = file =>

  new Promise((resolve, reject) => {

      const reader = new FileReader();
      
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(file.rawFile);
  });

  const myDataProvider = {

    ...dataProvider,

    create: (resource, params) => {

        // fallback to the default implementation
        if (resource !== 'products' && resource !== 'posts' && !params.data.pictures) {
            
            return dataProvider.create(resource, params);
        }

        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.pictures.filter(
            p => p.rawFile instanceof File
        );
        const formerPictures = params.data.pictures.filter(
            p => !(p.rawFile instanceof File)
        );

        return Promise.all(newPictures.map(convertFileToBase64))
            .then(base64Pictures =>
                base64Pictures.map((picture64, i) => ({
                    src: picture64,
                    title: `${params.data.pictures[i].title}`,
                }))
            )
            .then(transformedNewPictures =>
                dataProvider.create(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        pictures: [
                            ...transformedNewPictures,
                            ...formerPictures,
                        ],
                    },
                })
            );
    },
    update: (resource, params) => {

        // fallback to the default implementation
        if ((resource !== 'products'  && resource !== 'posts')|| !params.data.pictures) {
            
            return dataProvider.update(resource, params);
        }

        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.pictures.filter(
            p => p.rawFile instanceof File
        );
        const formerPictures = params.data.pictures.filter(
            p => !(p.rawFile instanceof File)
        );

        return Promise.all(newPictures.map(convertFileToBase64))
            .then(base64Pictures =>
                base64Pictures.map((picture64, i) => ({
                    src: picture64,
                    title: `${params.data.pictures[i].title}`,
                }))
            )
            .then(transformedNewPictures =>
                dataProvider.update(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        pictures: [
                            ...transformedNewPictures,
                            ...formerPictures,
                        ],
                    },
                })
            );
      }
  };

  return(
  <Provider
    store={createAdminStore({
    myDataProvider,
    history
  })}
  >
      <Admin dashboard={Dashboard} dataProvider={myDataProvider} history={history}>
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={ShoppingCartIcon}/>
        <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} create={UserCreate}/>
        <Resource name="orders" list={OrderList} show={OrderShow} edit={OrderEdit} icon={ListAltIcon}/>
        <Resource name="posts" list={PostList} icon={PostAddIcon} create={PostCreate} edit={PostEdit} />
        <Resource name="tickets" icon={MailOutlineIcon} list={TicketList} show={TicketShow} edit={TicketEdit} />
        <Resource name="coupons" list={CouponsList} edit={CouponEdit} create={CouponCreate} icon={MoneyOffIcon}/>
        <Resource name="platforms" list={PlatformsList} icon={SportsEsportsIcon} create={PlatformCreate} edit={PlatformEdit} />
        <Resource name="roles" list={RolesList} edit={RoleEdit} create={RoleCreate} icon={AssignmentIndIcon}/>
        <Resource name="status" list={StatusList} edit={StatusEdit} create={StatusCreate} icon={AccessTimeIcon}/>
      </Admin>
    </Provider>
  );
}






  