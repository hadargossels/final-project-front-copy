import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import logo from '../logo.svg'; 
import styled from 'styled-components';
import "./headerStyle.css";
import {ButtonContainer} from './Button';
import SideMenu from './sideMenu/SideMenu';

export default class Navbar extends Component {

    render() {
let logo = <i className="fas fa-motorcycle"></i>;
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" >
                <SideMenu></SideMenu>
                <div className="big-menu">
                    <div style={{display:"flex", flexDirectio:"column"}}>
                    {/* 
                    https://www.iconfinder.com/icons/2851755/land_motorbike_motorcycle_transportation_vehicle_icon                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                    {/* <SideMenu></SideMenu> */}
                    <Link to='/'>
                        <i className="fas fa-motorcycle fa-2x align-items-center" style={{textDecoration:'none',color: 'yellow',marginTop:'8px'}}/>

                        {/* <img src={logo} alt="store" className="navbar-brand" style={{width:'40px',height:'40px',color: 'yellow'}}/> */}
                    </Link>
                    
                    <ul className="navbar-nav align-items-center">
                      
                            {/* <Link to="/" className="nav-link btn from-top">
                                Products
                            </Link> */}
                        <Link to='/'>
                            <span className = "btn from-top" href="#" >Products</span>    
                        </Link>
                        <Link to='/'>
                            <span className = "btn from-top" href="#" >HOME</span>    
                        </Link>
                        <Link to='/'>
                            <span className = "btn from-left" href="#special" >SHOP</span>
                        </Link>
                        <Link to='/'>
                            <span className = "btn from-right" href="#services" >SERVICES</span>
                        </Link>
                        <Link to='/'>
                            <span className = "btn from-center" href="#about" >ABOUT</span>
                        </Link>
                        <Link to='/'>
                            <span className = "btn from-bottom" href="#menu" >NEWS</span>
                        </Link>
                    </ul>
                    <div style={{marginLeft:"auto" ,marginTop:'auto', marginBottom:'auto'}}>
                        <div className="input-group" >
                            <input type="text" className="form-control" placeholder="Search this blog"/>
                            <div className="input-group-append">
                            <button className="btn btn-secondary" type="button" style={{height:'100%'}}>
                                <i className="fa fa-search"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                    <Link to='/cart'>
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fas fa-cart-plus"/>
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>   
                    
                    </div>
                </div>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-tranform: capitalize;
}
`;

