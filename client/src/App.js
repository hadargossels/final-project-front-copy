import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext"
import './css/app.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AlertBox from './components/AlertBox';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Blog from './components/blog/Blog.jsx';
import ArticlePage from './components/blog/ArticlePage.jsx';
import articles from './data/articles.json';
import SignUp from './components/authentication/SignUp';
import Login from './components/authentication/Login';
import ForgotPassword from './components/authentication/ForgotPassword';
import Profile from './components/authentication/Profile';
import ChangePassword from './components/authentication/ChangePassword';
import PrivateRoute from './components/authentication/PrivateRoute';
import Store from './components/store/Store.jsx';
import ProductPage from './components/store/ProductPage.jsx';
import ShoppingCart from './components/cart-and-payment/ShoppingCart.jsx';
import Payment from './components/cart-and-payment/Payment.jsx';
import WebsiteAdmin from './components/admin/WebsiteAdmin';
import PageNotFound from './components/PageNotFound.jsx';
import {firebasedb} from './firebase';


class App extends Component {
  constructor(){
    super();

    this.state = {
      user: {},
      products: [],
      cartProducts: [],
      favoritesProducts: [],
      tax: 0.17,
      alert: false
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user){
      this.setState({ user});
    }

    firebasedb.ref('products').get()
      .then( snapshot => {
        this.setState({ products: snapshot.val() })
      })

    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if (cartProducts !== null) {
      this.setState({ cartProducts })
    }

    const favoritesProducts = JSON.parse(localStorage.getItem('favoritesProducts'));
    if (favoritesProducts !== null) {
      this.setState({ favoritesProducts })
    }
  }


  componentDidUpdate() {
    localStorage.setItem('cartProducts', JSON.stringify(this.state.cartProducts));
    localStorage.setItem('favoritesProducts', JSON.stringify(this.state.favoritesProducts));
  }

  handleAddUser = (user) => {
    this.setState({ user });
  }

  handleSignOut = () => {
    localStorage.removeItem('user');
    this.setState({ user: {} });
  }
  
  handleAddToCart = (product, qty) => {
    this.setState({ alert: true });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 5000);

    const cartProducts = this.state.cartProducts;

    const productsFound = cartProducts.filter(element => element.id === product.id)
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
  }

  handleChangeFavorites = (product, toFavorate) => {
    let favoritesProducts = this.state.favoritesProducts;
    if (toFavorate){
      favoritesProducts.push(product);
    }
    else{
      favoritesProducts = favoritesProducts.filter(element => element.id !== product.id)
    }
    
    this.setState({ favoritesProducts })
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
        <Router>
          <AuthProvider>
            <Header
              user = {this.state.user} 
              onSignOut = {this.handleSignOut}
              qtySum = {this.calculateSumQtyCart()} 
              cartProducts = {this.state.cartProducts} 
              onQtyChange = {this.handleQtyChange}
              onDeleteCartProduct = {this.handleDeleteCartProduct}
            ></Header>

            {this.state.alert ? <AlertBox /> : null}
            
            <Switch>
              <Route path="/websiteAdmin" component={WebsiteAdmin} />
              <Route exact path="/" component={Home}/>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/change-password" component={ChangePassword} />
              <Route path="/store" component={Store}/>
              <Route path="/contact"> <Contact /> </Route>
              <Route path="/about"> <About /> </Route>
              <Route path="/blog"> <Blog /> </Route>
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
              
              {this.state.products.map(product => 
                <Route path={`/${product.url}`} key={product.id} component={() => 
                  <ProductPage product={product} onAddToCart={this.handleAddToCart} onChangeFavorites={this.handleChangeFavorites} favoritesProducts={this.state.favoritesProducts}/>
                } />
              )}

              {articles.map(article => 
                <Route path={`/article-${article.id}`} key={article.id}>
                  <ArticlePage article={article}></ArticlePage>
                </Route>
              )}
                
              <Route path="*" component={PageNotFound}/>
            </Switch>

            <Footer></Footer>
          </AuthProvider>
        </Router>
    );
  }
  
}

export default App;