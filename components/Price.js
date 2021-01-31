import React, { Component } from 'react';

class Price extends Component{
    render(){
        let price = 60;
        let discount = true;

        if (discount ==true){
            return(
                <div className="text-start py-3">
                    <p className="h5">Price: 
                        <span className="text-danger h4 text-decoration-line-through m-2">{price.toFixed(2)}$</span>
                    </p> 
                    <span className="text-success h4">  Limited-time offer - {(price*0.7).toFixed(2)}$</span>
                </div>
            )
        }
        else{
            return(
                <div className="text-start py-3">
                    <p className="h5">Price: 
                        <span className="text-danger h3 m-2">{price.toFixed(2)}$</span>
                    </p> 
                </div>
            )
        }
    }
}

export default Price;