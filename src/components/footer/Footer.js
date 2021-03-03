import React, { Component } from 'react';
import './footerStyle.css';
class Footer extends Component{
   render(){
      return(
     
        <div>
        <footer className="footer-distributed">
 
		<div className="footer-left">
    
            <h3>First<span>Motor</span></h3>
    
            <p className="footer-links">
                <a href="/">Home</a>
            ·
                <a href="shop">Shop</a>
            ·
				<a href="contact">Contact</a>
            ·
                <a href="about">About</a>
				·
                <a href="about">Blog</a>
                

            </p>
    
            <p className="footer-company-name">firstmotor &copy; 2021</p>
		</div>
 
		<div className="footer-center">
 
		<div>
		<i className="fa fa-map-marker"></i>
		<p><span>21 Revolution Street</span> Tel-Aviv, Israel</p>
		</div>
 
		<div>
		<i className="fa fa-phone"></i>
		<p>+1 555 123456</p>
		</div>
 
		<div>
		<i className="fa fa-envelope"></i>
		<p><a href="mailto:support@company.com">contact@firstmotor.com</a></p>
		</div>
 
		</div>
 
		<div className="footer-right">
 
		<p className="footer-company-about">
		<span>About the company</span>
	        Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
		</p>
 
		<div className="footer-icons">
     
		<a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
		<a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
		<a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
		<a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
 
		</div>
 
		</div>
 
		</footer>
        </div>
 
      );
   }
}
export default Footer;
