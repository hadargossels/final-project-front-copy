import React, { Component } from 'react';
import formatPrice from '../utility/Price';
import './itemView.css';

class ItemView extends Component {
  render () {
    return (
        <div>
            <ul className="items">
                {this.props.products.map(product => (
                    <li key={product._id}>
                        <div className="product">
                            <a href="#">
                                <img src={product.image} alt={product.title}></img>
                                <p className="item-title font-bold text-blue-800">
                                    {product.title}
                                </p>
                            </a>
                            <div className="product-price">
                                <div>
                                    {formatPrice(product.price)}
                                </div>
                                <div className="item-buttons">
                                    <button className="button primary bg-red-500 text-white border hover:border-red-500 hover:bg-white hover:text-red-500 active:bg-red-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
                                        <i className="fas fa-cart-arrow-down"></i>
                                    </button>
                                    <button className="bg-red-500 text-white border hover:border-red-500 hover:bg-white hover:text-red-500 active:bg-red-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
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