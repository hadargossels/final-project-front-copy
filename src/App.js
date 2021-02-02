import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProductPage from './Components/ProductPage/ProductPage';
import Footer from './Components/Footer/Footer';
import StoreFront from './Components/storeFront/storeFront';

class App extends Component {
  render () {
    return (
      <div className="font-mono">
      <Header />
      <StoreFront />
      {/* <ProductPage /> */}
      <Footer />
    </div>
    )
  }
}

export default App;
