import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'

class Header extends Component{

   render(){
      return(
         <div className='head'>
            <div className='navbar'>
               <NavLink exact to="/" activeStyle={{color:"white"}}><button className='navbtn'>Home</button></NavLink>
               <NavLink exact to="/Store" activeStyle={{color:"white"}}><button className='navbtn'>Store</button></NavLink>
               <NavLink exact to="/About" activeStyle={{color:"white"}}><button className='navbtn'>About</button></NavLink>
               <NavLink exact to="/Blog" activeStyle={{color:"white"}}><button className='navbtn'>Blog</button></NavLink>
               <NavLink exact to="/Contact" activeStyle={{color:"white"}}><button className='navbtn'>Contact</button></NavLink>
            </div>
            <form action="/Store">
            <input type="text" id="search" name="q" placeholder="Search"></input>
            <input type="submit" id="subSer" className="fas fa-search serBtn" value=""></input>
            </form>
            <div className='logo'></div>
            <i className="fas fa-shopping-cart"></i>
            <div className='logindiv'><NavLink exact to="/Login" className='logindiv'>Log In/Sign In</NavLink></div>
            
         </div>
      );
   }
}
export default Header;
