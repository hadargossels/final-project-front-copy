import React, { Component } from 'react';
import formatPrice from '../utility/Price';
import formatStars from '../utility/Stars';
import './itemView.css';
import { Link } from 'react-router-dom';

class ItemView extends Component {
  render () {
    return (
        <div>
            <ul className="items">
                {this.props.products.map(product => (
                    <li key={product._id}>
                        <div className="product rounded bg-gray-600">
                            <span>
                                <img src={product.image} alt={product.title}></img>
                                <Link to={"/item/" + product.ISBN10}>
                                <p className="item-title text-yellow-400 text-2xl">
                                    {product.title}
                                </p>
                                </Link>
                            </span>
                            <p className="text-center text-yellow-400">
                                {formatStars(product.stars)}
                            </p>
                            <div className="product-price">
                                <div className="text-gray-300">
                                    {formatPrice(product.price)}
                                </div>
                                <div className="item-buttons">
                                    <button className="button primary bg-yellow-600 text-yellow-100 border hover:border-yellow-600 hover:bg-yellow-100 hover:text-yellow-600 active:bg-yellow-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </button>
                                    <button className="bg-yellow-100 text-yellow-600 border border-yellow-600 hover:border-yellow-100 hover:bg-yellow-600 hover:text-yellow-100 active:bg-yellow-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
  }
}

export default ItemView;