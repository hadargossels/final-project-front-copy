import React, { Component } from 'react'
import "./Home.css"
import {Link} from "react-router-dom";
import Carousela from "./Carousela"


export default class Home extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid shopping bg-warning">
                <br/>
                <h1 className="text-center banner">Like in real life, your wallet must be secured</h1>
                <h3 className="text-center banner">Order now and dont be concerned</h3>
                <br/>
                <Link to="/" className="btn btn-visit d-block mx-auto" style={{width:"200px",color:"orange",backgroundColor:"black", fontSize:"20px"}}>Visit Shop</Link>
            </div>
            <h3 className="text-center banner bg-light pt-3 pb-3">Best sellers</h3>
            <div className="container-fluid bg-light d-flex justify-content-center"> 
                <Carousela title="bestSeller"/>
            </div>
            <h3 className="text-center banner bg-warning pt-3 pb-3">New products</h3>
            <div className="container-fluid bg-warning d-flex justify-content-center">
                <Carousela title="newProducts"/>
            </div>
            <h3 className="text-center banner bg-light pt-3 pb-3">On sale</h3>
            <div className="container-fluid  bg-light d-flex justify-content-center">
                <Carousela title="onSale"/>
            </div>

            </div>
        )
    }
}
