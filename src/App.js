

import './App.css';
import React, { Component } from 'react'
import {Route,Switch, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Header from "./components/Header";
import Home from "./components/Home";
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
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { Protect } from './components/protected.route';


export default class App extends Component {      

constructor(props){
  super(props)

  this.state={
    cartCounter:0,
  }

this.updatItemsFromLocalStorage=this.updatItemsFromLocalStorage.bind(this)

}

componentDidMount(){
  this.updatItemsFromLocalStorage()
}

updatItemsFromLocalStorage(){

  const storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")
  this.setState({cartCounter:storage.length})

}
  
  render(){

    const router=(

      <Router>
        <ScrollToTop />
        <Header cartCounter={this.state.cartCounter}/>
        <Switch>
          <Route exact path="/" render={(props) => (<Home {...props} isAuthed={true}   updatItemsFromLocalStorage={this.updatItemsFromLocalStorage}/>)} />
          <Route path="/Catalog/:ProductName"  render={(props) => (<Product {...props} isAuthed={true}   updatItemsFromLocalStorage={this.updatItemsFromLocalStorage}/>)}/>
          <Route path="/Catalog" exact component={Catalog}/>
          <Route path="/Recipes" exact component={Recipes}/>
          <Route path="/Recipes/:RecipeName" component={RecipeProduct}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Cart"  render={(props) => (<Cart {...props} isAuthed={true}   updatItemsFromLocalStorage={this.updatItemsFromLocalStorage}/>)}/>
          <Protect path="/checkout" component={CheckOut}/>
          <Protect path="/admin" component={MyAdmin}/>
          <Protect path="/user" component={Account}/>
    
          {/* <Route path="/Checkout" component={CheckOut} /> */}
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
      
    
    )
    return (
      <div>
        {router}
      </div>
    );

  }
}

