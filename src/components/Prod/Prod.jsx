import React from 'react'
import './Prod.css';
import Rating from '../Rating/Rating';
import {Link} from "react-router-dom";
import Modals from '../Modals/Modals';



const align={
    width:"260px",
    margin:"10px 20px",
    padding:"10px",
    border:"1px lightgrey solid"
}

export default function Product(props) {
    
        return (
            <div style={align} className="text-center align-content-center">  
                <Link to={`/product/${props.title}`}><img src={props.image} alt="..." className="catalog alignCenter cursor"/></Link>
                <div><b>{props.title}</b></div><br/>
                <div><b>price: {(props.price/36000).toFixed(6)} BTC <div>(${props.price})</div></b></div>
                <Rating rating={props.rating}/>
                <button className="mx-auto cursor btnAdd">Add to Cart</button>
                <Modals id={props.id} image={props.image} title={props.title}/>
              
            </div>
        )
    
}


