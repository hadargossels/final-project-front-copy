import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Product from '../Product/Product'
import './home.css'
import {arrayAllProduct} from '../../dataBase'

let bestSellersArr=bestSellersArray();
let salesArr=salesArray(); 

export default class Home extends Component {
    render() {
        return (
          <div className="homeDiv">
            <div className="photoDiv">
              <NavLink to="/store"><button>SHOP</button></NavLink>
            </div>
          <div className="paddingDiv">
            <div className="bestSellersDiv">
             <NavLink className="headerA" to="/store/best_Sellers"><p className="bestSellersP">Best Sellers</p></NavLink>
                <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div className="itemDiv row justify-content-center">
                           <Product data={bestSellersArr[0]} localStorageChange={this.props.localStorageChange}/>
                            <Product data={bestSellersArr[1] } localStorageChange={this.props.localStorageChange}/>
                            <Product data={bestSellersArr[2]} localStorageChange={this.props.localStorageChange}/>
                        </div>
                      </div>
                      <div class="carousel-item">
                      <div className="itemDiv row justify-content-center">
                              {/*<Product data={bestSellersArr[3]}/>
                               <Product data={bestSellersArr[4]}/>
                              <Product data={bestSellersArr[5]}/> */}
                              {/* <div className="col-3 thirdProductToggle"><Product data={bestSellersArr[2]}/></div> */}
                            <Product data={bestSellersArr[3]} localStorageChange={this.props.localStorageChange}/>
                              {/* <div className="col-3 thirdProduct"><Product data={bestSellersArr[1]}/></div>
                              <div className="col-3 thirdProduct"><Product data={bestSellersArr[2]}/></div> */}
                        </div>
                      </div>
                     
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
    
            <div className="CategoryProductDiv">
              <NavLink className="headerA" to="/store"><p className="CategoryProductP">Category Product</p></NavLink>
              <div className=" row justify-content-center">
                  <NavLink className="col-9 col-sm-5 col-md-4 CategoryA" to="/store/category_face"><div className=" Category CategoryFace"><p>Face</p></div></NavLink>
                  <NavLink className="col-9 col-sm-5 col-md-4 CategoryA"  to="/store/category_lips"><div className=" Category CategoryLips"><p>Lips</p></div></NavLink>
                  <NavLink className="col-9 col-sm-5 col-md-4 CategoryA" to="/store/category_eyes"><div className=" Category CategoryEyes"><p>Eyes</p></div></NavLink>
              </div>
            </div>
    
    
            <div className="salesDiv">
             <NavLink className="headerA" to="/store/sales"><p className="SalesP">Sales</p></NavLink>
                <div id="carouselSalesCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div className="itemDiv row justify-content-center">
                            <Product data={salesArr[0]} localStorageChange={this.props.localStorageChange}/>
                            <Product data={salesArr[1]} localStorageChange={this.props.localStorageChange}/>
                            <Product data={salesArr[2]} localStorageChange={this.props.localStorageChange}/>
                        </div>
                      </div>
                      <div class="carousel-item">
                      <div className="itemDiv row justify-content-center">
                              {/*<Product data={bestSellersArr[3]}/>
                               <Product data={bestSellersArr[4]}/>
                              <Product data={bestSellersArr[5]}/> */}
                              {/* <div className="col-3 thirdProductToggle"><Product data={bestSellersArr[2]}/></div> */}
                              <Product data={salesArr[0]} localStorageChange={this.props.localStorageChange}/>
                              <Product data={salesArr[1]} localStorageChange={this.props.localStorageChange}/>
                              <Product data={salesArr[2]} localStorageChange={this.props.localStorageChange}/>
                        </div>
                      </div>
                     
                    </div>
                    <a class="carousel-control-prev" href="#carouselSalesCaptions" role="button" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselSalesCaptions" role="button" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
            </div>
          </div>
        )
      }
}
 

function bestSellersArray(){

  let bestSellersArr=[...arrayAllProduct];
  bestSellersArr.sort((a,b)=>a.buyNum-b.buyNum);
  return bestSellersArr.slice(0,4);//the 4 besr seller product
}

function salesArray() { 
    
  let salesArr=[...arrayAllProduct];
  salesArr=salesArr.filter((v)=>v.discountProduct!="none");
  return salesArr;

}