import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";
import "./Header.css"
import {auth} from '../../firebase'
// import LinkFunction from "./LinkFunction";
// import Middle from './Middle';
// import Album from './Album';
const ListItemLink = ({ to, name }) => (
    <Route path={to} children={({ match }) => (
        <Link className="btn text-white" to={to}>{name}</Link>
    )}/>)

class Header extends Component{
    constructor(){
        super()
        this.searchRef = React.createRef();
        this.qvRef = React.createRef();
        this.state = {
            search : "",
            qvc : "",
            numOfItems : ((Number(localStorage.getItem('totalItems')))?Number(localStorage.getItem('totalItems')):0),
            isUser : "",
            isAlreadyUser : false 
        }
    }

    changeNumOfItems(){
        this.setState({numOfItems : ((Number(localStorage.getItem('totalItems')))?Number(localStorage.getItem('totalItems')):0)})
    }

    cartQuick(bol){
        if(bol){
            const lSArr =localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):null;
            const numOf = (window.localStorage.getItem('numOf'))?JSON.parse(window.localStorage.getItem('numOf')):[];
            if(lSArr){
                // console.log(lSArr);
                const temp = [];
                for(let i=0; i<lSArr.length; i++){
                    if(lSArr[i]!==null){
                        temp.push(
                            <div  key={lSArr[i].name}>
                                <div className="d-flex">
                                    <img className="p-2" src={lSArr[i].urlImg[0]} height="100px" width="100px"></img>
                                    <div className="text-center p-2">
                                        <h5 className="mt-4">{lSArr[i].name}</h5>
                                        <span className="m-2">{`quantity:${numOf[i]}  price:${lSArr[i].price*numOf[i]}$`}</span>
                                    </div>
                                </div>
                                {(i!==lSArr.length-1)?<hr/>:""}
                            </div>
                        )
                    }
                }
                this.setState({qvc : temp})
            }
            else{
                this.setState({qvc : <h1 className="text-white">Your cart is empty</h1>})
            }
            this.qvRef.current.classList.add('cartBorder')
        }
        else{
            this.setState({qvc : ""})
            this.qvRef.current.classList.remove('cartBorder')
        }
        }

   render(){

        auth.onAuthStateChanged(user=> {
            if (user && !this.state.isAlreadyUser) {
                this.myIsUser();
            }
        });
      return(
          <div>
          <div className="myNav bg-dark">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4 d-flex flex-column flex-md-row">
                    <h5 className="text-white h4">Menu</h5>
                    <ListItemLink to="/" name="Home"/>
                    <ListItemLink to="/store/all" name="Store"/>
                    <ListItemLink to="/contact" name="Contact Us"/>
                    <ListItemLink to="/about" name="About Us"/>
                    <ListItemLink to="/blog" name="Blog"/>
                    <ListItemLink to="/login" name="Sign In"/>
                    <ListItemLink to="/signup" name="Sign Up"/>
                    <div className="d-flex">
                        <input onChange={()=>this.searchInput()} ref={this.searchRef} className="ms-3" type="search" placeholder="Search" />
                        <ListItemLink to={`/store/${this.state.search}`} name="Search"/>
                    </div>
                    <span className="text-muted"></span>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <h3 className="text-white pt-1" style={{position:'relative'}}>Experis-Sports</h3> */}
                    <div id="isUserLogin" className="d-flex">
                        {this.state.isUser}
                        <ListItemLink to="/shopingchart/mycart" name={<div onMouseEnter={()=>this.cartQuick(true)} onMouseLeave={()=>this.cartQuick(false)}><span id="myBag" className="fs-5 m-1 text-danger">{((Number(localStorage.getItem('totalItems')))?Number(localStorage.getItem('totalItems')):0)}</span><i className="fas fa-shopping-bag fs-4"></i></div>}/> 
                    </div>
                </div>
            </nav>
          </div>
          <div ref={this.qvRef} className="rounded-3 cartQuick">
            {this.state.qvc}
          </div>
          </div>
      );
   }

   myLogOut(){
    console.log(auth);
    auth.signOut().then(() => {
        // Sign-out successful.
        // window.location.reload();
        this.setState({
            isAlreadyUser : false,
            isUser : ""
        })
      }).catch((error) => {
        // An error happened.
      });
   }

   myIsUser(){
       this.setState({
           isUser :  <span className="text-danger fs-5 pt-2">Hi {localStorage.getItem('userName')}(<button onClick={()=>this.myLogOut()} className="btn btn-dark">logout</button>)</span>,
           isAlreadyUser : true
       })
   }

   searchInput(){
       this.setState({search :this.searchRef.current.value})
   }

}
export default Header;