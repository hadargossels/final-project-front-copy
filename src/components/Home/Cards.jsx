import React from 'react'
import './Cards.css';
import Rating from '../Catalog/Rating';
import {Link} from "react-router-dom";

export default function Cards(props) {
    console.log("hi")

    return (
    <div className="align text-center align-content-center">  
        <Link to={`/product/${props.title}`}><img src={props.image} alt="..." className="catalog alignCenter cursor"/></Link>
        <div><b>{props.title}</b></div><br/>
        {
        (props.price===props.onsale)?
        (<div><span>${props.price}</span></div>):
        (<div><span className="onsale">${props.price}</span>
        <br/><span>${props.onsale}</span></div>)
        }
        <Rating rating={props.rating}/>
    </div>
    )
}
