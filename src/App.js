import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProductPage from './Components/ProductPage/ProductPage';
import Footer from './Components/Footer/Footer';
import StoreFront from './Components/storeFront/storeFront';
import Homepage from './Components/Homepage/Homepage';
import AboutUs from './Components/AboutUs/AboutUs';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ContactUs from './Components/ContactUs/ContactUs';
import ShoppingCart from './Components/shoppingCart/ShoppingCart';
import Checkout from './Components/Checkout/Checkout'
import data from './data.json'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: JSON.parse(localStorage.getItem('shoppingCart')),
      productNum: (localStorage.getItem('shoppingLength')) ? localStorage.getItem('shoppingLength') : 0,
    }
  }

  addToCart = (changeStates) => {
    this.setState({
      productNum: localStorage.getItem('shoppingLength'),
      productList: JSON.parse(localStorage.getItem('shoppingCart'))
    },() => {this.addSum()})
  }

  addSum =() => {
    let products = [...this.state.productList];
    let sumPrice = 0;
    data.products.forEach((product) => {
      if(products.includes(product.ISBN10)) {
        sumPrice += product.price;
      }
    })
    localStorage.setItem('finalPrice',sumPrice);
  }

  render () {
    return (
      <div className="bg-gray-800 globalFont">
        <Header cartNum={this.state.productNum}/>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/catalogue/" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/catalogue/new" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/catalogue/specials" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/catalogue/top" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/catalogue/:search" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/item/:itemISBN" render={(matchProps) => (<ProductPage {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/shoppingCart" render={(matchProps) => (<ShoppingCart {...matchProps} {...this.props} cartContent={this.state.productList} addToCart={this.addToCart} />)} />
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
