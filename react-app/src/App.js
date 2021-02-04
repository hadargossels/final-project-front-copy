/* import './App.css'; */
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/404/NotFound';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Store from './Components/Store/Store';
import Blog from './Components/Blog/Blog';
import ContactUs from './Components/ContactUs/ContactUs';

import Product from './Components/Product/Product';
import Products from './Components/Products/Products';

import SignInUp from './Components/SignInUp/SignInUp';
import Account from './Components/Account/Account';
import Cart from './Components/Cart/Cart';

export default function App() {
      return(
         <Router>
            <ScrollToTop />
            <Header />
               <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/blog" component={Blog}/>
                  <Route exact path="/contact" component={ContactUs}/>

                  <Route exact path="/store" component={Store}/>
                  <Route exact path="/store/products" component={Products}/>
                  <Route exact path="/store/products/:prodName" component={Product}/>

                  <Route exact path="/sign-in-up" component={SignInUp}/>
                  <Route exact path="/account" component={Account}/>
                  <Route exact path="/cart" component={Cart}/>

                  <Route component={NotFound}/>
               </Switch>
            <Footer />
         </Router>
      );
}
