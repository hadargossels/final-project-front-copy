import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
// import img1 from '../../../imgs/Samsung_S20-1.jpeg';
// import img2 from '../../../imgs/Samsung_S20-2.jpg';
// import img3 from '../../../imgs/Samsung_S20-3.jpg';
import './Product.css'

export default class ProductView extends Component {
    render() {
        const carouselStyle = {
            margin: '30px 0',
            width: '40vw',
            position: 'absolute',
            left: '3vw',
            top: '10vh'
        }
        const pStyle = {
            margin: '40px',
            fontSize: '0.9em',
            border: '2px solid black'
        }
        return (
            <>
                <h1 style={{ marginTop: '10px' }}>{this.props.name}</h1>
                <div style={carouselStyle}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={this.props.img}
                                alt="prod pic"
                                width="300px"
                                height="300px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={this.props.img}
                                alt="prod pic"
                                width="300px"
                                height="300px"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={this.props.img}
                                alt="prod pic"
                                width="300px"
                                height="300px"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div style={pStyle}>
                        <ReactReadMoreReadLess
                            charLimit={400}
                            readMoreText={"Read more ▼"}
                            readLessText={"Read less ▲"}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                        >
                            {this.props.desc || ''}
                        </ReactReadMoreReadLess>
                    </div>
                </div>
            </>
        )
    }
}
