import React, { Component } from 'react';
import './Header.css';
import Store from './Store';
class Header extends Component{

   render(){
      return(
         <div className='head'>
            <div className='navbar'>
               <button className='navbtn' onClick={() => {this.props.updatestate('store')}}>Store</button>
               <button className='navbtn' onClick={() => {this.props.updatestate('product')}}>option 2</button>
               <button className='navbtn'>option 3</button>
               <button className='navbtn'>option 4</button>
               <button className='navbtn'>option 5</button>
            </div>
            <input type="text" id="search" name="search" placeholder="Search"></input>
            <div className='logo'></div>
            <i className="fas fa-shopping-cart"></i>
            <div className='logindiv'><a className='login' href="">login</a> / <a className='login' href="">sign in</a></div>
         </div>
      );
   }
}
export default Header;
