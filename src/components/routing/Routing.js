import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "../layout/home/Home";
import Body from '../layout/product/Body'
import Catalog from "../layout/home/Catalog";
import AboutUs from "../layout/AboutUs"
import ContactUs from "../layout/ContactUs"
import Blog from "../layout/Blog"
import LogIn from "../layout/LogIn"
import Register from "../layout/Register"

import { _mobilesData, _accessoriesData } from '../data';

export default class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop/mobiles">
                    <Catalog _data={_mobilesData} title="Mobile Phones" />
                </Route>
                <Route path="/shop/accessories">
                    <Catalog _data={_accessoriesData} title="Accessories" />
                </Route>    
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/blog" component={Blog} />
                <Route path="/login" component={LogIn} />
                {/* //! Products pages */}
                {/* <Route path="/product/:prodname" component={Body}/> */}
                {_mobilesData.map((mobile, index) => (
                    <Route path={"/product/"+mobile.title.replace(/\s/g, '')} key={index}>
                        <Body prodData={mobile} />
                    </Route>
                ))}
                {_accessoriesData.map((accesory, index) => (
                    <Route path={"/product/"+accesory.title.replace(/\s/g, '')} key={index}>
                        <Body prodData={accesory} />
                    </Route>
                ))}
                {/* //! Products search */}
                <Route path="/shop" component={Catalog}/>
                
                <Route path="" component={Register}/>
            </Switch>
        )
    }
}//queryString.parse(this.props.location.search).q