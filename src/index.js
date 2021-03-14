import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Header from "./components/Header";
import App from './App';
import Product from './components/Product';
import Catalog from './components/Catalog';
import Recipes from './components/Recipes';
import RecipeProduct from './components/RecipeProduct';
import Contact from './components/Contact';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import Account from './components/Account';
import MyAdmin from './components/admin/MyAdmin'
import Footer from "./components/Footer";
import reportWebVitals from './reportWebVitals';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { Protect } from './components/protected.route';



const router=(

  <Router>
    <ScrollToTop />
    <Header/>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/Catalog/:ProductName" component={Product}/>
      <Route path="/Catalog" exact component={Catalog}/>
      <Route path="/Recipes" exact component={Recipes}/>
      <Route path="/Recipes/:RecipeName" component={RecipeProduct}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Cart" component={Cart}/>
      <Protect path="/checkout" component={CheckOut}/>
      <Protect path="/admin" component={MyAdmin}/>
      <Protect path="/user" component={Account}/>

      {/* <Route path="/Checkout" component={CheckOut} /> */}
      <Route component={NotFound}/>
    </Switch>
    <Footer/>
  </Router>
  

)


ReactDOM.render(
  router,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
