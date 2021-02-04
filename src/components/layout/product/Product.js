import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
import img1 from '../../../imgs/Samsung_S20-1.jpeg';
import img2 from '../../../imgs/Samsung_S20-2.jpg';
import img3 from '../../../imgs/Samsung_S20-3.jpg';
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
        const longText =
            `The Galaxy S20 Ultra is the flagship smartphone of Samsung’s Galaxy S20 series. The device is huge with the display measuring 6.9-inches.
        The QHD+ panel on the Galaxy S20 Ultra has excellent viewing angles and the output is vivid. The panel also gets bright enough when outdoors.
        The phone is powered by an Exynos 990 SoC and has 12GB of RAM and 128GB of storage onboard.
        
        It packs in a 5,000mAh battery and has support for 45W fast charging. Samsung ships a 25W charger in the box which is quick to charge the device.
        The phone has a quad-camera setup with a 108-megapixel primary camera, a 48-megapixel telephoto camera, 12-megapixel ultrawide-angle-camera and a depth vision camera.
        Samsung also offers 100x zoom on the device which is the highlight of the Galaxy S20 Ultra. The camera performance is excellent as the device manages to take good shots irrespective of the lighting conditions.`
        return (
            <>
                <h1 style={{ marginTop: '10px' }}>Samsung Galaxy S20 Ultra 5G</h1>
                <div style={carouselStyle}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={img1}
                                alt="S20 ulta pic"
                                width="300px"
                                height="300px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={img2}
                                alt="S20 ulta pic"
                                width="250px"
                                height="300px"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={img3}
                                alt="S20 ulta pic"
                                width="400px"
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
                            {longText}
                        </ReactReadMoreReadLess>
                    </div>
                </div>
            </>
        )
    }
}
