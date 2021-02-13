import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/js/dist/dropdown';


class Header extends React.Component {
    constructor(){
        super();
        this.searchInputRef = createRef();

        this.state = {
            searchInput: ""
        }
    }

    setSearchInput = () => {
        var value = this.searchInputRef.current.value.replace(/[^A-Za-z]/ig, '');
        this.searchInputRef.current.value = value;
        this.setState({searchInput: value});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">HomeStyle</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to='' className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Store</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/store" className="dropdown-item">All Products</Link>
                                <div className="dropdown-divider"></div>
                                <Link to={{pathname: "/store/bedroom", category: "bedroom"}} className="dropdown-item">Bedroom</Link>
                                <Link to={{pathname: "/store/bathroom", category: "bathroom"}} className="dropdown-item">Bathroom</Link>
                                <Link to={{pathname: "/store/livingroom", category: "living room"}} className="dropdown-item">Living Room</Link>
                            </div>

                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Nav.Link href="#"><i className="fas fa-user"></i></Nav.Link>
                        <Nav.Link href="#"><i className="fas fa-shopping-cart"></i></Nav.Link>
                        <input className="form-control mr-sm-2" placeholder="Search" aria-label="Search" ref={this.searchInputRef} onChange={this.setSearchInput}></input >
                        <Link to={`/store?q=${this.state.searchInput}`} type="button" className="btn btn-outline-success my-2 my-sm-0">Search</Link>
                    </form>
                </div>
            </nav>

        );
    }
    
}
export default Header;

{/* <Navbar bg="light" expand="lg">
<Navbar.Brand href="/">HomeStyle</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Link to="/about">About</Link>
        <Link to="/store" className="mx-3">Store</Link>
        <Link to="/blog">Blog</Link>
    </Nav>
    <Form inline>
        <Nav.Link href="#home"><i className="fas fa-user"></i></Nav.Link>
        <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i></Nav.Link>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" inputRef={this.searchInputRef}/>
        <Link to={`/store?q="${this.inputRef}"`} onClick={this.test} type="button" className="btn btn-outline-success my-2 my-sm-0">Search</Link>
    </Form>
</Navbar.Collapse>
</Navbar>  */}