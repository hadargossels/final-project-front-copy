import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Switch,Route,NavLink,BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs'
import Policy from './components/Policy/Policy'
import ShippingPolicy from './components/ShippingPolicy/ShippingPolicy'
import NotFound from './components/NotFound/NotFound'
import Login from "./components/Login/Login";
import ProductPage from './components/ProductPage/ProductPage'
import StorePage from './components/StorePage/StorePage';
import SignUp from './components/SignUp/SignUp'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

import arrayAllProduct from './dataBase.js'


let routing=(
<Router>
    <div>
        <Header/> 
        <div id="d">
            <div id="inDiv">
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route  path="/contact" component={ContactUs}/>
                    <Route  path="/about" component={AboutUs}/>
                    <Route  path="/policy" component={Policy}/>
                    <Route  path="/shipping-Policy" component={ShippingPolicy}/>
                    <Route  path="/store" component={() => <StorePage arrAllProduct={arrayAllProduct} />}/>
                    <Route exact path="/login" component={Login}/>
                    <Route  path="/login/signup" component={SignUp}/>
                    <Route  path="/product/:productName" component={ProductPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </div>
    <ScrollToTop />
</Router>

);

ReactDOM.render( routing, document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



