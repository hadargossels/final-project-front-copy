import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getProducts} from '../../actions'

import AlsoViewed from '../../components/Product/AlsoViewed';
import CartButton from '../../components/Catalog/CartButton/CartButton';
import Categories from '../../components/Product/Categories'
import Gallery from '../../components/Product/Gallery';
import Platforms from '../../components/Product/Platforms';
import Price from '../../components/Product/Price';
import Rating from '../../components/Product/Rating'
import Stock from '../../components/Product/Stock'
import './ProductPage.css'
import Spinner from '../../components/Spinner/Spinner';

class ProductPage extends Component{

    componentDidMount(){
        this.props.getProducts()
    }
    render(){
        let product
        if (this.props.allProducts)
            product = this.props.allProducts.find(({name})=>name===(this.props.match.params.name))

        return(
            <div className = "container-fluid pt-4 m-auto px-2">
                {!this.props.allProducts? <Spinner/> : 
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
                        <p className="text-start" style={{whiteSpace:"pre-line"}}><span className="fw-bold me-2" >About:</span>{product.about}</p>
                        <Categories platforms={product.platforms}/>
                        <hr/>
                        <AlsoViewed/>
                    </div>                    
                </div>}
            </div> 
       );
    }
 }


 const mapStateToProps = state => ({
    allProducts: state.products.allProducts
})

export default connect(mapStateToProps, {getProducts})(ProductPage)