import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Store from './components/Store.jsx';
import Home from './components/Home.jsx';
import ShoppingCart from './components/ShoppingCart.jsx'
import ProductPage from './components/ProductPage.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import storeItems from './components/StoreItems.jsx';


class App extends Component {
  constructor(){
    super();

    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if (cartProducts === null) {
      cartProducts = [];
    }

    this.state = {
      cartProducts: cartProducts,
    }
    console.log(this.state.cartProducts.reduce(((accumulate, currentValue) => accumulate+currentValue.quantity), 0));
  }

  componentDidUpdate() {
    localStorage.setItem('cartProducts', JSON.stringify(this.state.cartProducts));
  }
  
  handleAddToCart = (product, qty) => {
    const cartProducts = this.state.cartProducts;

    let productsFound = cartProducts.filter(element => element.id == product.id)
    if (productsFound.length > 0){
      cartProducts.forEach((element) => {
        if(element.id == product.id)
          element.quantity = parseInt(element.quantity) + parseInt(qty);
      })
    }
    else{
      cartProducts.push({...product, quantity: qty});
    }
    
    this.setState({cartProducts});
  }

  handleQtyChange = (product, qty) => {
    const cartProducts = this.state.cartProducts;
    cartProducts.forEach(element => {
      if(element.id == product.id)
        element.quantity = parseInt(qty);
    });
    this.setState({cartProducts});
  }

  handleDeleteCartProduct = (product) => {
    let cartProducts = this.state.cartProducts;
    cartProducts = cartProducts.filter(element => element.id !== product.id);
    this.setState({cartProducts});
  }

  render() {
    return (
      <Router>
        <Header qtySum={ this.state.cartProducts.reduce(((accumulate, currentValue) => accumulate+currentValue.quantity), 0)}></Header>
        
        <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/about" component={About}/>*/}
            <Route path="/store" component={Store}/>
            <Route path="/cart"><ShoppingCart 
              cartProducts={this.state.cartProducts} 
              onQtyChange={this.handleQtyChange}
              onDeleteCartProduct={this.handleDeleteCartProduct}
            /></Route>

            { storeItems.map(product => 
                <Route path={`/${product.url}`} component={() => 
                  <ProductPage product={product} onAddToCart={this.handleAddToCart}/>
                } key={product.id}/>
            )}
            
            {/* <Route path="/blog" component={Blog}/>*/}
            {/* <Route path="/contact"> <Contact /> </Route>}
            {<Route path="/info"> <Info /> </Route> */}
            <Route path="*" component={PageNotFound}/>
        </Switch>

        <Footer></Footer>

      </Router>
    );
  }
  
}

export default App;