import React, { Component } from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

class Footer extends Component{
   render(){
      return(
        <footer>
            <div className="flex flex-wrap py-0">
              <div className="w-full px-0 relative bottom-0">
                <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-600">
                  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                      <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
                        © All rights reserved 
                      </span>
                      <button 
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
                        type="button"
                      >
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                      </button>
                    </div>
                    <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                      <ul className="flex flex-col lg:flex-row list-none">
                        <li className="nav-item">
                          <a 
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
                            href="https://twitter.com/" 
                            target="_blank" 
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a 
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
                            href="https://www.instagram.com/" 
                            target="_blank" 
                            rel="noreferrer"
                          >
                            <i className="fab fa-instagram text-lg leading-lg text-white opacity-75"></i>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a 
                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
                            href="https://www.facebook.com/" 
                            target="_blank" 
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                          </a>
                        </li>
                      </ul>
                      <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item">
                          <span 
                            className="px-1 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75" 
                            href="#pablo"
                          >
                            <Link to="/about-us">
                              About Us
                            </Link>
                          </span>
                        </li>
                        <li className="nav-item">
                          <span className="px-1 py-2 flex items-center text-sm uppercase font-bold leading-none text-white hover:opacity-75">
                            .
                          </span>
                        </li>
                        <li className="nav-item">
                          <span className="px-1 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75">
                            <Link to="/contact-us">
                              Contact Us
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
        </footer>
      );
   }
}

export default Footer;