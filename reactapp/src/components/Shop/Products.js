import React, { Component } from 'react';

function productCard(props){
    console.log(props)
    return(
        <div>
            <img src={props.imageUrl}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.discription}Discription</p>
        </div>
    )
}

export default productCard