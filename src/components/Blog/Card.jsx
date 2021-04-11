import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";

export default function Card(props) {
    
    return (
        <div className="border cardProp d-block">
            <img alt="..." src={props.image} className="blogImg d-block mx-auto"/>
            <div style={{color:"grey"}}>{props.category}</div>
            <b><Link to={`/blogPage/${props.id}`} className="titleBlog cursor"  style={{color:"black"}}> {props.title}</Link></b>
        </div>
    )
}
   