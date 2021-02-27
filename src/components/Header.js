import React, { Component } from 'react';
import {connect} from 'react-redux';

import {NavLink} from 'react-router-dom';
import CartTable from './Cart/CartTable';

class Header extends Component{

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
                           <span>Your Cart ({this.props.chosenProducts ? this.props.chosenProducts.length : 0})</span>
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink style={noDeco} className="nav-link" exact to="/login">Sign-in</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink style={noDeco} className="nav-link" exact to="/signup">Register</NavLink>
                     </li>
                  </ul>

                  <div className="dropdown">
                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        View Cart
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <CartTable page="quickView" productsArr={JSON.parse(localStorage.getItem("productsArr"))}/>
                     </div>
                  </div>
               </div>
               
               <ul className="navbar-nav navbar-right py-1">
                  <form className="d-flex" action="/store/">
                     <input name="q" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                     <button className="btn btn-outline-light" type="submit">Search</button>
                  </form>
               </ul>
            </div>
      </nav>
       );
    }
 }

const mapStateToProps = state => ({
   chosenProducts: state.products.chosenProducts,
})

export default connect(mapStateToProps)(Header)