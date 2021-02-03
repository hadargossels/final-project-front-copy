import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './index.css';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import PageNotFound from './components/404/PageNotFound';
// import Test from './components/Test/Test';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <div>
    <Router>
      <Switch>
          <Route exact path="/" component={Catalog}></Route>
          <Route path="/app/:title" component={App}></Route>
          <Route component={PageNotFound}></Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
