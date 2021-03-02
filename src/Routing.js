import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Display from "./components/Display-middle/Display";
import Login from "./components/Login/Login";
import Blog from "./components/Blog/Blog";
import Signup from "./components/Signup/Signup";
import Product from "./components/Product/Product";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.css";
import Cartpage from "./components/Cart/Cartpage";
import Payment from "./components/PaymentPage/Payment";
import Paymentdetails from "./components/Paymentdetails/Paymentdetails";
import Paypal from "./components/Paymentdetails/Paypal";
import Oneblog from "./components/Blog/Oneblog";
import axios from "axios";
import { LandingPage } from "./landing.page";
import { AppLayout } from "./app.layout";
import { ProtectedRoute } from "./protected.route";
import { ProtectedRouteProfile } from "./protected.route.profile";
import profile from "./components/profile/profile";
import Admin from "./components/admin/AdminPage";
import AdminPage from "./components/admin/AdminPage";

export default class Routing extends Component {
  state = {
    origItem: [],
    blogs: [],
  };
  componentDidMount() {
    console.log("hey");
    axios.get(`http://localhost:3000/products`).then((res) => {
      const products = res.data;
      this.setState({ origItem: products });
    });

    axios.get(`http://localhost:3000/blogs`).then((res) => {
      const blogs = res.data;
      this.setState({ blogs: blogs });
    });
    console.log("mydata", this.state.blogs);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={LandingPage} />
          <Route exact path="/blog">
            <Blog datablog={this.state.blogs} />
          </Route>

          <Route
            path="/blog/:nameblog"
            render={(routerProps) => (
              <Oneblog {...routerProps} datablogs={this.state.blogs} />
            )}
          />
          <Route
            path="/cart"
            render={(routerProps) => (
              <Cartpage {...routerProps} data={this.state.origItem} />
            )}
          />
          <Route
            path="/product/:productName"
            render={(routerProps) => (
              <Product {...routerProps} data={this.state.origItem} />
            )}
          />

          <Route
            path="/store"
            render={(routerProps) => (
              <Display {...routerProps} data={this.state.origItem} />
            )}
          />
          <ProtectedRoute exact path="/user" component={AppLayout} />
          <ProtectedRouteProfile
            exact
            path="/account/profile"
            component={profile}
          />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/payment" component={Payment} />
          <Route path="/paypal" component={Paypal} />
          <Route path="/paymentdetails" component={Paymentdetails} />
          <Route path="/adminpage" component={AdminPage} />
          <Route component={NotFound} />

          {/* <Route path="/blog/:nameblog" component={Oneblog} /> */}
          {/* <Route path="/store/product">
            <Display data={this.state.origItem} />
          </Route>

          <Route path="/store" component={Display} /> */}

          {/* <Route exact path="/cart" component={Cartpage} /> */}

          {/* <Route exact path="/cart" >
                                <Cartpage  data={this.state.origItem}/>
                            </Route> */}

          {/* <Route  path="/cart/:item" component={Cart} /> */}

          {/* <Route  path="/cart/:item" >
                                <Cart data={this.state.origItem}/>
                            </Route> */}
          {/* <Route exact path="/cart/:item" component={(props) => (<Cart {...props} data={this.state.origItem}/>)}/> */}

          {/* <Route exact path="/cart/guest/payment" component={(props) => (<CartPaymentGuestReview {...props} products={this.state.data.products}/>)}/> */}
          {/* <Route exact path="/product/:productName" component={(props) => (<Product {...props} data={this.state.origItem}/>)}/> */}

          {/* <Route path="/product/:productName" render={routerProps=>( <Product {...routerProps} data={this.state.origItem}/>)} /> */}

          {/* <Router path="/product">
                                 <Product data={this.state.origItem}/>
                             </Router> */}
        </Switch>
      </div>
    );
  }
}
