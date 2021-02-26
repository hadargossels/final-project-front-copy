import React, { Component } from "react";
import NavBar from "./NavBar";
import Counters from "./Countres";
import "./Cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [],
      item: this.props.match ? this.props.match.params.item : "",
      total: 0,
    };
  }
  componentDidMount = () => {
    const storge = JSON.parse(localStorage.getItem("counters") || "[]");

    this.setState({ counters: storge });
    console.log("counters", storge);
  };
  componentDidUpdate = () => {
    localStorage.setItem("counters", JSON.stringify(this.state.counters));
    this.totalToPay();
  };
  // componentWillUnmount = () => {

  // };
  addItemToCart = () => {
    if (this.state.item) {
      let name = this.state.item;

      let product = this.props.data.filter((item) => item.name === name);

      product = product[0];
      // console.log(product)
      let i = this.state.i;

      let aa = [...this.state.counters];
      aa.push({
        id: i,
        value: 0,
        name: product.name,
        price: product.price,
        src: product.src,
      });

      // this.setState({counters:aa,i:i+1})
      // console.log("this.state.counters",this.state.counters)
      return product;
    }
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
    this.handleRestart();
    // let total=JSON.parse(localStorage.getItem("total"))
    // total+=+counter.price
    // localStorage.setItem("total", JSON.stringify(total))

    // let totalStorge=+this.state.total
    // this.setState({total:totalStorge})

    // let value= +counter.value
    // value+=1
    // this.setState({value:value})
    // localStorage.setItem("counters.value", JSON.stringify(value))
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
    this.handleRestart();
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log("counters", counters);
    this.setState({ counters: counters });
    localStorage.setItem("counters", JSON.stringify(counters));
    this.handleRestart();
  };

  handleRestart = () => {
    window.location.reload();
  };
  totalToPay = () => {
    let products = JSON.parse(localStorage.getItem("counters") || "[]");
    if (products.length === 0) {
      return 0;
    } else {
      console.log("products", products);
      let total1 = 0;
      for (let i = 0; i < products.length; i++) {
        total1 += +products[i].value * +products[i].price;
      }
      // let total = products.reduce((total,item)=>{
      //   return (+total.price)*(+total.value)+(+item.price)*(+item.value)
      // return +total.price*+total.value+((+item.price)*(+item.value))
      // })
      console.log("totalhere11", total1);
      localStorage.setItem("total", total1);
      return total1;
    }
  };

  render() {
    return (
      <div>
        <NavBar
          total={this.totalToPay}
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
      </div>
    );
  }
}
