import React, { Component } from 'react';
import './shopStyle.css';
import ProductCard from './Products.js';
import ProductsData from './ProductData.js'
// class Shop extends Component{
//     render(){
//        return(
//            <div></div>
//         );
//     }
//  }
// const arrProductInfo = [{
//     id:1,
//     imageUrl: "motor.png",
//     name:"",cd
//     price:"",
//     discription:""
// },
// {
//     id:2,
//     imageUrl: "motor.png",
//     name:"",
//     price:"",
//     discription:""
// },
// {   id:3,
//     imageUrl: "motor.png",
//     name:"",
//     price:"",
//     discription:""
// },{
//     id:4,
//     imageUrl: "motor.png",
//     name:"",
//     price:"",
//     discription:""
// }];


function Shop(props){
    const arrProductInfoCom = ProductsData.map( productInfo =>{
        
    <ProductCard key={productInfo.id} product={productInfo}/>})
    return(
        
        <div className="productsContainerCol">
           <div className="productsContainerRow">
               {arrProductInfoCom}
               {/* {for(let i =0;i<arrProductInfo.length;i++){

               }} */}
           {/* {arrProductInfoCom = arrProductInfo.map( productInfo =>{
                <ProductCard key={productInfo.id} imageUrl={productInfo.imageUrl} name={productInfo.name} price={productInfo.price} discription={productInfo.discription} />})}; */}
            {/* <ProductCard {...arrProductInfo.map( productInfo =>{
            
            })}/> */}
             {/* <ProductCard 
                productCardInfo = {{
                    imageUrl: "motor.png",
                    name:"Cool motor",
                    price:"1ILS",
                    discription:"Cool motorcycle you should buy it"

                }}/>
                <ProductCard 
                productCardInfo = {{
                    imageUrl: "motor.png",
                    name:"Cool motor",
                    price:"1ILS",
                    discription:"Cool motorcycle you should buy it"

                }}/>
                <ProductCard 
                productCardInfo = {{
                    imageUrl: "motor.png",
                    name:"Cool motor",
                    price:"1ILS",
                    discription:"Cool motorcycle you should buy it"

                }}/>
                <ProductCard 
                productCardInfo = {{
                    imageUrl : "motor.png",
                    name:"Cool motor",
                    price:"1ILS",
                    discription:"Cool motorcycle you should buy it"

                }}/>  */}
            </div>
        </div>
    )
}
 export default Shop