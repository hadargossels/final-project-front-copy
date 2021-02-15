import React,{useState} from 'react'
import './CartDropdown.css';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';


export default function CartDropdown(props) {
  
        const allCartItems = props.cartArrDropdown.map(item=>{return(
        <div className="row" style={{fontSize:"20px"}} key={item.id}>
            <div className="col-lg-4 col-sm-4 col-4 cart-detail-img">
                <img src={item.img} />
            </div>
            <div className="col-lg-8 col-sm-8 col-8 cart-detail-product">
                <p> {item.title}&nbsp;&nbsp;&nbsp;
                    <span className="price text-info" style={{fontSize:"20px"}}>{item.price}$</span>
                </p>
            </div>    
        </div>
        )})
       
    
    return (
	<div className="dropdown">
		<button type="button" style={{border:"none",marginLeft:"10px",fontSize:"20px",background:"var( --mainBlue)"}} data-toggle="dropdown">
			<span style={{color:"white"}}>
                <i className="fas fa-cart-plus"/>
                    Item: 
                <ProductConsumer>
                    {value=>{ return(" "+ value.cart.length )}}
                </ProductConsumer>
            </span>
        </button>
		<div className="dropdown-menu">
			<div className="row total-header-section">
			    <div className="col-lg-6 col-sm-6 col-6 " >
                    <Link to='/cart'>
                        <span style={{color:"black"}}>Go To Cart </span>
                        <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                    </Link>
                    <span className="badge badge-pill badge-danger">3</span>
			    </div>
                <div className="col-lg-6 col-sm-6 col-6 total-section text-right">
                    <p>Total Price: 
                        <ProductConsumer>
                            {value=>{ return( " "+ value.cartSubTotal+" $")}}
                        </ProductConsumer>
                    </p>
                </div>
            </div>  
            <div className="row cart-detail">                   
                {allCartItems}
            </div> 
         <div className="row">
				<div className="col-lg-12 col-sm-12 col-12 text-center checkout">
                    <Link to='/checkout'>
				    <button className="btn btn-primary btn-block">Checkout</button>
                    </Link>
				</div>
			</div>

                       
			
		</div>
	</div>

    )
}
