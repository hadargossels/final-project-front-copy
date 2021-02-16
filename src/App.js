import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProductPage from './Components/ProductPage/ProductPage';
import Footer from './Components/Footer/Footer';
import StoreFront from './Components/storeFront/storeFront';
import Homepage from './Components/Homepage/Homepage';
import AboutUs from './Components/AboutUs/AboutUs';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ContactUs from './Components/ContactUs/ContactUs';
import ShoppingCart from './Components/shoppingCart/ShoppingCart';
import Checkout from './Components/Checkout/Checkout'
import data from './data.json'
import { Switch, Route } from 'react-router-dom';
import FinalForm from './Components/FinalForm/FinalForm';
import Confirmation from './Components/Confirmation/Confirmation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: JSON.parse(localStorage.getItem('shoppingCart')),
      productNum: (localStorage.getItem('shoppingLength')) ? localStorage.getItem('shoppingLength') : 0,
      fullName: null,
      phoneNum: null,
      email: null,
      offers: "none",
      firstName: null,
      lastName: null,
      fullAd: null,
      zipCode: null,
      city: null,
      notes: "none",
      payment: null,
      cardNum: null,
      security: null,
      expDate: null,
      delivery: null,
    }
  }

  addToOrder = (valName,val) => {
    switch(valName) {
      case "delivery":
        this.setState({
          delivery: val,
        })
        break;
      case "fullName":
        this.setState({
          fullName: val,
        })
        break;
      case "phoneNum":
        this.setState({
          phoneNum: val,
        })
        break;
      case "email":
        this.setState({
          email: val,
        })
        break;
      case "offers":
        this.setState({
          offers: val,
        })
        break;
      case "firstName":
        this.setState({
          firstName: val,
        })
        break;
      case "lastName":
        this.setState({
          lastName: val,
        })
        break;
      case "fullAd":
        this.setState({
          fullAd: val,
        })
        break;
      case "zipCode":
        this.setState({
          zipCode: val,
        })
        break;
      case "city":
        this.setState({
          city: val,
        })
        break;
      case "notes":
        this.setState({
          notes: val,
        })
        break;
      case "payment":
        this.setState({
          payment: val,
        })
        break;
      case "cardNum":
        this.setState({
          cardNum: val,
        })
        break;
      case "security":
        this.setState({
          security: val,
        })
        break;
      case "expDate":
        this.setState({
          expDate: val,
        })
        break;
      default:
        break;
    }
  }

  addToCart = (changeStates) => {
    this.setState({
      productNum: localStorage.getItem('shoppingLength'),
      productList: JSON.parse(localStorage.getItem('shoppingCart'))
    },() => {this.addSum()})
  }

  addSum =() => {
    let products = [...this.state.productList];
    let sumPrice = 0;
    data.products.forEach((product) => {
      if(products.includes(product.ISBN10)) {
        sumPrice += product.price;
      }
    })
    localStorage.setItem('finalPrice',sumPrice);
  }

  render () {
    return (
      <div className="bg-gray-800 globalFont">
        <Header cartNum={this.state.productNum}/>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/catalogue/" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/catalogue/new" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/catalogue/specials" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/catalogue/top" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/catalogue/:search" render={(matchProps) => (<StoreFront {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/item/:itemISBN" render={(matchProps) => (<ProductPage {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/shoppingCart" render={(matchProps) => (<ShoppingCart {...matchProps} {...this.props} cartContent={this.state.productList} addToCart={this.addToCart} />)} />
            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/checkout" render={(matchProps) => (<Checkout {...matchProps} {...this.props} addToOrder={this.addToOrder} />)} />
            <Route path="/finalstage" render={(matchProps) => (<FinalForm {...matchProps} {...this.props}
             fullName={this.state.fullName} 
             phoneNum={this.state.phoneNum}
             email={this.state.email}
             offers={this.state.offers}
             firstName={this.state.firstName}
             lastName={this.state.lastName}
             fullAd={this.state.fullAd}
             zipCode={this.state.zipCode}
             city={this.state.city}
             notes={this.state.notes}
             payment={this.state.payment}
             cardNum={this.state.cardNum}
             security={this.state.security}
             expDate={this.state.expDate}
             delivery={this.state.delivery}
            />)} />
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
