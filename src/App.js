import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import ClothingPage from "./pages/shop/clothing/clothing.component.jsx";
import CollarsPage from "./pages/shop/collars/collars.component.jsx";
import GroomingPage from "./pages/shop/grooming/grooming.component.jsx";
import TrainingPage from "./pages/shop/training/training.component.jsx";
import ToysPage from "./pages/shop/toys/toys.component.jsx";
import CarriersPage from "./pages/shop/carriers/carriers.component.jsx";
import OutdoorPage from "./pages/shop/outdoor/outdoor.component.jsx";
import FeedingPage from "./pages/shop/feeding/feeding.component.jsx";

import NotFoundPage from "./pages/shop/notfound/notfound.component.jsx";

import Footer from "./components/Footer/Footer";
import StorePage from "./pages/shop/store/store.component";
import FurniturePage from "./pages/shop/furniture/furniture.component.jsx";
import ContactPage from "./pages/contact/contact.component";
import AboutPage from "./pages/about/about.component";
import BlogPage from "./pages/blog/blog.component";
import SignOutPage from "./pages/signout/signout.component";
import ProductPage from "./pages/product/product.component";
import DashboardPage from "./pages/dashboard/dashboard.component";
import AccountPage from "./pages/account/account.component";

import SignInAndSignUpPage from "./pages/signin-signup/signin-signup.component";
import eCheckoutPage from "./pages/shopping-cart/shopping-cart.component";
import CartListPage from "./pages/shopping-cart/shopping-cart.component";
import ShoppingCartPage from "./pages/shopping-cart/shopping-cart.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Map from "./components/google-map/google-map.component";
import TrackingPage from "./pages/tracking/tracking.component";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selector";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/store" component={StorePage} />
          <Route path="/collections" component={ShopPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/clothing" component={ClothingPage} />
          <Route path="/collars" component={CollarsPage} />
          <Route path="/grooming" component={GroomingPage} />
          <Route path="/training" component={TrainingPage} />
          <Route path="/toys" component={ToysPage} />
          <Route path="/furniture" component={FurniturePage} />
          <Route path="/carriers" component={CarriersPage} />
          <Route path="/outdoor" component={OutdoorPage} />
          <Route path="/feeding" component={FeedingPage} />
          <Route exact path="/shopping-cart" component={ShoppingCartPage} />
          {/* <Route exact path="/checkout" component={CheckoutPage} /> */}
          <Route
            exact
            path="/checkout"
            render={() =>
              this.props.currentUser ? (
                <CheckoutPage />
              ) : (
                <SignInAndSignUpPage forCheckIn={"forCheckIn"} />
              )
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />{" "}
          <Route path="/signout" component={SignOutPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/order-tracking" component={TrackingPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
