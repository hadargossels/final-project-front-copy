import React from 'react'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'

import Home from '../Home/Home'
import AboutUs from '../About-Us/AboutUs'
import ContactUs from '../Contact-Us/ContactUs'
import CatalogPage from '../Catalog/CatalogPage';
import Blog from '../Blog/Blog'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'






const Routes = () => {
    return (
    <Router>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/contact" component={ContactUs}/>
        <Route path="/store" component={CatalogPage}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
    </Router>
    )
}

export default Routes
