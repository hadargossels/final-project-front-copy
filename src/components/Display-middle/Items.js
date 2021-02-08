import React, { Component } from "react";
import {

  Link, Route,
} from "react-router-dom";
import data from '../../data2'
import Product from "../Product/Product";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  openProduct() {
    window.location.reload(false);
  }
  sales(){
      if(this.props.sale){
         return "Sale: "+this.props.sale
      }else return ""
      
  }

  render() {
    let arr = [];
    let len = this.props.stars;
    for (let i = 0; i < 5; i++) {
      if (i < len) arr.push(<i className="fas fa-star" key={i}></i>);
      else arr.push(<i className="fas fa-star greystars" key={i}></i>);
    }
    let imgSubCategory
    if(this.props.subcategory){
    if(this.props.subcategory.toLowerCase()=="sales"){
        imgSubCategory="/images/sale.webp"
    }else if(this.props.subcategory.toLowerCase()=="featured product"){
        imgSubCategory="/images/feature.png"
    }else if(this.props.subcategory.toLowerCase()=="new"){
        imgSubCategory="/images/new.webp"
    }else if(this.props.subcategory.toLowerCase()=="best sellers"){
        imgSubCategory="/images/bastSeller.png"
    }
    

}
    return (
      <div>
        <div className="card border border-danger carditem">
          <Link
            to={`/product/${this.props.name}`}
            src={this.props.src}
            alt={this.props.name}
            name={this.props.name}
          >
              <img src={imgSubCategory} className="imgsubca"/>
            <img
              src={this.props.src}
              className="card-img-top imgproduct"
              alt={this.props.name}
            //   onClick={(e) => this.openProduct(this.props.src)}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <button type="button" class="btn btn-primary Quickview" data-bs-toggle="modal" data-bs-target={`#exampleModal${this.props.id}`}><i class="fas fa-search"></i></button>
            <div class="modal fade hidePrevented.bs.modal" id={`exampleModal${this.props.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title titlequick" id="exampleModalLabel">{this.props.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="container">
                            <div className="row ">
                                <div className="col">
                                   <div className="textquick">{this.props.text}</div> 
                                    <div className="price">{this.props.price}<i className="fas fa-shekel-sign shekel"></i><br/>
                                    {this.sales()}                                    
                                    </div>
                                    <Link to={`/product/${this.props.name}`} openProduct={this.openProduct} type="button" class="btn btn-secondary" >Shop Now</Link>
                                   
                                </div>
                                <div className="col">
                                    <img className="imgQuickview" src={this.props.src}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <Link  class="btn btn-primary"></Link> */}
                    </div>
                    </div>
                </div>
                </div>
            <p className="card-text price">
              {this.props.price}<i className="fas fa-shekel-sign shekel"></i><br/>
                {this.sales()}
              
            </p>
            <p className="card-text pricesale">
              {/* {this.props.sale}
              <i className="fas fa-shekel-sign shekel"></i> */}
            </p>
            {/* <p className="card-text priceAfterSale">{(this.props.sale)? this.props.sale:""}<i className="fas fa-shekel-sign shekel"></p> */}
            <p className="stars">{arr}</p>
            <button className="col btn btn-success btnAdd" type="button">
              <i className="fas fa-cart-plus "></i>&thinsp;Add to
            </button>
          </div>
        </div>
      </div>
    );
  }
}
