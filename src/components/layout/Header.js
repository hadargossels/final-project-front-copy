import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Popup from "reactjs-popup";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useAuth } from "./AuthContext"

export default function Header(props) {
   const { currentUser } = useAuth();
   const searchVal = useRef();

   const Card = ({ title }) => (
      <div className="card">
         <h5 className="header">{title}</h5>
         {props.cartProducts.map((prod, index) => {
            return <div key={index} className="content"> {prod.name} : {prod.price} </div>
         })}
      </div>
   );

   const navStyle = {
      margin: '10px',
      border: '2px solid gold'
   };
   const navElemStyle = {
      padding: '0 10px'
   }
   const spanElemStyle = {
      color: 'white',
      padding: '0 30px'
   }
   const cartStyle = {
      color: 'white',
      textDecoration: 'none'
   }
   const linkStyle = {
      color: 'white',
      textDecoration: 'none',
      marginRight: '8px'
   }
   return (
      <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={navStyle}>
            <img src="/imgs/StoreLogo.png" alt="logo" width="6%" height="6%" style={navElemStyle} />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto" style={navElemStyle}>
                  <Link to="/" style={linkStyle}>Home</Link>
                  <Link to="/about" style={linkStyle}>About-Us</Link>
                  <Link to="/contact" style={linkStyle}>Contact-Us</Link>
                  {/* <Link to="/blog" style={linkStyle}>Blog</Link> */}
               </Nav>
               <Form action="/shop" inline style={{ padding: '0 30px' }}>
                  <FormControl name="q" required type="text" placeholder="Search" className="mr-sm-2" ref={searchVal} />
                  <Button type="submit" variant="outline-success" >Search</Button>
               </Form>
               {currentUser && <Popup
                  trigger={<Link to="/shoppingCart" style={cartStyle}> Shopping cart <FontAwesomeIcon id="shoppingCartId" icon={faShoppingCart} style={cartStyle} /></Link>}
                  position="bottom center"
                  on="hover"
               >
                  <Card title="Shopping cart" />
               </Popup>}
               {currentUser && <span className="badge badge-pill badge-info m-1">{props.cartAmount}</span>}
               <span id="registerID" style={spanElemStyle}>
                  {currentUser
                     ? <span> Hi <Link to="/profile"> {currentUser.displayName || props.userName} </Link> </span>
                     : <span> <Link to="/register"> Register </Link> Or <Link to="/login"> Sign in </Link> </span>
                  }
               </span>
            </Navbar.Collapse>
         </Navbar>
      </>
   );
}
