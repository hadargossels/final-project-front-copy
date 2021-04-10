import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./Routing";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      numberProducts: 0,
      total: 0,
    };
  }

  getTotal = () => {
    if (this.state.products.length === 0) this.setState({ total: 0 });
    let products = [...this.state.products];

    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += +products[i].value * +products[i].price;
    }
    this.setState({ total });
  };
  totalNavBar = () => {
    return this.state.total;
  };
  updateProducts = (newProduct) => {
    let arrayProducts = [];
    newProduct.sum = +newProduct.value * +newProduct.price;
    arrayProducts = [...this.state.products];
    newProduct.sum = newProduct.price * newProduct.value;
    arrayProducts.push(newProduct);
    this.setState({ products: arrayProducts }, () => this.getTotal());
  };

  updateNumberProducts = (numberProducts) => {
    this.setState({ numberProducts: numberProducts });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.products];
    const index = counters.findIndex((c) => c.id === counter.id);
    counters[index] = { ...counters[index] };
    if (index !== -1) {
      counters[index].value++;
      counters[index].sum = +counters[index].value * +counters[index].price;
    }
    this.setState({ products: counters }, () => this.getTotal());
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.products];
    const index = counters.findIndex((c) => c.id === counter.id);
    counters[index] = { ...counters[index] };
    if (index !== -1 && counters[index].value > 1) {
      counters[index].value--;
      counters[index].sum = +counters[index].value * +counters[index].price;
    }
    this.setState({ products: counters }, () => this.getTotal());
  };
  handleReset = () => {
    const counters = this.state.products.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ products: counters }, () => this.getTotal());
  };

  handleDelete = (counterId) => {
    let arr = [...this.state.products];
    const counters = arr.filter((c) => c.id !== counterId);
    this.setState({ products: counters }, () => this.getTotal());
    // localStorage.setItem("counters", JSON.stringify(counters));
    // this.handleRestart();
  };

  handleRestart = () => {
    window.location.reload();
    this.getTotal();
  };

  render() {
    return (
      <Router>
        <Header
          products={this.state.products}
          numberProducts={this.state.numberProducts}
          updateProducts={this.updateProducts}
          updateNumberProducts={this.updateNumberProducts}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleRestart={this.handleRestart}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
          total={this.state.total}
          totalNavBar={this.totalNavBar}
          // formatCount={this.formatCount}
        />
        <Routing
          products={this.state.products}
          numberProducts={this.state.numberProducts}
          updateProducts={this.updateProducts}
          updateNumberProducts={this.updateNumberProducts}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleRestart={this.handleRestart}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
          total={this.state.total}
          totalNavBar={this.totalNavBar}
        />
        <Footer />
      </Router>
    );
  }
}
