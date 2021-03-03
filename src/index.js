import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import {ProductProvider} from './components/context/context'
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import "antd/dist/antd.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN

// import 'mdbreact/dist/css/mdb.css';
ReactDOM.render(
  <ProductProvider>

      <Router>
        <App />
      </Router>
  </ProductProvider>,
    
  document.getElementById('root')
);

