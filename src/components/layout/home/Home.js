import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="homeStyle">
                <h1 style={{marginTop:'10px'}}>Welcome to M-Phones store</h1>
                <Link to="/mobiles" style={{textDecoration:'none'}} ><span className="catalogStyle"> Mobile Phones </span></Link>
                <Link to="/accessories" style={{textDecoration:'none'}}><span className="catalogStyle"> Accessories </span></Link>
            </div>
        )
    }
}
