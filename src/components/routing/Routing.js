import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Body from '../layout/product/Body'
import Catalog from "../layout/home/Catalog";
import AboutUs from "../layout/AboutUs"
import ContactUs from "../layout/ContactUs"
import Blog from "../layout/Blog"
import LogIn from "../layout/LogIn"
import Register from "../layout/Register"

export default class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Catalog} />
                <Route path="/about" component={AboutUs}/>
                <Route path="/contact" component={ContactUs}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/login" component={LogIn}/>

                {/* //! Products pages */}
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />
                <Route path="/product/" component={Body} />

                <Route path="" component={Register}/>
            </Switch>
        )
    }
}