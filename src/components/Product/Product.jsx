import React, {useState,useEffect} from 'react'
import './Product.css';
import Rating from '../Rating/Rating';
import {Link} from "react-router-dom";

const align={
    width:"230px",
    margin:"20px 30px",
    padding:"10px",
    border:"1px lightgrey solid"
}


export default function Product(props) {

        // useEffect(() => {
        //     fetchItem();
        // }, [])


        // const [items,setItems]=useState([]);


        // const fetchItem=async()=>{
        //     const data=await fetch('https://api.coincap.io/v2/assets');
            
        //     const items = await data.json();
        //     console.log(items.data[0].priceUsd);
        //     setItems(items.data);
        // }
        


        return (
            <div style={align} className="text-center .align-content-center">  
                {/* <div>{items.map(item=>(
                    <h1>{item}</h1>
                    ))

                    }</div> */}
                <Link to={`/app/${props.title}`}><img src={props.image} className="catalog alignCenter cursor"/></Link>
                <div><b>{props.title}</b></div><br/>
                <div><b>price: {(props.price/36000).toFixed(6)} BTC <p>(${props.price})</p></b></div>
                <Rating/>
                <button className="mx-auto cursor btnAdd">Add to Cart</button>
            </div>
        )
    
}
