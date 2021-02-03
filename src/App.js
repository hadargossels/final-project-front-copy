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



function App() {
  return (
    <div>
          <Router>
            <Header/><br/>
              <Route exact path="/" component={Album} />
              <Route path="/page/:num" component={Middle} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/login" component={Sign} />
          </Router>
        <br/><br/><br/>
        <Footer/>
    </div>
  );
}
export default App;
