import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Header from "./components/Header";
import App from './App';
import Product from './components/Product';
import Catalog from './components/Catalog';
import Courses from './components/Courses';
import Recipes from './components/Recipes';
import Footer from "./components/Footer";
import reportWebVitals from './reportWebVitals';
import NotFound from './components/NotFound';


const router=(

  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/Catalog/:ProductName" component={Product}/>
      <Route path="/Catalog" exact component={Catalog}/>
      <Route path="/Courses" component={Courses}/>
      <Route path="/Recipes" component={Recipes}/>

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
