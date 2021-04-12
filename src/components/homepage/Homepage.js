import React, { Component } from 'react'
import Title from '../additionsComp/Title'
import {ProductConsumer} from '../context/context'
import Carousel from 'react-bootstrap/Carousel';
import './Homepage.css';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
    constructor(props){
        super(props)
        this.state = {
            userEmail: null
        }
    }
    render() {
        if(this.state.userEmail)return<p>{this.props.userEmail}</p>
        return (
            <React.Fragment>
                
            <ProductConsumer>
                {value=>{ 
                    return (<React.Fragment>
                        <div className="py-5">
                        <Title name="home" title="page"  />
                            <div className="container">
                              <div className="row">
                                  <br/><br/><br/><br/><br/><br/><br/>
                                  <Carousel>
                                    {value.getHomepageProducts().map( (product,index) =>                                      
                                        <Carousel.Item key={index} onClick={()=>
                                            value.handleDetail(product.id)}>
                                            <div className="container text-center" >
                                                <Link to={'/details/' +product.id}>
                                                    <img src={product.img} alt="First slide" width="500px" height="500px"/>
                                                </Link> 
                                                <Carousel.Caption>  
                                                    <h3 className="text-uppercase font-weight-bold sale-carousel">sale</h3>
                                                    <p className="p-carousel">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                </Carousel.Caption>
                                            </div>
                                        </Carousel.Item>
                                    )} 
                                    </Carousel>
                            </div>                          
                        </div>
                    </div>                               
                        
                    </React.Fragment>) 
                    }}
            </ProductConsumer>
            
        </React.Fragment>
        )
    }
}
