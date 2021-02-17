import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './CartButton.css'

export default class CartButton extends Component {
    constructor(props){
        super(props)
        this.state = {msg:'', buyNow:false}
    }

    updateCart(){
        let productsArr = JSON.parse(localStorage.getItem("productsArr"))
        if (!productsArr){
            productsArr = [{id:this.props.id,count:1}]
        }
        else{
            let dup = false
            for (let obj of productsArr){
                if (obj.id === this.props.id){
                    obj.count += 1;
                    dup = true;
                }
            }
            if (!dup){
                productsArr.push({id:this.props.id,count:1})
            }
        }
        localStorage.setItem("productsArr", JSON.stringify(productsArr))
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
        let classes = "mt-2 btn btn-outline-primary m-0"
        let txt = <i className="fas fa-shopping-cart"></i>

        if (this.props.page === "product"){
            classes = "btn btn-outline-danger cartBtn"
            txt="Add to Cart"
        }
        else if (this.props.page === "quickview"){
            classes = "btn btn-lg btn-outline-primary w-100"
        }
        else if (this.props.page === "buyNow"){
            classes = "btn btn-danger mt-3 mb-0 btn-lg productBtn"
            txt = "Buy Now!"
        }

        return (
            <div>
                {this.state.buyNow ? <Redirect to="/cart"/>:""}
                <p className="text-success">{this.state.msg}</p>
                <button onClick={()=>this.updateCart()} className={classes} type="button">
                    {txt}
                </button>
            </div>
        )
    }
}
