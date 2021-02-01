import React from 'react';
import img1 from '../imgs/Samsung_S20-1.jpeg';
import img2 from '../imgs/Samsung_S20-2.jpg';
import img3 from '../imgs/Samsung_S20-3.jpg';
import {Carousel} from 'react-bootstrap';

class Body extends React.Component {
    render() {
        const divStyle = {
            margin: '10px',
            border: '2px solid gold',
            textAlign: 'center',
            position: 'relative',
        }
        const pStyle = {
            margin: '20px 500px',
            fontSize: '0.9em'
        }
        const carouselStyle = {
           margin: '50px 0'
        }
        return (
            <div style={divStyle}>
                <h1>Samsung Galaxy S20 Ultra 5G</h1>
                <div style={carouselStyle}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src={img1}
                                alt="S20 ulta pic"
                                width="600px"
                                height="400px"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={img2}
                                alt="S20 ulta pic"
                                width="300px"
                                height="400px"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={img3}
                                alt="S20 ulta pic"
                                width="500px"
                                height="400px"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <p style={pStyle}>
                    The Galaxy S20 Ultra is the flagship smartphone of Samsung’s Galaxy S20 series. The device is huge with the display measuring 6.9-inches.
                    The QHD+ panel on the Galaxy S20 Ultra has excellent viewing angles and the output is vivid. The panel also gets bright enough when outdoors.
                    The phone is powered by an Exynos 990 SoC and has 12GB of RAM and 128GB of storage onboard.
                    It packs in a 5,000mAh battery and has support for 45W fast charging. Samsung ships a 25W charger in the box which is quick to charge the device.
                    The phone has a quad-camera setup with a 108-megapixel primary camera, a 48-megapixel telephoto camera, 12-megapixel ultrawide-angle-camera and a depth vision camera.
                    Samsung also offers 100x zoom on the device which is the highlight of the Galaxy S20 Ultra. The camera performance is excellent as the device manages to take good shots irrespective of the lighting conditions.
                </p>
            </div>
        );
    }
}
export default Body;
