import React, { Component } from 'react'
import {ProductConsumer} from '../context/context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../additionsComp/Button';
import {Spinner} from '../additionsComp/Spinner'
import axios from 'axios';

export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: null,
            error:null
        }
    }

    componentDidMount(){
        axios.get(`/api/product/${this.props.match.params.id}`).then((res)=>{
                this.setState({error:null,product:res.data})
            
        })

    }
    render() {
        return (this.state.product) ? (
            <ProductConsumer>
                {(value)=>{
                    const {_id,company,img,info,price,title,inCart}=
                    this.state.product
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center
                                text-slanted text-blue my-5">
                                    <h1>{title}</h1>

                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                
                                    <img src={img} className="img-fluid" alt="product" />
                                   
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase
                                    text-muted mt-3 mb-2">
                                        Made by: <span className="text-uppercase">{company}
                                        </span>  
                                    </h4>
                                    <h4 className="text-blue">
                                        price: <span>$</span>{price}
                                    </h4>
                                    <p className="text-capitalize font-weight-bold
                                    mt-3 mb-0"></p>
                                    <p className=" text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/shop">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                        cart
                                        disabled = {inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(_id);
                                            value.openModal(_id);

                                        }}>
                                            
                                            {inCart?"inCart":"add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                }}
            </ProductConsumer>
        ) : (<Spinner></Spinner>);
    }
}
