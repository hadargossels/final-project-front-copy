import React, { Component } from 'react';
import './ProductPage.css';
class ProductPage extends Component{
   render(){
      return(
          <main className="myYellow">
          <div className="mx-96 my-10">
              <div className="grid grid-cols-4 grid-rows-7 gap-3">
                <div className="col-span-4 row-span-1">
                    <h1 className="text-4xl font-bold mx-5 my-2 py-2 bg-red-600 text-center rounded text-white">
                        Prodcut Name
                    </h1>
                </div>
                <div className="col-span-1 row-span-3 place-self-center">
                    <img src="https://via.placeholder.com/350x450" className="border border-black" />
                </div>
                <div className="col-span-2 row-span-3 bg-white p-9 border border-gray-300 rounded">
                    <p>
                        <span className="underline">Author(s):</span>
                        <span> John Doe</span>
                    </p>
                    <p>
                        <span className="underline">Artist(s):</span>
                        <span> Michael Smith</span>
                    </p>
                    <br/>
                    <p className="text-red-600">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, nulla distinctio tempora asperiores dignissimos molestiae ratione sit illo, 
                        placeat ipsum, ipsam officia. Assumenda deleniti blanditiis aliquam voluptates nesciunt asperiores architecto? Unde obcaecati officia aliquid temporibus iure 
                        libero nemo praesentium distinctio corrupti nostrum neque voluptates quam excepturi, perferendis molestiae repudiandae eaque!
                    </p>
                </div>
                <div className="col-span-1 row-span-3 text-center p-9">
                    <p>
                        <span className="text-base text-gray-400 line-through italic">$30</span> 
                        <span className="text-5xl text-red-600">$27</span>
                    </p>
                    <p className="text-xs text-gray-500 italic">
                        You save 7%!
                    </p>
                    <br/>
                    <p>
                        Worldwide delivery
                    </p>
                    <br/>
                    <button className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-red-500 active:bg-white" type="button" style={{ transition: "all .15s ease" }}>
                        <i className="fas fa-cart-arrow-down"></i> Add to Cart
                    </button>
                    <button className="text-red-500 bg-white bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                        <i className="far fa-heart"></i> Add to Wishlist
                    </button>
                </div>
                <div className="col-span-1 row-span-1">
                    <div className="grid grid-cols-5 grid-rows-1 gap-2">
                        <a className="col-span-1" href="">
                            <img src="https://via.placeholder.com/50" className="mx-auto border border-black"/>
                        </a>
                        <a className="col-span-1" href="">
                            <img src="https://via.placeholder.com/50" className="mx-auto border border-black"/>
                        </a>
                        <a className="col-span-1" href="">
                            <img src="https://via.placeholder.com/50" className="mx-auto border border-black"/>
                        </a>
                        <a className="col-span-1" href="">
                            <img src="https://via.placeholder.com/50" className="mx-auto border border-black"/>
                        </a>
                        <a className="col-span-1" href="">
                            <img src="https://via.placeholder.com/50" className="mx-auto border border-black"/>
                        </a>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 border border-gray-300 rounded">
                    <div className="grid grid-cols-3 grid-rows-1 gap-2 text-sm px-2 py-3">
                        <div className="col-span-1">
                            <p>
                                <span className="font-bold text-red-600">Format: </span>
                                Paperback | 496 pages
                            </p>
                            <p>
                                <span className="font-bold text-red-600">Dimensions: </span>
                                168 x 259 x 22.86mm | 748.43g
                            </p>
                            <p>
                                <span className="font-bold text-red-600">Publication date: </span>
                                24 Dec 2019
                            </p>
                        </div>
                        <div className="col-span-1">
                            <p>
                                <span className="font-bold text-red-600">Publisher: </span>
                                Darkhorse Comics
                            </p>
                            <p>
                                <span className="font-bold text-red-600">Publication City/Country: </span>
                                New York, United States
                            </p>
                            <p>
                                <span className="font-bold text-red-600">Language: </span>
                                English
                            </p>
                        </div>
                        <div className="col-span-1">
                            <p>
                                <span className="font-bold text-red-600">ISBN10: </span>
                                1302920669
                            </p>
                            <p>
                                <span className="font-bold text-red-600">ISBN13: </span>
                                9781302920661
                            </p>
                            <p>
                                <span className="font-bold text-red-600">Illustrations note: </span>
                                <br/>
                                6 Illustrations, unspecified
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 row-span-2 border-2 border-red-700">
                    <p className="font-extrabold bg-red-700 px-2 text-white">
                        You might also like:
                    </p>
                    <br/>
                    <div className="grid grid-cols-3 grid-rows-1 gap-2 text-sm px-2 py-3">
                        <p className="col-span-1">
                            <a>
                                <img src="https://via.placeholder.com/100x150" className="border border-black float-left mr-2" />
                            </a>
                            <span className="font-bold">Lorem ipsum dolor sit amet</span>
                            <br/>
                            <span>$25</span>
                            <br/>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i> 
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p className="col-span-1">
                            <a>
                                <img src="https://via.placeholder.com/100x150" className="border border-black float-left mr-2" />
                            </a>
                            <span className="font-bold">Lorem ipsum dolor sit amet</span>
                            <br/>
                            <span>$17</span>
                            <br/>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i> 
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </p>
                        <p className="col-span-1">
                            <a>
                                <img src="https://via.placeholder.com/100x150" className="border border-black float-left mr-2" />
                            </a>
                            <span className="font-bold">Lorem ipsum dolor sit amet</span>
                            <br/>
                            <span>$37</span>
                            <br/>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i> 
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                    </div>
                </div>
              </div>
          </div>
        </main>
      );
   }
}

export default ProductPage;