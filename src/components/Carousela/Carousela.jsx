import React, { Component } from 'react'
import './Carousela.css'
import Carousel from 'react-bootstrap/Carousel'
import case_T from '../../pictures/case_T_front_dark_blue_empty.png'
import T1 from '../../pictures/T1.png'
import T1_white from '../../pictures/T1_white.png'

export default class Carousela extends Component {
  render() {
    return (
      <div>
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block"
            src={T1_white}
            alt="First slide"
            width="200px"
            height="200px"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block"
      src={T1}
      alt="First slide"
      width="200px"
      height="200px"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block"
      src={case_T}
      alt="First slide"
      width="200px"
      height="200px"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>    
    )
  }
}
