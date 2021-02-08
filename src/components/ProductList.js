import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'
export default class ProductList extends Component {

render() {
    //  console.log(this.props)
      let search ='';
    // if(this.props.location.pathname!='/search/' ||this.props.location.pathname!='/search/q=')
    if(this.props.location.pathname[10]!==undefined && this.props.location.pathname.includes("search"))
    {
        search = this.props.location.pathname.slice(10, this.props.location.pathname.length);
    }
    // let search = this.props.match.params.search?this.props.match.params.search:"";
    // console.log(search)
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
                                            console.log(product)
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
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>

        );
    }
}
