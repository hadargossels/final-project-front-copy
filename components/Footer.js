import React, { Component } from 'react';

class Footer extends Component{
    render(){
       return(
          <div className = "bg-dark text-primary text-center mb-0 py-3">
             <p className="h5 text-light">Stay in touch!</p>
             <a href="https://mail.google.com/mail/u/0/#inbox">
               <i className="far fa-envelope fa-2x mx-2"></i>
             </a>
             <a href="https://www.facebook.com/">
               <i className="fab fa-facebook fa-2x mx-2"></i>
             </a>
             <a href="https://www.linkedin.com/feed/">
               <i className="fab fa-linkedin fa-2x mx-2"></i>
             </a>
             <a href="https://twitter.com/home">
               <i className="fab fa-twitter fa-2x mx-2"></i>
             </a>
             <p className=" footer mb-0">© 2021 PenguinGames All Rights Reserved</p>
          </div>
       );
    }
 }

 export default Footer;