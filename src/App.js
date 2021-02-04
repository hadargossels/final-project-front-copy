import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Routing from './components/routing/Routing';
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer'

class App extends Component {
   render(){
      return(
         <Router>
            <Header/>
            <Routing />
            <Footer/>
         </Router>
      );
   }
}

export default App;
