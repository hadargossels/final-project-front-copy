import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


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
                <Link to={`/${this.props.productElement.url}`} style={{ textDecoration: 'none' }}>
                    <div className="card text-center">
                        <img className="card-img-top" src={this.props.productElement.images[0]} alt="Card image cap"></img>
                        <div className="card-body py-0 px-0">
                            <p className="card-title">{this.props.productElement.name}</p>
                            {this.displayPrice()}
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Product;