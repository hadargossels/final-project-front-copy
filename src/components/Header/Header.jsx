import React, {  Component } from 'react';
import './Header.css';
import {Link,NavLink} from "react-router-dom";
import Logo from "../../pictures/bitcoinLogo.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ShoppingCart from './ShoppingCart'
import Popover from 'react-bootstrap/Popover'





export default class Header extends Component{ 
constructor(){
    super();
    this.state={
        urlValue:"",
        arrProd:JSON.parse(localStorage.getItem('products')) || [],
    }
    this.callRef = React.createRef();
    this.setUrl=this.setUrl.bind(this);
  }
  setUrl(){
    this.setState({urlValue: this.callRef.current.value})
    }



    render(){
        
        let cartItems
        if(this.state.arrProd.length>0) 
            cartItems=<div id="numItems">&nbsp;{this.state.arrProd.length}</div>

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <Link to="/home"><img className="navbar-brand" width="40px" height="50px" alt="..." src={Logo}></img></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="navbar-brand">
                            <div className="cursor">
                                <i className="fas fa-wallet"></i>
                            </div>
                        </div>
                    </li>
                    <li>

                    <OverlayTrigger
                    trigger="hover"
                    key="bottom"
                    placement="bottom"
                    overlay={
                        <Popover id="popover-positioned-bottom">
                        <Popover.Title as="h3"><div className="text-center fw-bold">Your Cart</div></Popover.Title>
                        <Popover.Content>
                            <ShoppingCart/>
                        </Popover.Content>
                        </Popover>
                    }
                    >
                    <Link to="/cart"><div className="navbar-brand" style={{margin:"1px"}}><i className="fas fa-shopping-cart"></i></div></Link>
                    </OverlayTrigger>
                    </li>
                    
                    {cartItems}
                        

                    
                        
                    <li className="nav-item">
                        <NavLink to="/home" style={{textDecoration: "none"}}><div className="nav-link">Home</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" style={{textDecoration: "none"}}><div className="nav-link">Login</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" style={{textDecoration: "none"}}><div className="nav-link">Register</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" exact style={{textDecoration: "none"}}><div className="nav-link" >Store</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contactUs" style={{textDecoration: "none"}}><div className="nav-link">Contact-Us</div></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/info" style={{textDecoration: "none"}}><div className="nav-link">what is hardware wallet?</div></NavLink>
                    </li>
                </ul>
            </div>
            <NavLink to="/dashboard" style={{textDecoration: "none"}}><div className="nav-link">Dashboard</div></NavLink>        
          <form className="d-flex">
            <input id="searcBox" className="form-control me-2" type="search" placeholder="Search" ref={this.callRef} onChange={this.setUrl} value={this.state.urlValue} aria-label="Search"></input>
            <Link to={"/?q="+this.state.urlValue}>
            <button className="btn" type="submit" onClick={this.setUrl}>Search</button>
            </Link>
          </form>
        </div>
      </nav>
      );
   }
}
