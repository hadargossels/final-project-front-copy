

import React, { Component } from 'react'
import { Admin, Resource,fetchUtils } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Users';
import { ProductList, ProductEdit, ProductCreate } from './Products';
import { RecipeList, RecipeEdit, RecipeCreate } from './Recipes';
import { CouponList, CouponEdit, CouponCreate } from './Coupons';
import { OrderList, OrderEdit } from './Orders';
import { CommentList} from './Comments';
import { FeedbackList} from './Feedbacks';
import { contactMailList ,contactMailEdit} from './ContactMails';
import UserIcon from '@material-ui/icons/Group';
import CakeIcon from '@material-ui/icons/Cake';
import MessageIcon from '@material-ui/icons/Message';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmailIcon from '@material-ui/icons/Email';
import Dashboard from './Dashboard';
import './MyDashboard.css'
import simpleRestProvider from 'ra-data-simple-rest';

const token = JSON.parse(localStorage.getItem("token")||"false")
const httpClient = (url, options = {}) => {
    options.user = {
        authenticated: true,
        token: `Bearer ${token}`
    };
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(`${process.env.REACT_APP_MONGO_DATABASE}/api`, httpClient);


export default class MyDashboard extends Component {
    render() {
        return (
            <div>
                 <Admin dashboard={Dashboard} dataProvider={dataProvider}>
                        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
                        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={CakeIcon}/>
                        <Resource name="recipes" list={RecipeList} edit={RecipeEdit} create={RecipeCreate} icon={MenuBookIcon}/>
                        <Resource name="coupons" list={CouponList} edit={CouponEdit} create={CouponCreate} icon={LocalOfferIcon}/>
                        <Resource name="comments" list={CommentList} icon={MessageIcon}/>
                        <Resource name="feedbacks" list={FeedbackList} icon={MessageIcon}/>
                        <Resource name="orders" list={OrderList} edit={OrderEdit} icon={ShoppingCartIcon}/>
                        <Resource name="contactmails" list={contactMailList}  edit={contactMailEdit} icon={EmailIcon}/>
                 </Admin>
            </div>
        )
    }
}
