import React, { Component } from 'react';
import axios from 'axios';

import AlsoViewed from './AlsoViewed';
import CartButton from '../Catalog/CartButton/CartButton';
import Categories from './Categories'
import Gallery from './Gallery';
import Platforms from './Platforms';
import Price from './Price';
import Rating from './Rating'
import Stock from './Stock'
import './ProductPage.css'

class ProductPage extends Component{
    constructor(){
        super()
        this.state= {allProducts:""}
    }
    componentDidMount(){
        axios.get("http://localhost:3000/objectsArr").then(response =>{
            this.setState({allProducts:response.data})
        })
    }
    render(){
        let product
        if (this.state.allProducts)
            product = this.state.allProducts.find(({name})=>name===(this.props.match.params.name))

        return(
            <div className = "container-fluid pt-4 m-auto px-2">
                {!this.state.allProducts? <div>loading...</div> : 
                <div className="row mx-md-5 mx-0">

                    <div className="gallery  col-md-5 ps-0 pe-2">
                        <Gallery mainImg={product.imgNarrow} wideImg={product.img}/>
                    </div>
                    <div className="px-0  col-md-7 mx-0">
                        <h1 className="text-center">{product.name}</h1>
                        <Stock stock={product.stock}/>   
                        <div className = "row">
                            <div className="col-md-6 col-sm-12">
                                <div className = "text-start  ">
                                    <span className="h5 me-2">Rated:</span><Rating rating={product.rating}/>
                                </div> 
                                <Price price={product.price} discount={product.discount}/>
                                <Platforms platforms={product.platforms}/>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <CartButton id={product.id} page="buyNow"/>
                                <CartButton id={product.id} page="product"/>
                                <button className="btn btn-outline-danger my-3 productBtn"><i className="far fa-heart"></i> Add to Wishlist</button>
                            </div>
                        </div>
                        <p className="text-start"><span className="fw-bold me-2">About:</span>{product.about}</p>
                        <Categories platforms={product.platforms}/>
                        <hr/>
                        <AlsoViewed/>
                    </div>                    
                </div>}
            </div> 
       );
    }
 }

 export default ProductPage;