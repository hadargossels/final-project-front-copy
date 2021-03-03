import React, {useEffect,useState } from 'react'
import './Carousela.css'
import Carousel from 'react-bootstrap/Carousel'
import case_T from '../../pictures/case_T_front_dark_blue_empty.png'
// import T1 from '../../pictures/T1.png'
import T1_white from '../../pictures/T1_white.png'
import axios from 'axios'
import Cards from './Cards'

export default function Carousela (props){

 
const [products,setProducts]=useState([])

  useEffect(()=>{
  
    axios.get('http://localhost:3000/prod')
    .then(function (response) {
        
      setProducts(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  })
 
    return (
      <div className="pb-3">
      <Carousel>
        <Carousel.Item >
        <div className="container d-flex ">
        {
              products.filter((obj) =>{return obj.Price!==obj.Onsale}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.Rating} price={prod.Price} title={prod.Title} image={prod.Image} desc={prod.Description} onsale={prod.Onsale}/>
            })

        }
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

