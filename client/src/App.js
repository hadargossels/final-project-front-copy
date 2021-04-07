import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { FavoritesProvider } from "./context/FavoritesContext"
import './css/app.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AlertBox from './components/AlertBox';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Blog from './components/blog/Blog.jsx';
import ArticlePage from './components/blog/ArticlePage.jsx';
import SignUp from './components/authentication/SignUp';
import Login from './components/authentication/Login';
import ForgotPassword from './components/authentication/ForgotPassword';
import Profile from './components/authentication/Profile';
import ChangePassword from './components/authentication/ChangePassword';
import PrivateRoute from './components/authentication/PrivateRoute';
import PrivateRouteAdmin from './components/authentication/PrivateRouteAdmin';
import Store from './components/store/Store.jsx';
import ProductPage from './components/store/ProductPage.jsx';
import ShoppingCart from './components/cart-and-payment/ShoppingCart.jsx';
import Payment from './components/cart-and-payment/Payment.jsx';
import Favorites from './components/favorites/Favorites';
import WebsiteAdmin from './components/admin/WebsiteAdmin';
import PageNotFound from './components/PageNotFound.jsx';
import { firebasedb } from './firebase';
import OrderConfirmation from './components/cart-and-payment/OrderConfirmation.jsx';


export default function App() {

  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    firebasedb.ref('products').get()
    .then( snapshot => {
      const products = [];
      for (let key in snapshot.val()) {
        products.push(snapshot.val()[key]);
      }
      setProducts(products)
    });

    firebasedb.ref('articles').get()
    .then( snapshot => {
      setArticles(snapshot.val())
    });

  }, [])


  return (
      <Router>
        <AuthProvider>
          <CartProvider>
            <FavoritesProvider>
          
              <Header />

              <AlertBox />
              
              <Switch>
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRouteAdmin path="/admin" component={WebsiteAdmin} />
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <Route path="/change-password" component={ChangePassword} />
                <Route path="/store" component={Store} />
                <Route path="/contact" component={Contact} /> 
                <Route path="/about" component={About} /> 
                <Route path="/blog" component={Blog} /> 
                <Route path="/cart" component={ShoppingCart} /> 
                <Route path="/payment" component={Payment} /> 
                <Route path="/favorites" component={Favorites} />
                <Route path="/order-confirmation" component={OrderConfirmation} />
                
                {products.map(product => 
                  <Route path={`/${product.name.replace(' ', '_')}`} key={product.id} component={() => 
                    <ProductPage product={product} />
                  } />
                )}

                {articles.map(article => 
                  <Route path={`/article-${article.id}`} key={article.id}>
                    <ArticlePage article={article}></ArticlePage>
                  </Route>
                )}
                  
                <Route path="*" component={PageNotFound}/>
              </Switch>

              <Footer />
          
            </FavoritesProvider>
          </CartProvider>
        </AuthProvider>
      </Router>
  ); 
}

