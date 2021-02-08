import React, { Component } from 'react'
import Title from './Title'
import {ProductConsumer} from '../context'
import Product from './Product'

export default class Homepage extends Component {
    render() {

        return (
            <React.Fragment>
            <ProductConsumer>
                {value=>{
                    return <React.Fragment>
                        <div className="py-5">
                        <Title name="home" title="page" />
                            <div className="container">
                              <div className="row">
                                    {/* {value.getHomepageProducts().map(product =>{
                                        return <Product key={product.id} product={product}/>
                                    })} */}
                                </div>
                            </div>
                        </div>                                

                        </React.Fragment>
                    }}
            </ProductConsumer>
            
        </React.Fragment>
        )
    }
}
