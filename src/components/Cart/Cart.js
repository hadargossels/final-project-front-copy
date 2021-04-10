import React, { Component } from "react";
import NavBar from "./NavBar";
import Counters from "./Countres";
import "./Cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: this.props.products || [],
      item: this.props.match ? this.props.match.params.item : "",
      total: 0,
    };
  }
  componentDidMount = () => {
    // const storge = JSON.parse(localStorage.getItem("counters") || "[]");
    const storge = this.props.products || [];

    this.setState({ counters: storge });
  };
  componentDidUpdate = () => {
    // localStorage.setItem("counters", JSON.stringify(this.state.counters));
    // this.totalToPay();
  };
  // componentWillUnmount = () => {

  // };
  // addItemToCart = () => {
  //   if (this.state.item) {
  //     let name = this.state.item;

  //     let product = this.props.data.filter((item) => item.name === name);

  //     product = product[0];
  //     this.props.updateProducts(product);
  //     // let i = this.state.i;

  //     // let aa = [...this.state.counters];
  //     // aa.push({
  //     //   id: product.id,
  //     //   value: 1,
  //     //   name: product.name,
  //     //   price: product.price,
  //     //   src: product.src,
  //     // });

  //     // this.setState({counters:aa,i:i+1})
  //     // ("this.state.counters",this.state.counters)
  //     return product;
  //   }
  // };
  // handleIncrement = (counter) => {
  //   // const counters = [...this.state.counters];
  //   // const index = counters.indexOf(counter);
  //   // counters[index] = { ...counters[index] };
  //   // counters[index].value++;
  //   // this.setState({ counters });
  //   this.props.handleIncrement(counter);
  //   this.handleRestart();

  // };

  // handleDecrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counters[index] };
  //   counters[index].value--;
  //   this.setState({ counters });
  //   this.handleRestart();
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters: counters });
  //   localStorage.setItem("counters", JSON.stringify(counters));
  //   this.handleRestart();
  // };

  // handleRestart = () => {
  //   window.location.reload();
  // };
  totalToPay = () => {
    // let products = JSON.parse(localStorage.getItem("counters") || "[]");
    let products = this.props.products || [];
    if (products.length === 0) {
      return 0;
    } else {
      let total1 = 0;
      for (let i = 0; i < products.length; i++) {
        total1 += +products[i].value * +products[i].price;
      }
      // let total = products.reduce((total,item)=>{
      //   return (+total.price)*(+total.value)+(+item.price)*(+item.value)
      // return +total.price*+total.value+((+item.price)*(+item.value))
      // })
      localStorage.setItem("total", total1);
      return total1;
    }
  };

  render() {
    return (
      <div>
        <NavBar
          total={this.props.total}
          totalNavBar={this.props.totalNavBar}
          // totalCounters={products.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.props.handleReset}
            onIncrement={this.props.handleIncrement}
            onDecrement={this.props.handleDecrement}
            onDelete={this.props.handleDelete}
            onRestart={this.props.handleRestart}
            numberProducts={this.props.numberProducts}
            total={this.props.total}
            products={this.props.products}
          />
        </main>
      </div>
    );
  }
}
