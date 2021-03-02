import React from 'react';
import {connect} from 'react-redux';
import { useAuth } from "../contexts/AuthContext";

import {NavLink, Link} from 'react-router-dom';
import CartTable from './Cart/CartTable';


// class Header extends Component{
function Header(props) {

   //  render(){
      const { currentUser } = useAuth();
      console.log(currentUser)


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
                           <span>Your Cart ({props.chosenProducts ? props.chosenProducts.length : 0})</span>
                        </NavLink>
                     </li>
                     
                     {props.loggedIn ?
                        <>
                           <li className="nav-item">          
                              <NavLink style={noDeco} className="nav-link" to="/admin">Admin</NavLink>
                           </li>
                           <li className="nav-item">          
                              <NavLink style={noDeco} className="nav-link" to="/account">Account</NavLink>
                           </li>
                        </> :
                        <>
                           <li className="nav-item">
                              <NavLink style={noDeco} className="nav-link" exact to="/login">Sign-in</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink style={noDeco} className="nav-link" exact to="/signup">Register</NavLink>
                           </li>
                        </>
                     }
                  </ul>

                  <div className="dropdown">
                     <span style={{color:"rgba(255,255,255,.55)"}} className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        View Cart
                     </span>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {props.chosenProducts ?
                           <CartTable page="quickView"/> : 
                           <div className="text-center container">
                              <div className="w-100">
                                 <span className="text-danger">Your cart is empty!</span>
                              </div>
                              <button className="btn btn-sm btn-primary m-2">
                                 <Link to="/store/" style={{textDecoration:"none",color:'white'}}>
                                    Continue Shopping
                                 </Link>
                              </button>
                           </div>
                        }
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
//  }

const mapStateToProps = state => ({
   chosenProducts: state.products.chosenProducts,
   loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps)(Header)