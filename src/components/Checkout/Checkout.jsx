import React, { Component } from 'react'
import './Checkout.css'
import myProducts from '../../prod.json'

let arrProd=JSON.parse(localStorage.getItem('products')) || [];

export default class Checkout extends Component {
    constructor(props){
        super(props)
    this.state={
        shippingOption:0,
        messageName:"",
        messageStreet:"",
        messageCity:"",
        messageHouseNum:""
    }

    // this.onValueChange = this.onValueChange.bind(this);

    this.shipmentRef=React.createRef();
    this.streetAddRef = React.createRef();
    this.fullNameRef = React.createRef();
    this.houseNumberRef = React.createRef();
    this.cityNameRef = React.createRef();
}
    onChangeValue(event) {

        this.setState({
            shippingOption: Number(event.target.value)
        });
    }
    priceCalculation(){
        let totalsum=0;
        for(let i=0;i<arrProd.length;i++)
            for(let j=0;j<myProducts.length;j++)
                if(arrProd[i].Image===myProducts[j].Image)
                    totalsum+=myProducts[j].Price*arrProd[i].Item
        return totalsum
    }
    placeOrder(e){
        let fullName=this.fullNameRef.current
        let houseNumber=this.houseNumberRef.current
        let cityName=this.cityNameRef.current
        let streetadd=this.streetAddRef.current

        let houseNum=new RegExp('^[0-9]{1,3}$','gm');
        let name=new RegExp('^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$','gm');
        let city=new RegExp('^[A-Z]{1}[a-z ]+$','gm');
        let street=new RegExp('^[A-Z]{1}[a-z ]+$','gm');

        if(name.test(fullName.value)){
            fullName.style.border="green 2px solid";
            this.setState({messageName:""});  
        }else
        {
            fullName.style.border="red 2px solid";
            this.setState({messageName:"The name should be as in your ID card"});    
        }
        if(street.test(streetadd.value)){
            streetadd.style.border="green 2px solid";
            this.setState({messageStreet:""});  
        }else
        {
            streetadd.style.border="red 2px solid";
            this.setState({messageStreet:"The street name should be as in your ID"});    
        }
            
        if(city.test(cityName.value)){
            cityName.style.border="green 2px solid";
            this.setState({messageCity:""});  
        }else
        {
            cityName.style.border="red 2px solid";
            this.setState({messageCity:"The city name should be as in your ID"});    
        }
        if(houseNum.test(houseNumber.value)){
            houseNumber.style.border="green 2px solid";
            this.setState({messageHouseNum:""});  
        }else
        {
            houseNumber.style.border="red 2px solid";
            this.setState({messageHouseNum:"The house number should contain up to 3 digits"});    
        }
        
    }

    
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9">
                        <br/>
                    <h2 className="text-center ">Enter your shipping address</h2>
                    <form >
                    <div className="formChk">
                        <label className="lbl">Country</label><br/>
                        <select className="form-select mb-3" style={{width:"400px"}} aria-label="Default select example">
                        <option >Israel</option>
                        <option value="1">China</option>
                        <option value="2">USA</option>
                        <option value="3">Spain</option>
                        <option value="4">Mexico</option>
                        <option value="5">Italy</option>
                    </select>
                        <label className="lbl" >Full Name *</label><br/>
                        <input type="text" className="inp" ref={this.fullNameRef}></input><br/>
                        <label className="lbl">Street address *</label><br/>
                        <input type="text" className="inp" ref={this.streetAddRef}></input><br/>
                        <label className="lbl">House number *</label><br/>
                        <input type="text" className="inp" ref={this.houseNumberRef}></input><br/>
                        <label className="lbl">City *</label><br/>
                        <input type="text" className="inp" ref={this.cityNameRef}></input><br/>
                        <label className="lbl">Postal code (optional)</label><br/>
                        <input type="text" className="inp"></input><br/>
                        <label className="lbl">Comments (optional)</label><br/>
                        <textarea className="txtArea" cols="47" rows="5"></textarea><br/>
                    </div>
                    <h2 className="text-center ">Enter your payment details</h2>
                    <div className="text-center"> The payment that was choosen is:</div>
                    <br/><input type="button" className="paymentBtn" value="Go to payment processor"></input>
                    
                </form>
                </div>
                <div className="col-3">

                <div className="orderDetails">
                <h4>Order details</h4>
                    <div>
                        {
                        arrProd.map((obj)=>{
                           
                            let results=myProducts.filter((prod)=>{
                                return prod.Image===obj.Image
                            })[0];
                            
                                return(
                                    
                                <div className="container border" key={`${results.Title}`}>
                                    <div className="row">
                                        <div className="col-5">
                                            <img className="popImg" src={results.Image} alt="..."/>
                                        </div>
                                        <div className="col-7">
                                            <div><b>{results.Title}</b></div><br/>
                                            <div className="text-start">{obj.Item} x ${results.Price}</div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                            }
                        </div>
                        <br/>
                        <div className="btn-group-vertical" onChange={(element)=>this.onChangeValue(element)}>
                            <p className="radioP">
                            <input type="radio" name="name" value="0" id="r1" required defaultChecked/>
                            <label htmlFor="r1">
                                <span className="radioButtonGraph"></span>
                                Pickup - free
                            </label>
                            </p>
                            <p className="radioP">
                            <input type="radio" name="name" value="3" id="r2" required/>
                            <label htmlFor="r2">
                                <span className="radioButtonGraph"></span>
                                Regular mailing - $3
                                
                            </label>
                            </p>
                            <p className="radioP">
                            <input type="radio" name="name" value="9" id="r3" required/>
                            <label htmlFor="r3">
                                <span className="radioButtonGraph"></span>
                                Registered mailing - $9
                            </label>
                            </p>
                            <p className="radioP">
                            <input type="radio" name="name" value="15" id="r4" required/>
                            <label htmlFor="r4">
                                <span className="radioButtonGraph"></span>
                                Home delivery - $15
                            </label>
                            </p>
                        </div>
                        
                        <br/><br/>
                        <p>Item(s) total: <span className="text-end">${this.priceCalculation()}</span></p>
                        <p>Shipping: <span className="text-end">${this.state.shippingOption}</span></p>
                        <p>Coupon:<span className="text-end">-$</span></p>
                        <hr/>
                        <p style={{fontWeight:"bold"}}>Total ({arrProd.length} items) <span className="text-end">${this.priceCalculation()+this.state.shippingOption}</span></p>
                        <button onClick={(element)=>this.placeOrder(element)} type="submit" id="checkoutBtn" style={{color:"white"}} data-bs-toggle="modal" data-bs-target="#exampleModal" >Place order</button>
               
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div>{this.state.messageName}</div>
                            <div>{this.state.messageStreet}</div>
                            <div>{this.state.messageHouseNum}</div>
                            <div>{this.state.messageCity}</div>
                            
                            <div>{(this.state.messageCity==="" &&
                                    this.state.messageStreet==="" &&
                                    this.state.messageHouseNum==="" &&
                                    this.state.messageCity===""
                                    )? (
                                "Thank you, you recieved an email with all order details"
                                   
                              ):(
                                "Please check again"
                                
                              )}
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            
                        </div>
                        </div>
                    </div>
                </div>
                        
                <br/>
                </div>
      
                </div>
            </div>
            </div>
            </div>
        )
    }
}
