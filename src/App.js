import React, { Component } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import Body from './components/layout/product/Body'
import Catalog from "./components/layout/home/Catalog";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
   render(){
      return(
         <>
            <Header />
            {/* <Body /> */}
            <Catalog />
            <Footer />
         </>
      );
   }
}

export default App;
