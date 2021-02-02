import React, { Component } from 'react'

export default class Items extends Component {
    render() {
        let arr=[]
        let len=this.props.stars
            for(let i=0;i<len;i++){
                arr.push(<i className="fas fa-star" key={i}></i>)
            }
        return (
            <div>
                <div className="card border border-danger carditem" >
                            <img src={this.props.src} className="card-img-top"/>
                            <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.price}<i className="fas fa-shekel-sign"></i></p>
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
