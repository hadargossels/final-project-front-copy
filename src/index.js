import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
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
import Auth from './Auth' 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AboutUs from './components/AboutUs/AboutUs';
import Success from './components/Success/Success';
import Blog from './components/Blog/Blog';
import BlogPage from './components/Blog/BlogPage';
//protected route for registered users only
function PrivateRoute({children,...rest}){
  return(
    <Route {...rest} render={()=>{
    return Auth.authenticated===true
    ?children
    :<Redirect to="/login" />
    }}/>

  )
}

ReactDOM.render(

    <div>
    <Router>
    <Header/>
      <Switch>  
          <PrivateRoute exact path="/dashboard"> <Dashboard /></PrivateRoute>
          <Route exact path="/" component={Catalog}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/contactUs" component={ContactUs}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route path="/product/:title" component={Product}></Route>
          <Route exact path="/info" component={Info}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
          <Route exact path="/success" component={Success}></Route>
          <Route exact path="/aboutUs" component={AboutUs}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/blogPage/:id" component={BlogPage}></Route>
          <Route component={PageNotFound}></Route>
      </Switch>
    <Footer/>
    </Router>
    
    </div>,
  document.getElementById('root')
);


