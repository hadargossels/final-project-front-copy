import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/product';


class App extends Component{
   render(){
      return(
         <div>
            <Header/>
            <Product/>
         </div>
      );
   }
}
export default App;
