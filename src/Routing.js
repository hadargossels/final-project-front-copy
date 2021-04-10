import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { db } from "./firebase";
import "./index.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Display from "./components/Display-middle/Display";
import Blog from "./components/Blog/Blog";
import Signup from "./components/Signup/Signup";
import Product from "./components/Product/Product";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import Cartpage from "./components/Cart/Cartpage";
import Payment from "./components/PaymentPage/Payment";
import Paymentdetails from "./components/Paymentdetails/Paymentdetails";
import Paypal from "./components/Paymentdetails/Paypal";
import Oneblog from "./components/Blog/Oneblog";
import { LandingPage } from "./landing.page";
import { AppLayout } from "./app.layout";
import { ProtectedRoute } from "./protected.route";
import { ProtectedRouteProfile } from "./protected.route.profile";
import profile from "./components/profile/profile";
import AdminPage from "./components/admin/AdminPage";
import axios from "axios";

export default class Routing extends Component {
  state = {
    origItem: [],
    blogs: [],
  };
  componentDidMount() {
    // this.getDataFromDB();
    // this.getBlogDataDB();
    localStorage.setItem("total", this.props.total);
    axios.get(`http://localhost:4000/products`).then((res) => {
      const products = res.data;
      this.setState({ origItem: products });
    });

    axios.get(`http://localhost:4000/blogs`).then((res) => {
      const blogs = res.data;
      this.setState({ blogs: blogs });
    });
  }

  getDataFromDB() {
    // db.child("products")
    //   .get()
    //   .then(async (snapshot) => {
    //     if (snapshot.exists()) {
    //       this.setState({ origItem: snapshot.val() });
    //     } else {
    //     }
    //   });
  }
  getBlogDataDB() {
    // db.child("blogs")
    //   .get()
    //   .then(async (snapshot) => {
    //     if (snapshot.exists()) {
    //       this.setState({ blogs: snapshot.val() });
    //     } else {
    //     }
    //   });
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={LandingPage} />
          <Route
            exact
            path="/blog"
            render={(routerProps) => (
              <Blog
                {...routerProps}
                datablogs={this.state.blogs ? this.state.blogs : []}
              />
            )}
          />
          <Route
            path="/blog/:nameblog"
            render={(routerProps) => (
              <Oneblog
                {...routerProps}
                datablogs={this.state.blogs ? this.state.blogs : []}
              />
            )}
          />
          <Route
            path="/cart"
            render={(routerProps) => (
              <Cartpage
                {...routerProps}
                data={this.state.origItem}
                updateProducts={this.props.updateProducts}
                handleIncrement={this.props.handleIncrement}
                handleDecrement={this.props.handleDecrement}
                products={this.props.products}
                numberProducts={this.props.numberProducts}
                handleRestart={this.props.handleRestart}
                handleDelete={this.props.handleDelete}
                handleReset={this.props.handleReset}
                total={this.props.total}
                totalNavBar={this.props.totalNavBar}
              />
            )}
          />
          <Route
            exact
            path="/product/:productName"
            render={(routerProps) => (
              <Product {...routerProps} data={this.state.origItem} />
            )}
          />

          <Route
            exact
            path="/store"
            render={(routerProps) => (
              <Display
                {...routerProps}
                data={this.state.origItem}
                updateProducts={this.props.updateProducts}
                products={this.props.products}
              />
            )}
          />
          <Route
            path="/store/:category"
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

          <Route
            exact
            path="/"
            render={(routerProps) => (
              <Home {...routerProps} data={this.state.origItem} />
            )}
          />

          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route
            path="/payment"
            component={Payment}
            products={this.props.products}
            total={this.props.total}
          /> */}

          <Route
            path="/payment"
            render={(routerProps) => (
              <Payment
                {...routerProps}
                products={this.props.products}
                total={this.props.total}
              />
            )}
          />

          <Route
            path="/paypal"
            component={Paypal}
            products={this.props.products}
            total={this.props.total}
          />
          {/* <Route
            path="/paymentdetails"
            component={Paymentdetails}
            
          /> */}

          <Route
            path="/paymentdetails"
            render={(routerProps) => (
              <Paymentdetails
                {...routerProps}
                products={this.props.products}
                total={this.props.total}
              />
            )}
          />

          <Route path="/adminpage" component={AdminPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
