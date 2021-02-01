import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StorePage from "./components/StorePage/StorePage";
import Content from "./components/Content/Content";

const HatsPage = () => (
  <div>
    <h1>DOGS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
      <StorePage />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
