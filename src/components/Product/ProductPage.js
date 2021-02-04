import React, { Component } from 'react';
import Price from './Price';
import Platforms from './Platforms';
import Gallery from './Gallery';
import AlsoViewed from './AlsoViewed';
import Stock from './Stock'
import Rating from './Rating'
import Categories from './Categories'

import {objectsArr} from './data'

class ProductPage extends Component{
    
    render(){
        const product2 = objectsArr.find(({id})=>id===Number(this.props.match.params.id))

        return(
            <div className = "container pt-4">
                <div className="row">

                    <div className="col-4">
                        <Gallery mainImg={product2.imgBig}/>
                    </div>

                    <div className="col-8">
                        <h1 className="text-center">{product2.name}</h1>
                        <Stock stock={product2.stock}/>   
                        
                        <div className = "d-flex justify-content-center">
                            <div>
                                <div className = "text-start py-3">
                                    <span className="h5 me-2">Rated:</span><Rating rating={product2.rating}/>
                                </div> 
                                
                                <Price price={product2.price} discount={product2.discount}/>
                                <p>This item ships to Israel. Arrives: March 9 - 16</p>
                                <Platforms/>
                                
                            </div>

                            <div className="mx-3 my-2 h5 text-primary d-block">
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