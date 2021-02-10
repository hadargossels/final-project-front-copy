import React, { Component } from 'react';
/* import './App.css'; */

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/404/NotFound';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import ContactUs from './Components/ContactUs/ContactUs';

import Product from './Components/Product/Product';
import Products from './Components/Products/Products';

import SignInUp from './Components/SignInUp/SignInUp';
import Account from './Components/Account/Account';
import Cart from './Components/Cart/Cart';

import CartAlert from './Components/CartAlert/CartAlert';

let cart;

if (JSON.parse(localStorage.getItem("Cart")))
   cart = JSON.parse(localStorage.getItem("Cart"));

else
   cart = {};

export default class App extends Component {

   constructor() {

      super();
  
      this.state = {productsInCart: cart, addProductAlert: ""};
      this.addProductCart = this.addProductCart.bind(this);
      this.delProductCart = this.delProductCart.bind(this);
    };

    addProductCart(prod, quantity) {

      let dict = this.state.productsInCart;
      dict[prod] = quantity;

      const alert = <div><br/><br/><br/><br/><CartAlert/></div>;

      this.setState({productsInCart: dict, addProductAlert: alert});

      setTimeout(() => { this.setState({productsInCart: dict, addProductAlert: ""}); }, 10000);

      localStorage.setItem("Cart", JSON.stringify(dict));
    }

    delProductCart(prod) {

      let dict = this.state.productsInCart;
      delete dict[prod];

      this.setState({productsInCart: dict});
      localStorage.setItem("Cart", JSON.stringify(dict));
    }

   render(){
      return(
         <Router>
            <ScrollToTop />
            <Header productsInCart={this.state.productsInCart} delProductCart={this.delProductCart} addProductCart={this.addProductCart}/>
            {this.state.addProductAlert}
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/blog" component={Blog}/>
                  <Route exact path="/contact" component={ContactUs}/>

                  <Route exact path="/shop" component={() => (<Products addProductCart={this.addProductCart}/>)}/>
                  <Route exact path="/shop/:prodName" component={() => (<Product addProductCart={this.addProductCart}/>)}/>

                  <Route exact path="/sign-in-up" component={SignInUp}/>
                  <Route exact path="/account" component={Account}/>
                  <Route exact path="/cart" component={() => (<Cart productsInCart={this.state.productsInCart} delProductCart={this.delProductCart} addProductCart={this.addProductCart}/>)}/>
                  

                  <Route component={NotFound}/>
               </Switch>
            <Footer />
         </Router>
      );
   }
}
