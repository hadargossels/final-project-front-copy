import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component.jsx";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import ClothingPage from "./pages/shop/clothing/clothing.component.jsx";
import CollarsPage from "./pages/shop/collars/collars.component.jsx";
import GroomingPage from "./pages/shop/grooming/grooming.component.jsx";
import TrainingPage from "./pages/shop/training/training.component.jsx";
import ToysPage from "./pages/shop/toys/toys.component.jsx";
import HousesPage from "./pages/shop/furniture/furniture.component.jsx";
import CarriersPage from "./pages/shop/carriers/carriers.component.jsx";
import OutdoorPage from "./pages/shop/outdoor/outdoor.component.jsx";
import FeedingPage from "./pages/shop/feeding/feeding.component.jsx";

import NotFoundPage from "./pages/shop/notfound/notfound.component.jsx";

// import Header1 from "./components/Header1/Header";

import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import StorePage from "./pages/shop/store/store.component";
import FurniturePage from "./pages/shop/furniture/furniture.component.jsx";
import ContactPage from "./pages/contact/contact.component";
import AboutPage from "./pages/about/about.component";
import BlogPage from "./pages/blog/blog.component";
import SignInPage from "./pages/signin/signin.component";
import SignOutPage from "./pages/signout/signout.component";
import ProductPage from "./pages/product/product.component";
import DashboardPage from "./pages/dashboard/dashboard.component";
import AccountPage from "./pages/account/account.component";
// import SortingBtn from "./components/sorting-btn/sorting-btn.component";
{
  /* <Content /> */
}

function App() {
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
        <Route path="/signin" component={SignInPage} />
        <Route path="/signout" component={SignOutPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/account" component={AccountPage} />

        <Route component={NotFoundPage} />
      </Switch>
      {/* <StorePage />
      <StorePage /> */}
      <Footer />
    </div>
  );
}

export default App;
