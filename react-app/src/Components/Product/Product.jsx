import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import ratingStars from '../../js/script';
import NotFound from '../404/NotFound';

const products = require('../../database/products.json');

export default class Product extends Component {

   constructor(props) {

      super(props);
      
      const product = products.filter(prod => prod.alt == this.props.match.params.prodName);

      if (product.length > 0) {

         this.state = {arr: product[0], src: product[0].img[0], type: product[0].type, addNotify: "", status: "", price: "", newPrice: ""};
      
         this.updateImage = this.updateImage.bind(this);
         this.setStatusPrice = this.setStatusPrice.bind(this);

         if (this.state.arr.stock) {
            this.state.addNotify = <button type="button" className="btn btn-outline-primary"><span style={{fontSize: "1.25rem", fontWeight: "300"}}>Add to <i className="fas fa-shopping-cart"></i></span></button>;
            this.state.status = <span className="text-success">In Stock</span>;
         }
    
         else {
            this.state.addNotify = <button type="button" className="btn btn-outline-danger"><span style={{fontSize: "1.25rem", fontWeight: "300"}}>Notify Me</span></button>
            this.state.status = <span className="text-danger">Out of Stock</span>;
         }
    
         if (this.state.arr.discount) {
            this.state.price =  <span style={{textDecoration: "line-through"}}>Price: ₪{this.state.arr.price.toFixed(2)}</span>;
            this.state.newPrice = <strong className="text-danger"><br/>Discount: ₪{(this.state.arr.price*(1-this.state.arr.discountPercentage)).toFixed(2)}</strong>;
         } 
    
         else {
            this.state.price = <strong>Price: ₪{this.state.arr.price.toFixed(2)}</strong>;
            this.state.newPrice = <span style={{display: "none"}}>.</span>;
         }
      }

   };

   updateImage(img) {

      this.setState({src: img.target.src});
   }
   
   setStatusPrice(prod) {

         if (prod.stock) {
            this.setState({addNotify: <button type="button" className="btn btn-outline-primary"><span style={{fontSize: "1.25rem", fontWeight: "300"}}>Add to <i className="fas fa-shopping-cart"></i></span></button>});
            this.setState({status: <span className="text-success">In Stock</span>});
         }
    
         else {
            this.setState({addNotify: <button type="button" className="btn btn-outline-danger"><span style={{fontSize: "1.25rem", fontWeight: "300"}}>Notify Me</span></button>});
            this.setState({status: <span className="text-danger">Out of Stock</span>});
         }
    
         if (prod.discount) {
            this.setState({price:  <span style={{textDecoration: "line-through"}}>Price: ₪{prod.price.toFixed(2)}</span>});
            this.setState({newPrice: <strong className="text-danger"><br/>Discount: ₪{(prod.price*(1-prod.discountPercentage)).toFixed(2)}</strong>});
         } 
    
         else {
            this.setState({price: <strong>Price: ₪{prod.price.toFixed(2)}</strong>});
            this.setState({newPrice: <span style={{display: "none"}}>.</span>});
         }
   }


   render(){

      if (this.state) {

         return(
            <main role="main" className="lead" style={{width: "95%", margin: "0 auto"}}>
               
               <br/><br/><br/><br/>

               <div>
                  <ol className="breadcrumb">
                     <li><a href="#">Store&nbsp;</a></li>
                           / <Link to="/store/products"><li className="active">&nbsp;Products</li></Link>
                  </ol>
               </div>

               <h1 className="mt-5">{this.state.arr.title}</h1>
   
               <div className="row">

                  <div className="col-sm">
                  
                     <br/><p>{this.state.arr.subtitle}</p><br/>
                     
                     <ul style={{paddingLeft: "20px"}}>
                        {this.state.arr.details.map(detail => <span><li>{detail}</li><br/></span>)}
                     </ul>

                  </div>
   
                  <div className="col-sm">
                     <img id="myImg" src={this.state.src} alt="Prod_Img"
                        onClick={() => window.open(this.state.src,'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1090px, height=550px, top=25px left=120px')}
                     />
                  </div>

                  <div className="col-sm">
                  {this.state.price}
                     {this.state.newPrice}
                     <br/><br/>
                     Ratings:&emsp;{ratingStars(this.state.arr.rating)}
                     <br/><br/>
                     {this.state.status}
                     <br/><br/>
                     Shipping:&emsp;<span className="text-success">Free Shipping</span>
                     <br/><br/>
                     Shipping To:&emsp;Worldwide
                     <br/><br/>
                     Arrives:&emsp;6-12 Working Days After Dispatch
                     <br/><br/>
                     Quantity:&emsp;<select><option>1</option><option>2</option><option>3</option></select>
                     <br/><br/>
                     {this.state.addNotify}
                     &emsp;
                     <button type="button" className="btn btn-outline-warning">
                        <span style={{fontSize: "1.25rem", fontWeight: "300"}}>Add to <i className="fas fa-star"></i></span>
                     </button>
                  </div>
   
               </div>
   
               <br/><br/>

               {this.state.arr.img.map((img, index) => <div className="gallery"><img src={img} alt={"Img"+(index+1)} onClick={this.updateImage}/></div>)}
               
               {/*https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements*/}
               <span className="d-block d-xl-none" style={{color: "white"}}>........................</span>
   
               <br/><br/><br/><br/><br/><br/><br/><br/><br/>
   
               <h3>Similar Products:</h3>
   
               <br/>

               {  products.map((prod,index) => {

                     if (prod.type == this.state.type && prod.alt != this.props.match.params.prodName) {
                        return (
                           <Link onClick={() => { this.setState({arr: prod, src: prod.img[0], type: prod.type}); this.setStatusPrice(prod) }} to={"/store/products/"+prod.alt}>
                              <div className="gallery">
                                 <img src={prod.img[0]} alt={"Other_"+index}/>
                                 <div className="desc">{prod.title}</div>
                              </div>
                           </Link>
                        );
                     }
                  })
               }
               
               <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
               
          </main>
         );
      }
      
      else {
         return <NotFound />;
      }
   }
}