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
                <div className="text-center">
                    <h1>Wellcome to Experis Sports</h1>
                    <ListItemLink to="/store"  name="Go to store"/>
                    <div id="homePage">
                    </div>
                </div>


       )

    }

}

export default Home;