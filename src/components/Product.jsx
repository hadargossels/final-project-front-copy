import React, { Component} from 'react';
// import image1 from '../img/sheets1.png';

class Product extends Component {
    displayPrice = () => {
        if(this.props.productElement.discount !== 0){
            return (<div>
                        <p className="card-text mx-0 my-0">{this.props.productElement.discount * 100}% OFF </p>
                        <p><del>${this.props.productElement.price}</del>&ensp; 
                            ${this.props.productElement.price * (1 - this.props.productElement.discount)}
                        </p>
                    </div>)
        }
        else{
            return <p>${this.props.productElement.price}</p>
        }
    }

    render() {
        return (
            <div className="col-xs-6 col-md-3">
                <div className="card text-center">
                    <img className="card-img-top" src={this.props.productElement.images[0]} alt="Card image cap"></img>
                    <div className="card-body py-0 px-0">
                        <p className="card-title">{this.props.productElement.name}</p>
                        <p className="card-text">{this.displayPrice()}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;

{/* <div className="col-6 col-md-3">
                <div className="card text-center" style={{width: "18rem"}}>
                    <img className="card-img-top mx-auto" src={this.props.productElement.images[0]} alt="Card image cap" style={{height: "100%", width: "70%"}}></img>
                    <div className="card-body py-0 px-0 mt-0" style={{height: "80px"}}>
                        <p className="card-title mx-0 my-0">{this.props.productElement.name}</p>
                        <p className="card-text mx-0 my-0">{this.displayPrice()}</p>
                    </div>
                </div>
            </div> */}