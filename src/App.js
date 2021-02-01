import React from "react";
// import { Switch, Route } from "react-router-dom";

import "./App.css";

// import HomePage from "./pages/homepage/homepage.component";

import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";

// <div>
//   <Switch>
//     <Route exact path="/" component={HomePage} />
//     <Route path="/hats" component={HatsPage} />
//   </Switch>
// </div>

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
