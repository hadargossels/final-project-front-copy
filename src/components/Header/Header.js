import React, { Component } from 'react';
import './Header.css';
import {Link,NavLink} from "react-router-dom";
import Logo from "../../pictures/bitcoinLogo.png"
class Header extends Component{   

   render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/home"><img className="navbar-brand" width="50px" height="50px" alt="..." src={Logo}></img></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="navbar-brand" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Balance: 1 BTC"><i className="fas fa-wallet"></i></div>
                    </li>
                    <li className="nav-item">
                        <div className="navbar-brand"><i className="fas fa-shopping-cart"></i></div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/home" activeStyle={{color:'orange'}}><div className="nav-link">Home</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" activeStyle={{color:'orange'}}><div className="nav-link">Login</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" activeStyle={{color:'orange'}}><div className="nav-link">Register</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" exact activeStyle={{color:'orange'}}><div className="nav-link" >Store</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contactUs" activeStyle={{color:'orange'}}><div className="nav-link">Contact-Us</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/info" activeStyle={{color:'orange'}}><div className="nav-link">what is hardware wallet?</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dashboard" activeStyle={{color:'orange'}}><div className="nav-link">Dashboard</div></NavLink>
                    </li>
                </ul>
            </div>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-warning" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
      );
   }
}
export default Header;