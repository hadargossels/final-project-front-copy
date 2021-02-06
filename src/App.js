import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Store from './components/Store.jsx';
import Home from './components/Home.jsx';
import ProductPage from './components/ProductPage.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import storeItems from './components/StoreItems.jsx';


function App() {
  return (
      <Router>
        <Header></Header>
        
        <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/about" component={About}/>*/}
            <Route path="/store" component={Store}/>

            { storeItems.map(product => 
                <Route path={`/${product.url}`} component={() => <ProductPage product={product} />}  key={product.id}/>
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

export default App;