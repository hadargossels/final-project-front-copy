import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {applyDiscount, getDiscounts, emptyCart, getProducts, plusOne, minusOne, removeFromCart} from '../../actions'
import './CartTable.css'
import Spinner from '../Spinner/Spinner'

class CartTable extends Component {
    constructor(){
        super()
        this.discountRef = React.createRef();
    }
    componentDidMount(){
        this.props.getProducts()
    }
    async clickDiscount(e){
        e.preventDefault()
        await this.props.getDiscounts()
        this.props.applyDiscount(this.discountRef.current.value.toLowerCase())
        this.discountRef.current.value=""

    }
    onEmpty()
    {this.props.emptyCart()}

    plusOne(id)
    {this.props.plusOne(id)}

    minusOne(id)
    {this.props.minusOne(id)}
    
    onRemove(id)
    {this.props.removeFromCart(id)}
        
    render() {
        let priceOfAll = 0;
        return (
            <div className="container mb-5">
                {!(this.props.chosenProducts && this.props.allProducts)?
                    <div><Spinner/></div> :
                    <div>
                        <table className="table table-hover my-3">
                            <thead>
                                <tr>
                                    <th style={{width:"131px"}} className="smallImg">Item</th>
                                    <th></th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th className="smallImg">Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.chosenProducts.map((product,key)=>{
                                    if (key === 0){
                                        priceOfAll = 0
                                    }
                                    for (let obj of this.props.allProducts){
                                        if (obj.id === product.id){
                                            let finalPrice = (obj.discount || obj.price).toFixed(2)
                                            let totalPrice = (finalPrice * product.count).toFixed(2)
                                            priceOfAll+= Number(totalPrice)
                                            
                                            return(
                                                <tr key={key}>
                                                    <td className="smallImg">
                                                        <img src= {process.env.REACT_APP_SERVER +obj.images.filter(obj=>obj.includes("small"))[0]}
                                                            className="img-fluid" alt=""/></td>
                                                    <td className="text-start">{obj.name}</td>
                                                    <td className="text-start">${finalPrice}</td>
                                                    <td >
                                                        <div className="d-flex flex-wrap">
                                                            <input type="button" className={`btn btn-danger btn-sm minus ${this.props.page}`} value="-" onClick={()=>this.minusOne(obj.id)}/>
                                                            <span className="text-center px-1">{product.count}</span>
                                                            <input type="button" className={`btn btn-success btn-sm ${this.props.page}`} value="+" onClick={()=>this.plusOne(obj.id)}/>
                                                        </div>
                                                    </td>
                                                    <td className="smallImg text-start">${totalPrice}</td>
                                                    <td><i type="button" onClick={()=>this.onRemove(obj.id)} className="far fa-trash-alt text-danger"></i></td>
                                                </tr>
                                            )
                                        }
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>
                        <button className={` ${this.props.page} btn btn-danger`} onClick={()=>this.onEmpty()}>Empty Cart</button>
                        <div className="my-2">
                            <h3 className={`${this.props.page} ps-1 bg-primary py-1 text-light`}>Summary</h3>
                            <table className="table table-hover my-3">
                                <tbody>
                                    <tr className={this.props.discount ? "text-danger" : "noDiscount"}>
                                        <th>Total (before discount)</th>
                                        <td>${priceOfAll.toFixed(2)}</td>
                                    </tr>          
                                    <tr className={this.props.discount ? "text-success" : "noDiscount"}>
                                        <th>Coupon Applied - You've saved</th>
                                        <td>-${(priceOfAll*(this.props.discount?(1-this.props.discount):1)).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>Total Before Shipping</th>
                                        <td>${(priceOfAll*(this.props.discount || 1)).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={this.props.page}>
                                <h6>Apply Discount Code</h6>
                                <form onSubmit={(e)=>this.clickDiscount(e)}>
                                    <input className="me-1" ref={this.discountRef} type="text"/>
                                    <button className="btn btn-success">Apply Code</button>
                                </form>
                            </div>
                            <button className="float-end btn btn-lg btn-primary my-2"><Link to="/checkout" style={{textDecoration:"none",color:'white'}}>Proceed to Checkout</Link></button>
                        </div>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    discount: state.discount.discount,
    chosenProducts: state.products.chosenProducts,
    allProducts: state.products.allProducts
})

export default connect(mapStateToProps, {applyDiscount, getDiscounts, emptyCart , getProducts, plusOne, minusOne, removeFromCart})(CartTable)