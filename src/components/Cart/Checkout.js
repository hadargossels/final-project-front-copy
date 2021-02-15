import PaypalButton from './PaypalButton'
import {ProductConsumer} from '../../context';
import "./checkout.css";
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

    export default class Checkout extends  Component{
        constructor (props) {
            super(props);
            this.setNewTotalPrice = this.setNewTotalPrice.bind(this);
            this.setNewTotalShippment = this.setNewTotalShippment.bind(this);
            this.state = { 
                country: '',
                region: '' ,
                priceAfterCoupon:<ProductConsumer>{value =>value.cartTotal}</ProductConsumer>
            };
     
          }

          selectCountry (val) {
            this.setState({ country: val });
          }
        
          selectRegion (val) {
            this.setState({ region: val });
          }
          setNewTotalPrice(event,cartTotal){
              let temp = event.target.value;
              if(temp=="12345"){
                cartTotal = cartTotal-cartTotal*0.1;
                this.setState({priceAfterCoupon:cartTotal});

              }
              else{
                this.setState({priceAfterCoupon:cartTotal});

              }  
          }
          setNewTotalShippment(event){
            console.log(event.target.value)
          }

render() {
    const { country, region } = this.state;
    
    return (
    <div className="container bg-white">
        <div className=" d-flex justify-content-center pb-5">
            <div className=" col-md-7 ml-1">
                <div className="py-4 d-flex flex-row">
                    <h4><span></span><b>First</b><b style={{color:"#5383d3"}}>Motor</b></h4>
                </div>
                <h4>Billing information</h4>
                <form>
                    <div className=" col-md-12 pt-2">
                        <div >
                            <label htmlFor="inputName" required>Name*</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Name" required/>
                            <label className="pt-2" htmlFor="inputLastName" required>Last Name*</label>
                            <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" required/>
                            <label className="pt-2" htmlFor="inputEmail4" required>Email*</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
                            <label className="pt-2" htmlFor="inputPhoneNumber" required>Phone Number*</label>
                            <input type="email" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" required/>
                            <label className="pt-2" htmlFor="inputCompanyName" >Company Name (Optional)</label>
                            <input type="text" className="form-control" id="inputCompanyName" placeholder="Company Name"/>
                        </div>  
                    </div>
                    <hr/>
                    <h4>Country/Region</h4>
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
                            <label htmlFor="inputCity" required>City*</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="City" required/>
                            <label className="pt-2" htmlFor="inputAddress" required>Address*</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Address" required/>
                            <label className="pt-2" htmlFor="inputPostalCode" required>Postal Code*</label>
                            <input type="email" className="form-control" id="inputPostalCode" placeholder="Postal Code" required/>
                        </div>  
                    </div>
                </form>
                <hr/>
                    <div className="pt-2">
                            <div className="ml-auto p-2">
                                 <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add payment card</button>
                            </div>
                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="card-title mx-auto"> Add Credit Card</div>
                                            <div className="navCheckout">
                                                <ul className="mx-auto">
                                                    <li><a href="#">Account</a></li>
                                                    <li className="active"><a href="#">Payment</a></li>
                                                </ul>
                                            </div>
                                            <form> <span id="card-header">Saved cards:</span>
                                                <div className="row row-1">
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
                                                </div> <button className="btnCredit d-flex mx-auto"><b>Add card</b></button>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    
                        <p> This is an estimate for the portion of your order (not covered by insurance) due today . once insurance finalizes their review refunds and/or balances will reconcile automatically. </p>
                        <hr/>
                      
                        <div class="pt-2">
                            <form className="pb-3">
                                <div className="rounded border mb-2 " >
                                    <div className="row  justify-content-left pt-3">
                                        <div className="col-1">
                                            <input className=" text-left" type="radio" name="radio1" id="r1" defaultChecked/>
                                        </div>
                                        <div className="col-11">
                                        <p>   
                                            <i className="fa fa-cc-visa text-primary "></i>Visa Debit Card************3456
                                        </p>
                                        </div> 
                                    </div>
                                    
                                </div>
                            
                                <div className="rounded border " >
                                    <div className="row  justify-content-left pt-3">
                                        <div className="col-1">
                                            <input className=" text-left" type="radio" name="radio1" id="r1" defaultChecked/>
                                        </div>
                                        <div className="col-11">
                                        <p>   
                                            <i className="fa fa-cc-visa text-primary "></i>Visa Debit Card************3456
                                        </p>
                                        </div> 
                                    </div>
                                    
                                </div>
                            </form>
                           
                        </div>
                        <ProductConsumer>
                        
                            {value => { if(value.cartTotal!=0){
                                let a = this.state.priceAfterCoupon;
                                 return( 
                                    <PaypalButton total={value.cartTotal} clearCart={value.clearCart} history={value.history}/> 
                                )}}

                            }
                        </ProductConsumer>
                    </div>                   
            </div>



                    <div className="col-sm-3 col-md-4 offset-md-1 mobile">
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
                                                         onChange={(e) => {
                                                            this.setNewTotalPrice(e, value.cartTotal) }}/>          
                                                    </div>
                                                    <hr/>
                                                    <div>
                                                    <form className="form-control" action="">
                                                       
                                                        <p>Shipping:</p>
                                                        
                                                        <div className="row">
                                                            <div className="col-1  m-0 p-0">
                                                                <input type="radio" id="registeredAddress"/>
                                                            </div>
                                                            <div className="col-11  m-0 p-0" >
                                                                <label for="registeredAddress">To registered address in this form +$20</label><br/>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        <div className="row">
                                                            <div className="col-1  m-0 p-0">
                                                                <input type="radio" id="postOffice"/>
                                                                    {/* onChange={(e) => {
                                                                    this.setNewTotalShippment(e, value.cartTotal) }} */}
                                                            </div>
                                                            <div className="col-11  m-0 p-0">
                                                                <label for="postOffice">Self-pickup from the post office +$10</label><br/>
                                                            </div>
                                                        </div>
                                                    </form>  
                                                    </div>   
                                                    <div className="border-top px-4 mx-3"></div>
                                                    <div className="p-2 d-flex pt-3">
                                                        <div className="col-8"><b>Total Price</b></div>
                                                        <div className="ml-auto"><b className="green">${this.state.priceAfterCoupon}</b></div>
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
