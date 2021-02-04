import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default class Items extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    openProduct(pro){
        console.log("open",pro)
        
                 
    }

    render() {
        let namItem=this.props.name
        console.log(namItem)
        let arr=[]
        let len=this.props.stars
        for(let i=0;i<len;i++){
            arr.push(<i className="fas fa-star" key={i}></i>)
        }
        return (
            <div>
                <div className="card border border-danger carditem" >
                            <Link to={`/product/${this.props.name}`} src={this.props.src} name={this.props.name}>
                                <img src={this.props.src} className="card-img-top"  onClick={(e)=>this.openProduct(this.props.src)}/>
                            </Link>
                            <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}<i className="fas fa-shekel-sign shekel"></i></p>
                            <p className="stars">
                                {
                                    arr
                                }
                            </p>
                            <button className="col btn btn-success btnAdd" type="button">
                                <i className="fas fa-cart-plus "></i>&thinsp;Add to cart
                            </button>
                            </div>
                            </div>
            </div>
        )
    }
}
