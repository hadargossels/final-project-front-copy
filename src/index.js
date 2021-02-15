import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import {ProductProvider} from './context'
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import "antd/dist/antd.css"
ReactDOM.render(
  <ProductProvider>

      <Router>
        <App />
      </Router>
  </ProductProvider>,
    
  document.getElementById('root')
);

