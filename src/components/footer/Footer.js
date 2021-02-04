import React, { Component } from 'react';
import './Footer.css';
import {Route,Link,NavLink,Switch, BrowserRouter as Router} from 'react-router-dom'

class Footer extends Component{
   render(){
      return(
         <div className='foot'>
            <div className='info'> INFO <br/>
            <NavLink exact to="/" activeStyle={{color:"white"}} className='infolink'>HOME</NavLink>
            <NavLink exact to="/Faq" activeStyle={{color:"white"}} className='infolink'>FAQ</NavLink>
            <NavLink exact to="/Shipping" activeStyle={{color:"white"}} className='infolink'>SHIPPING & RETURNS</NavLink>
            <NavLink exact to="/Contact" activeStyle={{color:"white"}} className='infolink'>CONTACT US</NavLink>
            </div>
            <div className='newsletter'>
               <form>
                  <label htmlFor="email">SIGN UP FOR UPDATES</label><br/><br/>
                  <input type="email" id="email" name="email"></input>
                  <input type="submit" id="subs" value="SUBSCRIBE"></input>
               </form>
            </div>
            <div className='social'>
               <div>
               <a href="https://www.facebook.com/" className="fab fa-facebook-square socialmedia"></a>
               <a href="https://www.instagram.com/" className="fab fa-instagram socialmedia"></a>
               <a href="https://twitter.com/twitter" className="fab fa-twitter-square socialmedia"></a>
               </div>
               <small>© 2021, Shop</small>
            </div>
         </div>
      );
   }
}
export default Footer;
