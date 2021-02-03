import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/main/main_1';

class App extends Component{
   render(){
      return(
         <div>
            {/* <Header/> */}
            <Main />
            {/* <Footer/> */}
            
         </div>
      );
   }
}
export default App;
