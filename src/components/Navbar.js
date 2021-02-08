import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "./headerStyle.css";
import {ButtonContainer} from './Button';
import SideMenu from './sideMenu/SideMenu';

export default class Navbar extends Component {


    constructor(props){
        super(props);
        this.callRef = React.createRef();
        this.searchRef = this.searchRef.bind(this);
      }
      searchRef(){

         // this.callRef.current.focus();
        const node =this.callRef.current.value;
        window.location.href = "/search/q=" + node;

}

    render() {
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

                    </Link>
                    
                    <ul className="navbar-nav align-items-center">
                      
                        
                        <Link to='/'>
                            <span className = "btn from-top" href="#" >HOME</span>    
                        </Link>
                        <Link to='/shop'>
                            <span className = "btn from-left" href="#shop" >SHOP</span>
                        </Link>
                        <Link to='/services'>
                            <span className = "btn from-right" href="#services" >SERVICES</span>
                        </Link>
                        <Link to='/about'>
                            <span className = "btn from-center" href="#about" >ABOUT</span>
                        </Link>
                        <Link to='/news'>
                            <span className = "btn from-bottom" href="#news" >NEWS</span>
                        </Link>
                    </ul>
                    <div style={{marginLeft:"auto" ,marginTop:'auto', marginBottom:'auto'}}>
                        <div className="input-group" >
                            <input ref={this.callRef} type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-append">
                            <button className="btn btn-secondary" type="button" onClick={this.searchRef} style={{height:'100%'}}>
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
                    <Link to='/login'>
                            <span className = "btn from-bottom" href="#news" >Login</span>
                        </Link>
                        <Link to='/register'>
                            <span className = "btn from-bottom" href="#news" >Register</span>
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

