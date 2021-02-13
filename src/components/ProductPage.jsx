import React from 'react';
import {Carousel, Form, Button} from 'react-bootstrap';
import storeItems from './StoreItems.jsx';
import Product from './Product.jsx';


class ProductPage extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
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
        if (this.props.product.favorite)
            return <i id="favoriteIcon" className="fas fa-heart ml-2" onClick={this.changeFavorite}></i>
        else
            return <i id="favoriteIcon" className="far fa-heart ml-2" onClick={this.changeFavorite}></i>
    }

    changeFavorite = () => {
        if (this.props.product.favorite) {
            this.setState({favorite: false});
        }
        else
            this.setState({favorite: true});
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
        return storeItems.filter(element => element.category === this.props.product.category && element.id !== this.props.product.id);
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 product-image">
                        <div className="row">
                            <div className="col-sm-12">
                                
                                <Carousel
                                    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{backgroundColor:'rgb(128, 128, 128, 0.7)',color:'green'}}/>}
                                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{backgroundColor:'rgb(128, 128, 128, 0.7)',color:'green'}}/>}
                                    >
                                    {this.props.product.images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img className="d-block w-100" src={image} alt="First slide"/>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            
                            <div className="col-sm-12">
                                <div className="row">
                                    {this.props.product.images.map((image, index) => (
                                        <div className="col-sm-4" key={index}>
                                            <img src={image} alt="First slide" style={{width:"100%", height:"100%"}}/>
                                        </div>
                                    ))}
                                </div>
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
                                <Form.Control as="select" className="p-2 col-sm-8">
                                {this.createQtyList()}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <div className="d-flex align-items-center">
                            <Button variant="primary" className="px-5">Add to bag</Button>
                            {this.isFavorite()}
                            
                        </div>
                        <div id="ProductOtherDetails" className="mt-5">
                            {this.isInStock()}
                            <p><strong>Description:</strong> {this.props.product.description}</p>
                            <p><strong>Category:</strong> {this.props.product.category}</p>
                        </div>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-10 justify-content-center py-3">
                        Related Items:
                        <div className="row py-3">
                            {this.getRelatedProducts().map(productElement => 
                                <Product key={productElement.id} productElement={productElement}/>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductPage;