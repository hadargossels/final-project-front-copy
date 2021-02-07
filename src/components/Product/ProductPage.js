import React, { Component } from 'react';
import Price from './Price';
import Platforms from './Platforms';
import Gallery from './Gallery';
import AlsoViewed from './AlsoViewed';
import Stock from './Stock'
import Rating from './Rating'
import Categories from './Categories'
import './ProductPage.css'

import {objectsArr} from './data'

class ProductPage extends Component{
    
    render(){
        const product2 = objectsArr.find(({name})=>name===(this.props.match.params.name))

        return(
            <div className = "container-fluid pt-4 m-auto px-2">
                <div className="row mx-md-5 mx-0">

                    <div className="gallery col-5 col-md-4 ps-0 pe-2">
                        <Gallery mainImg={product2.imgBig}/>
                    </div>

                    <div className="px-0 col-7 col-md-7 mx-0">
                        <h1 className="text-center">{product2.name}</h1>
                        <Stock stock={product2.stock}/>   
                        
                        <div className = "row">
                            <div className="col-md-6 col-sm-12">
                                <div className = "text-start  ">
                                    <span className="h5 me-2">Rated:</span><Rating rating={product2.rating}/>
                                </div> 
                                
                                <Price price={product2.price} discount={product2.discount}/>
                                <p>This item ships to Israel. Arrives: March 9 - 16</p>
                                <Platforms platforms={product2.platforms}/>
                                
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <button className="btn btn-danger my-3 btn-lg">Buy Now!</button>
                                <br/>
                                <button className="btn btn-outline-danger"><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                                <br/>
                                <button className="btn btn-outline-danger my-3"><i className="far fa-heart"></i> Add to Wishlist</button>
                            </div>
                        </div>
                        
                        <p className="text-start"><span className="fw-bold me-2">About:</span>{product2.about}</p>
                        <Categories platforms={product2.platforms}/>
                        
                        <hr/>
                        <AlsoViewed/>
                        
                    </div>
                </div>

            </div> 

          
       );
    }
 }

 export default ProductPage;