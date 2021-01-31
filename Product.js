import React, { Component } from 'react';


class Product extends Component {
   render() {
      return (
         <div className='prodCont'>
            <div className='prodImg'>
               <div className='mainImg'>
                  <img src="img\souffle1.jpg" alt="product"/>
               </div>
               <div className="gallery">
                  <img src="img\souffle1.jpg" alt="product"/>
                  <img src="img\souffle_2.jpg" alt="product"/>
                  <img src="img\Souffle-Packaging.jpg" alt="product"/>
               </div>
            </div>

            <div className="prodDec">
               <span className="headline">Product</span><br/>
               <span className="rating">4.8/5 150 Ratings</span><br/><br/>
               <span className="price">Price: 12$</span><br/><br/>
               <span className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id molestiae exercitationem, ab itaque ad nisi repellendus
               eum corporis voluptates cupiditate aut, nostrum non fugit dolore numquam, dignissimos nemo nulla necessitatibus.</span><br/><br/>
               <span className='stock'>IN STOCK</span><br/><br/>
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
                  <button className='addcart'>ADD TO CART</button>
               </div><br/><br/>
               <span>RELATED ITEMS</span>
               <div className='related'>
                  <img src="img\Craft-Glaze.jpg" alt="product"/>
                  <img src="img\Craft-QuickieGlue.jpg" alt="product"/>
                  <img src="img\GellyRoll-GoldSilverShadow.jpg" alt="product"/>
               </div>
            </div>
         </div>
      );
   }
}
export default Product;
