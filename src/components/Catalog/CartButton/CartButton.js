import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {addToCart} from '../../../actions'

import './CartButton.css'

class CartButton extends Component {
    constructor(props){
        super(props)
        this.state = {msg:'', buyNow:false}
    }

    onAdd(id){
        this.props.addToCart(id)
        this.cartMsg()
    }

    cartMsg(){
        if (this.props.page !== "buyNow"){
            this.setState({msg:"added to cart!"})
            setTimeout(() => {
                this.setState({msg:""})
            }, 2000);
        }
        else
            this.setState({buyNow:true})
    }

    render() {
        let classes
        let txt = <i className="fas fa-shopping-cart"></i>
        switch (this.props.page){
            case "product":
                classes = "btn btn-outline-danger cartBtn"
                txt="Add to Cart"
                break;
            case "quickview":
                classes = "btn btn-lg btn-outline-primary w-100"
                break;
            case "buyNow":
                classes = "btn btn-danger mt-3 mb-0 btn-lg productBtn"
                txt = "Buy Now!"
                break;
            default:
                classes = "mt-2 btn btn-outline-primary m-0"
                break;
        }

        return (
            <div>
                {this.state.buyNow ? <Redirect to="/cart"/>:""}
                <p className="text-success">{this.state.msg}</p>
                <button onClick={()=>this.onAdd(this.props.id)} className={classes} type="button">
                    {txt}
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{addToCart})(CartButton)
