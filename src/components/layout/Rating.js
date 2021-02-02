import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

export default class Rating extends Component {
    render() {
        const rangeStyle = {
            width: '2.5vw',
            marginRight: '10px'
        }
        const ratingChanged = (newRating) => {
            console.log(newRating);
        }
        const amountChanged = (newAmount) => {
            console.log(newAmount.target.value);
        }
        return (
            <div>
                <input type="number" defaultValue="1" min="1" onChange={amountChanged} style={rangeStyle} />
                <Button variant="secondary" id="addToBasketID" style={{ borderRadius: '20%', margin: '10px 0' }}>Add to basket</Button>{' '}
                <div style={{ margin: '20px 37%' }}>
                    Rate this product
                        <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
            </div>
        )
    }
}
