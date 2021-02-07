import React from 'react';
import Favorite from './Favorite'
import ProductView from './Product'
import Prices from './Prices'
import Rating from './Rating'
import './Body.css';

class Body extends React.Component {
    render() {
        const divStyle = {
            margin: '10px',
            border: '2px solid gold',
            height: '100vh',
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
                <ProductView name={this.props.prodData.title} desc={this.props.prodData.longDesc}/>
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