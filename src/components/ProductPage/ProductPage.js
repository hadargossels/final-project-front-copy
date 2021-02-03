import React, { Component } from 'react';
import './productPage.css';

class ProductPage extends Component{
   
   constructor(props){
      super(props);
      this.state={
         span1:"lessDiv",
         span2:"lessDiv",
         span3:"lessDiv",
         imgUrlDisplay:"data:image/jpeg;base64,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",
         amountInput:0,

      }
      this.changeUrlDisplay=this.changeUrlDisplay.bind(this);
      this.amountChanged=this.amountChanged.bind(this);
   }
   changeUrlDisplay(srcD){
      this.setState({imgUrlDisplay:srcD})
   }

   amountChanged(value){
      this.setState({amountInput:value})
   }

   toggleMoreDiv(e){
      let spanName=e.target.id;
      let classToggle=(this.state[spanName]=="lessDiv")?"moreDiv":"lessDiv";
      this.setState({[spanName]:classToggle})
   }

   render(){
      let headerProduct;
      return(
         <div className="ProductDiv">
            <div className="detailsProduct">
               <h2>header Product</h2>
               <div>macat</div>
               <div>brand</div>
               <br/>
               <div>explanation of product</div>
               <div id="categoryProduct">category</div>
               <br/>
               <div>sold out/in stock</div>
               <div><span className="priceProduct">price</span><span className="discountProduct">  discount</span></div>
               <input onChange={(e)=>this.amountChanged(e.target.value)} id="amountProduct" type="number" name="amount" value={this.state.amountInput} min="0"/>
               <button id="addToShoppingBtn">add to shopping cart</button>
               <span onClick="changeLove(e)"><i className="far fa-heart loveIcon"></i></span>
               <hr/>
               <div><b>more information</b><span id="span1" onClick={this.toggleMoreDiv.bind(this)} className="moreSpan">+</span><br/>
                  <div className={this.state.span1}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. A omnis vitae eos possimus delectus tempore. Quas veniam, distinctio facere modi culpa recusandae aliquid consequatur? Atque recusandae perferendis ipsum facere hic.
                  </div>
               </div>
               <hr/>
               <div><b>Shipments and returns</b><span id="span2" onClick={this.toggleMoreDiv.bind(this)} className="moreSpan">+</span><br/>
                  <div className={this.state.span2}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. A omnis vitae eos possimus delectus tempore. Quas veniam, distinctio facere modi culpa recusandae aliquid consequatur? Atque recusandae perferendis ipsum facere hic.
                  </div>
               </div>
               <hr/>
               <div><b>similar product</b><span id="span3" onClick={this.toggleMoreDiv.bind(this)} className="moreSpan">+</span><br/>
                  <div className={this.state.span3}>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. A omnis vitae eos possimus delectus tempore. Quas veniam, distinctio facere modi culpa recusandae aliquid consequatur? Atque recusandae perferendis ipsum facere hic.
                  </div>
               </div>
            </div>
            <div className="imagesProduct">
               <div className="imageProductDisplay">
                  <img src={this.state.imgUrlDisplay}></img>
               </div>
               <ul className="galleryProduct">
                  <li onClick={(e)=>this.changeUrlDisplay(e.target.src)}><img src="data:image/jpeg;base64,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"></img></li>
                  <li onClick={(e)=>this.changeUrlDisplay(e.target.src)}><img src="https://fashionforward.mako.co.il/wp-content/uploads/2017/11/DFSF-e1510145660360.png"></img></li>
               </ul>
             
               
            </div>
         </div>
            
      );
   }
}
export default ProductPage;

{/* <i class="fas fa-heart"></i>   love full icon*/}