import React, { Component } from 'react'
import './quickView.css'

export default class QuickView extends Component {
    constructor(props){
        super(props);
     }
  
     render(){
        return(
             <div className={`divQuickView row`}>
                 <img className="col-5" src={this.props.data.imgSrc[0]}/>
                 <div className="col-5">
                    <p id="headerQuickProduct">{this.props.data.headerProduct}</p>
                    <div id="brandQuickDiv">{this.props.data.brandProduct}</div>
                    <div className="divPrice"><span className={`priceOfProduct ${this.props.data.discountProduct=="none"?"":"decoration"}`}>{this.props.data.priceProduct}</span><span className={`discountOfProduct ${this.props.data.discountProduct!="none"?"":"discNoDisplay"}`}>  {this.props.data.discountProduct}</span></div> 
                    <button id="addToShoppingBtn">add to shopping cart</button>
                    <i className="far fa-heart loveIcon"></i>
              
                 </div>
            </div>
        
        );
     }
}
