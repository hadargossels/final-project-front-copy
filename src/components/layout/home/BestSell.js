import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import img1 from '../../../imgs/Samsung_S21-1.png';
import img2 from '../../../imgs/Samsung_Z-1.jpg';
import img3 from '../../../imgs/Iphone_12proMax-1.jpg';
import img4 from '../../../imgs/Huawei_Mate40Pro-1.jpg';
import img5 from '../../../imgs/Lenovo-PowerBank-1.jpg';
import img6 from '../../../imgs/Iphone_12proCase-1.jpeg';

import './BestSell.css';

export default class BestSell extends Component {
    render() {
        const carouselStyle = {
            marginTop: '5rem',
        }
        const bestSellStyle = {
            marginTop: '2rem',
        }
        return (
            <>
                <div style={bestSellStyle}>
                    <h3>Best Selling</h3>
                    <Carousel style={carouselStyle}>
                        <Carousel.Item>
                            <Link to={"/product/SamsungGalaxyS21Ultra5G"} style={{ textDecoration: 'none' }}>
                                <img
                                    src={img1}
                                    alt="prod pic"
                                    width="300px"
                                    height="300px"
                                />
                            </Link>
                            <Link to={"/product/SamsungGalaxyZFold25G"} style={{ textDecoration: 'none' }}>
                                <img
                                    src={img2}
                                    alt="prod pic"
                                    width="300px"
                                    height="300px"
                                />
                            </Link>
                            <Link to={"/product/AppleiPhone12ProMax"} style={{ textDecoration: 'none' }}>
                                <img
                                    src={img3}
                                    alt="prod pic"
                                    width="300px"
                                    height="300px"
                                />
                            </Link>
                            <Link to={"/product/HuaweiMate40Pro"} style={{ textDecoration: 'none' }}>
                                <img
                                    src={img4}
                                    alt="prod pic"
                                    width="300px"
                                    height="300px"
                                />
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to={"/product/PowerBank14000mAhLenovo"} style={{ textDecoration: 'none' }}>
                                <img
                                    src={img5}
                                    alt="prod pic"
                                    width="300px"
                                    height="300px"
                                />
                            </Link>
                            <Link to={"/product/SiliconeCasewithMagSafeforiPhone12ProMax"} style={{ textDecoration: 'none' }}>
                                <img
                                    src={img6}
                                    alt="prod pic"
                                    width="300px"
                                    height="300px"
                                />
                            </Link>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h2 style={{ marginTop: '13rem' }}>Categories</h2>
            </>
        )
    }
}
