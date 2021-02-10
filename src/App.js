// import './App.css';
import {Link,Route,BrowserRouter as Router,NavLink, withRouter, Switch  } from "react-router-dom";
import Header from './components/productPage/Headrer-navbar';
import Middle from './components/productPage/Middle';
import Footer from './components/productPage/Footer';
import Album from './components/productPage/Album';
import Contact from './components/productPage/Contact';
import About from "./components/productPage/About";
import Blog from "./components/productPage/Blog";
import Sign from "./components/productPage/Sign";
// import ProductYoga from "./components/productPage/ProductYoga";
import Home from "./components/productPage/Home";
import shopingBag from "./components/productPage/shopingBag";



function App() {
  return (
    <div>
          <Router>
            <Header/><br/>
              <Route exact path="/" component={Home} />
              <Route path="/store/:cat" component={Album} />
              <Route path="/product/:num/:name" component={Middle} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/login" component={Sign} />
              <Route path="/shopingchart/:iJson" component={shopingBag} />
          </Router>
        <br/><br/><br/>
        <Footer/>
    </div>
  );
}
export default App;
