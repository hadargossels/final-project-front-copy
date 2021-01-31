import React, { Component } from 'react';
import Header from './Headrer-navbar';
import Middle from './Middle';
import Footer from './Footer';
class App extends Component{
   render(){
      return(
         <div >
            <Header/><br/>
            <Middle/>
            <Footer/>
         </div>
      );
   }
}
export default App;
