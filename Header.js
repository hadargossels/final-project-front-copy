import React, { Component } from 'react';

class Header extends Component{
   render(){
      return(
         <div className='header'>
             <nav className="navbar">
                <a className ="href_group1" href="#">link1</a>
                <a className ="href_group1" href="#">limk2</a>
                <a className ="href_group1" href="#">link3</a>
                <a className ="href_group1" href="#">link4</a>
                <a className ="href_group1" href="#">link5</a>
            </nav>
            <div className="search">
                <input id="search_text" type="search" name="search_input" value="" placeholder="Search..." className="search_input"></input>
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div className="connect">
                <i className="fas fa-shopping-cart"></i> 
                <a className ="connect" href="#">connect/</a>
                <a className ="connect" href="#">disconnect</a>    
            </div>
         </div>
      );
   }
}
export default Header;
