import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import { ProductList, ProductEdit, ProductCreate } from './products';
import { OrderList, OrderShow, OrderEdit } from './orders';
import { CategoryList, CategoryCreate } from './categories';
import { ArticleList, ArticleEdit, ArticleCreate } from './articles';
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import firebaseDataProvider from 'ra-data-firebase-client';
import firebase from 'firebase/app'
import "firebase/database";
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider(process.env.REACT_APP_PROXY);

const WebsiteAdmin = () => {
  // let dataProvider = firebaseDataProvider(firebase, {})
  console.log(dataProvider);
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="categories" list={CategoryList} create={CategoryCreate} />
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
        <Resource name="orders" list={OrderList} show={OrderShow} edit={OrderEdit}/>
        <Resource name="articles" list={ArticleList} edit={ArticleEdit} create={ArticleCreate} />
        {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
    </Admin>
  );

} 

export default WebsiteAdmin;