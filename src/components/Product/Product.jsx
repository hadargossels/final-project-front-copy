import React from 'react'
import './Product.css';
import Rating from '../Rating/Rating';
import {Link} from "react-router-dom";

const align={
    width:"230px",
    margin:"20px 30px",
    padding:"10px",
    border:"1px lightgrey solid"
}


export default function Product(props) {

        return (
            
            <div style={align} className="text-center .align-content-center">
                      
            <Link to={`/app/${props.title}`}><img src={props.image} className="catalog alignCenter cursor"/></Link>
            <div><b>{props.title}</b></div><br/>
            <div><b>price: {(props.price/33000).toFixed(6)} BTC <p>(${props.price})</p></b></div>
            <Rating/>
            <button className="mx-auto cursor btnAdd">Add to Cart</button>
        </div>
        )
    
}
