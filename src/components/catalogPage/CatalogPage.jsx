import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import {productsObj} from "../product/productsObj.js"
import axios from 'axios'
// import {Route, Link} from 'react-router-dom';
import Checkbox from '../checkbox/Checkbox'
import Product from '../product/Product'

//loadsh
import difference from '../../../node_modules/lodash/difference.js'
// EXAMPLE: import uncheck from '../catalogPage/unCheck' //how to import module // uncheck(); how to call module

import queryString from 'query-string'
//react.js example components
import {Animated} from "react-animated-css";

import './catalogPage.css';

export default class CatalogPage extends Component {
    
  constructor(props){
    super(props)
    // console.log(queryString.parse(props.location.search)); // return {q: "Impossible Table"}
    // this.search = (props.location.search)? queryString.parse(props.location.search).q : '';
    // let productsObjs;
    // this.match ='';
    // if (this.search)
    //   productsObjs = productsObj.filter( product => {
    //     //check if the phrase in the title or productDescription
    //     if ( product.title.toLowerCase().includes(this.search.toLowerCase()) )
    //       return product
    //     else if( product.productDescription.toLowerCase().includes(this.search.toLowerCase()) )
    //       return product
    //     else
    //       this.match='No Matching'
    //       return []
    //   })
    // else
    //   productsObjs = productsObj;
    
    this.state = {
      products:[],
        sort: 'High to Low',
        filterArr: [],
        myObj: [], 
        checkbox:{
          material: ['PLA','PLA+'],
          color:['Black','Blue','White'],
          theme:['Engineering','Game','Lithophane','Toy'],
          rating:[{star:'🌟', number: 1},
                  {star:'🌟🌟', number: 2},
                  {star:'🌟🌟🌟', number: 3},
                  {star:'🌟🌟🌟🌟', number: 4},
                  {star:'🌟🌟🌟🌟🌟', number: 5}],
          },
        noMatch:'',
        search: queryString.parse(props.location.search).q,   // return {q: "Impossible Table"}
    } 
  }

  componentDidMount(){
    this.fetch()
  }

  fetch(){
    axios.get('http://localhost:3000/products')
        .then((response)=> {
          this.setState({products:response.data, myObj:response.data})
          if(this.props.match.params.id) this.filter( this.props.match.params.id,true ) //check if came from HomePage
          this.matchSearch()    // check if came from search input in header
        })
        .catch((error)=> {
          console.log(error);
        })

  }

  matchSearch(){
    this.setState({noMatch: ''})
    let productsObjs=[];
    if(this.state.search){
      productsObjs = this.state.products.filter( product => {
          //check if the phrase in the title or productDescription
          return ( product.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
          product.productDescription.toLowerCase().includes(this.state.search.toLowerCase()))
        })
      this.setState({myObj:productsObjs})
      if(productsObjs.length===0) this.setState({noMatch:"No Matching"})
    }
  }

  sort(option){
    let copyArr = [...this.state.myObj]
    switch (option) {
      case 'High to Low':
        copyArr.sort((a,b)=>b.price-a.price)
        break;
      case 'Low to High':
        copyArr.sort((a,b)=>a.price -b.price)
        break;
      case 'Top Rated':
        copyArr.sort((a,b)=>b.rating.length -a.rating.length)
        break;
      case 'Alphabetical order':
        copyArr.sort((a,b)=>
        (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0)
        break;
      default:
        break;
    }
    this.setState({ sort: option,  myObj: copyArr})
    
  }

  filter(id,bool){
    this.setState({noMatch: ''})
    let copyArr = [...this.state.myObj]    
    let arr=[...this.state.filterArr];  //update filterArr on every function call
    
    if(bool){
      arr.push(id);
    } 
    else{                         //filter out catagories 
      arr=arr.filter((el)=>{
        return el !==id;
      })
    }
    copyArr=this.state.products.filter((el)=>{         //filter out the products  
      return difference(arr,el.filter).length === 0
    })

    this.setState({ myObj: copyArr, filterArr: arr })
    setTimeout(()=> this.sort(this.state.sort),0) 
  }
    
  resetFilter(){
    const checkArr=document.querySelectorAll('.checkbox');
    checkArr.forEach(el => {
         if (el.checked) return el.checked=false;
    })
    setTimeout(()=> this.sort(this.state.sort),0)
    this.setState({noMatch:'', myObj: this.state.products, filterArr:[]})
  }



  render() {
    
        return (
            <div className="container-fluid p-5">
            {this.state.noMatch && <Animated animationIn="lightSpeedIn" animationOut="lightSpeedOut" animationInDuration={800} animationOutDuration={400} isVisible={true}>
            <p className="no-matching display-4 justify-content-center">{this.state.noMatch}</p></Animated>}
            <p className="no-matching display-4 justify-content-center">3D Catalog</p>
            {/* {!this.state.noMatch && <Animated animationIn="lightSpeedIn" animationOut="lightSpeedOut" animationInDuration={800} animationOutDuration={400} isVisible={true}>
            <p className="no-matching display-4 justify-content-center">3D Catalog</p></Animated>} */}
              {/* <div><h1> 3D Catalog </h1></div> */}
              {/* select div- use class=d-flex with justify */}
              <div className="d-flex justify-content-end pr-5">
              {/* <label className="mr-2">Show</label> 
                <select onChange={this.show.bind(this)}>
                    <option>6</option>
                    <option>12</option>
                </select>  */}

                <label className="mr-2">Sort By</label> 
                <select onChange={ (e)=> this.sort.call( this, e.target.value) } >
                    <option >High to Low</option>
                    <option>Low to High</option>
                    <option>Top Rated</option>
                    <option>Alphabetical order</option>
                </select> 
              </div>
              {/* left bar and column layout */}
              {/* left bar */}
              <div className="row">
                <div id="filter" className="col-12 col-md-4 col-lg-2">
                    <h3>Categories</h3>
                    <hr/>
                    <div>
                      <p>Showing: <small>{this.state.filterArr.join()}</small></p>
                      <Link to="/catalogPage">
                        <button className="btn btn-primary my-3" onClick={this.resetFilter.bind(this)}>
                          Show All
                        </button>
                      </Link>
                    </div>
                    
                    {/* accordion */}
                    <div id="accordion" >
                       <div className="card ">
                         <div className="card-header">
                           <a className="collapsed card-link" data-toggle="collapse" href="#collapseOne">
                           Material
                           </a>
                         </div>
                         <div id="collapseOne" className="collapse show bg-light" data-parent="#accordion">
                           <div className="card-body">
                           { this.state.checkbox.material.map((el)=>{
                               return <Checkbox key={el} idFor={el} print={el} id={el} filter={this.filter.bind(this)
                              } products={this.state.products}/>
                           }) 
                           }
                           </div>
                         </div>
                       </div>
                       <div className="card">
                        <div className="card-header">
                          <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                            Color
                          </a>
                        </div>
                        <div id="collapseTwo" className="collapse bg-light" data-parent="#accordion">
                          <div className="card-body">
                          { this.state.checkbox.color.map((el)=>{
                               return <Checkbox key={el} idFor={el} print={el} id={el} filter={this.filter.bind(this)} products={this.state.products}/>
                           })
                           }
                          </div>
                        </div>
                      </div>
                      <div className="card">
                      <div className="card-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                          Theme
                        </a>
                      </div>
                      <div id="collapseThree" className="collapse bg-light" data-parent="#accordion">
                        <div className="card-body">
                        { this.state.checkbox.theme.map((el)=>{
                               return <Checkbox key={el} idFor={el} print={el} id={el} filter={this.filter.bind(this)} products={this.state.products}/>
                           })
                           }
                        </div>
                      </div>
                    </div>
                    
                    <div className="card">
                      <div className="card-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                          Rating
                        </a>
                      </div>
                      <div id="collapseFour" className="collapse bg-light" data-parent="#accordion">
                        <div className="card-body">
                        { this.state.checkbox.rating.map((el)=>{
                               return <Checkbox key={el.number} idFor={el.number} print={el.star} id={el.number}
                                 filter={this.filter.bind(this)} products={this.state.products}
                               />
                           })
                           }
                        </div>
                      </div>
                    </div>
              </div>
                </div>
                {/* product layout */}
                <div className=" col-md-8 col-lg-10">
                      <div className="row p-5">
                        { this.state.myObj.map((el)=>{
                            return (
                              <Product 
                              key={el.title} 
                               title={el.title}
                               description={el.description} src={el.src} price={el.price} rating={el.rating}
                                 special={el.special} obj={el} addToCart={this.props.addToCart}
                               />
                            )
                          })
                        }
                    
                      </div>
                </div>
              </div>
            </div>
            
        )
    }
}

  
    