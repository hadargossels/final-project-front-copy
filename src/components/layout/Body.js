import React from 'react';
import Favorite from './Favorite'
import ProductView from './Product'
import Prices from './Prices'
import Rating from './Rating'
import './Body.css';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        const divStyle = {
            margin: '10px',
            border: '2px solid gold',
            height: '110vh',
            textAlign: 'center',
            position: 'relative',
            backgroundColor: 'rgb(217, 236, 228)'
        }
        const prodInfoStyle = {
            width: '30vw',
            position: 'absolute',
            left: '55vw',
            top: '30vh'
        }
        return (
            <div style={divStyle}>
                <h1 style={{ marginTop: '10px' }}>Samsung Galaxy S20 Ultra 5G</h1>
                <ProductView />
                <div style={prodInfoStyle}>
                    <Favorite />
                    <Prices />
                    <Rating />
                </div>
            </div>
        );
    }
}
export default Body;