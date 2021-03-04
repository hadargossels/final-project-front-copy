import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios';
import Home from "../layout/home/Home";
import Body from '../layout/product/Body'
import Catalog from "../layout/home/Catalog";
import AboutUs from "../layout/AboutUs"
import ContactUs from "../layout/ContactUs"
import Blog from "../layout/Blog"
import LogIn from "../layout/LogIn"
import Cart from "../layout/Cart";
import Register from "../layout/Register"
import CheckOut from "../layout/CheckOut"
import ForgotPassword from "../layout/ForgotPassword"
import ProtectedRoute from "../layout/ProtectedRoute"
import Profile from "../layout/Profile"
import AdminComp from "../reactAdmin/AdminComp"
import UpdateProfile from "../layout/UpdateProfile"

export default class Routing extends Component {
    state = {
        _mobilesData: [],
        _accessoriesData: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/_mobilesData`)
            .then(res => {
                const _mobilesData = res.data;
                this.setState({ _mobilesData });
            })
        axios.get(`http://localhost:3000/_accessoriesData`)
            .then(res => {
                const _accessoriesData = res.data;
                this.setState({ _accessoriesData });
            })
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/admin" component={AdminComp} />
                <ProtectedRoute path="/profile" component={Profile} />
                <ProtectedRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/shop/mobiles">
                    <Catalog _data={this.state._mobilesData} title="Mobile Phones" />
                </Route>
                <Route path="/shop/accessories">
                    <Catalog _data={this.state._accessoriesData} title="Accessories" />
                </Route>
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/blog" component={Blog} />
                <Route path="/login" component={LogIn} />
                <Route path="/register">
                    <Register updateUserName={this.props.updateUserName} />
                </Route>
                <Route path="/reset-password" component={ForgotPassword} />
                <Route path="/shoppingCart" >
                    <Cart cartProducts={this.props.cartProducts} handleDelete={this.props.handleDelete} updateQuantity={this.props.updateQuantity} />
                </Route>
                {/* //! Products pages */}
                {/* <Route path="/product/:prodname" component={Body}/> */}
                {this.state._mobilesData.map((mobile, index) => (
                    <Route path={"/product/" + mobile.title.replace(/\s/g, '')} key={index}>
                        <Body prodData={mobile} updateCart={this.props.updateCart} />
                    </Route>
                ))}
                {this.state._accessoriesData.map((accesory, index) => (
                    <Route path={"/product/" + accesory.title.replace(/\s/g, '')} key={index}>
                        <Body prodData={accesory} updateCart={this.props.updateCart} />
                    </Route>
                ))}
                {/* //! Products search */}
                <Route path="/shop" component={Catalog} />
                <Route path="/checkout" >
                    <CheckOut cartProducts={this.props.cartProducts} />
                </Route>
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        )
    }
}