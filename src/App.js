import React, {Component} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/headerNav/Navbar';
import ProductList from './components/products/ProductList';
import Details from './components/productDetails/Details';
import Cart from './components/Cart/Cart';
import Footer from './components/footer/Footer';
import Default from './components/additionsComp/Default';
import Modal from './components/modal/Modal';
import Homepage from './components/homepage/Homepage';
import Register from './components/account/Register';
import Login from './components/account/Login';
import Profile from './components/account/Profile';
import Checkout from './components/Cart/Checkout/Checkout';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Succeeded from './components/Cart/Checkout/Succeeded';
import ForgotPassword from "./components/forgotPassword/ForgotPassword"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from "./components/router/PrivateRoute"
import AdminApp from './components/admin/AdminApp';

class App extends Component{


  render() {
   return ( 
    <React.Fragment>
      <Router>
        <Navbar/>
          <Switch>
              <Route exact path="/details/:id" component={Details}/>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/shop" component={ProductList}/>
              <PrivateRoute exact path="/checkout" component={Checkout}/>
              <Route path="/about" component={About}/>
              <Route path="/blog" component={Blog}/>
              <PrivateRoute path="/succeeded" component={Succeeded}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/search" component={ProductList}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <PrivateRoute path="/account/profile" component={Profile} />
              <PrivateRoute  path="/admin" component={AdminApp}/>
              <Route component={Default}/>
            </Switch>
        <Modal/>
        <Footer/>
      </Router>

    </React.Fragment>
    

    );
  }
}
export default App;
