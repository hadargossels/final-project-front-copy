import React, { Component } from 'react';
class Price extends Component{
    constructor(props){
        super(props);
        this.price = this.props.price
        this.discount = this.props.discount
    }
    render(){
        if (this.discount){
            return(
                <div className="text-start py-3">
                    <p className="h5">Price: 
                        <span className="text-danger h4 text-decoration-line-through m-2">{this.price.toFixed(2)}$</span>
                    </p> 
                    <span className="text-success h4">  Limited-time offer - {this.discount.toFixed(2)}$</span>
                </div>
            )
        }
        else{
            return(
                <div className="text-start py-3">
                    <p className="h5">Price: 
                        <span className="text-danger h3 m-2">{this.price.toFixed(2)}$</span>
                    </p> 
                </div>
            )
        }
    }
}

export default Price;