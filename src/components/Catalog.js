import React, { Component } from 'react'
import Rating from './Rating';
import {lowToHigh,highToLow,alphabetOrder} from '../functions/compareFuncs.js'

export default class Catalog extends Component {
    constructor(props){
        super(props);
        this.state = {arr:props.arr}
    }
    
    setOrder(e){
        let newArr = this.state.arr;
        if (e.target.value === "cheapFirst")
            newArr= newArr.sort(lowToHigh)
        else if (e.target.value === "expensiveFirst")
            newArr= newArr.sort(highToLow)
        else{
            newArr= newArr.sort(alphabetOrder)
        }
        this.setState({arr:newArr})
    }

    render() {

        return (
                <div className="container">
                    <div className="mb-2 text-end">
                        <span className="me-1">Sort by:</span>
                        <select value={this.state.value} onChange={this.setOrder.bind(this)}>
                            <option defaultValue>Alphabetical</option>
                            <option value="cheapFirst">Price Low to High</option>
                            <option value="expensiveFirst">Price High to Low</option>
                        </select>
                    </div> 
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-4 list-group pe-0 mb-5">
                            <span className="ps-2 pb-2 h3 text-light bg-primary">Categories</span>
                            <span className="ps-2 h5">Platform</span>
                            <form className=" ps-3">
                                <input type="checkbox" id="comp"/>
                                <label htmlFor="comp" className="ps-1">Computer</label>
                                <br/>
                                <input type="checkbox" id="ps4"/>
                                <label htmlFor="ps4" className="ps-1">PlayStation4</label>
                                <br/>
                                <input type="checkbox" id="switch"/>
                                <label htmlFor="switch" className="ps-1">Switch</label>
                            </form>
                            
                        </div>
                            
                        <div className="container col-lg-10 col-md-9 col-8 mb-5">
                            
                            <div className="row">
                                {this.state.arr.map((element)=>{
                                    return <div className="col-lg-4 col-md-6 mb-2">
                                    <img src={element.img} alt="" className="rounded img-fluid"/>
                                    <div className="d-grid gap-2 d-md-flex float-end">
                                        <button className="mt-2 btn btn-outline-primary me-md-1" type="button"><i className="fas fa-shopping-cart"></i></button>
                                        <button className="mt-2 btn btn-outline-danger" type="button"><i className="far fa-heart"></i></button>
                                    </div>
                                <h3 className="catalog-title">{element.name}</h3>
                                <h3 className="text-danger">{element.price.toFixed(2)}$</h3>
                                <p><span className="text-danger">{element.platform}</span></p>
                                <Rating rating={element.rating}/>
                                </div>
                        })}
                            </div>
                        </div>
                        
                    </div>
                </div>
            
        )
    }
}