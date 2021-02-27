// import './App.css';
import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Spinner from './components/Spinner/Spinner';
import NotFound from './components/404/NotFound';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import About from './components/About/About';

import Product from './components/Product/Product';
import Products from './components/Products/Products';

import Blog from './components/Blog/Blog';
import BlogPost from './components/BlogPost/BlogPost';

import ContactUs from './components/ContactUs/ContactUs';

import SignInUp from './components/SignInUp/SignInUp';
import Account from './components/Account/Account';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import Cart from './components/Cart/Cart';
import CartPaymentGuest from './components/CartPaymentGuest/CartPaymentGuest';
import CartPaymentGuestReview from'./components/CartPaymentGuestReview/CartPaymentGuestReview';
import Confirmation from './components/Confirmation/Confirmation';

import { connect } from 'react-redux';
import { GetRequest } from "../src/js/ApiServices";
import { fetchData, closeProductAlert } from '../src/actions/actions';

class App extends Component {

  async componentDidMount() {

    let data;
    await GetRequest('http://localhost:3001/','db').then(res => { data = res.data });
    
    this.props.fetchData(data);
  }

  render() {
    if (!this.props.settingUp) {
      return (
        <Router>
          <ScrollToTop />
          <Header/>
          {this.props.addProductAlert}
          <div style={{color: "white"}}>{this.props.addProductAlert ? setTimeout(() => this.props.closeProductAlert(), 10000) : null}</div>
          <Switch>
              <Route exact path="/" component={() => (<Home/>)}/>
              <Route exact path="/about" component={() => (<About/>)}/>

              <Route exact path="/blog" component={() => (<Blog/>)}/>
              <Route exact path="/blog/:post" component={() => (<BlogPost/>)}/>

              <Route exact path="/shop" component={() => (<Products/>)}/>
              <Route exact path="/shop/:prodName" component={() => (<Product/>)}/>

              <Route exact path="/contact" component={() => (<ContactUs/>)}/>

              <Route exact path="/sign-in-up" component={(props) => (<SignInUp {...props}/>)}/>
              <PrivateRoute exact path="/account" component={(props) => (<Account {...props}/>)}/>

              <Route exact path="/cart" component={() => (<Cart/>)}/>
              <Route exact path="/cart/guest" component={CartPaymentGuest}/>
              <Route exact path="/cart/guest/payment" component={(props) => (<CartPaymentGuestReview {...props}/>)}/>
              
              <Route exact path="/confirmation" component={(props) => (<Confirmation {...props}/>)}/>

              <Route component={NotFound}/>
          </Switch>
          <Footer />
        </Router>
      );
    }
    else {
      return (<Spinner/>);
    }
  }
}

const mapStateToProps = state => ({
  settingUp: state.global.settingUp,
  addProductAlert: state.global.addProductAlert
})

export default connect(mapStateToProps, { fetchData, closeProductAlert })(App)