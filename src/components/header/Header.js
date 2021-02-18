import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown';
import WishList from '../WishList/WishList';

class Header extends Component{
   constructor(props) {
      super(props)
      this.state = {
         cart: JSON.parse(localStorage.getItem("cart")),
         total: 0,
         amount: 0
      }
      this.amount()
      
   }


amount () {
   let cart = JSON.parse(localStorage.getItem("cart"))
   let amount = cart.length
   setTimeout(()=>{this.setState({amount})},5)
}

   total () {
      let total = 0;
      let cart = JSON.parse(localStorage.getItem("cart"))
      setTimeout(()=>{this.setState({cart})},5)

      for (const element of this.state.cart) {
          let quantity = element.quantity
          let price = element.price
          quantity = parseFloat(quantity)
          price = parseFloat(price)
          total += quantity * price
      }
      setTimeout(()=>{this.setState({total})},5)
  }

   render(){
      return(
         <div className='head'>
            <div className='navbar'>
               <NavLink exact to="/" activeStyle={{color:"white"}}><button className='navbtn'>Home</button></NavLink>
               <NavLink exact to="/Store" activeStyle={{color:"white"}}><button className='navbtn'>Store</button></NavLink>
               <NavLink exact to="/About" activeStyle={{color:"white"}}><button className='navbtn'>About</button></NavLink>
               <NavLink exact to="/Blog" activeStyle={{color:"white"}}><button className='navbtn'>Blog</button></NavLink>
               <NavLink exact to="/Contact" activeStyle={{color:"white"}}><button className='navbtn'>Contact</button></NavLink>
            </div>
            <form action="/Store" className='searchform'>
            <input type="text" id="search" name="q" placeholder="Search"></input>
            <input type="submit" id="subSer" className="fas fa-search serBtn" value=""></input>
            </form>

            <div className='logindiv'>
               <div className="dropdown cartI">
                  <NavLink exact to="/Cart"><button className="dropbtn" onMouseOver={()=>{this.total();this.amount()}}><div className='fas fa-shopping-cart'></div><div className='amount'>{JSON.parse(localStorage.getItem("cart")).length}</div></button></NavLink>
                  <div className="dropdown-content">
                  <Dropdown total={this.state.total} cart={this.state.cart}/>
                  </div>
               </div>
               <div className="dropdown cartI">
                  <NavLink exact to="/WishList"><button className="dropbtn"><div className='fas fa-heart'></div></button></NavLink>
                  <div className="dropdown-content">
                  <WishList/>
                  </div>
               </div>
            <NavLink exact to="/Login" className='fas fa-user'></NavLink>
            </div>
         </div>
      );
   }
}
export default Header;
