import React, { Component } from 'react';
import './Header.css';
class Header extends Component{
   render(){
      return(
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
                    FunnyBooks.com
                </a>
                <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                    <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
                </div>
                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                <ul className="flex flex-col lg:flex-row list-none mr-auto">
                    <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                        <span className="ml-2">Homepage</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                        <span className="ml-2">Browse</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                        <span className="ml-2">Special Offers</span>
                    </a>
                    </li>
                </ul>
                <div className="relative flex w-1/2 sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
                    <div className="flex">
                    <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-blue-500 rounded-full text-sm bg-blue-100 items-center rounded-r-none pl-2 py-1 text-blue-800 border-r-0 placeholder-blue-300">
                        <i className="fas fa-search"></i>
                    </span>
                    </div>

                    <input type="text" className="px-2 py-1 h-8 border border-solid  border-blue-600 rounded-full text-sm leading-snug text-blue-700 bg-blue-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-blue-300" placeholder="Search blue" />
                </div>
                <ul className="flex flex-col lg:flex-row list-none">
                <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                        <i className="fas fa-user-check text-sm leading-xs text-white opacity-75" /> <span class="ml-2">Sing Up/Sign In</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                        <i className="fas fa-shopping-cart text-lg leading-none text-white opacity-75" /> 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                        <i className="far fa-heart text-lg leading-none text-white opacity-75" /> 
                    </a>
                </li>
                </ul>
                </div>
            </div>
            </nav>
      );
   }
}

export default Header;