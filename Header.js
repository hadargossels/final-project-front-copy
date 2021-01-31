import React, { Component } from 'react';
class Header extends Component{

   render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                    <img className="navbar-brand" width="70px" height="50px" src="https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">התחבר</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">הרשם</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="#"><i className="fas fa-shopping-cart"></i></a>
                    </li>
                </ul>
            </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </nav>
      );
   }
}
export default Header;