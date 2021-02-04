import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import "./Header.css";
import logo1 from "./logo1.png";
import About from '../About/About';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';
import Middle from '../middle/Middle';

function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img
            src={logo1}
            width="100"
            height="24"
            className="d-inline-block align-top"
          /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink exact  activeStyle={{color:"green"}} to="/"  className="nav-link" aria-current="page" href="#">
                  Home 
        </NavLink>
     
        </li>
        <li className="nav-item">
        <NavLink activeStyle={{color:"green"}} to="/about" className="nav-link" href="#">
                  About Us!
        </NavLink>
         
        </li>
        <li className="nav-item">
        <NavLink activeStyle={{color:"green"}} to="/contact" className="nav-link" href="#" >
                  Contact
        </NavLink>
       
        </li>
        <li className="nav-item">
        <NavLink activeStyle={{color:"green"}} to="/blog" className="nav-link" href="#" >
                  Blog
        </NavLink>
       
        </li>
        <li className="nav-item">
        <NavLink activeStyle={{color:"green"}} to="/store" className="nav-link" href="#" >
                  Store
        </NavLink>
       
        </li>
      </ul>
      <form className="d-flex shop">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav mr-auto icons">
              <li>
                <Link to="/login" className="navbar-brand" href="#">
                  <i className="fas fa-sign-in-alt"></i>
                </Link>
              </li>
              <li>
                <Link to="/signup" className="navbar-brand" href="" alt="Sign up">
                <i class="fas fa-user-plus"></i>
                </Link>
              </li>
              <li>
                <a className="navbar-brand" href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Header;
