import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';
import QuickView from '../QuickView/QuickView';
import './product.css';

let raandom=(Math.floor(Math.random()*100))+""
class Product extends Component{
   
    constructor(props){
       super(props);
       this.state={
        quickviewBtn:"hideBtn",
         imgSrc:props.data.imgSrc,
        headerProduct:props.data.headerProduct,
        brandProduct:props.data.brandProduct,
        priceProduct:props.data.priceProduct,
        discountProduct:props.data.discountProduct
       }
       this.showQuickView=this.showQuickView.bind(this);
      
    }

    showQuickView(classBtn){
        this.setState({quickviewBtn:classBtn})
    }
   
    render(){
      
       return(
         <div onMouseEnter={()=>this.showQuickView("showBtn")} onMouseLeave={()=>this.showQuickView("hideBtn")} className="divMainProduct col-3">
            <NavLink  className="linkStyle " to={`/product/${this.props.data.headerProduct.replace(" ","-")}`}>
                <div  className="divProduct">
                    <i className="far fa-heart loveIcon"></i>
                    <img  src={this.props.data.imgSrc[0]}/>
                    <br/>
                    <a id="headerProduct" src="">{this.props.data.headerProduct}</a>
                    <div id="brandDiv">{this.props.data.brandProduct}</div>
                    <div className="divPrice"><span className={`priceOfProduct ${this.props.data.discountProduct=="none"?"":"decoration"}`}>{this.props.data.priceProduct}</span><span className={`discountOfProduct ${this.props.data.discountProduct!="none"?"":"discNoDisplay"}`}>  {this.props.data.discountProduct}</span></div>      
                   
                </div>
                </NavLink>
                {/* <button type="button" className={`btn btn-primary quickBtn ${this.state.quickviewBtn}`} data-toggle="modal" data-target="#exampleModalCenter">Quick view</button>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <QuickView data={this.props.data}/>
                            </div>
                        </div>
                    </div>
                </div> */}
                
              
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${this.props.data.macatProduct}`}>
  Launch demo modal
</button>

<div class="modal fade modalll" id={this.props.data.macatProduct} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id={this.props.data.macatProduct}>Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
            </div>
        
       );
    }
}
 export default Product;