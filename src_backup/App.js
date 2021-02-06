//import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Store from './components/Store.jsx';
import Home from './components/Home.jsx';
import ProductPage from './components/ProductPage.jsx';


function App() {
  return (
    <>
      <Router>
        <Header></Header>
        
        <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route path="/about" component={About}/>*/}
            <Route path="/store" component={Store}/>
            <Route path="/productpage" component={ProductPage}/>
            {/* <Route path="/blog" component={Blog}/>*/}
            {/* <Route path="*" component={PageNotFound}/>*/}
        </Switch>

        <Footer></Footer>

      </Router>
    </>
  );
}

export default App;