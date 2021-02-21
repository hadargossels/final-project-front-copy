import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import CartTable from './Cart/CartTable';

class Header extends Component{
   constructor(props){
      super(props)
      this.state = {itemsInCart: JSON.parse(localStorage.getItem("productsArr")) ? JSON.parse(localStorage.getItem("productsArr")).length : 0}
   }

    render(){
      const noDeco = {textDecoration:"none"}
       return(
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
               <NavLink style={noDeco} className=" navbar-brand" exact to="/">
                  <img className="rounded-circle img-fluid" width="70px" src="/img/99236.jpg" alt=""/>
               </NavLink>

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                           <NavLink style={noDeco} className="nav-link" exact to="/">Home</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink style={noDeco} className="nav-link" exact to="/store">Game Catalog</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink style={noDeco} className="nav-link" exact to="/blog">Blog</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink style={noDeco} className="nav-link" to="/cart">
                           <i className="fas fa-shopping-cart me-2"></i>
                           <span>Your Cart ({this.state.itemsInCart})</span>
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink style={noDeco} className="nav-link" exact to="/login">Sign-in</NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink style={noDeco} className="nav-link" exact to="/signup">Register</NavLink>
                     </li>
                  </ul>
                  <button type="button" className="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        View Cart
                     </button>
               </div>
               

               <ul className="navbar-nav navbar-right py-1">
                  
                  <form className="d-flex" action="/store/">

                     <input name="q" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                     <button className="btn btn-outline-light" type="submit">Search</button>
                  </form>
            </ul>
         </div>

         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Your Cart</h5>
                  
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <CartTable page="quickView" productsArr={JSON.parse(localStorage.getItem("productsArr"))}/>
                  </div>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
               </div>
            </div>
         </div>
      </nav>
       );
    }
 }

 export default Header;