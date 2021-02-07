import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";

const ListItemLink = ({ to, name }) => (
    <Route path={to} children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link className="btn btn-dark" to={to}>{name}</Link>
      </li>
    )}/>)


class Home extends Component{

    render(){
       return ( 
                <div id="homePage"
                 style={{
                   backgroundImage:"url('/images/bg-img.jpg')",
                   backgroundRepeat: "no-repeat",
                   backgroundSize:"100%",
                   height: "55vw"
                 }}
                 className="text-center">
                    <h1 id="homeHeadLine" className="text-white">Wellcome to Experis Sports</h1>
                    <img src="/images/experisSportLogo.png"></img>
                    <ListItemLink to="/store/all"  name="Go to store"/>
                </div>


       )

    }

}

export default Home;