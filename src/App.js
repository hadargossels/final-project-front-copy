import React, {Component} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer';
import Default from './components/Default';
import Modal from './components/Modal';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import Timer from './components/Timer';
import Checkout from './components/Cart/Checkout';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Succeeded from './components/Cart/Succeeded';
import 'moment-timezone';
import { AuthProvider } from "./components/AuthContext"
import ForgotPassword from "./components/ForgotPassword"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component{

 

  render() {
   return (
    <React.Fragment>{/*just instend of div, this does not doing anything */}
      <Router>

        <Navbar/>
       {/* <Timer/> */}
        
         {/* <ProtectedRoute exact path="/app" component={AppLayout} /> */}
         <AuthProvider>
          <Switch>
              <Route exact path="/details/:id" component={Details}/>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/shop" component={ProductList}/>
              <Route exact path="/checkout" component={Checkout}/>
              <Route path="/about" component={About}/>
              <Route path="/Blog" component={Blog}/>
              <Route path="/Succeeded" component={Succeeded}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/search" component={ProductList}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route component={Default}/>
            </Switch>
          </AuthProvider>
         




        <Modal/>
        <Footer/>
      </Router>

    </React.Fragment>
    

    );
  }
}
export default App;
