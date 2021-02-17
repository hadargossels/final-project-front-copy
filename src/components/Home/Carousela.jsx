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
        <div className="container d-flex">
  <img
      className="d-block"
      src={T1}
      alt="First slide"
      width="200px"
      height="200px"
    />
  <img
      className="d-block"
      src={T1}
      alt="First slide"
      width="200px"
      height="200px"
    />
      <img
      className="d-block"
      src={T1}
      alt="First slide"
      width="200px"
      height="200px"
    />
    </div>
          

        </Carousel.Item>
  <Carousel.Item>
  <div className="container d-flex">
  <img
      className="d-block"
      src={case_T}
      alt="First slide"
      width="200px"
      height="200px"
    />
  <img
      className="d-block"
      src={case_T}
      alt="First slide"
      width="200px"
      height="200px"
    />
      <img
      className="d-block"
      src={case_T}
      alt="First slide"
      width="200px"
      height="200px"
    />
    </div>

  </Carousel.Item>
  <Carousel.Item>
    <div className="container d-flex">
  <img
      className="d-block"
      src={T1_white}
      alt="First slide"
      width="200px"
      height="200px"
    />
  <img
      className="d-block"
      src={T1_white}
      alt="First slide"
      width="200px"
      height="200px"
    />
      <img
      className="d-block"
      src={T1_white}
      alt="First slide"
      width="200px"
      height="200px"
    />
    </div>
  </Carousel.Item>
</Carousel>
</div>    
    )
  }
}
