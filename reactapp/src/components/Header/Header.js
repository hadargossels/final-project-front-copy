import React, { Component } from 'react';
import './headerStyle.css';
class Header extends Component{
   render(){
      return(
        <div className="container">
            <nav className="navBar">
                <i className="fas fa-bars">All</i>
                <a className = "btn from-top" href="#" >HOME</a>
                <a className = "btn from-left" href="#special" >SHOP</a>
                <a className = "btn from-right" href="#services" >SERVICES</a>
                <a className = "btn from-center" href="#about" >ABOUT</a>
                <a className = "btn from-bottom" href="#menu" >NEWS</a>
                <div className="input-group searchbar">
                    <div className="input-group-button">
                        <button className="buttonSearch search"><svg width="100" height="100" viewBox="0 0 100 100">
                            <path fill="#FFF" fillRule="evenodd" d="M42.117,12.246 C50.1209,12.246 57.797,15.4257 63.453,21.0858 C69.1132,26.742 72.2928,34.4178 72.2928,42.4218 C72.2928,50.4258 69.1131,58.1018 63.453,63.7578 C57.7968,69.418 50.121,72.5976 42.117,72.5976 C34.1131,72.5976 26.437,69.4179 20.781,63.7578 C15.1208,58.1016 11.9412,50.4258 11.9412,42.4218 C11.9412,34.4178 15.1209,26.7418 20.781,21.0858 C26.4372,15.4256 34.113,12.246 42.117,12.246 L42.117,12.246 Z M76.0828827,67.3362833 C82.3527829,58.7859894 85.2617455,48.0434678 83.9173,37.22271 C82.0618,22.28871 72.3743,9.47671 58.5153,3.61771 L58.51139,3.61771 C53.32389,1.41851 47.74139,0.28961 42.10539,0.29741 L42.117,0.305 C29.058,0.30891 16.742,6.3675 8.769001,16.707 C0.7924008,27.047 -1.933999,40.5 1.382301,53.129 C4.698701,65.758 13.6833,76.137 25.7103,81.223 L25.7103,81.22691 C39.5733,87.08631 55.5113,85.10191 67.5153,76.02771 C67.5852345,75.9748392 67.6549736,75.9217748 67.724517,75.8685177 L91.555,99.6990032 L100.0003,91.253703 L76.0828827,67.3362833 Z"/>
                            </svg>
                        </button>
                    </div>
                        <input className="input-field search-field" type="search" placeholder="Search for anything..." />
                    </div>
                <span className="btn from-bottom cartSpan"><i className="fas fa-shopping-cart"></i></span>
                <span className="from-bottom">Welcome Visitor</span>
            </nav>
        </div>
      );
   }
}
export default Header;
