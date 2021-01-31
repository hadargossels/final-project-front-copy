import React, { Component } from 'react';
class Header extends Component{
   render(){
      return(
         <div className='head'>
            <div className='navbar'>
               <button className='navbtn'>option 1</button>
               <button className='navbtn'>option 2</button>
               <button className='navbtn'>option 3</button>
               <button className='navbtn'>option 4</button>
               <button className='navbtn'>option 5</button>
            </div>
            <input type="text" id="search" name="search" placeholder="Search"></input>
            <div className='logo'>logo</div>
            <i className="fas fa-shopping-cart"></i>
            <div className='logindiv'><a className='login' href="">login</a> / <a className='login' href="">sign in</a></div>
         </div>
      );
   }
}
export default Header;
