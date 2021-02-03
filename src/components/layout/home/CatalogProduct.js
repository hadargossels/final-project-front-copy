import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
import { Card, Button } from 'react-bootstrap';
import './CatalogProduct.css'

export default class CatalogProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.img,
            productName: props.title,
            starsRating: props.stars,
            prodDescription: props.desc,
            prodPrice: props.price
        };
    }
    render() {
        return (
            <div className="col-4">
                <Card style={{ width: '20vw', height: '41rem', margin: '30px' }}>
                    <Card.Img variant="top" src={this.state.image} />
                    <Card.Body>
                        <Card.Title>{this.state.productName}</Card.Title>
                        <ReactStars
                            count={5}
                            size={24}
                            value={this.state.starsRating}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <Card.Text>{this.state.prodDescription}</Card.Text>
                        <span style={{ color: 'red' }}>Starting price: {this.state.prodPrice}$ </span><Button variant="primary">Add to basket</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}