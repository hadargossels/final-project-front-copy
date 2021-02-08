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
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{

 

  render() {
    return (
    <React.Fragment>{/*just instend of div, this does not doing anything */}
      <Router>

        <Navbar/>
      
        <Switch>
          <Route exact path="/details/:id" component={Details}/>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/shop" component={ProductList}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/:?q=" component={ProductList}/>
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
