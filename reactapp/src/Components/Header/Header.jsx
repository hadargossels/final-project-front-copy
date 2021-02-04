import React, { Component } from 'react';
import './Header.css';
import {Link, Route } from 'react-router-dom';

const Contacts = ({match}) => {
    console.log(match.params.num)
    return <p>{match.params.num}</p>
}
class Header extends Component{
   
    render(){
        return(
            <div className='header'>
                <span>logo</span>
                <ul className="navbar">
                    <li className="href_group1">
                    <Link className="navbar_links" to = '/store'>shop</Link>
                    </li>
                    <li className="href_group1">
                    <Link className="navbar_links" to = '/contact'>Contact-Us</Link>
                    </li>
                    <li className="href_group1">
                    <Link className="navbar_links" to = '/about'>About-Us</Link>
                    </li>
                    <li className="href_group1">
                    <Link className="navbar_links" to = '/Blog'>Blog</Link>
                    </li>
                    <li className="href_group1">
                    <Link className="navbar_links" to = '/NewLogin'>Sign-Up</Link>
                    </li>
                </ul>
                <div className="search">
                    <input id="search_text" type="search" name="search_input" defaultValue="" placeholder="Search..." className="search_input"></input>
                    <button>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            <div className="connect">
                <i className="fas fa-shopping-cart"></i>
                <ul className="connect_link">
                    <li className="connect">
                    <Link className="connect_l" to = '/login'>connect / disconnect</Link>
                    </li>
                </ul>  
            </div>
         </div>
      );
   }
}
export default Header;
