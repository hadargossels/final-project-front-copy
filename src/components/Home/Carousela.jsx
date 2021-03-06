import React, {} from 'react'
import './Carousela.css'
import Carousel from 'react-bootstrap/Carousel'
// import case_T from '../../pictures/case_T_front_dark_blue_empty.png'
// import T1 from '../../pictures/T1.png'
// import T1_white from '../../pictures/T1_white.png' 
import Cards from './Cards'
// import {db} from '../../firebase'
import {useAuth} from '../../context/AuthShopContext'

export default function Carousela (props){

  const {products}=useAuth()
  
 
    return (
      <div className="pb-3">
      <Carousel>
        <Carousel.Item >
        <div className="container d-flex ">
        {
             props.title==="onSale" && products.filter((obj) =>{return obj.price!==obj.onsale}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
        {
             props.title==="bestSeller" && products.filter((obj) =>{return obj.rating===5}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
        {
             props.title==="newProducts" && products.filter((obj) =>{return obj.rating===4}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
      </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="container d-flex">
       {
             props.title==="onSale" && products.filter((obj) =>{return obj.price!==obj.onsale}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
        {
             props.title==="bestSeller" && products.filter((obj) =>{return obj.rating===5}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
        {
             props.title==="newProducts" && products.filter((obj) =>{return obj.rating===4}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
    </div>

  </Carousel.Item>
  <Carousel.Item>
    <div className="container d-flex">
        {
             props.title==="onSale" && products.filter((obj) =>{return obj.price!==obj.onsale}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
        {
             props.title==="bestSeller" && products.filter((obj) =>{return obj.rating===5}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
        {
             props.title==="newProducts" && products.filter((obj) =>{return obj.rating===4}).map((prod)=>{    
                return <Cards key={prod.id} id={prod.id} rating={prod.rating} price={prod.price} title={prod.title} image={prod.image} desc={prod.description} onsale={prod.onsale}/>
            })

        }
    </div>
  </Carousel.Item>
</Carousel>
</div>    
    )
  }

