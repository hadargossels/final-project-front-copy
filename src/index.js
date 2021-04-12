import React from 'react';
import ReactDOM from 'react-dom';
// import {Route,Switch, BrowserRouter as Router} from 'react-router-dom'
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
// import Login from './components/login/Login'
import Cart from './components/Cart/Cart';
import Payment from './components/payment/Payment';
// import Newaccount from './components/newAccount/Newaccount';
import WishList from './components/WishList/WishList';
import Post from './components/Post/Post';
import { AuthProvider } from "./AuthContext";
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Administrator from './components/admin/Administrator';
import Profile from './components/Profile';
import Demo from './react-admin-demo-js/App';



localStorage.setItem("orderErr","")
localStorage.setItem("orderId","")

function setLocalStorage () {
  if (localStorage.getItem("cart") == undefined) {
    localStorage.setItem("cart",JSON.stringify([]))
  }
  if (localStorage.getItem("user") == undefined) {
    localStorage.setItem("user","")
  }
  if (localStorage.getItem("wishList") == undefined) {
    localStorage.setItem("wishList",JSON.stringify([]))
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
    <AuthProvider>
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
     <Route path='/Admin' component={Administrator}/>
     {/* <Route path="/Login" component={Login}/> */}
     <Route path="/Product/:productid" component={Product}/>
     <Route exact path = "/Cart" component={Cart}/>
     <Route exact path = "/Payment" component={Payment}/>
     {/* <Route exact path = "/NewAccount" component={Newaccount}/> */}
     <Route exact path = "/WishList" component={WishList}/>
     <Route exact path = "/Post/:postid" component={Post}/>
     <PrivateRoute exact path="/Dashboard" component={Dashboard}/>
    <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
    <PrivateRoute exact path="/profile" component={Profile}/>
    <Route exact path='/signup' component={Signup}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/forgot-password' component={ForgotPassword}/>
    <Route exact path='/demo' component={Demo}/>
     <Route component={NotFound}/>
  </Switch>
  <Footer/>
  </AuthProvider>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

