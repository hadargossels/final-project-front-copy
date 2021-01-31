import React, { Component } from 'react';
import Header from './components/Header' 
import Footer from './components/Footer' 
import ProductPage from './components/ProductPage' 


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
