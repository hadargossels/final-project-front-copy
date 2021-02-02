import React, { Component } from 'react';
import './gridProduct.css';
import Product from '../Product/Product.js'

  function GridProduct(props){
    return(
        <div className="row divGridProduct">
         {props.arrProduct.map((element,key)=>{
                return <Product data={element} key={key}/>})}
    
        </div>
    );
 
}
export default GridProduct;