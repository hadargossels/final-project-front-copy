import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


class Header extends React.Component {
    render(){
        return (<>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">HomeStyle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">About</Link>
                            <Link to="/store" className="mx-3">Store</Link>
                            <Link to="/blog">Blog</Link>
                        </Nav>
                        <Form inline>
                            <Nav.Link href="#home"><i className="fas fa-user"></i></Nav.Link>
                            <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i></Nav.Link>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar> 
            </>
        );
    }
    
}
export default Header;


{/* <Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">HomeStyle</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
    <Nav.Link href="#">About</Nav.Link>
    <Nav.Link href="#">Store</Nav.Link>
    <Nav.Link href="#">Blog</Nav.Link>
</Nav>
<Form inline>
    <Nav.Link href="#home"><i className="fas fa-user"></i></Nav.Link>
    <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i></Nav.Link>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
</Form>
</Navbar.Collapse>
</Navbar> */}