import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'
export default class ProductList extends Component {

render() {
    let search = this.props.match.params.search?this.props.match.params.search:"";
    return (
        <React.Fragment>
            <ProductConsumer>
                {value=>{
                    return <React.Fragment>
                        <div className="py-5">
                        <Title name="our" title="products" />
                            <div className="container-fluid">
                                <div className='row'>
                                    <div className="col-2">
                                        <div className="d-flex justify-content-center text-uppercase">
                                           
                                            <div className="flex flex-direction:column  btn-lg">
                                            <p style={{color: 'var(--lightBlue)',fontSize:"25px"}}>Filters</p>
                                            <div className="form-check " >
                                                <input onChange={()=>{value.setFilter('helmet')}} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    helmets
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={()=>{value.setFilter('bike')}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label className="form-check-label" for="flexCheckChecked">
                                                    bikes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={()=>{value.setFilter('cub')}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label className="form-check-label" for="flexCheckChecked">
                                                cubs
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={()=>{value.setFilter("scooter")}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label className="form-check-label" for="flexCheckChecked">
                                                scooters
                                                </label>
                                            </div>
                                            </div>
                                            
                                        </div>

                                        <div className="d-flex justify-content-center text-uppercase">
                                           
                                            <div className="flex flex-direction:column  btn-lg">
                                            <p style={{color: 'var(--lightBlue)',fontSize:"25px"}}>Arrange by</p>
                                            <div className="form-check " >
                                                <input onChange={()=>{value.setFilter('helmet')}} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    price: high-low
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={()=>{value.setFilter('bike')}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label className="form-check-label" for="flexCheckChecked">
                                                price: low-high
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={()=>{value.setFilter('cub')}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label className="form-check-label" for="flexCheckChecked">
                                                rating
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={()=>{value.setFilter("scooter")}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label className="form-check-label" for="flexCheckChecked">
                                                sales
                                                </label>
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                        {value.getProducts(search).map(product =>{
                                            return <Product key={product.id} product={product}/>
                                        })}
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        </React.Fragment>
                    }}
            </ProductConsumer>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>

        );
    }
}
