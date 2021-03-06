import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/header.component.jsx";
import PrivateRoute from "./components/private-route/PrivateRoute";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import CurrentUserContext from "./contexts/current-user/current-user.context";
import {
  auth,
  createUserProfileDocument,
  fireInfo,
} from "./firebase/firebase.utils";
import AboutPage from "./pages/about/about.component";
import AccountPage from "./pages/account/account.component";
import BlogPreviewPage from "./pages/blog-preview/blog-preview.component";
import BlogPage from "./pages/blog/blog.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ContactPage from "./pages/contact/contact.component";
import ForgotPassword from "./pages/forgot-password/forgot-password.component";
import HomePage from "./pages/homepage/homepage.component";
import NotFoundPage from "./pages/notfound/notfound.component";
import ProductPage from "./pages/product/product.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import ShoppingCartPage from "./pages/shopping-cart/shopping-cart.component";
import SignInAndSignUpPage from "./pages/signin-signup/signin-signup.component";
import SignOutPage from "./pages/signout/signout.component";
import TrackingPage from "./pages/tracking/tracking.component";
import UpdateProfile from "./pages/update-profile/update-profile.component";
import { Admin, EditGuesser, Resource } from "react-admin";
// import { Resource } from "react-admin";
import CustomLoginPage from "./pages/admin/components/CustomLoginPage";
import UserList from "./pages/admin/components/UserList";
import UserCreate from "./pages/admin/components/UserCreate";
import UserEdit from "./pages/admin/components/UserEdit";
// import PostList from "./pages/admin/components/PostList";
// import PostCreate from "./pages/admin/components/PostCreate";
// import PostEdit from "./pages/admin/components/PostEdit";
import { firebaseConfig } from "./pages/admin/FIREBASE_CONFIG";
import jsonServerProvider from "ra-data-json-server";
import firebaseDataProvider from "ra-data-firebase-client";

import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";
import ShopList from "./pages/admin/components/ShopList";
import ShopCreate from "./pages/admin/components/ShopCreate";
import ShopEdit from "./pages/admin/components/ShopEdit";
import OrderList from "./pages/admin/components/orders/OrderList";
import OrderEdit from "./pages/admin/components/orders/OrderEdit";
import OrderCreate from "./pages/admin/components/orders/OrderCreate";
import UserIcon from "@material-ui/icons/Group";
import OrderIcon from "@material-ui/icons/AttachMoney";
import { UserShow } from "./pages/admin/components/UserShow";
import AccountAdminDashboard from "./pages/admin/AccountAdminDashboard";
import { ComputerIcon } from "@material-ui/icons/Computer";
import ShopShow from "./pages/admin/components/ShopShow";
import { OrderShow } from "./pages/admin/components/orders/OrderShow";
import Profile from "./pages/profile/profile.component";

const options = {
  logging: true,
  rootRef: "bamba/hummos",
};

const authProvider = FirebaseAuthProvider(firebaseConfig, options);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      loading: true,
      isAdmin: true,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const shopRef = fireInfo.database().ref("SHOP_DATA");

    // console.log("shopRef :", shopRef);

    // shopRef.on("value", (snapshot) => {
    //   console.log("snapshot :", snapshot.val());
    // });

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.uid,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });

    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        {" "}
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <ScrollToTop />
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/product/:id" component={ProductPage} />
            {/* <Route path="/shop" component={ProductPage} /> */}
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
                this.state.currentUser ? (
                  <CheckoutPage />
                ) : (
                  <SignInAndSignUpPage data={"forCheckIn"} />
                )
              }
            />
            <Route
              exact
              path="/signin"
              render={() =>
                this.state.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />{" "}
            <Route
              exact
              path="/profile"
              render={() =>
                this.state.currentUser && !this.state.loading ? (
                  <Profile />
                ) : (
                  <Redirect to="/" />
                )
              }
            />{" "}
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/signout" component={SignOutPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/order-tracking" component={TrackingPage} />
            {this.state.isAdmin ? (
              <Route
                path="/admin"
                render={() => {
                  return (
                    <Admin
                      // loginPage={CustomLoginPage}
                      // dataProvider={jsonServerProvider("http://localhost:3000")}
                      dashboard={AccountAdminDashboard}
                      dataProvider={firebaseDataProvider(fireInfo, {})}
                      authProvider={authProvider}
                    >
                      <Resource
                        name="users"
                        list={UserList}
                        icon={UserIcon}
                        show={UserShow}
                        create={UserCreate}
                        edit={UserEdit}
                      />

                      <Resource
                        name="SHOP_DATA"
                        icon={ComputerIcon}
                        list={ShopList}
                        show={ShopShow}
                        create={ShopCreate}
                        edit={ShopEdit}
                      />

                      <Resource
                        name="orders"
                        icon={OrderIcon}
                        list={OrderList}
                        show={OrderShow}
                        create={OrderCreate}
                        edit={OrderEdit}
                      />

                      {/* <Resource
                        name="SHOP_DATA/clothing"
                        list={ShopList}
                        create={ShopCreate}
                        edit={ShopEdit}
                      /> */}

                      {/* <Resource
                        name="posts"
                        list={PostList}
                        create={PostCreate}
                        edit={PostEdit}
                      /> */}
                    </Admin>
                  );
                }}
              />
            ) : (
              <Redirect to="/" />
            )}
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </CurrentUserContext.Provider>
      </Router>
    );
  }
}

export default App;
