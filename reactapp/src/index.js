import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import {ProductProvider} from './context'

ReactDOM.render(
  <ProductProvider>

  <Router>
    <App />
  </Router>
  </ProductProvider>,
    
  document.getElementById('root')
);

