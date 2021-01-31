import React, { Component } from 'react';

class Footer extends Component{
   render(){
      return(
         <footer>

        <div className="footer">
           <div className="f1">
                <h4 class="fo1">About us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut id hic nobis amet error. Perspiciatis error, numquam id provident natus quam! Laborum eos architecto veritatis, iste voluptatum tempore corrupti?</p>
                
                <div className="border">
                    <i className="fab fa-twitter" id="icon2"></i>
                </div>

                <div className="border">
                    <i className="fab fa-facebook-f" id="icon1"></i>
                </div>

                <div className="border">
                    <i className="fab fa-linkedin-in" id="icon3"></i>
                </div> 
                    
                <div className="border">
                    <i className="fab fa-instagram" id="icon4"></i>
                </div>
           </div>

           <div className="f2">
               <h4 className="fo1">contact info</h4>
               <p>Address:</p>
               <p className="fo2">34 street name, city name here, united states</p>
               <p>telephone:</p>
               <p className="fo2">+1 242 4942 290</p>
               <p>email</p>
               <p className="fo2">info@yourdomain.com</p>
            </div>

            <div className="f3">
                <h4 className="fo1">Quick Links</h4>
                <nav className="nav22">
                 <li><a herf="#" className="nav2">about</a></li>
                 <li><a herf="#" className="nav2">terms of use</a></li>
                 <li><a herf="#" className="nav2">disclaimers</a></li>
                 <li><a herf="#" className="nav2">contact</a></li>
                </nav>
            </div>

        </div>
        <p>copyright 2019 all rights reserved | this template os made with by colorlib</p>
    </footer>
      );
   }
}
export default Footer;
