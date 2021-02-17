import React from 'react'
import './Card.css'
import {Link} from "react-router-dom";

export default function Card(props) {
    console.log(props.id)
    return (
        <div className="border cardProp d-block">
            <img alt="..." src={props.image} className="blogImg d-block mx-auto"/>
            <div style={{color:"grey"}}>{props.subject}</div>
            <div className="titleBlog cursor"><b><Link to={`/blogPage/${props.id}`} style={{color:"black"}}> {props.title}</Link></b></div>
        </div>
    )
}
   