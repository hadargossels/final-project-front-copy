import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './css/app.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Register from './components/Register.jsx';
import Store from './components/Store.jsx';
import Home from './components/Home.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import Payment from './components/Payment.jsx';
import ProductPage from './components/ProductPage.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import storeItems from './components/StoreItems.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';
import ArticlePage from './components/ArticlePage.jsx';
import articles from './data/articles.json';

class App extends Component {
  constructor(){
    super();

    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if (cartProducts === null) {
      cartProducts = [];
    }

    this.state = {
      user: {},
      cartProducts: cartProducts,
      tax: 0.17
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user){
      this.setState({ user});
    }
  }

  componentDidUpdate() {
    localStorage.setItem('cartProducts', JSON.stringify(this.state.cartProducts));
  }

  handleAddUser = (user) => {
    this.setState({ user });
  }

  handleSignOut = () => {
    localStorage.removeItem('user');
    this.setState({ user: {} });
  }
  
  handleAddToCart = (product, qty) => {
    document.getElementsByClassName("alert")[0].style.display = 'block';
    // window.setTimeout(function() {
    //   document.getElementsByClassName("alert")[0].remove();
    // }, 10000);
    const cartProducts = this.state.cartProducts;

    let productsFound = cartProducts.filter(element => element.id === product.id)
    if (productsFound.length > 0){
      cartProducts.forEach((element) => {
        if(element.id === product.id)
          element.quantity = parseInt(element.quantity) + parseInt(qty);
      })
    }
    else{
      cartProducts.push({...product, quantity: qty});
    }
    
    this.setState({cartProducts});
    // alert("The product was successfully added to the shopping cart")
  }

  handleQtyChange = (product, qty) => {
    const cartProducts = this.state.cartProducts;
    cartProducts.forEach(element => {
      if(element.id === product.id)
        element.quantity = parseInt(qty);
    });
    this.setState({cartProducts});
  }

  handleDeleteCartProduct = (product) => {
    let cartProducts = this.state.cartProducts;
    cartProducts = cartProducts.filter(element => element.id !== product.id);
    this.setState({cartProducts});
  }

  calculateSumQtyCart = () => {
    return this.state.cartProducts.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.quantity), 0)
  }

  getSubTotalAmount = () => {
    let totalAmount = this.state.cartProducts.reduce((accumulator, currentValue) => 
    accumulator + (currentValue.price * (1-currentValue.discount) * currentValue.quantity), 0);
    return totalAmount;
  }

  render() {
    return (
      <>   
      <Router>
        <Header
          user = {this.state.user} 
          onSignOut = {this.handleSignOut}
          qtySum = {this.calculateSumQtyCart()} 
          cartProducts = {this.state.cartProducts} 
          onQtyChange = {this.handleQtyChange}
          onDeleteCartProduct = {this.handleDeleteCartProduct}
        ></Header>
        <div className="alert alert-success" role="alert"  style={{display:'none'}}>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          The product was successfully added to the shopping cart
        </div>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/store" component={Store}/>
          <Route path="/contact"> <Contact /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/blog"> <Blog /> </Route>
          <Route path="/register"> 
            <Register 
              onSignUp= {this.handleAddUser}
            /> 
          </Route>
          <Route path="/cart">
            <ShoppingCart 
              cartProducts={this.state.cartProducts} 
              onQtyChange={this.handleQtyChange}
              onDeleteCartProduct={this.handleDeleteCartProduct}
              getSubTotalAmount={this.getSubTotalAmount}
              tax={this.state.tax}/>
          </Route>
          <Route path="/payment">
            <Payment
              cartProducts={this.state.cartProducts}
              getSubTotalAmount={this.getSubTotalAmount}
              tax={this.state.tax} >
            </Payment>
          </Route> 
          
          {storeItems.map(product => 
            <Route path={`/${product.url}`} component={() => 
              <ProductPage product={product} onAddToCart={this.handleAddToCart}/>
            } key={product.id}/>
          )}

          {articles.map(article => 
            <Route path={`/article-${article.id}`} key={article.id}>
              <ArticlePage article={article}></ArticlePage>
            </Route>
          )}
          
          
          <Route path="*" component={PageNotFound}/>
        </Switch>

        <Footer></Footer>

      </Router>
      </>
    );
  }
  
}

export default App;