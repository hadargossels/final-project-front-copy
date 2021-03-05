import React, { Component } from 'react'
import {ProductConsumer} from '../context/context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../additionsComp/Button';
import {db} from '../../firebase'
import {Spinner} from '../additionsComp/Spinner'
export default class Details extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: null
        }
    }

    componentDidMount(){
        const tempId = this.props.match.params.id;
        if(tempId){

            db.ref('storeProducts').on('value', (snapshot)=>{
                let arr = [];
                for (let obj in snapshot.val()) {
                    arr.push(snapshot.val()[obj])
                }
                for(let i=0;i<arr.length;i++){
                    if(arr[i].id===tempId){
                        this.setState({
                            product:arr[i]
                        }) 
                    }
                }
                
            
            })
        }

    }
    render() {
        return (this.state.product) ? (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart}=
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
                                            value.addToCart(id);
                                            value.openModal(id);

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
