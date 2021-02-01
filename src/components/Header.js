import React, { Component } from 'react';

class Header extends Component{
    render(){
       return(

         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">
                  <img className="rounded-circle" width="70px" src="/img/99236.jpg" alt=""/>
               </a>

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Game Catalog</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Link2</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Link3</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">
                           <i className="fas fa-shopping-cart"></i>
                           <span>  Your Cart</span>
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Sign-in</a>
                     </li>
                  </ul>
               </div>

               <ul className="navbar-nav navbar-right">
                  <form className="d-flex">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                     <button className="btn btn-outline-light" type="submit">Search</button>
                  </form>
               </ul>
            </div>
         </nav>
       );
    }
 }

 export default Header;