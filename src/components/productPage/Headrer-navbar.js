import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";
// import LinkFunction from "./LinkFunction";
// import Middle from './Middle';
// import Album from './Album';
const ListItemLink = ({ to, name }) => (
    <Route path={to} children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link className="btn text-white" to={to}>{name}</Link>
      </li>
    )}/>)

class Header extends Component{
    constructor(){
        super()
        this.searchRef = React.createRef();
        this.state = {
            search : ""
        }
    }

   render(){
      return(
          <div className="myNav">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4 d-flex flex-column flex-md-row">
                    <h5 className="text-white h4">Menu</h5>
                    <ListItemLink to="/" name="Home"/>
                    <ListItemLink to="/store/all" name="Store"/>
                    <ListItemLink to="/contact" name="Contact Us"/>
                    <ListItemLink to="/about" name="About Us"/>
                    <ListItemLink to="/blog" name="Blog"/>
                    <ListItemLink to="/login" name="Sign In"/>
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
                    <h3 className="text-white" style={{position:'relative',left:'-45%'}}>Experis-Sports</h3>
                </div>
            </nav>
          </div>

      );
   }

   searchInput(){
       this.setState({search :this.searchRef.current.value})
   }

}
export default Header;