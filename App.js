import React, { Component } from 'react';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';

class App extends Component{
   render(){
      return(
         <div className="font-mono">
            <Header />
            <Middle />
            <Footer />
         </div>
      );
   }
}
export default App;
