import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';


class Header extends Component{
   
   render(){
      return(
         
         <header>
            <a className=" aLogo" href="#"><img id="logoImg" src='/images/logo3.jpg'/></a>
            <nav className="navbar navbar-expand-lg navbar-dark"> 
               <div className="container-fluid">
                 
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="navBarMargin displaySmall">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0 navBarRighet">
                        <li className="nav-item">
                        {/* <NavLink to="/cart" className="nav-link active"><i className="fas fa-shopping-cart"></i></NavLink> */}
                           <a className="nav-link active" href="#"><i className="fas fa-shopping-cart"></i></a>
                        </li>
                        <li className="nav-item">
                           {/* <NavLink to="/wish" className="nav-link active"><i className="fas fa-heart"></i></NavLink> */}
                           <a className="nav-link active" href="#"><i className="fas fa-heart"></i></a>
                        </li>
                        <li className="nav-item">
                             <NavLink exact to="/login" className="nav-link active"><i className="fas fa-user"></i></NavLink>
                           {/* <a className="nav-link active" href="#"><i className="fas fa-user"></i></a> */}
                        </li> 
                     </ul>
                  </div>
                  <div className="collapse navbar-collapse navBarMargin" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <NavLink exact to="/" className="nav-link active" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink exact to="/store" className="nav-link active" href="#">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/about" className="nav-link active">About</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink to="/contact" className="nav-link active">Contact</NavLink>
                        </li>
                     </ul>
                    
                     <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success searchBtn" type="submit"><i className="fas fa-search"></i></button>
                     </form>
                  </div>
                  <div className="navBarMargin displayBig">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0 navBarRighet">
                        <li className="nav-item">
                        {/* <NavLink to="/cart" className="nav-link active"><i className="fas fa-shopping-cart"></i></NavLink>*/}
                           <a className="nav-link active" href="#"><i className="fas fa-shopping-cart"></i></a>
                        </li>
                        <li className="nav-item"> 
                           {/* <NavLink to="/wish" className="nav-link active"><i className="fas fa-heart"></i></NavLink> */}
                           <a className="nav-link active" href="#"><i className="fas fa-heart heartIcon"></i></a>
                        </li>
                        <li className="nav-item">
                              <NavLink exact to="/login" className="nav-link active"><i className="fas fa-user"></i></NavLink> 
                          {/* <a className="nav-link active" href="#"><i className="fas fa-user"></i></a> */}
                        </li> 
                     </ul>
                  </div> 
               </div>
            </nav>
         </header>
      
      );
   }
}
export default Header;



//  <header>
         
//             <nav className="navbar navbar-expand-lg navbar-dark"> 
//                <div className="container-fluid">
//                   <a className="navbar-brand" href="#"><img id="logoImg" src='images/logo3.jpg'/></a>
//                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                      <span className="navbar-toggler-icon"></span>
//                   </button>
//                   <div className="collapse navbar-collapse navBarMargin" id="navbarSupportedContent">
//                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                            <a className="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                            <a className="nav-link active" href="#">Link</a>
//                         </li>
//                         <li className="nav-item">
//                            <a className="nav-link active" href="#">Link</a>
//                         </li>
//                         <li className="nav-item">
//                            <a className="nav-link active" href="#"><i className="fas fa-shopping-cart"></i></a>
//                         </li>
//                         <li className="nav-item">
//                            <a className="nav-link active" href="#"><i className="fas fa-heart"></i></a>
//                         </li>
//                         <li className="nav-item">
//                            <a className="nav-link active" href="#"><i className="fas fa-user"></i></a>
//                         </li>
                        
//                      </ul>
                    
//                      <form className="d-flex">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                         <button className="btn btn-outline-success searchBtn" type="submit"><i className="fas fa-search"></i></button>
//                      </form>
//                   </div>
//                </div>
//             </nav>
//          </header>
      