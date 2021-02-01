/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Middle from './components/middle/Middle';
import Products from './components/products/Products';

const prodsArr = [{img: "/images/brands/ASUS/ASUS-XONAR-AE/1.png", alt: "asus-xonar-ae", name: "ASUS XONAR AE", price: 216.99, rating: 3.5},
                  {img: "/images/brands/Creative/Creative-Sound-BlasterX-AE-5/1.png", alt: "creative-sound--blasterx-ae-5", name: "Creative Sound BlasterX AE-5", price: 600.00, rating: 2.5},
                  {img: "/images/brands/EVGA/EVGA-NU-Audio/1.png", alt: "evga-nu-audio", name: "EVGA NU Audio", price: 752.23, rating: 1.0}];

class App extends Component{
   render(){
      return(
         <div>
            <Header />
{/*             <Middle /> */}
            <Products prodsArr={prodsArr}/>
            <Footer />
         </div>
      );
   }
}

export default App;

