

import React, { Component } from 'react'
import './ItemCart.css'

export default class ItemCart extends Component {


    constructor(props){
        super(props)

        this.state={

            item:this.props.el,
            totalItem:"",
            sumItems:"",
        }

    }
    
    componentDidMount(){
        this.calculateTotalItem()
    }

    quantity(e){

        let storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")
        let counter=this.state.item.count
        
        if(e.value=="+"){
            counter++
            for (const iterator of storage) {
                if(iterator.id==this.state.item.id){
                    iterator.count=counter
                }
            }
        }
        if(e.value=="-" && (counter>1)){
            counter--
            for (const iterator of storage) {
                if(iterator.id==this.state.item.id){
                    iterator.count=counter
                }
            }
        }


        let x=this.state.item
        x.count=counter
        localStorage.setItem("cartStorage",JSON.stringify(storage))
        this.setState({item:x})
        this.calculateTotalItem()
        this.props.calculator()
    }


    calculateTotalItem(){

        let tot=this.state.item.price*this.state.item.count

        this.setState({totalItem:tot})
    }


    render() {
        return (
            <div>
                
                <div className="itemCart">


                    <div class="row mb-4">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">

                                    <img class="img-fluid w-100" style={{maxHeight:"180px",maxWidth:"270px"}}
                                    src={this.props.el.img} alt="Sample"/>
                                    
                                </div>
                            </div>
                            <div class="col-md-7 col-lg-9 col-xl-9">
                                <div>
                                    <div class="d-flex justify-content-between">
                                    <div>
                                        <h4>{this.props.el.title}</h4>
                                        <h5 class="mb-2 text-muted text-uppercase ">₪{this.state.item.price} :מחיר</h5>
                                        <h5 class="mb-2 text-muted text-uppercase ">{this.state.item.size}</h5>
                                    </div>
                                    <div>
                                    <div class="btn-group mr-2" role="group" aria-label="First group" >
                                            <button type="button" class="btn btn-warning m-2 fs-4" value="-" onClick={(e)=>this.quantity(e.target)}>-</button>
                                            <div  class="zero m-2 fs-4 pt-2" >{this.state.item.count}</div>
                                            <button  type="button" class="btn btn-success m-2" value="+" onClick={(e)=>this.quantity(e.target)}>+</button>
                                        </div>
                                       
                                    </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        
                                        <button  type="button" class="btn btn-danger m-2" onClick={()=>this.props.removeItem(this.props.el)}><i class="fas fa-trash-alt mr-1"></i></button>
                                        
                                        <p class="m-3 fs-3"><span><strong>₪{this.state.totalItem}</strong></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mb-4"/>


                </div>
            </div>
        )
    }
}
