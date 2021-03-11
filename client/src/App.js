import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
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
import { firebasedb } from './firebase';


export default function App() {

  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    firebasedb.ref('products').get()
      .then( snapshot => {
        setProducts(snapshot.val())
      })
  }, [])


  return (
      <Router>
        <AuthProvider>
          <CartProvider>
          
          <Header />

          <AlertBox />
          
          <Switch>
            <Route path="/websiteAdmin" component={WebsiteAdmin} />
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/change-password" component={ChangePassword} />
            <Route path="/store" component={Store} />
            <Route path="/contact" component={Contact} /> 
            <Route path="/about" component={About} /> 
            <Route path="/blog" component={Blog} /> 
            <Route path="/cart" component={ShoppingCart} /> 
            <Route path="/payment" component={Payment} /> 
            
            {products.map(product => 
              <Route path={`/${product.url}`} key={product.id} component={() => 
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
          
          </CartProvider>
        </AuthProvider>
      </Router>
  ); 
}

