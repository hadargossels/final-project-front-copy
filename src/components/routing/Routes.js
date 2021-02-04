import React from 'react'
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


const Routes = () => {
    return (
       
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutUs}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/contact" component={ContactUs}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/store" component={CatalogPage}/>
                <Route path="/product/:name" component={ProductPage}/>
                <Route component={NotFound}/>
            </Switch>
    
    )
}

export default Routes
