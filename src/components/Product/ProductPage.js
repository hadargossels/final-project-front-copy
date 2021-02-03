import React, { Component } from 'react';
import Price from './Price';
import Platforms from './Platforms';
import Gallery from './Gallery';
import AlsoViewed from './AlsoViewed';
import Stock from './Stock'
import Rating from './Rating'
import Categories from './Categories'

import data from './data'

class ProductPage extends Component{

    render(){
        const product2 = data.find(({id})=>id===Number(this.props.match.params.id))

        return(
            <div className = "container pt-4">
                <div className="row">

                    <div className="col-4">
                        <Gallery img={product2.img}/>
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
                        
                        <p className="text-start"><span className="fw-bold me-2">About:</span>{`The concept of this title, the latest in the series to depict a new "Atelier" world, is "True-to-life youths that develop together, even if just a little bit".
                        It is the story of a girl and her friends who are about to become adults, discovering what is most important to them.
                        To depict the story of the main characters discovering things they've never seen before, we've created fields with natural shadows that allow you to feel the breath of the world. Graphics have been further enhanced, allowing for a world of daily-life and adventure to be depicted in a new way.
                        
                        ■ Advanced "Synthesis" system & "Location Points"
                        The "Synthesis" system in which players combine materials to create items has been revamped.
                        Now, in addition to being able to understand the effects of synthesis visually, the system allows you to enjoy the experience of developing recipes more than ever before.
                        Also, we've included "Location Points" that players can create through synthesis!

                        ■ Use different items to gather new materials!
                        When "Gathering" the necessary materials for synthesis, the items you receive change depending on the tools you use to gather them, so it will be easier to obtain the items you want.

                        ■ intense Battles
                        With a combination of turn-based command battle and real time elements, enjoy intense battles where the choices you make determine the outcome! It is a system that will allow you to sense the feeling of strengthening bonds with your friends more than ever.

                        The Main Character Is Ryza, An Ordinary Girl.
                        Tired of boring village life, she escapes the village to gather with her good friends in a secret location to talk of their dreams and plan thrilling adventures.
                        One day, the determined Ryza and company decide to head for the forbidden "island across the shore" as their first exploration trip.
                        Together with the alchemist and other friends they meet there, they have a "summer adventure" that they will never forget.
                        `}</p>
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