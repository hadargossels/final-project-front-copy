import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import ScrollToTop from './components/Route/ScrollToTop/ScrollToTop';
import Spinner from './components/Spinner/Spinner';
import NotFound from './pages/404/NotFound';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import Product from './pages/Shop/Product/Product';
import Products from './pages/Shop/Products/Products';

import Blog from './pages/Blog/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost/BlogPost';

import ContactUs from './pages/ContactUs/ContactUs';

import PrivateRoute from './components/Route/PrivateRoute/PrivateRoute';
import SignInUp from './pages/SignInUp/SignInUp';
import Account from './pages/Account/Account/Account';
import AccountProfile from './pages/Account/AccountProfile/AccountProfile';
import AccountOrders from './pages/Account/AccountOrders/AccountOrders';
import AccountAdmin from './pages/Account/AccountAdmin/AccountAdmin';

import Cart from './pages/Cart/Cart/Cart';
import CartPaymentGuest from './pages/Cart/CartPaymentGuest/CartPaymentGuest';
import CartPaymentGuestReview from'./pages/Cart/CartPaymentGuestReview/CartPaymentGuestReview';
import CartPaymentUser from './pages/Cart/CartPaymentUser/CartPaymentUser';
import CartPaymentUserReview from './pages/Cart/CartPaymentUserReview/CartPaymentUserReview';
import Confirmation from './pages/Confirmation/Confirmation';

import { connect } from 'react-redux';
import { GetRequest } from './functions/ApiServices';
import { db } from './functions/firebase'
import { fetchData, closeProductAlert } from '../src/actions/actions';

class App extends Component {

  async componentDidMount() {

    let data;
    
    // await GetRequest('http://localhost:3001/','db').then(res => { data = res.data });

    await db.on("value", async (snapshot) => {

      data = await (snapshot.val());
      
      for (const [key, value] of Object.entries(data)) {
        
        data[key] = Object.keys(data[key]).map((iKey) => data[key][iKey])
      }
      
      this.props.fetchData(data);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
    
    // this.props.fetchData(data);
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

              <Route exact path="/shop" component={(props) => (<Products {...props}/>)}/>
              <Route exact path="/shop/:prodName" component={() => (<Product/>)}/>

              <Route exact path="/contact" component={() => (<ContactUs/>)}/>

              <Route exact path="/sign-in-up" component={(props) => (<SignInUp {...props}/>)}/>

              <PrivateRoute exact path="/account" component={(props) => (<Account {...props}/>)}/>
              <PrivateRoute exact path="/account/profile" component={(props) => (<AccountProfile {...props}/>)}/>
              <PrivateRoute exact path="/account/orders" component={(props) => (<AccountOrders {...props}/>)}/>
              <PrivateRoute exact path="/account/admin" component={(props) => (<AccountAdmin {...props}/>)}/>

              <Route exact path="/cart" component={() => (<Cart/>)}/>
              <Route exact path="/cart/guest" component={CartPaymentGuest}/>
              <Route exact path="/cart/guest/payment" component={(props) => (<CartPaymentGuestReview {...props}/>)}/>
              <Route exact path="/cart/user" component={(props) => (<CartPaymentUser {...props}/>)}/>
              <Route exact path="/cart/user/payment" component={(props) => (<CartPaymentUserReview {...props}/>)}/>
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