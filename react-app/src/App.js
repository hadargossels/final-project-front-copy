import React, { Component } from 'react';
/* import './App.css'; */

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/404/NotFound';

import Home from './Components/Home/Home';
import About from './Components/About/About';

import Product from './Components/Product/Product';
import Products from './Components/Products/Products';

import Blog from './Components/Blog/Blog';
import BlogPost from './Components/BlogPost/BlogPost';

import ContactUs from './Components/ContactUs/ContactUs';

import SignInUp from './Components/SignInUp/SignInUp';
import Account from './Components/Account/Account';

import Cart from './Components/Cart/Cart';
import CartPaymentGuest from './Components/CartPaymentGuest/CartPaymentGuest';
import CartPaymentGuestReview from'./Components/CartPaymentGuestReview/CartPaymentGuestReview';
import CartAlert from './Components/CartAlert/CartAlert';
import Confirmation from './Components/Confirmation/Confirmation';

import { GetRequest } from "../src/js/ApiServices";

let cart;

if (JSON.parse(localStorage.getItem("Cart")))
   cart = JSON.parse(localStorage.getItem("Cart"));

else
   cart = {};

export default class App extends Component {

   constructor() {

      super();
  
      this.state = {productsInCart: cart, addProductAlert: "", data: [], loaded: false, fakeCoupons: [], fakeProducts: []};

      this.addProductCart = this.addProductCart.bind(this);
      this.delProductCart = this.delProductCart.bind(this);
      this.emptyProductCart = this.emptyProductCart.bind(this);
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

   emptyProductCart() {

      let dict = this.state.productsInCart;

      for (const [ key, value ] of Object.entries(dict)) {
         delete dict[key];
      }

      this.setState({});

      localStorage.removeItem("Cart");
   }
    
   async componentDidMount() {

      let data;
      let loaded = false;
      let fakeCoupons;
      let fakeProducts;

      // await GetRequest('http://localhost:3002/','db').then(res => { fakeCoupons = res.data.coupons; fakeProducts = res.data.products; });
      // console.log([fakeCoupons,fakeProducts]);

      await GetRequest('http://localhost:3001/','db').then(res => { data = res.data; loaded = true; });
      // console.log(data);
   
      this.setState({data, loaded, fakeCoupons, fakeProducts});
   }

   render(){
      if (this.state.loaded) {
         return(
            <Router>
               <ScrollToTop />
               <Header productsInCart={this.state.productsInCart} delProductCart={this.delProductCart} addProductCart={this.addProductCart} products={this.state.data.products}/>
               {this.state.addProductAlert}
                  <Switch>
                     <Route exact path="/" component={() => (<Home products={this.state.data.products}/>)}/>
                     <Route exact path="/about" component={() => (<About/>)}/>

                     <Route exact path="/blog" component={() => (<Blog posts={this.state.data.posts}/>)}/>
                     <Route exact path="/blog/:post" component={() => (<BlogPost posts={this.state.data.posts}/>)}/>

                     {/* <Route exact path="/shop" component={() => (<Products addProductCart={this.addProductCart} products={this.state.fakeProducts}/>)}/> */}
                     <Route exact path="/shop" component={() => (<Products addProductCart={this.addProductCart} products={this.state.data.products}/>)}/>
                     <Route exact path="/shop/:prodName" component={() => (<Product addProductCart={this.addProductCart} products={this.state.data.products}/>)}/>

                     <Route exact path="/contact" component={() => (<ContactUs/>)}/>

                     <Route exact path="/sign-in-up" component={() => (<SignInUp/>)}/>
                     <Route exact path="/account" component={() => (<Account/>)}/>

                     {/* <Route exact path="/cart" component={() => (<Cart productsInCart={this.state.productsInCart} delProductCart={this.delProductCart} addProductCart={this.addProductCart} emptyProductCart={this.emptyProductCart} products={this.state.data.products} coupons={this.state.fakeCoupons[0]}/>)}/> */}
                     <Route exact path="/cart" component={() => (<Cart productsInCart={this.state.productsInCart} delProductCart={this.delProductCart} addProductCart={this.addProductCart} emptyProductCart={this.emptyProductCart} products={this.state.data.products} coupons={this.state.data.coupons[0]}/>)}/>
                     <Route exact path="/cart/guest" component={CartPaymentGuest}/>
                     <Route exact path="/cart/guest/payment" component={(props) => (<CartPaymentGuestReview {...props} products={this.state.data.products}/>)}/>
                     
                     <Route exact path="/confirmation" component={(props) => (<Confirmation {...props}/>)}/>

                     <Route component={NotFound}/>
                  </Switch>
               <Footer />
            </Router>
         );
      }
      else {
         return ("Loading...");
      }
   }
}
