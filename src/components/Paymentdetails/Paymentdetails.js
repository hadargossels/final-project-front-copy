import React, { Component, useState } from 'react'
import Paypal from './Paypal';

export default class Paymentdetails extends Component {
  constructor(props){
    super(props)
    this.state={
      check:false,
      openCash:false,
      msgOfConfirm:"",
      order:"",
    }
  }
  componentDidMount(){
    localStorage.setItem("order","")
    localStorage.setItem("msgOfConfirm","")

  }
  updateOrder(){
   let order=localStorage.getItem("order")||"[]"
    this.setState("order",order)
    if(order=="correct"){
      return true
    }else return false
  }
  selectPay(e){
    if(e.id=="cash"){
      this.setState({openCash:true})
      this.setState({msgOfConfirm:""})
    }else if(e.id=="paypal"){
      this.setState({openCash:false})
      this.setState({msgOfConfirm:""})
    }
  }
  changeMsg(){
    this.setState({msgOfConfirm:Math.floor(Math.random()*1000000000+1000000000000000) })
    setTimeout(() => {
      this.setState({msgOfConfirm:"" })

    }, 10000);
  }
    render() {
     
      let order
      return (
            <div style={{width:"600px",margin:"4rem auto"}}>
              <img src="./images/payment.png" width="500rem" style={{margin:"2rem auto"}} />
              <h4 style={{marginTop:"2rem",textAlign:"center",color:"orangered",fontFamily:"monospace",fontSize:"24px"}}>Total:&nbsp;{localStorage.getItem("total")}&nbsp;<i style={{fontSize:"14px"}} className="fas fa-shekel-sign"></i></h4>
                <h1 style={{margin:"2rem 0",color:"slategrey"}}>Choose your payment method</h1>
                <div  style={{marginBottom:"2rem"}} className="form-check" >
                <input style={{fontSize:"17px"}} className="form-check-input"  onClick={(e)=>this.selectPay(e.target)} type="radio" name="flexRadioDefault" id="paypal"/>
                <label style={{fontSize:"22px"}} className="form-check-label" for="flexRadioDefault1">
                  Paypal <i className="fab fa-paypal"></i>/Credit Card <i className="fab fa-cc-visa"></i>&nbsp;<i className="fab fa-cc-mastercard"></i>
                </label>
                </div>
                <div className="form-check" style={{marginBottom:"2rem"}}>
                <input style={{fontSize:"17px"}} className="form-check-input" onClick={(e)=>this.selectPay(e.target)} type="radio" name="flexRadioDefault" id="cash" />
                <label style={{fontSize:"22px"}} className="form-check-label" for="flexRadioDefault2">
                 Cash&nbsp;<i className="fas fa-money-bill-wave"></i>
                </label>
                </div>
                
                
                 {(!this.state.openCash)?
                 <Paypal/>:
                 <button className="btn btn-success" style={{fontWeight:"bolder"}}  onClick={()=>this.changeMsg() }>Continue to receive the order confirmation</button>
                 
                } 
                {this.state.msgOfConfirm?<div style={{margin:"2rem 0",fontSize:"30px",fontFamily:"monospace"}}>your order confirmation number is:<br/><span style={{color:"red"}}>{this.state.msgOfConfirm}</span>  </div>:""}
              
                




               
            </div>
        )
    }
}
