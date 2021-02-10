import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'

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
            <form action="/Store">
            <input type="text" id="search" name="q" placeholder="Search"></input>
            <input type="submit" id="subSer" className="fas fa-search serBtn" value=""></input>
            </form>
            <div className='logo'></div>
               <div className="dropdown cartI">
               <NavLink exact to="/Cart"><button className="dropbtn" onMouseOver={()=>{this.total();this.amount()}}><div className='fas fa-shopping-cart'></div><div className='amount'>{this.state.amount}</div></button></NavLink>
                  <div className="dropdown-content">
                  <table className='dropTable'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.cart.map((v) => 
                        <tr key={v.itemId}>
                            <td><img src={v.src} alt='product' width='70px'/></td>
                            <td>{v.name}</td>
                            <td>{v.price}$</td>
                            <td>{v.quantity}</td>
                            <td>{(parseFloat(v.price) * parseFloat(v.quantity))}$</td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='goto' colSpan='3'><NavLink exact to="/Cart">Go to cart</NavLink></td>
                            <td className="subtot">Subtotal</td>
                            <td className="subtot">
                                {this.state.total}$
                            </td>
                        </tr>
                    </tfoot>
                </table>
                  </div>
               </div>
            <div className='logindiv'><NavLink exact to="/Login" className='logindiv'>Log In/Sign In</NavLink></div>
            
         </div>
      );
   }
}
export default Header;
