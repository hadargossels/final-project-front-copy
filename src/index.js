import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import Header from './components/header/Header';
import App from './App';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/notfound/NotFound';
import Footer from './components/footer/Footer';
import Store from './components/store/Store';
import Blog from './components/blog/Blog';
import Shipping from './components/shipping/Shipping'
import Faq from './components/faq/Faq'
import Product from './components/product/Product'
import Login from './components/login/Login'
import Cart from './components/Cart/Cart';
import Payment from './components/payment/Payment';
import Newaccount from './components/newAccount/Newaccount';
import PropTypes from 'prop-types';

function setLocalStorage () {
  if (localStorage.getItem("cart") == undefined) {
    localStorage.setItem("cart",JSON.stringify([]))
  }
  if (localStorage.getItem("user") == undefined) {
    localStorage.setItem("user","")
  }
}
setLocalStorage()

let amount = 0;
const amountfunction = (amount) => {
  let cart = JSON.parse(localStorage.getItem("cart"))
  return amount = cart.length

} 
console.log(amount)

const router = (
  <Router>
  <Header amount={amount}/>
  <Switch>
     <Route exact path="/" component={App}/>
     <Route path="/About" component={About}/>
     <Route path="/Contact" component={Contact}/>
     <Route exact path="/Store" component={Store}/>
     <Route exact path="/Store/New" component={Store}/>
     <Route exact path="/Store/Featured" component={Store}/>
     <Route exact path="/Blog" component={Blog}/>
     <Route path="/Shipping" component={Shipping}/>
     <Route path="/Faq" component={Faq}/>
     <Route path="/Login" component={Login}/>
     <Route path="/Product/:productid" component={Product}/>
     <Route exact path = "/Cart" component={Cart}/>
     <Route exact path = "/Payment" component={Payment}/>
     <Route exact path = "/NewAccount" component={Newaccount}/>
     <Route component={NotFound}/>
  </Switch>
  <Footer/>
  </Router>
  
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

