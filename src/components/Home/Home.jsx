import React, { Component } from 'react'
import "./Home.css"
import {Link} from "react-router-dom";
import Carousela from "../Carousela/Carousela"


export default class Home extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid shopping bg-warning">
                <br/>
                <h1 className="text-center banner">Like in real life, your wallet must be secured</h1>
                <h3 className="text-center banner">Order now and dont be concerned</h3>
                <br/>
                <Link to="/" style={{textDecoration: "none"}}><button id="shopBtn" >Visit Shop</button></Link>
            </div>
            <h3 className="text-center banner bg-light">Best sellers</h3>
            <div className="container-fluid bg-light d-flex justify-content-center">
            
                <Carousela/>
            </div>
            <h3 className="text-center banner bg-warning">New products</h3>
            <div className="container-fluid bg-warning d-flex justify-content-center">
                <Carousela/>
            </div>
            <h3 className="text-center banner bg-light">On sale</h3>
            <div className="container-fluid  bg-light d-flex justify-content-center">
                <Carousela/>
            </div>

            </div>
        )
    }
}
