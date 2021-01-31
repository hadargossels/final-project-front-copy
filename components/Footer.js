import React, { Component } from 'react';
class Footer extends Component{
   render(){
      return(
         <footer className="footer">
            <div className="container">
               <span className="text-muted">Liel Sharon Ltd. © 2021 All Rights Reserved</span>&emsp;&emsp;&emsp;
               <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>&emsp;
               <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>&emsp;
               <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>&emsp;
               <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
            </div>
       </footer>
      );
   }
}

export default Footer;