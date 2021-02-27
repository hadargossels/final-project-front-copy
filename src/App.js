import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.css";

import { connect } from "react-redux";
// import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import Header from "./components/header/header.component.jsx";

import HomePage from "./pages/homepage/homepage.component";

import Footer from "./components/Footer/Footer";

import ShopPage from "./pages/shop/shop.component.jsx";

import ContactPage from "./pages/contact/contact.component";
import AboutPage from "./pages/about/about.component";
import BlogPage from "./pages/blog/blog.component";
import SignOutPage from "./pages/signout/signout.component";
import ProductPage from "./pages/product/product.component";
import AccountPage from "./pages/account/account.component";

import SignInAndSignUpPage from "./pages/signin-signup/signin-signup.component";

import ShoppingCartPage from "./pages/shopping-cart/shopping-cart.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import TrackingPage from "./pages/tracking/tracking.component";
import { createStructuredSelector } from "reselect";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import NotFoundPage from "./pages/notfound/notfound.component";
import CollectionPage from "./pages/collection/collection.component";
import BlogPreviewPage from "./pages/blog-preview/blog-preview.component";

// import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import UpdateProfile from "./pages/update-profile/update-profile.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import ForgotPassword from "./pages/forgot-password/forgot-password.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    // const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot((snapShot) => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data(),
    //       });
    //     });
    //   }

    //   setCurrentUser(userAuth);
    //   // addCollectionAndDocuments(
    //   //   "collections",
    //   //   collectionsArray.map(({ title, items }) => ({ title, items }))
    //   // );
    // });
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <Router>
        <ScrollToTop />

        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/store" component={ShopPage} />
          <Route path="/collections" component={ShopPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog-preview" component={BlogPreviewPage} />
          <Route path="/contact" component={ContactPage} />
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
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signout" component={SignOutPage} />
          <Route path="/account" component={AccountPage} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/order-tracking" component={TrackingPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
