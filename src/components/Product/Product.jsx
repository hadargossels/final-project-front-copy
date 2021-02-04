import React, { Component } from 'react'

import './Product.css';

import T1 from '../../pictures/T1.png';
import T1_scale2 from '../../pictures/T1_scale2.jpg';
import T1_scale3 from '../../pictures/T1_scale3.jpg';
import T1_scale4 from '../../pictures/T1_scale4.jpg';
import myProducts from '../Catalog/prod.json';
import {Link} from "react-router-dom";



export default class App extends Component {
   constructor(props){
      super(props)
      
      let choosen=this.props.match.params.title;
      let result = myProducts.filter(function (pro) {
         return pro.Title === choosen;
     })[0].Image;
      
      
      this.state = {
          Image: result,
      }
      
      this.updateState = this.updateState.bind(this)
   }

  updateState(e){
          this.setState({ Image: e.target.src})
  }


   render() {
   return (
      
      <div>
         <div className="container">
         <div className="row">
            <div className="col-2 border">
            <br></br>  
            <img onClick={this.updateState} alt="..." src={T1} className="smallPics mx-auto d-block cursor"></img>
            <br></br>  
            <img onClick={this.updateState} alt="..." src={T1_scale2} className="smallPics mx-auto d-block cursor"></img>
            <br></br>
            <img onClick={this.updateState} alt="..." src={T1_scale3} className="smallPics mx-auto d-block cursor"></img>
            <br></br> 
            <img onClick={this.updateState} alt="..." src={T1_scale4} className="smallPics mx-auto d-block cursor"></img>
            </div>
            <div className="col-6">
            <br/><br/>

            <img src={this.state.Image} alt="..." className="bigImg mx-auto d-block cursor"></img>

            </div>
            <div className="col-4">
               <br></br><br></br>
               <div>10,000 sales | <span><i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <i className="far fa-heart cursor"></i>
               </span></div>
               <br></br>
               <div className="title">Whether you're new to Bitcoin or already a security expert,
                  <b>Trezor Model One </b>is the #1 Bitcoin wallet choice for everybody.</div>
               <br></br>
               <p>Description:</p>
               <p>Supports more than 1000 coins, use without risk, secured, supported operating systems, and reinforce your accounts with U2F</p>
            
               <div><span className="seller">Best Seller</span>&#10003; in stock</div>
               <br></br>
               <div className="price">$59.18</div>
               <div>Quantity:  &nbsp;&nbsp;<span>
               <button className="btnQty">-</button>
               &nbsp;1&nbsp;
               <button className="btnQty">+</button>
               </span></div>
            </div>
         </div>
         <div className="row">
            <div className="col-8 border">
               <br/>
               <div className="text-center similar">Similar Products</div>
               <br/>
               <div className="container-fluid mx-auto d-block">
               {
                  myProducts.map((obj)=>{
                     return <Link to={`/product/${obj.Title}`}><img key={obj.Image} alt="..." src={obj.Image} className="mediumPics cursor border m-2"></img></Link>
                  })
               }
               </div>
            </div>
            <div className="col-4">
               <br></br>
               <div className="shipping text-center">Shipping and return policies</div>
               <br></br>
               <div>Country:</div>
               <select className="form-select form-select-lg mb-3" aria-label="Default select example">
                  <option >Israel</option>
                  <option value="1">China</option>
                  <option value="2">USA</option>
                  <option value="3">Spain</option>
                  <option value="4">Mexico</option>
                  <option value="5">Italy</option>
               </select>
               <div>ready to ship in:</div>
               <div style={{fontWeight:"bold"}}>3-5 bussiness days</div>
               <div>cost to ship:</div>
               <div style={{fontWeight:"bold"}}>$20</div>
               <br></br><br></br>
               <button className="mx-auto d-block cursor buyBtn">Add to Cart</button>
               <br></br>
               <button className="mx-auto d-block cursor buyBtn">Purchase Now</button>
               <br></br><br></br><br></br>
            </div>
         </div>
         </div>
      </div>

   );
   }
}

