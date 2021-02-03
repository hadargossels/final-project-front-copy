import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

export default class Rating extends Component {
    constructor() {
        super();
        this.state = {
            selectColor : "",
            rating : 0,
            numToBuy : 0
        };
    }

    changeMyColor() {
        return this.state.selectColor;
    }

    render() {
        const rangeStyle = {
            width: '2.5vw',
            marginRight: '10px'
        }
        const myColor = "Color selected: " + this.changeMyColor();
        const colorChoose = (e) => {
            this.setState({ selectColor : e.target.value });
        }
        const ratingChanged = (newRating) => {
            this.setState({ rating : newRating })
        }
        const amountChanged = (newAmount) => {
            this.setState({ numToBuy : newAmount.target.value })
        }
        return (
            <div>
                <select
                    value={this.state.selectColor}
                    onChange={colorChoose}
                >
                    <option value="none">Choose your color</option>
                    <option value="Cosmic Grey">Cosmic Grey</option>
                    <option value="Cosmic Black">Cosmic Black</option>
                    <option value="Cloud White">Cloud Whitek</option>
                </select>
                <p>{myColor}</p>
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
