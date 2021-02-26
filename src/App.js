import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./Routing";
import { auth } from "./firebase";

function App() {
  console.log(auth);
  return (
    <Router>
      <Header />
      <Routing />
      <Footer />
    </Router>
  );
}

export default App;
