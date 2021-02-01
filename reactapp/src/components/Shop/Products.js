import React, { Component } from 'react';
import './productsStyle.css';

function ProductCard(props){
    console.log(props)
    return(
        <div>
            <img src={props.productCardInfo.imageUrl} className="img"/>
            <h3>name: {props.productCardInfo.name}</h3>
            <p>price: {props.productCardInfo.price}</p>
            <p>Discription: {props.productCardInfo.discription}</p>
        </div>
    )
}

export default ProductCard