import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import 'jquery/dist/jquery.js';
// import { Slider } from '@material-ui/core'
import PriceSlider from './PriceSlider'



export default class ProductList extends Component {


render() {
      let search ='';
    if(this.props.location.search[3]!==undefined)
    {
        search = this.props.location.search.slice(3, this.props.location.search.length);
    }
    function checkIfEmpty(arr){
        if(arr.length==0){

           return(
           <div className="container">
           <h1 className="text-center text-uppercase " style={{marginRight:"20%"}}>No Products Found</h1></div>) 
        }

    }
    return (
        <React.Fragment>
            <ProductConsumer>
                {value=>{ 
                    // {console.log(window.localStorage)}
                    //          {if(window.location.pathname!='/shop')value.filtersArray.map(isEnabled => isEnabled.isEnabled=false)}//if leave th
                    return (<React.Fragment>
                        <div className="py-5" >
                        <Title name="our" title="products" />
                            <div className="container-fluid">
                                <div className='row'>
                                    <div className="col-2">
                                        <div className="d-flex justify-content-center text-uppercase">
                                           
                                            <div className="flex flex-direction:column btn-lg" style={{marginLeft:"100px"}}>
                                                
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
                                            <div className="form-check">
                                                <input onChange={()=>{value.setFilter("sale")}} className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label className="form-check-label" for="flexCheckChecked">
                                                sale
                                                </label>
                                            </div>











                                            <div class="dropdown">
                                                     <PriceSlider val={value}/> {/*does not work */}
                                                    <button class="btn btn-secondary dropdown-toggle" 
                                                    style={{fontSize:"25px", color: " var(--lightBlue)",background: "var(--mainWhite)",borderColor:"var(--lightBlue)"}} 
                                                    type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Sort By
                                                    </button>
                                                    
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={ {background: "var(--mainWhite)",borderColor:"var(--lightBlue)"}}>
                                                    <input className="dropdown-item btn" onClick={()=>{value.priceHighToLow("high")}} type="button" value="High price to low" /> 
                                                    <input  className="dropdown-item btn" onClick={()=>{value.priceHighToLow("low")}} type="button" value="Low price to High" /> 
                                                    <input  className="dropdown-item btn" onClick={()=>{value.ratingSort()}} type="button" value="Rating" /> 
                                                    </div>
                                            </div>
 









                                            </div>
                                            
                                        </div>

                                        {/* <div className="d-flex justify-content-center text-uppercase">
                                           
                                            <div className="flex flex-direction:column  btn-lg">
                                                                                     
                                                <div class="dropdown">
                                                     <PriceSlider val={value}/> does not work 
                                                    <button class="btn btn-secondary dropdown-toggle" 
                                                    style={{fontSize:"25px", color: " var(--lightBlue)",background: "var(--mainWhite)",borderColor:"var(--lightBlue)"}} 
                                                    type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Sort By
                                                    </button>
                                                    
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={ {background: "var(--mainWhite)",borderColor:"var(--lightBlue)"}}>
                                                    <input className="dropdown-item btn" onClick={()=>{value.priceHighToLow("high")}} type="button" value="High price to low" /> 
                                                    <input  className="dropdown-item btn" onClick={()=>{value.priceHighToLow("low")}} type="button" value="Low price to High" /> 
                                                    <input  className="dropdown-item btn" onClick={()=>{value.ratingSort()}} type="button" value="Rating" /> 
                                                    </div>
                                                </div>
 
                                            </div>
                                            
                                        </div> */}
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                         
                                        {value.getProducts(search).map(product =>{
                                            return <Product key={product.id} product={product}/>
                                        })}
                                          {checkIfEmpty(value.getProducts(search))}
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        </React.Fragment>
                    )}}
            </ProductConsumer>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="" tabIndex="-1" aria-disabled="true">Previous</a>
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
