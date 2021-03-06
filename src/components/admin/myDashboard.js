

import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Users';
import { ProductList, ProductEdit, ProductCreate } from './Products';
import { RecipeList, RecipeEdit, RecipeCreate } from './Recipes';
import { CouponList, CouponEdit, CouponCreate } from './Coupons';
import { OrderList, OrderEdit, OrderCreate } from './Orders';
import { BlogStorageList} from './BlogStorage';
import UserIcon from '@material-ui/icons/Group';
import CakeIcon from '@material-ui/icons/Cake';
import MessageIcon from '@material-ui/icons/Message';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import firebaseDataProvider from 'ra-data-firebase-client'
import firebase from 'firebase/app'
import './MyDashboard.css'


export default class MyDashboard extends Component {
    render() {
        return (
            <div>
                 <Admin dashboard={Dashboard} dataProvider={firebaseDataProvider(firebase,{})}>
                        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
                        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={CakeIcon}/>
                        <Resource name="recipes" list={RecipeList} edit={RecipeEdit} create={RecipeCreate} icon={MenuBookIcon}/>
                        <Resource name="coupons" list={CouponList} edit={CouponEdit} create={CouponCreate} icon={LocalOfferIcon}/>
                        <Resource name="blogStorage" list={BlogStorageList} icon={MessageIcon}/>
                        <Resource name="orders" list={OrderList} edit={OrderEdit} create={OrderCreate} icon={ShoppingCartIcon}/>
                 </Admin>
            </div>
        )
    }
}
