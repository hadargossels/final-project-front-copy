

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
    async componentDidUpdate(prevProps){
        
        if(prevProps !== this.props){
          await this.setState({item:this.props.el})
            this.calculateTotalItem()
        }
            
    }
    

    quantity(e){

        let storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")
        let counter=this.state.item.count
        
        if(e.value==="+"){
            counter++
            for (const iterator of storage) {
                if(iterator.id===this.state.item.id){
                    iterator.count=counter
                }
            }
        }
        if(e.value==="-" && (counter>1)){
            counter--
            for (const iterator of storage) {
                if(iterator.id===this.state.item.id){
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


                    <div className="row mb-4">
                            <div className="col-md-5 col-lg-3 col-xl-3">
                                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">

                                    <img className="img-fluid w-100" style={{maxHeight:"180px",maxWidth:"270px"}}
                                    src={this.props.el.img} alt="Sample"/>
                                    
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-9 col-xl-9">
                                <div>
                                    <div className="d-flex justify-content-between">
                                    <div>
                                        <h4>{this.props.el.title}</h4>
                                        <h5 className="mb-2 text-muted text-uppercase ">₪{this.state.item.price} :מחיר</h5>
                                        <h5 className="mb-2 text-muted text-uppercase ">{this.state.item.size}</h5>
                                    </div>
                                    <div>
                                        <div className="btn-group mr-2" role="group" aria-label="First group" >
                                            <button type="button" className="btn btn-warning mt-2 mb-2 fs-4" value="-" onClick={(e)=>this.quantity(e.target)}>-</button>
                                            <div  className="zero mt-2 mb-2 ps-3 pe-3 pt-2 fs-4 pt-2" style={{backgroundColor:"white"}}>{this.state.item.count}</div>
                                            <button  type="button" className="btn btn-success mt-2 mb-2" value="+" onClick={(e)=>this.quantity(e.target)}>+</button>
                                        </div>
                                       
                                    </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        
                                        <button  type="button" className="btn btn-danger m-2" onClick={()=>this.props.removeItem(this.props.el)}><i className="fas fa-trash-alt mr-1"></i></button>
                                        
                                        <p className="m-3 fs-3"><span><strong>₪{this.state.totalItem}</strong></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4"/>


                </div>
            </div>
        )
    }
}
