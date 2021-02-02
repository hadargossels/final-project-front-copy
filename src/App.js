import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import ClothingPage from "./pages/shop/clothing/clothing.component.jsx";
import CollarsPage from "./pages/shop/collars/collars.component.jsx";
import GroomingPage from "./pages/shop/grooming/grooming.component.jsx";
import TrainingPage from "./pages/shop/training/training.component.jsx";
import ToysPage from "./pages/shop/toys/toys.component.jsx";
import HousesPage from "./pages/shop/houses/houses.component.jsx";
import CarriersPage from "./pages/shop/carriers/carriers.component.jsx";
import OutdoorPage from "./pages/shop/outdoor/outdoor.component.jsx";
import FeedingPage from "./pages/shop/feeding/feeding.component.jsx";

import Header from "./components/header/header.component.jsx";

// import Header1 from "./components/Header1/Header";

import Footer from "./components/Footer/Footer";
import StorePage from "./components/StorePage/StorePage";
import Content from "./components/Content/Content";
{
  /* <Content /> */
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/clothing" component={ClothingPage} />
        <Route path="/collars" component={CollarsPage} />
        <Route path="/grooming" component={GroomingPage} />
        <Route path="/training" component={TrainingPage} />
        <Route path="/toys" component={ToysPage} />
        <Route path="/houses" component={HousesPage} />
        <Route path="/carriers" component={CarriersPage} />
        <Route path="/outdoor" component={OutdoorPage} />
        <Route path="/feeding" component={FeedingPage} />
      </Switch>
      {/* <StorePage />
      <StorePage /> */}
      <Footer />
    </div>
  );
}

export default App;
