import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from '../../data2'
import "./Bestseller.css";

export default class Bestseller extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  sendId(){
    let storge = JSON.parse(localStorage.getItem("counters") || "[]");
    let id=this.props.id
     let product=data.filter(item=>{
     return item.id===id})
      product=product[0]
      let found =storge.filter(item=>item.id===id)
      if(found.length!==0){
        this.props.msgIsInCart()
        return
      } 
      let aa=[...storge]
      aa.push({id:product.id,value:1,name:product.name,price:product.price,src:product.src})
      localStorage.setItem("counters", JSON.stringify(aa));
      this.props.changeMsg()
  }
  
  render() {
    return (
      <div className="bestsellerdiv col-3 ">
        <div className="card border itemBest">
           <Link to={`/product/${this.props.name}`}>
            <img src={this.props.categoryimg} className="imgsub"/>
            <img
              src={this.props.src}
              className="card-img-top"
              alt={this.props.name}
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            {/* <p>{this.props.subcategory}</p> */}
            <p className="card-text">
              {this.props.price}
              <i className="fas fa-shekel-sign shekel"></i>
            </p>
            <button className="col btn btn-success btnAdd" name={this.props.name} type="button" onClick={(e)=>this.sendId()}>
              <i className="fas fa-cart-plus "></i>&thinsp;Add to
            </button>
          </div>
        </div>
      </div>
    );
  }
}
