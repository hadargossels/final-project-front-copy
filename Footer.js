import React, { Component } from 'react';
class Footer extends Component{
   render(){
      return(
         <div className='foot'>
            <div className='info'> INFO <br/>
               <br/><a href='' className='infolink'>HOME</a>
               <a href='' className='infolink'>FAQ</a>
               <a href='' className='infolink'>SHIPPING & RETURNS</a>   
               <a href='' className='infolink'>CONTACT US</a>
            </div>
            <div className='newsletter'>
               <form>
                  <label for="email">SIGN UP FOR UPDATES</label><br/><br/>
                  <input type="email" id="email" name="email"></input>
                  <input type="submit" id="subs" value="SUBSCRIBE"></input>
               </form>
            </div>
            <div className='social'>
               <div>
                  <i className="fab fa-facebook-square socialmedia"></i>
                  <i className="fab fa-instagram socialmedia"></i>
                  <i className="fab fa-twitter-square socialmedia"></i>
               </div>
               <small>© 2021, Shop</small>
            </div>
         </div>
      );
   }
}
export default Footer;
