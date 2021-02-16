import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import reportWebVitals from './reportWebVitals';
import Display from './components/Display-middle/Display';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Signup from './components/Signup/Signup';
import Product from './components/Product/Product';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import "bootstrap/dist/css/bootstrap.css";
import Cartpage from './components/Cart/Cartpage';
import Payment from './components/PaymentPage/Payment';
import Paymentdetails from './components/Paymentdetails/Paymentdetails';
import Paypal from './components/Paymentdetails/Paypal';



const routing = (
  <Router>  
    <div>
      <Header/>
      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/blog" component={Blog}/>
        <Route  path="/cart/:item" component={Cart}/>
        <Route exact path="/cart" component={Cartpage}/>
        <Route  path="/product/:productName" component={Product}/>
        <Route exact path="/store/" component={Display}/>
        <Route  path="/store/:search" component={Display}/>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route  path="/contact" component={Contact}/>
        <Route path="/payment" component={Payment}/>
        <Route path="/paypal" component={Paypal}/>
        <Route path="/paymentdetails" component={Paymentdetails}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
</Router>

)

ReactDOM.render(
 
    routing,
   
  document.getElementById('root')
);

reportWebVitals();
