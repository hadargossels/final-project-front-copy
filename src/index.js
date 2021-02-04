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


const router = (
  <Router>
  <Header/>
  <Switch>
     <Route exact path="/" component={App}/>
     <Route path="/About" component={About}/>
     <Route path="/Contact" component={Contact}/>
     <Route path="/Store" component={Store}/>
     <Route path="/Blog" component={Blog}/>
     <Route path="/Shipping" component={Shipping}/>
     <Route path="/Faq" component={Faq}/>
     <Route path="/Login" component={Login}/>
     <Route path="/Product/:productid" component={Product}/>
     <Route component={NotFound}/>
  </Switch>
  <Footer/>
  </Router>
  
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

