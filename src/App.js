import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Routing from './components/routing/Routing';
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer'
import { AuthProvider } from './components/layout/AuthContext';

class App extends Component {
   state = {
      numItemsInCart: 0,
      products: []
   };

   updateCart = (updateCount, name, color, model, price) => {
      let products = [...this.state.products];
      this.setState({ numItemsInCart: this.state.numItemsInCart + updateCount });
      let prod = { name, model, color, price, quantity: 1 };
      products.push(prod);
      this.setState({ products });
   }

   handleDelete = (product) => {
      let products = [...this.state.products];
      const index = products.indexOf(product);
      if (index > -1) {
         products.splice(index, 1);
      }
      this.setState({ products });

      let prevNumOfItems = this.state.numItemsInCart;
      prevNumOfItems--;
      this.setState({ numItemsInCart: prevNumOfItems });
   }

   updateQuantity = (product, newVal) => {
      let products = [...this.state.products];
      const index = products.indexOf(product);
      if (index > -1) {
         products[index].quantity = newVal;
      }
      this.setState({ products });
   }

   render() {
      return (
         <Router>
            <AuthProvider>
               <Header cartAmount={this.state.numItemsInCart} cartProducts={this.state.products} />
               <Routing updateCart={this.updateCart} handleDelete={this.handleDelete} cartProducts={this.state.products} updateQuantity={this.updateQuantity} />
               <Footer />
            </AuthProvider>
         </Router>
      );
   }
}

export default App;
