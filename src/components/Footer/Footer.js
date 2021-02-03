import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

class Footer extends Component{
   render(){
      return(
         <footer>
            <div className="row containerFooter">
               <div className="col-4">
                  {/* <NavLink to="/about">About Us</NavLink><br/>
                  <NavLink to="/contact">Contact Us</NavLink><br/> */}
                  <span>About Us</span><br/>
                  <span>Contact Us</span><br/>
               </div>
               <div className="col-4">
                  {/* <NavLink to="/policy">Policy</NavLink><br/>
                  <NavLink to="/shipping-Policy">Shipping Policy</NavLink><br/> */}
                <span>Policy</span><br/>
                  <span>Shipping Policy</span><br/>
               </div>
                <div className="col-4"> 
                    <a href="https://www.instagram.com" target="_blank"><i id="instagramI" className="fab fa-instagram footerI"></i></a>
                    <a href="https://www.facebook.com" target="_blank"> <i id="facebookI" className="fab fa-facebook-f footerI"></i></a>
                    <a href="https://www.youtube.com" target="_blank"><i id="youtubeI" className="fab fa-youtube footerI"></i></a>
                </div>
                <p id="pRights">M.A© Makeup Art all rights reserved</p>
            </div>
           
         </footer>
      );
   }
}
export default Footer;