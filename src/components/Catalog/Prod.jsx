import React from 'react'
import './Prod.css';
import Rating from './Rating';
import {Link} from "react-router-dom";
import Modals from './Modals';



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
                {
                    (props.price===props.onsale)?
                    (<div><span>{(props.price/props.priceBTC).toFixed(6)} BTC <b>(${props.price})</b></span></div>):
                    (<div><span className="onsale">{(props.price/props.priceBTC).toFixed(6)} BTC <b>(${props.price})</b></span>
                    <br/><span>{(props.onsale/props.priceBTC).toFixed(6)} BTC <b>(${props.onsale})</b></span></div>)
                }
                <Rating rating={props.rating}/>
                <Modals id={props.id} image={props.image} title={props.title} desc={props.desc}/>
                
            </div>
        )
    
}


