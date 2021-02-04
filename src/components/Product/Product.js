import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';
import './product.css';

class Product extends Component{
   
    constructor(props){
       super(props);
       this.state={
         imgSrc:props.data.imgSrc,
        headerProduct:props.data.headerProduct,
        brandProduct:props.data.brandProduct,
        priceProduct:props.data.priceProduct,
        discountProduct:props.data.discountProduct}
        
    }
 
    render(){
       return(
        <NavLink className="linkStyle col-3" to={`/product/${this.props.data.headerProduct.replace(" ","-")}`}>
            <div className="divProduct">
                <i className="far fa-heart loveIcon"></i>
                <img src={this.props.data.imgSrc[0]}/>
                <br/>
                <a id="headerProduct" src="">{this.props.data.headerProduct}</a>
                <div id="brandDiv">{this.props.data.brandProduct}</div>
                <div className="divPrice"><span className="priceOfProduct">{this.props.data.priceProduct}</span><span className="discountOfProduct">  {this.props.data.discountProduct}</span></div>      
        </div>
         </NavLink>
          
       );
    }
}
 export default Product;