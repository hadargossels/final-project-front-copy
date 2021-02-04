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
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{
  render() {
    return (
    <React.Fragment>
      <Router>

        <Navbar/>
      
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route exact path="/details" component={Details }/>
          <Route exact path="/cart" component={Cart}/>
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
