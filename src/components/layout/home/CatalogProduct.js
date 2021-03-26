import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
import { Card, Button } from 'react-bootstrap';
import './CatalogProduct.css'

export default class CatalogProduct extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '20vw', height: '46rem', margin: '30px' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <ReactStars
                            count={5}
                            size={24}
                            value={this.props.rating}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <Card.Text>{this.props.desc}</Card.Text>
                        <span style={{ color: 'red' }}>Starting price: {this.props.price}$ </span><Button variant="primary">Click for more info</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}