import React, { Component } from 'react'
import './Product.css'
import {Link} from "react-router-dom"
import T1 from '../../pictures/T1.png'
import T1_scale2 from '../../pictures/T1_scale2.jpg'
import T1_scale3 from '../../pictures/T1_scale3.jpg'
import T1_scale4 from '../../pictures/T1_scale4.jpg'
import myProducts from '../../prod.json'
import Rating from '../Catalog/Rating'



let arrProd = JSON.parse(localStorage.getItem('products')) || [];

export default class Product extends Component {
   constructor(props){
      super(props)
      
      let choosen=this.props.match.params.title;
      let result = myProducts.filter(function (pro) {
         return pro.Title === choosen;
     })[0];
     
      this.state = {
          Image: result.Image,
          Title: result.Title,
          Desc:result.Description,
          Price:result.Price,
          Rating:result.Rating,
          Item:1,
          message:""
      }
      
      this.updateState = this.updateState.bind(this)
      this.addedToCart = this.addedToCart.bind(this)
   }

  updateState(e){
     let counter=this.state.Item
         if(e.target.value==="+")
            this.setState({ Item: ++counter})
         if(e.target.value==="-" && counter>1)
            this.setState({ Item: --counter})
         if(e.target.classList[0]==="smallPics")   
            this.setState({ Image: e.target.src})
  }

  addedToCart(){
   
      if(arrProd.find((obj)=>obj.Image===this.state.Image)){
         this.setState({message:"already"});
        
      }
      else{
         arrProd.push({Image:this.state.Image,Item:this.state.Item});
         localStorage.setItem('products', JSON.stringify(arrProd));
         this.setState({message:"added"});
      }
     
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
               <div>10,000 sales | <span>
               <Rating rating={this.state.Rating}/>
               </span></div>
               <br></br>
               <div className="title"><b>{this.state.Title}</b></div>
               <br></br>
               <p>Description:</p>
               <p>{this.state.Desc}</p>
            
               <div><span className="seller">Best Seller</span>&#10003; in stock</div>
               <br></br>
               <div className="price">${this.state.Price}</div>
               <span>Quantity:&nbsp; 
               <input onClick={this.updateState} type="button" className="btnQty" value="-"/>&nbsp; {this.state.Item} &nbsp;
               <input onClick={this.updateState} type="button" className="btnQty" value="+"/>
               
               </span>
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
                     return <img key={obj.id} alt="..." src={obj.Image} className="mediumPics cursor border m-2"></img>
                  })
               }
               </div>
            </div>
            <div className="col-4">
               <br></br>
               <div className="shipping text-center">Shipping and return policies</div>
               <br></br>
               <div>ready to ship in:</div>
               <div style={{fontWeight:"bold"}}>3-5 bussiness days</div>
               <br></br><br></br>
               <button onClick={this.addedToCart} className="mx-auto d-block cursor buyBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >add to Cart</button>
               
               <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="staticBackdropLabel">Message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {this.state.message==="already"? (
                              <div>This product already found in cart</div>
                              
                            ):(
                              <div>This product added to cart</div>
                              
                            )}
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

               <br></br>
               <Link to="/cart"><button className="mx-auto d-block cursor buyBtn">Go to cart</button></Link>
               <br></br><br></br><br></br>
            </div>
         </div>
         </div>
      </div>

   );
   }
}

