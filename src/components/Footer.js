import './Footer.css';

function Footer(){
      return(
        <div className="my-footer">
        <p>follow us:</p>

        <div>
           <i className="fab fa-facebook"></i>
           <i class="fab fa-instagram"></i>
           <i class="fab fa-whatsapp"></i>
       </div>

       <p style={{"fontSize":"15px"}}> © 2021 Designed by <span style={{"color":"red"}}>RazBotner</span></p>

   </div>
      );
   }

export default Footer;