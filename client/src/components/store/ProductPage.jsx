import React, { useRef, useState, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Product from './Product.jsx';
import {firebasedb} from '../../firebase';
import { useCart } from '../../context/CartContext';


export default function ProductPage(props) {
    const { handleAddToCart, handleChangeFavorites, favoriteProducts } = useCart();
    const qtyRef = useRef();
    const [products, setProducts] = useState();


    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchData = async () => {
            const snapshot = await firebasedb.ref('products').get()
            setProducts(snapshot.val());
        };
        
        fetchData();
    },[])

    const createStars = () => {
        let fiveStars = []
        for (let j = 0; j < 5; j++) {
            if (j<props.product.stars)
                fiveStars.push(<i className="fas fa-star" key={j}></i>);
            else
            fiveStars.push(<i className="far fa-star" key={j}></i>);
        }
        return fiveStars;
    };

    const createQtyList = () => {
        const qtyList = [];
        for(let i=1; i<=10; i++){
            qtyList.push(<option key={i}>{i}</option>);
        }
        return qtyList;
    }

    const isInStock = () => {
        if (props.product.inStock)
            return <h4 className="text-success">In Stock</h4>
        else
            return <h4 className="text-danger">Out of Stock</h4>
    }

    const isFavorite = () => {
        if (favoriteProducts){
            const isFavoriteProduct = favoriteProducts.filter(element => element.id === props.product.id);
            if (isFavoriteProduct.length === 0){
                return <i id="favoriteIcon" className="far fa-heart ml-2" onClick={() => handleChangeFavorites(props.product, true)}></i>
            }
            else {
                return <i id="favoriteIcon" className="fas fa-heart ml-2" onClick={() => handleChangeFavorites(props.product, false)}></i>
            }
        }
        else {
            return <i id="favoriteIcon" className="far fa-heart ml-2" onClick={() => handleChangeFavorites(props.product, true)}></i>
        }
    }

    const displayPrice = (product) => {
        if(product.discount !== 0){
            return (<div>
                        <p className="card-text mx-0 my-0">{product.discount * 100}% OFF </p>
                        <p><del>${product.price}</del>&ensp; 
                            ${product.price * (1 - product.discount)}
                        </p>
                    </div>)
        }
        else{
            return <p>${product.price}</p>
        }
    }

    function getRelatedProducts() {
        if (products)
            return products.filter(element => element.category === props.product.category && element.id !== props.product.id);
        return [];
    }


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-sm-12 col-md-6 product-image">
                    <div className="row">
                        <div className="col-sm-12">
                            <Carousel>
                                {props.product.images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt="carousel_image"/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 product-details">
                    <div id="ProductTitle" className="mt-5">
                        <h1>{props.product.name}</h1>
                        {createStars()}
                        <h2>{props.product.discount * 100}% off</h2>
                        <h3><span style={{textDecoration: "line-through"}}>${props.product.price}</span> ${props.product.price * (1- props.product.discount)}</h3>
                    </div>
                    <Form>
                        <Form.Group controlId="qty" className="d-inline-flex">
                            <Form.Label className="p-2">Qty:</Form.Label>
                            <Form.Control as="select" className="p-2 col-sm-8" ref={qtyRef}>
                            {createQtyList()}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className="d-flex align-items-center">
                        <Button variant="primary" className="px-5" onClick={() => handleAddToCart(props.product, qtyRef.current.value)}>
                            Add to cart
                        </Button>
                        {isFavorite()}
                    </div>
                    <div id="ProductOtherDetails" className="mt-5">
                        {isInStock()}
                        <p><strong>Description:</strong> {props.product.description}</p>
                        <p><strong>Category:</strong> {props.product.category}</p>
                    </div>
                    <div>
                        <p className="mb-2">
                            <strong>Related Items:</strong>
                        </p>
                        {
                            getRelatedProducts().map(productElement => 
                                <Product key={productElement.id} productElement={productElement}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
