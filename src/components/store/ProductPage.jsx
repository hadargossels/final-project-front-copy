import React, { createRef } from 'react';
import {Form, Button} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Product from './Product.jsx';
import axios from 'axios';


class ProductPage extends React.Component {

    constructor(props){
        super(props);
        this.qtyRef = createRef();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        // window.scrollTo(0, 0);

        axios.get('http://localhost:3000/products')
            .then( response => {
                this.setState({ products: response.data })
            })
    }

    createStars = () => {
        let fiveStars = []
        for (let j = 0; j < 5; j++) {
            if (j<this.props.product.stars)
                fiveStars.push(<i className="fas fa-star" key={j}></i>);
            else
            fiveStars.push(<i className="far fa-star" key={j}></i>);
        }
        return fiveStars;
    };

    createQtyList = () => {
        const qtyList = [];
        for(let i=1; i<=10; i++){
            qtyList.push(<option key={i}>{i}</option>);
        }
        return qtyList;
    }

    isInStock = () => {
        if (this.props.product.inStock)
            return <h4 className="text-success">In Stock</h4>
        else
            return <h4 className="text-danger">Out of Stock</h4>
    }

    isFavorite = () => {
        const favoriteProduct = this.props.favoritesProducts.filter(element => element.id === this.props.product.id);
        console.log(favoriteProduct)
        if (favoriteProduct.length === 0){
            console.log("favorite exist")
            return <i id="favoriteIcon" className="far fa-heart ml-2" onClick={() => this.props.onChangeFavorites(this.props.product, true)}></i>
        }
            
        else{
            console.log("favorite not exist")
            return <i id="favoriteIcon" className="fas fa-heart ml-2" onClick={() => this.props.onChangeFavorites(this.props.product, false)}></i>
        }
            
    }

    displayPrice = (product) => {
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

    getRelatedProducts() {
        return this.state.products.filter(element => element.category === this.props.product.category && element.id !== this.props.product.id);
    }


    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 product-image">
                        <div className="row">
                            <div className="col-sm-12">
                                <Carousel>
                                    {this.props.product.images.map((image, index) => (
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
                            <h1>{this.props.product.name}</h1>
                            {this.createStars()}
                            <h2>{this.props.product.discount * 100}% off</h2>
                            <h3><span style={{textDecoration: "line-through"}}>${this.props.product.price}</span> ${this.props.product.price * (1- this.props.product.discount)}</h3>
                        </div>
                        <Form>
                            <Form.Group controlId="qty" className="d-inline-flex">
                                <Form.Label className="p-2">Qty:</Form.Label>
                                <Form.Control as="select" className="p-2 col-sm-8" ref={this.qtyRef}>
                                {this.createQtyList()}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="d-flex align-items-center">
                            <Button variant="primary" className="px-5" onClick={() => this.props.onAddToCart(this.props.product, this.qtyRef.current.value)}>
                                Add to cart
                            </Button>
                            {this.isFavorite()}
                        </div>
                        <div id="ProductOtherDetails" className="mt-5">
                            {this.isInStock()}
                            <p><strong>Description:</strong> {this.props.product.description}</p>
                            <p><strong>Category:</strong> {this.props.product.category}</p>
                        </div>
                        <div>
                            <p className="mb-2">
                                <strong>Related Items:</strong>
                            </p>
                            {this.getRelatedProducts().map(productElement => 
                                <Product key={productElement.id} productElement={productElement}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPage;