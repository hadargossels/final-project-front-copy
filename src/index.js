import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,NavLink,Switch, BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import Header from './components/Header';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Store from './components/store/Store';
import Product from './components/Product';


const router = (
  <Router>
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={{color:"red"}}>Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/About" activeStyle={{color:"red"}}>About</NavLink>
      </li>
    </ul>
    <div>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="" component={NotFound}/>
    </Switch>

  </div>
  </Router>
  
)

ReactDOM.render(
  <>
  <Header/>
  {router},
  <Store/>
  {/* <Product/> */}
  <Footer/>
  </>,
  document.getElementById('root')
);

