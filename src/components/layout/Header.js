import React from 'react';
import logo from '../imgs/StoreLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Header extends React.Component {
   render() {
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
      }
      return (
         <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={navStyle}>
               <img src={logo} alt="logo" width="6%" height="6%" style={navElemStyle} />
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto" style={navElemStyle}>
                     <Nav.Link href="#link1">link1</Nav.Link>
                     <Nav.Link href="#link2">link2</Nav.Link>
                     <Nav.Link href="#link3">link3</Nav.Link>
                  </Nav>
                  <Form inline style={{padding:'0 30px'}}>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-success">Search</Button>
                  </Form>
                  <span style={cartStyle}> Shopping cart <FontAwesomeIcon id="shoppingCartId" icon={faShoppingCart} style={cartStyle}/></span>
                  <span id="registerID" style={spanElemStyle}> Hi! <a href="#Register"> Register </a>Or <a href="#SignIn"> Sign in </a></span>
               </Navbar.Collapse>
            </Navbar>
         </>
      );
   }
}
export default Header;
