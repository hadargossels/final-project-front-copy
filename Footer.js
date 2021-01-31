import React, { Component } from 'react';
class Footer extends Component{
   render(){
      return(
          <div className='divFooter'>
            <div className="container-footer-row">
                <div className="container-footer-column">
                    <h3>About Us</h3>
                
                    <div className="container-icons">
        
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-instagram"></i>
        
                    </div>
                </div>
                <div className="container-footer-column">
                    <h3>Opening Hours</h3>
                    <span className="contact-info">Sunday-Thursday</span>
                    <h4>Contact Info</h4>
                    <span className="contact-info">Address:</span>
                    <span className="contact-category">34 steet name,city name here, united states</span>
                    <span className="contact-info">Telephon:</span>
                    <span  className="contact-category">+33423422</span>
                    <span className="contact-info">Email:</span>
                    <span  className="contact-category">info@blabla.com</span>
                </div>
                <div className="container-footer-column">
                    <h3 className="margin-for-quick-links">Quick Links</h3>
                    <a href="#" >About</a>
                    <a href="#" >Terms of Use</a>
                    <a href="#" >Disclaimers</a>
                    <a href="#" >Contact</a>
                </div>
            </div>
        </div>
        
      );
   }
}
export default Footer;
