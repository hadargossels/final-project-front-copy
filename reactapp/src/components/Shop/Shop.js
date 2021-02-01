import React, { Component } from 'react';
import './shopStyle.css';
import productCard from './Products.js';

// class Shop extends Component{
//     render(){
//        return(
//            <div></div>
//         );
//     }
//  }
function shop(){
    return(
        <div className="productsContainer">
            <productCard 
                imageUrl = "aboutItem.png"
                name=""
                price=""
                discription=""/>
            <productCard 
                imageUrl = ""
                name=""
                price=""
                discription=""/>
            <productCard 
                imageUrl = ""
                name=""
                price=""
                discription=""/>
            <productCard 
                imageUrl = ""
                name=""
                price=""
                discription=""/>
        </div>
    )
}
 export default shop