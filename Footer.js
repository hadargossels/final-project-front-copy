import React, { Component } from 'react';
class Footer extends Component{
   render(){
      return(
        <footer className="footer">
        <div><i className="fab fa-facebook-square cursor"></i>
         <i className="fab fa-instagram cursor"></i> 
         <i className="fab fa-twitter-square cursor"></i> 
         <i className="fab fa-youtube cursor"></i></div>
         <br></br>
        <p> כל הזכויות שמורות ליוני טוקן בע"מ&#169; </p>
        <p>
          <a href="#">חזור למעלה</a>
        </p>
      </footer>
      );
   }
}
export default Footer;