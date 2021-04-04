
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Auth from './auth'

import './Cart.css'
import ItemCart from './ItemCart';


export default class Cart extends Component {

    constructor(props){
        super(props)

        this.state={

            arrItems:[],
            temporaryAmount:"",
            shipping:"",
            total:"",
        }

        this.removeItem=this.removeItem.bind(this)
        this.calculator=this.calculator.bind(this)
        this.removeAll=this.removeAll.bind(this)

    }

    componentDidMount(){
        this.loadItemsFromLocalStorage()
        this.calculator()
    }

    loadItemsFromLocalStorage(){

        const storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")
        this.setState({arrItems:storage})

    }

    removeItem(e){

        const storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")
        let newStorage=[]

        newStorage=storage.filter((item)=>{
            return (e.id !== item.id || e.size !== item.size)
         })
         localStorage.setItem("cartStorage",JSON.stringify(newStorage))
         this.setState({arrItems:newStorage})
         this.calculator()
         this.props.updatItemsFromLocalStorage()

    }

    calculator(){

        let ship
        let sumOfItem=0
        let storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")
        for (const iterator of storage) {
            sumOfItem+=iterator.count*iterator.price
        }

        this.setState({temporaryAmount:sumOfItem})

        if(sumOfItem>=400){
            this.setState({shipping: "--"})
            this.setState({total:sumOfItem})
        }else{
            ship=20
            this.setState({shipping:ship})
            this.setState({total:(sumOfItem+ship)})
        }
            
    }
    removeAll(){

        localStorage.removeItem("cartStorage")
        this.setState({arrItems:[]})
        this.calculator()
        this.props.updatItemsFromLocalStorage()
    }



    render() {

        return (
            <div>
                <div className="myContainerCart">
                

                    <div className="statusOrder">

                    <div className="container p-0">
                            <div className="card">
                            
                                <div className="card-body">
                                    <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                                    <div className="step completed m-0">
                                        <div className="step-icon-wrap">
                                        <div className="step-icon "><i className="pe-7s-cart "></i></div>
                                        </div>
                                        <h4 className="step-title fs-5">עגלת קניות</h4>
                                    </div>
                                    <div className="step m-0">
                                        <div className="step-icon-wrap">
                                        <div className="step-icon"><i className="pe-7s-config"></i></div>
                                        </div>
                                        <h4 className="step-title fs-5">פרטי ההזמנה</h4>
                                    </div>
                                    <div className="step m-0">
                                        <div className="step-icon-wrap">
                                        <div className="step-icon"><i className="pe-7s-medal"></i></div>
                                        </div>
                                        <h4 className="step-title fs-5">ההזמנה הושלמה</h4>
                                    </div>
                                
                                    </div>
                                </div>
                            </div>
                    </div>

                    </div>

                    <div className="btnRow">

                        <NavLink to="/Catalog" ><button type="button" style={{backgroundColor:"rgb(155,23,80)"}}> <b>חזרה לחנות</b></button></NavLink>
                    <button type="button" onClick={this.removeAll} style={{backgroundColor:"rgb(93,0,29)"}}> <b>רוקן את העגלה</b></button>

                    </div>


                    <div className="myRowCart">
                                            
                        <div className="productList">
                            <hr className="mb-4"/>
                            {this.state.arrItems.map((el,key)=>(
                                        <div className="itemOfCart" key={key}><ItemCart  el={el} removeItem={this.removeItem} calculator={this.calculator} /></div>
                                    ))}
                            {!this.state.arrItems[0] && <div className="emptyCart"><h3> העגלה ריקה  ☹️ </h3></div>}
                        </div>

                        
                        <div className="orderSummary">
                            <hr className="mb-4"/>
                            <div className="card-body" >

                                <h5 className="mb-3">סה"כ בסל הקניות</h5>

                                <ul className="list-group list-group-flush p-0 fs-4" >
                                    <li className=" d-flex justify-content-between align-items-center px-0 pb-0 ">
                                        סכום ביניים
                                        <span>{this.state.temporaryAmount}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center px-0">
                                        משלוח
                                        <span>{this.state.shipping}₪</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center px-0">
                                        בקנייה מעל 400 ש"ח משלוח חינם
                                        <span></span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>סה"כ לתשלום</strong>
                                        <strong>
                                        <p className="mb-0">(כולל מע"מ)</p>
                                        </strong>
                                    </div>
                                    <span><strong>{this.state.total}₪</strong></span>
                                    </li>
                                </ul>

                                {this.state.temporaryAmount ? 
                                    <button type="button" className="btn btn-primary btn-block waves-effect waves-light mb-4" onClick={() => { Auth.setProtectPath(() => {this.props.history.push("/checkout");},"cart")}}>מעבר לתשלום</button>:<div></div>}
                                

                            </div>
                        
                        </div>
                        
                    </div>

                </div>



            </div>
        )
    }
}
