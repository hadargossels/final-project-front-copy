import React, { Component } from 'react';
import './ProductPage.css';
import data from '../../data.json';
import formatStars from '../utility/Stars';
import formatPrice from '../utility/Price';
import formatPrecent from '../utility/Pecent';

class ProductPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: "https://via.placeholder.com/350x450",
            title: null,
            format: null,
            pages: null,
            dimensions: null,
            weight: null,
            publisher: null,
            publicationPlace: null,
            language: null,
            price: null,
            publicationDate: null,
            description: null,
            ISBN10: 0,
            ISBN13: null,
            author: null,
            artist: null,
            stars: null,
            originalPrice: null,
            diff: null,
            shoppingCart: [],
            cartMessage: null,
        };
    }

    showEvent = (event) => {
        this.setState ({
            imgUrl: event.target.src
        })
    }

    componentDidMount() {
        let MyISBN10 = this.props.match.params.itemISBN;
        let obj = data.products.filter(product => product.ISBN10 === MyISBN10)
        let myObj = obj[0]
        let diff = myObj.originalPrice - myObj.price;
        this.setState({
            diff: diff,
            title: myObj.title,
            format: myObj.format,
            pages: myObj.pages,
            dimensions: myObj.dimensions,
            weight: myObj.weight,
            publisher: myObj.publisher,
            publicationPlace: myObj.publicationPlace,
            language: myObj.language,
            price: myObj.price,
            publicationDate: myObj.publicationDate,
            description: myObj.description,
            ISBN10: myObj.ISBN10,
            ISBN13: myObj.ISBN13,
            author: myObj.author,
            artist: myObj.artist,
            stars: myObj.stars,
            originalPrice: myObj.originalPrice
        })
    }

    addToStorage = (itemId) => {
        let myCart = JSON.parse(localStorage.getItem('shoppingCart'));
        if(myCart == null) {
            myCart = [];
        }
        myCart.push(itemId);
        let myList = Array.from(new Set(myCart));
        let lengthList = myList.length
        localStorage.setItem('shoppingCart',JSON.stringify(myList))
        localStorage.setItem('shoppingLength',lengthList)
        this.setState({
            cartMessage: <h1 className="text-3xl text-yellow-300 text-center pb-5"><i className="fas fa-check-square"></i> Item added to cart!</h1>
        })
        setTimeout(() => {this.setState({cartMessage: null,})}, 10000);
    }

   render(){
      return(
          <main className="myYellow">
          <div className="mx-96 my-10">
              {this.state.cartMessage}
              <div className="grid grid-cols-4 grid-rows-7 gap-3">
                <div className="col-span-4 row-span-1">
                    <h1 className="text-4xl font-bold py-2 bg-yellow-700 text-center rounded text-white">
                        {this.state.title}
                    </h1>
                </div>
                <div className="col-span-1 row-span-3 place-self-center">
                    <img src={this.state.imgUrl} className="border border-black" alt=""/>
                </div>
                <div className="col-span-2 row-span-3 bg-gray-300 p-9 border border-gray-200 rounded text-xl">
                    <p>
                        <span className="underline">Author(s):</span>
                        <span> {this.state.author}</span>
                    </p>
                    <p>
                        <span className="underline">Artist(s):</span>
                        <span> {this.state.artist}</span>
                    </p>
                    <br/>
                    <p className="text-yellow-500">
                        {formatStars(this.state.stars)}
                    </p>
                    <br/>
                    <p>
                        {this.state.description}
                    </p>
                </div>
                <div className="col-span-1 row-span-3 text-center p-9">
                    <p>
                        <span className="text-2xl text-gray-400 line-through italic">{formatPrice(this.state.originalPrice)}</span> 
                        <span className="text-5xl text-yellow-500">{formatPrice(this.state.price)}</span>
                    </p>
                    <p className="text-xl text-gray-400 italic">
                        You save {formatPrecent(this.state.originalPrice,this.state.diff)}!
                    </p>
                    <br/>
                    <p className="text-3xl text-gray-300">
                        Worldwide delivery
                    </p>
                    <br/>
                    <button className="bg-yellow-700 text-yellow-100 active:bg-yellow-700 font-medium uppercase text-lg px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 hover:bg-yellow-100 hover:text-yellow-600 active:bg-white" type="button" style={{ transition: "all .15s ease" }} 
                    onClick={() => {(this.addToStorage(this.state.ISBN10));(this.props.addToCart(true))}}
                    >
                        <i className="fas fa-cart-arrow-down"></i> Add to Cart
                    </button>
                    <button className="text-yellow-700 bg-yellow-100 border border-solid border-yellow-700 hover:bg-yellow-700 hover:text-yellow-100 active:bg-yellow-700 font-medium uppercase text-lg px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                        <i className="far fa-heart"></i> Add to Wishlist
                    </button>
                </div>
                <div className="col-span-1 row-span-1">
                    <div className="grid grid-cols-5 grid-rows-1 gap-2">
                        <span className="col-span-1">
                            <img src="https://via.placeholder.com/350x450" width="50" className="mx-auto border border-black" alt="" onClick={this.showEvent.bind(this)}/>
                        </span>
                        <span className="col-span-1">
                            <img src="https://via.placeholder.com/350x450/0000FF" alt="" width="50" className="mx-auto border border-black" onClick={this.showEvent.bind(this)}/>
                        </span>
                        <span className="col-span-1" href="">
                            <img src="https://via.placeholder.com/350x450/FF0000" alt="" width="50" className="mx-auto border border-black" onClick={this.showEvent.bind(this)}/>
                        </span>
                        <span className="col-span-1" href="">
                            <img src="https://via.placeholder.com/350x450/008000" alt="" width="50" className="mx-auto border border-black" onClick={this.showEvent.bind(this)}/>
                        </span>
                        <span className="col-span-1" href="">
                            <img src="https://via.placeholder.com/350x450/000000" alt="" width="50" className="mx-auto border border-black" onClick={this.showEvent.bind(this)}/>
                        </span>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 border border-gray-600 rounded bg-gray-700 text-gray-300 tracking-wide">
                    <div className="grid grid-cols-3 grid-rows-1 gap-2 px-2 py-3">
                        <div className="col-span-1 text-xl">
                            <p>
                                <span className="font-medium text-yellow-100">Format: </span>
                                {this.state.format} | {this.state.pages} pages
                            </p>
                            <p>
                                <span className="font-medium text-yellow-600">Dimensions: </span>
                                {this.state.dimensions} | {this.state.weight}
                            </p>
                            <p>
                                <span className="font-medium text-yellow-100">Publication date: </span>
                                {this.state.publicationDate}
                            </p>
                        </div>
                        <div className="col-span-1 text-xl">
                            <p>
                                <span className="font-medium text-yellow-600">Publisher: </span>
                                {this.state.publisher}
                            </p>
                            <p>
                                <span className="font-medium text-yellow-100">Language: </span>
                                {this.state.language}
                            </p>
                            <p>
                                <span className="font-medium text-yellow-600">Illustrations note: </span>
                                6 Illustrations, unspecified
                            </p>
                        </div>
                        <div className="col-span-1 text-xl">
                            <p>
                                <span className="font-medium text-yellow-100">ISBN10: </span>
                                {this.state.ISBN10}
                            </p>
                            <p>
                                <span className="font-medium text-yellow-600">ISBN13: </span>
                                {this.state.ISBN13}
                            </p>
                            <p>
                            <   span className="font-medium text-yellow-100">Publication City/Country: </span>
                                {this.state.publicationPlace}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 row-span-2 border-2 border-gray-300 bg-gray-700">
                    <p className="font-medium bg-gray-300 px-2 text-gray-800 text-2xl">
                        You might also like
                    </p>
                    <br/>
                    <div className="grid grid-cols-3 grid-rows-1 gap-2 text-sm px-2 py-3">
                        <p className="col-span-1">
                            <span>
                                <img src="https://via.placeholder.com/100x150" alt="" className="border border-black float-left mr-2" />
                            </span>
                            <span className="font-medium text-yellow-400 text-lg">Lorem ipsum dolor sit amet</span>
                            <br/>
                            <span className="font-medium text-gray-200 text-base">$25</span>
                            <br/>
                            <i className="fas fa-star text-yellow-500"></i>
                            <i className="fas fa-star text-yellow-500"></i> 
                            <i className="fas fa-star text-yellow-500"></i>
                            <i className="far fa-star text-yellow-500"></i>
                            <i className="far fa-star text-yellow-500"></i>
                        </p>
                        <p className="col-span-1">
                            <span>
                                <img src="https://via.placeholder.com/100x150" alt="" className="border border-black float-left mr-2" />
                            </span>
                            <span className="font-medium text-yellow-400 text-lg">Lorem ipsum dolor sit amet</span>
                            <br/>
                            <span className="font-medium text-gray-200 text-base">$17</span>
                            <br/>
                            <i className="fas fa-star text-yellow-500"></i>
                            <i className="fas fa-star text-yellow-500"></i> 
                            <i className="fas fa-star text-yellow-500"></i>
                            <i className="fas fa-star text-yellow-500"></i>
                            <i className="fas fa-star text-yellow-500"></i>
                        </p>
                        <p className="col-span-1">
                            <span>
                                <img src="https://via.placeholder.com/100x150" alt="" className="border border-black float-left mr-2" />
                            </span>
                            <span className="font-medium text-yellow-400 text-lg">Lorem ipsum dolor sit amet</span>
                            <br/>
                            <span className="font-medium text-gray-200 text-base">$37</span>
                            <br/>
                            <i className="fas fa-star text-yellow-500"></i>
                            <i className="fas fa-star text-yellow-500"></i> 
                            <i className="far fa-star text-yellow-500"></i>
                            <i className="far fa-star text-yellow-500"></i>
                            <i className="far fa-star text-yellow-500"></i>
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