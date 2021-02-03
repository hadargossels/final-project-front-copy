import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Switch,Route,NavLink,BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StorePage from './components/StorePage/StorePage';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs'
import Policy from './components/Policy/Policy'
import ShippingPolicy from './components/ShippingPolicy/ShippingPolicy'
import NotFound from './components/NotFound/NotFound'
import Login from "./components/Login/Login";

// let routing=(
// <Router>
//     <div>
//         <Header/>
//         <Switch>
//             <Route exact path="/" component={App}/>
//             <Route  path="/contact" component={ContactUs}/>
//             <Route  path="/about" component={AboutUs}/>
//             <Route  path="/policy" component={Policy}/>
//             <Route  path="/shipping-Policy" component={ShippingPolicy}/>
//             <Route  path="/store" component={StorePage}/>
//             <Route  path="/login" component={Login}/>
//             <Route component={NotFound}/>
//         </Switch>
//         <Footer/>
//     </div>
// </Router>
// );

// ReactDOM.render( routing, document.getElementById('root'));
ReactDOM.render( <App/>, document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



