import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "./headerStyle.css";
import SideMenu from '../sideMenu/SideMenu';
import Clock from 'react-live-clock'
import {ProductConsumer} from '../context/context';
import CartDropdown from '../Cart/CartDropdown'
// import Dashboard from './Dashboard'
import { auth } from "../../firebase"


export default class Navbar extends Component {


    constructor(props){
  
        super(props);
        this.callRef = React.createRef();
        this.searchRef = this.searchRef.bind(this);
        this.userOptionsShow = this.userOptionsShow.bind(this);

        this.state ={
            email:null
        } 
      }
      
      searchRef(){

         this.callRef.current.focus();
        const node =this.callRef.current.value;
        window.location.href = "/search?q=" + node;
        
    }
    userOptionsShow(){
        if(this.state.email === null || this.state.email === "welcome visitor"){
            return(
                <>
                <ul  className="navbar-nav align-items-center">
                    <Link to='/login'>
                        <span style = {{color:"white"}} className = "btn-animation btn from-bottom" href="#news" >LOGIN</span>
                    </Link>
                    <Link to='/register'>
                        <span style = {{color:"white"}} className = "btn-animation btn from-bottom" href="#news" >REGISTER</span>
                    </Link>
                </ul>
                </>
            )}
            else{
                return(
                        <>
                        <ul  className="navbar-nav align-items-center">
                            <Link to='/account/profile'>
                                <span style ={{color:"white"}} className = "btn-animation btn from-bottom" href="#news" 
                                    ><i className="far fa-user-circle" style={{fontSize:"30px"}}></i></span>
                            </Link>
                            <Link to='/'>
                                <span style ={{color:"white"}} className = " btn from-bottom" href="#news" 
                                    onClick={() => {this.logout() }}>LOGOUT</span>
                            </Link>
                            <Link to='/admin'>
                                <span style = {{color:"white"}} className = "btn-animation btn from-bottom" href="#news" >ADMIN</span>
                            </Link>
                        </ul>
                        </>
                    )}
         }
    componentDidMount() {

        auth.onAuthStateChanged((user) => {

            if (user)
            this.setState({email: user.email});
            else
            this.setState({email:"welcome visitor"})
        })
    }
    logout() {
         var user = auth.currentUser;
         console.log(user)
            // user.delete().then(function() {
            //     // User deleted.
            // }).catch(function(error) {
            //     console.log("error")
            // });
        return auth.signOut()
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
                    
                    <ul  className="navbar-nav align-items-center">
                      
                        
                        <Link to='/'>
                            <span style = {{color:"white"}} className = "btn-animation btn from-top" href="#" >HOME</span>    
                        </Link>
                        <Link to='/shop'>
                            <span style = {{color:"white"}} className = "btn-animation btn from-left" href="#shop" >SHOP</span>
                        </Link>
                        <Link to='/contact'>
                            <span style = {{color:"white"}} className = "btn-animation btn from-right" href="#services" >CONTACT</span>
                        </Link>
                        <Link to='/about'>
                            <span style = {{color:"white"}} className = "btn-animation  btn from-center" href="#about" >ABOUT</span>
                        </Link>
                        <Link to='/blog'>
                            <span style = {{color:"white"}} className = "btn-animation  btn from-center" href="#about" >BLOG</span>
                        </Link>
                    </ul>
                    <div className="align-items-center" style={{marginLeft:"auto" ,marginTop:'auto', marginBottom:'auto'}}>
                        <div className="input-group" >
                            <input ref={this.callRef} type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-append">
                            <button className="btn-animation btn btn-secondary" type="button" onClick={this.searchRef} style={{height:'100%'}}>
                                <i className="fa fa-search"></i>
                            </button>
                            </div>
                        </div>
                    </div>
                            <ProductConsumer>
                            {value=> <CartDropdown cartArrDropdown = {value.cart}/> }
                            </ProductConsumer>
                       <span style={{color:"white",marginTop:"0.5%"}}>{this.state.email} </span> 


                        {this.userOptionsShow()}
                            {/* <Link to='/login'>
                            <span style = {{color:"white"}} className = "btn-animation btn from-bottom" href="#news" >Login</span>
                            </Link>
                            <Link to='/register'>
                                <span style = {{color:"white"}} className = "btn-animation btn from-bottom" href="#news" >Register</span>
                            </Link>

                            <Link to='/'>
                                <span style ={{color:"white"}} className = "btn-animation btn from-bottom" href="#news" 
                                onClick={() => {
                                    this.logout() }}>Logout</span>
                            </Link> */}

                        <div  className="clock">
                            <Clock format={'HH:mm'} ticking={true} timezone={'Israel'} style={{color:"white"}}/>
                        </div>
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

