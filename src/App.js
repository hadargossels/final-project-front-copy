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
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="bg-gray-800 globalFont">
        <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route exact path="/catalogue/" component={StoreFront} />
            <Route exact path="/catalogue/new" component={StoreFront} />
            <Route exact path="/catalogue/specials" component={StoreFront} />
            <Route exact path="/catalogue/top" component={StoreFront} />
            <Route path="/catalogue/:search" component={StoreFront} />
            <Route path="/item/:itemISBN" component={ProductPage} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
