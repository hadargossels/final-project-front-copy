import React, { Component } from 'react'

export default class CartButton extends Component {
    constructor(props){
        super(props)
        this.state = {msg:''}
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
        this.setState({msg:"added to cart!"})
        setTimeout(() => {
            this.setState({msg:""})
        }, 2000);
    }

    render() {
        let classes, txt
        if (this.props.page === "product"){
            classes = "btn btn-outline-danger"
            txt="Add to Cart"
        }
        else{
            classes = "mt-2 btn btn-outline-primary m-0"
            txt= <i className="fas fa-shopping-cart"></i>
        }
        return (
            <div>
                <p className="text-success">{this.state.msg}</p>
                <button onClick={()=>this.updateCart()} className={classes} type="button">
                    {txt}
                </button>
            </div>
        )
    }
}
