import PaypalButton from './PaypalButton'
import {ProductConsumer} from '../../context';
import "./checkout.css";
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import PayPal from "./PayPal";
import Title from '../Title'

let targetId="" ,shippingSelect;
let filldsArray=[];

    export default class Checkout extends  Component{
        constructor (props) {
            super(props);
            this.setNewTotalShippment = this.setNewTotalShippment.bind(this);
            this.nameValidation = this.nameValidation.bind(this);
            this.emailValidation = this.emailValidation.bind(this);
            this.phoneValidation = this.phoneValidation.bind(this);
            this.addressValidation = this.addressValidation.bind(this);
            this.postalCodeValidation = this.postalCodeValidation.bind(this);
            this.state = { 
                country: '',
                region: '' ,
                priceAfterCoupon:<ProductConsumer>{value =>value.cartTotal}</ProductConsumer>,
                filldsArray : [{filld:"name",isFilled:false},
                {filld:"lastName",isFilled:false},
                {filld:"email",isFilled:false},
                {filld:"phoneNumber",isFilled:false},
                {filld:"city",isFilled:false},
                {filld:"address",isFilled:false},
                {filld:"potalCode",isFilled:false},]
            };
     
          }

          selectCountry (val) {
            this.setState({ country: val });
          }
        
          selectRegion (val) {
            this.setState({ region: val });
          }
          
          
          setNewTotalShippment(event,cartTotal){
              if(event.target.id==="registeredAddress"){
                targetId = "registeredAddress";
                alert("please insert coupon again if you have one");
                shippingSelect={priceAfterCoupon: (parseFloat(cartTotal)+20).toFixed(2)}
                this.setState({priceAfterCoupon: (parseFloat(cartTotal)+20).toFixed(2)});
              }
              if(event.target.id==="postOffice"){
                targetId = "postOffice";
                alert("please insert coupon again if you have one");
                shippingSelect={priceAfterCoupon: (parseFloat(cartTotal)+10).toFixed(2)}
                this.setState({priceAfterCoupon: (parseFloat(cartTotal)+10).toFixed(2)});
              }
              if(event.target.id==="inputCoupon" && targetId === "registeredAddress"){
                if(event.target.value==="12345"){
                    shippingSelect={priceAfterCoupon: (parseFloat(cartTotal)+20-(parseFloat(cartTotal)+20)*0.1).toFixed(2) }
                    this.setState({priceAfterCoupon: (parseFloat(cartTotal)+20-(parseFloat(cartTotal)+20)*0.1).toFixed(2) });
                  }
                  else{
                    shippingSelect={priceAfterCoupon: (parseFloat(cartTotal)+20).toFixed(2)}
                    this.setState({priceAfterCoupon: (parseFloat(cartTotal)+20).toFixed(2)});
                  }
              }
              if(event.target.id==="inputCoupon" && targetId === "postOffice"){
                if(event.target.value==="12345"){
                    shippingSelect={priceAfterCoupon: (parseFloat(cartTotal)+10-(parseFloat(cartTotal)+10)*0.1).toFixed(2) }
                    this.setState({priceAfterCoupon: (parseFloat(cartTotal)+10-(parseFloat(cartTotal)+10)*0.1).toFixed(2) });
                  }
                  else{
                    shippingSelect={priceAfterCoupon: (parseFloat(cartTotal)+10).toFixed(2)}
                    this.setState({priceAfterCoupon: (parseFloat(cartTotal)+10).toFixed(2)});
                  }
              }
              if(event.target.id==="inputCoupon" && targetId === ""){
                if(event.target.value==="12345"){
                    shippingSelect=(parseFloat(cartTotal)-parseFloat(cartTotal)*0.1).toFixed(2);
                    this.setState({priceAfterCoupon: (parseFloat(cartTotal)-parseFloat(cartTotal)*0.1).toFixed(2) });
                  }
                else{
                    shippingSelect={priceAfterCoupon: cartTotal}
                    this.setState({priceAfterCoupon: cartTotal});
                }
              }  
            }

            nameValidation(event){
                // console.log(this.state.filldsArray)
                let regex=/^[a-zA-Z]*$/;
                let arr = [...this.state.filldsArray];
                if(regex.test(event.target.value) && event.target.value.length>2)
                {
                    event.target.setAttribute("class", "form-control is-valid")
                    if(event.target.id==="inputName"){
                        arr[0].isFilled = true;
                        this.setState({filldsArray: arr});
                    }
                    else if(event.target.id==="inputLastName"){
                        arr[1].isFilled = true;
                        this.setState({filldsArray: arr});
                    }
                    else if(event.target.id==="inputCity"){
                        arr[4].isFilled = true;
                        this.setState({filldsArray: arr});
                    }
                }
                else{
                    event.target.setAttribute("class", "form-control is-invalid")
                    if(event.target.id==="inputName"){
                        arr[0].isFilled = false;
                        this.setState({filldsArray: arr});
                    }
                    else if(event.target.id==="inputLastName"){
                        arr[1].isFilled = false;
                        this.setState({filldsArray: arr});
                    }
                    else if(event.target.id==="inputCity"){
                        arr[4].isFilled = false;
                        this.setState({filldsArray: arr});
                    }
                }
                
            }
            emailValidation(event){
                let regex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                let arr = [...this.state.filldsArray];
                if(regex.test(event.target.value))
                {
                    arr[2].isFilled = true;
                    this.setState({filldsArray: arr});
                    event.target.setAttribute("class", "form-control is-valid")
                }
                else{
                    arr[2].isFilled = false;
                    this.setState({filldsArray: arr});
                    event.target.setAttribute("class", "form-control is-invalid")
                }
            }
            phoneValidation(event){
                let arr = [...this.state.filldsArray];
                let regex=/^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/gm;
                if(regex.test(event.target.value))
                {
                    event.target.setAttribute("class", "form-control is-valid")
                    arr[3].isFilled = true;
                    this.setState({filldsArray: arr});
                }
                else{
                    event.target.setAttribute("class", "form-control is-invalid")
                    arr[3].isFilled = false;
                    this.setState({filldsArray: arr});

                }
            }
            addressValidation(event){
                let arr = [...this.state.filldsArray];
                let regex=/^[a-zA-Z]+\s[a-zA-Z0-9]+/;                
                if(regex.test(event.target.value))
                {
                    event.target.setAttribute("class", "form-control is-valid")
                    arr[5].isFilled = true;
                    this.setState({filldsArray: arr});
                }
                else{
                    event.target.setAttribute("class", "form-control is-invalid")
                    arr[5].isFilled = false;
                    this.setState({filldsArray: arr});
                }
            }
            postalCodeValidation (event){
                let arr = [...this.state.filldsArray];
                let regex=/^[0-9]{6}(?:-[0-9]{4})?$/; 
                if(regex.test(event.target.value))
                {
                    event.target.setAttribute("class", "form-control is-valid")
                    arr[6].isFilled = true;
                    this.setState({filldsArray: arr});
                }
                else{
                    event.target.setAttribute("class", "form-control is-invalid")
                    arr[6].isFilled = false;
                    this.setState({filldsArray: arr});
                }
            }
            
        

render() {
    const { country, region } = this.state;

    return (

    <div className="container bg-white">
                <Title name="check" title="out"  />

        <div className=" d-flex justify-content-center pb-5">

            <div className=" col-md-7 ml-1">
                <div className="py-4 d-flex flex-row">
                    <h4><span></span><b>First</b><b style={{color:"#5383d3"}}>Motor</b></h4>
                </div>
                <h4>Billing information</h4>
                <form>
                    <div className=" col-md-12 pt-2">
                        <div >
                            <label htmlFor="inputName" required>Name - must contain least 3 letters</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Name" required
                             onChange={(e)=> {
                                this.nameValidation(e);
                                }}/>
                            <label className="pt-2" htmlFor="inputLastName" required>Last Name - must contain least 3 letters</label>
                            <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" required
                            onChange={(e)=> {
                                this.nameValidation(e);
                                }}/>
                            <label className="pt-2" htmlFor="inputEmail4" required>Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required
                            onChange={(e)=> {
                                this.emailValidation(e);
                                }}/>
                            <label className="pt-2" htmlFor="inputPhoneNumber" required>Phone Number*</label>
                            <input type="number" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" required
                            onChange={(e)=> {
                                this.phoneValidation(e);
                                }}/>
                            <label className="pt-2" htmlFor="inputCompanyName" >Company Name (Optional)</label>
                            <input type="text" className="form-control" id="inputCompanyName" placeholder="Company Name"/>
                        </div>  
                    </div>
                    
                    <hr/>
                    <h4>Country/Region*</h4>
                    <div className=" col-md-12 pt-2">
                        <div>
                            <div>
                            <CountryDropdown
                                value={country}
                                onChange={(val) => this.selectCountry(val)} />
                            <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => this.selectRegion(val)} />
                            </div>
                            <label htmlFor="inputCity" required>City - must contain least 3 letters</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="City" required
                            onChange={(e)=> {
                                this.nameValidation(e);
                                }}/>
                            <label className="pt-2" htmlFor="inputAddress" required>Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Address" required
                            onChange={(e)=> {
                                this.addressValidation(e);
                                }}/>
                            <label className="pt-2" htmlFor="inputPostalCode" required>Postal Code</label>
                            <input type="number" className="form-control" id="inputPostalCode" placeholder="Postal Code" required
                            onChange={(e)=> {
                                this.postalCodeValidation(e);
                                }}/>
                            
                        </div>  
                    </div>
                </form>
                {/* <hr/> */}
                    <div className="pt-2">
                        <div className=" mb-2 " >
                            <div className="row  justify-content-left pt-3">
                                <div className="col-1">
                                    <input className=" text-left" type="checkbox"/>
                                </div>
                                <div className="col-11 p-0">
                                    <p>I want to receive updates to my email.</p>
                                    <textarea maxLength="50" style={{resize: "none"}} rows="4" cols="50" placeholder="Add a special request for delivery"></textarea>

                                </div> 
                            </div>
                        </div>

                            <div className="ml-auto p-2">
                                 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Continue to payment</button>
                            </div>
                            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="card-title mx-auto"> Payment</div>
                                            {/* <div className="navCheckout">
                                                <ul className="mx-auto">
                                                    <li><a href="#">Account</a></li>
                                                    <li className="active"><a href="#">Payment</a></li>
                                                </ul>
                                            </div> */}
                                             <span id="card-header">Choose Paypal or Credit card:</span>
                                             <div className="row row-1 pt-3">

                                            <ProductConsumer>
                                            {value => { if(value.cartTotal!=0){
                                                console.log(shippingSelect,this.state.filldsArray,country,region) 
                                                if(shippingSelect!==undefined && country!=='' && region!==''
                                                    && this.state.filldsArray[0].isFilled 
                                                    && this.state.filldsArray[1].isFilled
                                                    && this.state.filldsArray[2].isFilled
                                                    && this.state.filldsArray[3].isFilled
                                                    && this.state.filldsArray[4].isFilled
                                                    && this.state.filldsArray[5].isFilled
                                                    && this.state.filldsArray[6].isFilled){
                                                    return( 
                                                        <PayPal  total={parseFloat(shippingSelect.priceAfterCoupon)} clearCart={value.clearCart}></PayPal>
                                                    // <PaypalButton total={parseFloat(shippingSelect.priceAfterCoupon)} clearCart={value.clearCart} history={value.history}/> 
                                                )}
                                                
                                                else{
                                                    return( <div>
                                                         <h1>Opps forgot form filled with uncorrect values</h1>
                                                        <p>Please check if all requireds fields are filled and which shippment way you want</p>
                                                        </div>)
                                                }
                                            }}

                                            }
                                            </ProductConsumer>
                                                {/* <div className="row row-1">
                                                    <div className="col-2"><img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" /></div>
                                                    <div className="col-7"> <input type="text" placeholder="**** **** **** 3193"/> </div>
                                                    <div className="col-3 d-flex justify-content-center"> <a href="#">Remove card</a> </div>
                                                </div>
                                                <div className="row row-1">
                                                    <div className="col-2"><img className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" /></div>
                                                    <div className="col-7"> <input type="text" placeholder="**** **** **** 4296"/> </div>
                                                    <div className="col-3 d-flex justify-content-center"> <a href="#">Remove card</a> </div>
                                                </div> <span id="card-header">Add new card:</span>
                                                <div className="row-1">
                                                    <div className="row row-2"> <span id="card-inner">Card holder name</span> </div>
                                                    <div className="row row-2"> <input type="text" placeholder="Bojan Viner"/> </div>
                                                </div>
                                                <div className="row three">
                                                    <div className="col-7">
                                                        <div className="row-1">
                                                            <div className="row row-2"> <span id="card-inner">Card number</span> </div>
                                                            <div className="row row-2"> <input type="text" placeholder="5134-5264-4"/> </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-2"> <input type="text" placeholder="Exp. date"/> </div>
                                                    <div className="col-2"> <input type="text" placeholder="CVV"/> </div>
                                                </div> <button className="btnCredit d-flex mx-auto"><b>Add card</b></button> */}
                                           </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
         
                    </div>                   
            </div>



                    <div className="col-sm-3 col-md-4 offset-md-1 bg-light mobile">
                                    <div className="py-4 d-flex justify-content-end">
                                        <h6><a href="/cart">Cancel and return to website</a></h6>
                                    </div>
                                    <div className="bg-light rounded d-flex flex-column">
                                        <div className="p-2 ml-3">
                                            <h4>Order Recap</h4>
                                        </div>
                                        <ProductConsumer>
                                        {value => {return( 
                                            <React.Fragment>
                                                <div style={{fontSize:"20px"}}>
                                                    <div className="p-2 d-flex">
                                                        <div className="col-8">Sub cart total</div>
                                                        <div className="ml-auto">${value.cartSubTotal}</div>
                                                    </div>
                                                    <div className="p-2 d-flex">
                                                        <div className="col-8">Tax</div>
                                                        <div className="ml-auto">${value.cartTax}</div>
                                                    </div>
                                                    <div className="p-2 d-flex">
                                                        <label className="pt-2" htmlFor="inputPostalCode" >Coupon</label>
                                                        <input  type="text" className="form-control" id="inputCoupon" placeholder="Coupon Number"
                                                         onChange={(e)=> {
                                                            this.setNewTotalShippment(e, value.cartTotal) }}/>          
                                                    </div>
                                                    <hr/>
                                                    <div className="bg-light">
                                                        <form className="form-control" action="">
                                                        
                                                            <p>Shipping:</p>
                                                            
                                                            <div className="row">
                                                                <div className="col-1  m-0 p-0">
                                                                    <input type="radio" id="registeredAddress" name="shipping" 
                                                                    onClick={(e) => {
                                                                        this.setNewTotalShippment(e, value.cartTotal) }}/>
                                                                </div>
                                                                <div className="col-11  m-0 p-0" >
                                                                    <label htmlFor="registeredAddress">To registered address in this form +$20</label><br/>
                                                                </div>
                                                            </div>
                                                            <br/>
                                                            <div className="row">
                                                                <div className="col-1  m-0 p-0">
                                                                    <input type="radio" id="postOffice" name="shipping"
                                                                    onClick={(e) => {
                                                                        this.setNewTotalShippment(e, value.cartTotal) }}/>
                                                                    
                                                                </div>
                                                                <div className="col-11  m-0 p-0">
                                                                    <label htmlFor="postOffice">Self-pickup from the post office +$10</label><br/>
                                                                </div>
                                                            </div>
                                                            <div className="border-top px-4 mx-3"></div>
                                                            <div className="p-2 d-flex pt-3">
                                                                <div className="col-8"><b>Total Price</b></div>
                                                                <div className="ml-auto"><b className="green">${this.state.priceAfterCoupon}</b></div>
                                                            </div>
                                                        </form>  
                                                    </div>   
                                                    
                                                </div>
                                            </React.Fragment>

                                        )}}
                                        </ProductConsumer>
                                        
                                    </div>
                    </div>
            
        </div>
    </div>
                     
      
     )
 }
}



