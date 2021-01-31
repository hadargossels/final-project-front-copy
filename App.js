import React, { Component } from 'react';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';


class App extends Component{
   render(){
      return(
         <div>
            <Header/>
            <ProductPage/>
            <Footer/>
         </div>
      );
   }
}
export default App;
