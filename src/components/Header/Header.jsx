import React, {  Component} from 'react';
import './Header.css';
import {Link,NavLink} from "react-router-dom";
import Logo from "../../pictures/bitcoinLogo.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ShoppingCart from './ShoppingCart'
import Popover from 'react-bootstrap/Popover'
import {auth} from '../../firebase'


export default class Header extends Component{ 
constructor(){
    super();
    this.state={
        urlValue:"",
        arrProd:JSON.parse(localStorage.getItem('products')) || [],
        user:auth.currentUser
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
                    trigger={['hover', 'focus']}
                    key="bottom"
                    placement="bottom"
                    overlay={
                        <Popover id="popover-positioned-bottom">
                        <Popover.Title as="h3"><div className="text-center fw-bold">Your Cart</div></Popover.Title>
                        <Popover.Content >
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
                        <div className="nav-link"><NavLink to="/home" style={{color:"black"}} activeStyle={{color: "orange"}}>Home</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to="/login" style={{color:"black"}} activeStyle={{color: "orange"}}>Login</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to="/register" style={{color:"black"}} activeStyle={{color: "orange"}}>Register</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" ><NavLink to="/" style={{color:"black"}} exact activeStyle={{color: "orange"}}>Store</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to="/contactUs" style={{color:"black"}} activeStyle={{color: "orange"}}>Contact-Us</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to="/aboutUs" style={{color:"black"}} activeStyle={{color: "orange"}}>About-Us</NavLink></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link"><NavLink to="/blog" style={{color:"black"}} activeStyle={{color: "orange"}}>Blogs</NavLink></div>
                    </li>
                    {/* <li className="nav-item">
                        <div className="nav-link"><NavLink to="/info" style={{color:"black"}} activeStyle={{color: "orange"}}>what is hardware wallet?</NavLink></div>
                    </li> */}
                </ul>
            </div>
            <NavLink to="/admin" className="nav-link" style={{color:"black"}} activeStyle={{color: "orange"}}>Admin</NavLink>  
            <NavLink to="/account/profile" className="nav-link" style={{color:"black"}} activeStyle={{color: "orange"}}>Account</NavLink>  
            <NavLink to="/dashboard" className="nav-link" style={{color:"black"}} activeStyle={{color: "orange"}}>Dashboard</NavLink>      
          
            <input id="searcBox" className="me-2" style={{width:"200px"}} type="search" placeholder="Search" ref={this.callRef} onChange={this.setUrl} aria-label="Search"></input>
            
            <Link className="btn" to={"/?q="+this.state.urlValue} style={{color:"black"}}>Search</Link>
            
        
        </div>
      </nav>
      );
   }
}
