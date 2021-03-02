import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'

import Home from '../../pages/Home/Home'
import AboutUs from '../../pages/AboutUs'
import Blog from '../../pages/Blog/Blog'
import BlogPost from '../../pages/Blog/BlogPost'
import Cart from '../../pages/Cart'
import CatalogPage from '../../pages/Catalog/CatalogPage';
import Checkout from '../../pages/Checkout/Checkout'
import ContactUs from '../../pages/Contact/ContactUs'
import MsgSent from '../../pages/Contact/MsgSent'
import NotFound from '../../pages/NotFound'
import OrderConfirmed from '../../pages/OrderConfirmed'
import ProductPage from '../../pages/Product/ProductPage'
import Payment from '../../pages/Checkout/Payment'

import PrivateRoute from './PrivateRoute'
import Account from '../../pages/Account/Account'
import Profile from '../../pages/Account/Profile'

import ForgotPassword from '../../pages/auth/ForgotPassword'
import Login from '../../pages/auth/Login'
import SignUp from '../../pages/auth/SignUp'
import AdminPage from '../Admin/AdminPage'

export default class Routes extends Component {

    render() {
        return (
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={AboutUs}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/blogpost/:title" component={BlogPost}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/cart" component= {Cart}/>
                    <Route path="/confirmed" component={OrderConfirmed}/>
                    <Route path="/contact" component={ContactUs}/>
                    <Route path="/msgsent" component={MsgSent}/>
                    <Route path="/payment" component={Payment}/>
                    <Route path="/product/:name" component={ProductPage}/>
                    <Route exact path="/store/" component={CatalogPage}/>
                    <Route path="/store/:search" component={CatalogPage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <PrivateRoute path="/admin" component={AdminPage}/>
                    <PrivateRoute exact path="/account" component={Account}/>
                    <PrivateRoute exact path="/account/profile" component={Profile}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                    <Route component={NotFound}/>
                </Switch>
        )
    }
}
