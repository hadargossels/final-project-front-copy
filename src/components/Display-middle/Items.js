import React, { Component } from "react";
import {

  Link, Route,
} from "react-router-dom";
import data from '../../data2'
import Cart from "../Cart/Cart";
import Header from "../header/Header";
import Product from "../Product/Product";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item:this.props.name,
    };
  }

  openProduct=()=> {
    window.location.reload(false);
  }
  sales(){
      if(this.props.sale){
         return "Sale: "+this.props.sale
      }else return ""
      
  }
  sendId(){
    let storge = JSON.parse(localStorage.getItem("counters") || "[]");
    
      let name = this.props.name
     let product=data.filter(item=>item.name===name)
     
      product=product[0]
      let found =storge.filter(item=>item.name===name)
      if(found.length!==0){
        this.props.msgIsInCart()
        return
      } 
      let aa=[...storge]
      aa.push({id:product.id,value:1,name:product.name,price:product.price,src:product.src})
      localStorage.setItem("counters", JSON.stringify(aa));
      this.props.changeMsg()
      // {<Header msg={this.changeMsg}/>}
      // let msg=document.querySelector("#message")
      // msg.style.display=""
      // setTimeout(()=>{
      //   msg.style.display="none" 
      // },10000)

      // window.location.reload(false);

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
            <button type="button" className="btn btn Quickview" data-bs-toggle="modal" data-bs-target={`#exampleModal${this.props.id}`}><i className="fas fa-search"></i></button>
            <div className="modal fade hidePrevented.bs.modal" id={`exampleModal${this.props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title titlequick" id="exampleModalLabel">{this.props.name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row ">
                                <div className="col">
                                   <div className="textquick">{this.props.text}</div> 
                                    <div className="price">{this.props.price}<i className="fas fa-shekel-sign shekel"></i><br/>
                                    {this.sales()}                                    
                                    </div>
                                    {/* <Link to={`/product/${this.props.name}`} openProduct={this.openProduct} type="button" className="btn btn-secondary" >Shop Now</Link> */}
                                   
                                </div>
                                <div className="col">
                                    <img className="imgQuickview" src={this.props.src}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <Link  className="btn btn-primary"></Link> */}
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
            <Link  ><button className="col btn btn-success btnAdd" type="button"  onClick={(e)=>this.sendId()}>
              <i className="fas fa-cart-plus "></i>&thinsp;Add to
            </button></Link>
            {/* <div style={{display:"none"}}></div> */}
          </div>
        </div>
      </div>
    );
  }
}
