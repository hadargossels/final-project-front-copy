import React, { Component } from 'react';

class Header extends Component{
   render(){
      return(
         <header>
         <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
           <a className="navbar-brand" href="#"><img src="/images/logos/logo2.png" alt="LIEL'S" width="30%" /></a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarCollapse">
             <ul className="navbar-nav mr-auto">
               <li className="nav-item active"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></li>
               <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
               <li className="nav-item"><a className="nav-link disabled" href="#">Disabled</a></li>
             </ul>
             <ul className="nav navbar-nav navbar-right pr-3">
               <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Sign in / Sign out</a></li>
               <li className="nav-item"><a className="nav-link" href="#" data-abc="true"><i className="fas fa-shopping-cart"></i></a></li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
               <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
               <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
           </div>
         </nav>
       </header>
      );
   }
}

export default Header;