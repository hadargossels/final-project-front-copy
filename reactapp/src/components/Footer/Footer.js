import React, { Component } from 'react';
import './footerStyle.css';
class Footer extends Component{
   render(){
      return(
        //   <div className='divFooter'>
        //     <div className="container-footer-row">
        //         <div className="container-footer-column">
                    
        //             <div className="container-footer-column">
        //                 <h3 className="margin-for-quick-links">Quick Links</h3>
        //                 <a href="#" >About</a>
        //                 <a href="#" >Terms of Use</a>
        //                 <a href="#" >Disclaimers</a>
        //                 <a href="#" >Contact</a>
        //             </div>
                    
        //         </div>
        //         <div className="container-footer-column">
        //             <h3>Opening Hours</h3>
        //             <span className="contact-info">Sunday-Thursday</span>
        //             <h4>Contact Info</h4>
        //             <span className="contact-info">Address:</span>
        //             <span className="contact-category">34 steet name,city name here, united states</span>
        //             <span className="contact-info">Telephon:</span>
        //             <span  className="contact-category">+33423422</span>
        //             <span className="contact-info">Email:</span>
        //             <span  className="contact-category">info@blabla.com</span>
        //         </div>
        //         <div className="container-icons">
        //                 <h3>About Us</h3>
        //                     <i className="fab fa-twitter"></i>
        //                     <i className="fab fa-facebook-f"></i>
        //                     <i className="fab fa-linkedin-in"></i>
        //                     <i className="fab fa-instagram"></i>
        
        //             </div>
        //     </div>
        // </div>
        <div>
        <footer class="footer-distributed">
 
		<div class="footer-left">
    
            <h3>First<span>Motor</span></h3>
    
            <p class="footer-links">
                <a href="#">Home</a>
            ·
                <a href="#">Blog</a>
            ·
                <a href="#">Pricing</a>
            ·
                <a href="#">About</a>
            ·
                <a href="#">Faq</a>
            ·
                <a href="#">Contact</a>
            </p>
    
            <p class="footer-company-name">firstmotor &copy; 2021</p>
		</div>
 
		<div class="footer-center">
 
		<div>
		<i class="fa fa-map-marker"></i>
		<p><span>21 Revolution Street</span> Tel-Aviv, Israel</p>
		</div>
 
		<div>
		<i class="fa fa-phone"></i>
		<p>+1 555 123456</p>
		</div>
 
		<div>
		<i class="fa fa-envelope"></i>
		<p><a href="mailto:support@company.com">contact@firstmotor.com</a></p>
		</div>
 
		</div>
 
		<div class="footer-right">
 
		<p class="footer-company-about">
		<span>About the company</span>
	        Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
		</p>
 
		<div class="footer-icons">
     
		<a href="#"><i class="fab fa-facebook-f"></i></a>
		<a href="#"><i class="fab fa-twitter"></i></a>
		<a href="#"><i class="fab fa-linkedin-in"></i></a>
		<a href="#"><i class="fab fa-instagram"></i></a>
 
		</div>
 
		</div>
 
		</footer>
        </div>
 
      );
   }
}
export default Footer;
