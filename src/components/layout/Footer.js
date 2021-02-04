import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


class Footer extends React.Component {
   render() {
      const divStyle = {
         height: '10rem',
         margin: '10px',
         border: '2px solid gold',
         color: 'white',
         backgroundColor: 'gray',
         textAlign: 'center',
      }
      const iconsStyle = {
         color: 'red',
         fontSize: '1.2em',
         margin: '20px 10px 0 10px'
      }
      return (
         <div style={divStyle}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" style={ {textDecoration: 'none'}}> <FontAwesomeIcon icon={faFacebookF} style={iconsStyle} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" style={ {textDecoration: 'none'}}> <FontAwesomeIcon icon={faInstagram} style={iconsStyle} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" style={ {textDecoration: 'none'}}> <FontAwesomeIcon icon={faTwitter} style={iconsStyle} /></a>
            <br></br><br></br>
            <p>Copyright &copy; All rights reserved <br></br> This store is made with &hearts; by <span style={{color:"blue"}}>Mansor Mansor</span></p>
         </div>
      );
   }
}
export default Footer;
