import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './index.css';
import Product from './components/Product/Product';
// import reportWebVitals from './reportWebVitals';
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
// import Test from './components/Test/Test';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Router>
    <Header/>
      <Switch>  
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/" component={Catalog}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/contactUs" component={ContactUs}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route path="/product/:title" component={Product}></Route>
          <Route exact path="/info" component={Info}></Route>
          <Route component={PageNotFound}></Route>
      </Switch>
    <Footer/>
    </Router>
    
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
