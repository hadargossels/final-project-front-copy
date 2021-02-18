import React, { Component } from 'react';
import './Product.css';

const product = [
   {
      src: "/img/souffle1.jpg",
      price: 10,
      name: 'Pen1',
      id: 1,
      gallery1: "/img/souffle1.jpg",
      gallery2: "/img/souffle_2.jpg",
      gallery3: "/img/Souffle-Packaging.jpg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestiae exercitationem, ab itaque ad nisi repellendus eum corporis voluptates cupiditate aut, nostrum non fugit dolore numquam, dignissimos nemo nulla necessitatibus.",
      stock: "IN STOCK",
      rating: '4.5',
      raters: '150',
      related1: "/img/Craft-Glaze.jpg",
      related2: "/img/Craft-QuickieGlue.jpg",
      related3: "/img/GellyRoll-GoldSilverShadow.jpg"
   },
   {
      src: "/img/notebooks/noteb1.jpg",
      price: 15,
      name: 'Pencil1',
      id: 2,
      gallery1: "/img/notebooks/noteb1.jpg",
      gallery2: "/img/notebooks/noteb1.jpg",
      gallery3: "/img/notebooks/noteb1.jpg",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestiae exercitationem, ab itaque ad nisi repellendus eum corporis voluptates cupiditate aut, nostrum non fugit dolore numquam, dignissimos nemo nulla necessitatibus.",
      stock: "IN STOCK",
      rating: '3',
      raters: '150',
      related1: "/img/notebooks/noteb2.jpg",
      related2: "/img/notebooks/noteb3.jpg",
      related3: "/img/notebooks/noteb4.jpg"
   },
   {
      src: "/img/notebooks/noteb1.jpg",
      price: 6,
      id: 3,
      name: 'notebook1',
   },
   {
      src: "/img/notebooks/noteb2.jpg",
      // category: 'notebooks',
      brand: 'brandD',
      color: 'purple',
      price: 23,
      priceRange: "21-30",
      name: 'notebook2',
      id: 4
   },
   {
      src: "/img/notebooks/noteb3.jpg",
      // category: 'notebooks',
      brand: 'brandA',
      color: 'purple',
      price: 8,
      priceRange: "0-10",
      name: 'notebook3',
      id: 5
   },
   {
      src: "/img/notebooks/noteb4.jpg",
      // category: 'notebooks',
      brand: 'brandB',
      color: 'blue',
      price: 9,
      priceRange: "0-10",
      name: 'notebook4',
      id: 6
   },
   {
      src: "/img/notebooks/noteb5.jpg",
      // category: 'notebooks',
      brand: 'brandC',
      color: 'multi',
      price: 11,
      priceRange: "11-20",
      name: 'notebook5',
      id: 7
   },
   {
      src: "/img/notebooks/noteb6.jpg",
      // category: 'notebooks',
      brand: 'brandD',
      color: 'yellow',
      price: 7,
      priceRange: "0-10",
      name: 'notebook6',
      id: 8
   },
   {
      src: "/img/notebooks/noteb7.jpg",
      // category: 'notebooks',
      brand: 'brandA',
      color: 'red',
      price: 18,
      priceRange: "11-20",
      name: 'notebook7',
      id: 9
   },
   {
      src: "/img/notebooks/noteb8.jpg",
      // category: 'notebooks',
      brand: 'brandB',
      color: 'yellow',
      price: 14,
      priceRange: "11-20",
      name: 'notebook8',
      id: 10
   },
   {
      src: "/img/notebooks/noteb9.jpg",
      // category: 'notebooks',
      brand: 'brandC',
      color: 'yellow',
      price: 18,
      priceRange: "11-20",
      name: 'notebook9',
      id: 11
   },
   {
      src: "/img/notebooks/noteb10.jpg",
      price: 18,
      name: 'notebook10',
      id: 12
   }
]


class Product extends Component {
   constructor(props) {
      super(props);

      this.state = {
      product: product,
      i: 0,
      cart: JSON.parse(localStorage.getItem("cart")),
      addMsg: ""
    }
    this.findIndex = this.findIndex.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.findIndex();
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
      {this.setState({i:i})},100) 
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
      return (
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
      );
   }
}
export default Product;
