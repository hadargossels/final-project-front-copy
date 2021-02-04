import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Body from './components/layout/product/Body'
import Catalog from "./components/layout/home/Catalog";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
   render(){
      return(
         <Router>
            <Header/>
            <Route exact path="/" component={Catalog}/>
            <Route path="/mobile0" component={Body}/>
            <Route path="/mobile1" component={Body}/>
            <Route path="/mobile2" component={Body}/>
            <Route path="/mobile3" component={Body}/>
            <Route path="/mobile4" component={Body}/>
            <Route path="/mobile5" component={Body}/>
            <Route path="/mobile6" component={Body}/>
            <Route path="/mobile7" component={Body}/>
            <Route path="/mobile8" component={Body}/>
            <Route path="/mobile9" component={Body}/>
            <Footer/>
         </Router>
      );
   }
}

export default App;
