import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './index.css';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Info from './components/Info/Info';
import PageNotFound from './components/404/PageNotFound';
import ContactUs from './components/ContactUs/ContactUs';
import Dashboard from './components/Dashboard/Dashboard';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AboutUs from './components/AboutUs/AboutUs';
import Success from './components/Success/Success';
import Blog from './components/Blog/Blog';
import BlogPage from './components/Blog/BlogPage';
import Account from './components/account/Account'; 
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './components/Admin/Admin'
import {AuthShopProvider} from './context/AuthShopContext' 
ReactDOM.render(

    <div>
    <Router>
    <AuthShopProvider>
    <Header/>
      <Switch>  
          <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
          <ProtectedRoute exact path="/account/profile" component={Account}/>
          <Route exact path="/" component={Catalog}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/contactUs" component={ContactUs}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route path="/product/:title" component={Product}/>
          <Route exact path="/info" component={Info}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/success/:ref" component={Success}/>
          <Route exact path="/aboutUs" component={AboutUs}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/blogPage/:id" component={BlogPage}/>
          <Route component={PageNotFound}/>
      </Switch>
    <Footer/>
    </AuthShopProvider>
    </Router>
    </div>,
  document.getElementById('root')
);


