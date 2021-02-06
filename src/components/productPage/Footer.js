import React, { Component } from 'react';
class Footer extends Component{
   render(){
      return(
            <div className="row fix fixed-bottom bg-dark ">
                    <div className="col-12 text-center text-white pt-2">
                        Follow Us on social media 
                        <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook fs-4 ms-4"></i></a>
                        <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter fs-4 ms-4"></i></a>
                    </div><br/><br/>
            </div>
      );
   }
}
export default Footer;