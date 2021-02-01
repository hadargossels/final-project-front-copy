import React, { Component } from 'react';
import Header from './my-app/src/components/Header';
import Footer from './my-app/src/components/Footer';
import Product from './my-app/src/components/Product';

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
