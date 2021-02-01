import React, { Component } from 'react';
import './footer.css';

class Footer extends Component{
   render(){
      return(
         <footer>
            <div className="containerFooter">
                <div> 
                    <a src=""><i className="fab fa-instagram footerI"></i></a>
                    <a src=""> <i className="fab fa-facebook-f footerI"></i></a>
                    <a src=""><i className="fab fa-youtube footerI"></i></a>
                </div>
                <p id="pRights">MakeUp© all rights reserved</p>
            </div>
           
         </footer>
      );
   }
}
export default Footer;