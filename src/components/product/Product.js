import React, { Component } from 'react';
import './Product.css';
import axios from 'axios'

class Product extends Component {
   constructor(props) {
      super(props);

      this.state = {
      product: [],
      i: 0,
      cart: JSON.parse(localStorage.getItem("cart")),
      addMsg: ""
    }
    this.findIndex = this.findIndex.bind(this);
    this.addToCart = this.addToCart.bind(this);
   this.findIndex()
   
      }


      componentDidMount () {
         this.getProduct();
      }


      
      async getProduct() {
      try {
         const response = await axios.get('http://localhost:3000/product');
         console.log("response from db",response.data);
         this.setState({product: response.data}, () => {
            this.findIndex()
            console.log("data from db",this.state.product)
         });
         
         
      } catch (error) {
         console.error(error);
      }
      }

   addMsg () {
      setTimeout(()=>{this.setState({addMsg: "Item added to cart"})},5)
      setTimeout(()=>{this.setState({addMsg: ""})},10000)
      }

   findIndex () {
      let i = 0;
      for (const element of this.state.product) {
         if (this.props.match.params.productid == element.id)
         {i = element.id - 1; }
      }
      setTimeout(()=>
      {this.setState({i}); console.log(this.state.i)},5) 
   }

   addToCart (e) {
      let itemId = e.target.id
      let quantity = e.target.previousElementSibling.value
      console.log(this.state.cart)
      let cart = [];
      if (this.state.cart !== null) {
        cart = [...this.state.cart]
      }
      let src = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].src
      src = src.substring(21)
      let name = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[0].innerText
      let price = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[5].innerText
      price = price.substring(7, price.length-1)
      let flag = true
      if (cart.length > 0){
         for (const element of cart) {
            if (element.itemId === itemId) {
               flag = false
               let elQu = element.quantity
               elQu = parseInt(elQu)
               elQu = elQu + parseInt(quantity)
               element.quantity = elQu
            }
         }
      }
      if (flag == true) {
         let cartObj = {itemId: itemId, quantity: quantity, src: src, name: name, price: price}
         cart.push(cartObj)
      }
      
      
      setTimeout(()=>{this.setState({cart})
      localStorage.setItem("cart",JSON.stringify(cart));
      this.addMsg()
   },5)
    }
   
   
   render() {
      return (this.state.product[this.state.i]) ? (
         <div className='prodCont'>
         <div className='prodImg'>
            <div className='mainImg'>
               <img src={this.state.product[this.state.i].src} alt="product" />
            </div>
            <div className="gallery">
               <img src={this.state.product[this.state.i].gallery1} alt="product" />
               <img src={this.state.product[this.state.i].gallery2} alt="product" />
               <img src={this.state.product[this.state.i].gallery3} alt="product" />
            </div>
         </div>

         <div className="prodDec">
            <span className="headline">{this.state.product[this.state.i].name}</span><br />
            <span className="rating">{this.state.product[this.state.i].rating}/5 {this.state.product[this.state.i].raters} Ratings</span><br /><br />
            <span className="price">Price: {this.state.product[this.state.i].price}$</span><br /><br />
            <span className="description">{this.state.product[this.state.i].description}</span><br /><br />
            <span className='stock'>{this.state.product[this.state.i].stock}</span><br /><br />
            <div className='buy'>
               <select className='qt'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
               </select>
               <button className='addcart' onClick={this.addToCart} id={this.state.product[this.state.i].id}>ADD TO CART</button>
            </div><br />
            <span className='addMsg'>{this.state.addMsg}</span><br />
            <span>RELATED ITEMS</span>
            <div className='related'>
               <img src={this.state.product[this.state.i].related1} alt="product" />
               <img src={this.state.product[this.state.i].related2} alt="product" />
               <img src={this.state.product[this.state.i].related3} alt="product" />
            </div>
         </div>
      </div>
      ) : (<div>Loading...</div>)
   }
}
export default Product;
