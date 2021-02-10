
import React, { Component } from 'react'
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

    render() {
        return (
            <div>
                <div className="myContainerCart">
                

                <div className="statusOrder">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 fs-3">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">עגלת קניות <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <span><i class="fas fa-chevron-left"></i></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">פרטי ההזמנה</a>
                        </li>
                        <li class="nav-item">
                            <span><i class="fas fa-chevron-left"></i></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">הזמנה הושלמה</a>
                        </li>
                        </ul>
                      
                    </div>
                    </nav>

                </div>


                <div className="myRowCart">
                                        
                    <div className="productList">
                        <hr class="mb-4"/>
                        {this.state.arrItems.map((el,key)=>(
                                    <div className="itemOfCart" key={key}><ItemCart  el={el} removeItem={this.removeItem} calculator={this.calculator}/></div>
                                ))}
                    </div>


                    <div className="orderSummary">
                         <hr class="mb-4"/>
                         <div class="card-body">

                            <h5 class="mb-3">סה"כ בסל הקניות</h5>

                            <ul class="list-group list-group-flush p-0" >
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                סכום ביניים
                                <span>{this.state.temporaryAmount}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                משלוח
                                <span>{this.state.shipping}₪</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                בקנייה מעל 400 ש"ח משלוח חינם
                                <span></span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>סה"כ לתשלום</strong>
                                    <strong>
                                    <p class="mb-0">(כולל מע"מ)</p>
                                    </strong>
                                </div>
                                <span><strong>{this.state.total}₪</strong></span>
                                </li>
                            </ul>

                            <button type="button" class="btn btn-primary btn-block waves-effect waves-light mb-4">מעבר לתשלום</button>

                                <div class=" mb-3">
                                    <div class="card-body"><h5 class="mb-3">הוספת קופון</h5>
                                        
                                            <input type="text" id="discount-code1" class="form-control font-weight-light" placeholder=" הכנס קופון"/>
                                            <button type="button" class="btn btn-secondary btn-block waves-effect waves-light mb-4 mt-3">החלת קופון </button>
                                    </div>
                                </div>
                            </div>
                    
                    </div>
                </div>

                </div>
            </div>
        )
    }
}
