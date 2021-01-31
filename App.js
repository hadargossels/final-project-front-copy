import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';


class App extends Component{
   render(){
      return(
         <div>
            <Header/>
            <Product/>
            <Footer/>
         </div>
      );
   }
}
export default App;
