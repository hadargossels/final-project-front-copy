import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from '../Home/Home'
import AboutUs from '../About-Us/AboutUs'
import Blog from '../Blog/Blog'
import CatalogPage from '../Catalog/CatalogPage';
import ContactUs from '../Contact-Us/ContactUs'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import ProductPage from '../Product/ProductPage'
import NotFound from '../404/NotFound'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/Checkout'
import OrderConfirmed from '../Checkout/OrderConfirmed'
import MsgSent from '../Contact-Us/MsgSent'


export default class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutUs}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/cart" component= {Cart}/>
                <Route path="/confirmed" component={OrderConfirmed}/>
                <Route path="/contact" component={ContactUs}/>
                <Route path="/login" component={Login}/>
                <Route path="/msgsent" component={MsgSent}/>
                <Route path="/product/:name" component={ProductPage}/>
                <Route path="/signup" component={SignUp}/>
                <Route exact path="/store/" component={CatalogPage}/>
                <Route path="/store/:search" component={CatalogPage}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}
