import React, { Component } from 'react'
import ProductDropDown from '../ProductDropDown/ProductDropDown'
import './paymentPage.css'
// import { PayPalButton } from "react-paypal-button-v2";
import PayPalBtn from '../PayPalBtn/PayPalBtn';

export default class PaymentPage extends Component {
    constructor(props){
        super(props);
        this.state={
            discount:"0",
            total:0,
            couponsArr:["10Percent","20Less"],
            couponLabelFailed:"notDisplay",
            couponLabelAdd:"notDisplay",
            paypalBtn:false
        }
        //refs
        this.CouponInput=React.createRef();
        this.paypalRef=React.createRef();
        this.nameLabelRef=React.createRef();
        this.nameInputRef=React.createRef();
        this.lastNameLabelRef=React.createRef();
        this.lastNameInputRef=React.createRef();
        this.emailLabelRef=React.createRef();
        this.emailInputRef=React.createRef();
        this.phoneLabelRef=React.createRef();
        this.phoneInputRef=React.createRef();
        this.cityLabelRef=React.createRef();
        this.cityInputRef=React.createRef();
        this.streetLabelRef=React.createRef();
        this.streetInputRef=React.createRef();
        this.buildingLabelRef=React.createRef();
        this.buildingInputRef=React.createRef();
        this.apartmentLabelRef=React.createRef();
        this.apartmentInputRef=React.createRef();
        this.postLabelRef=React.createRef();
        this.postInputRef=React.createRef();
        this.commentsRef=React.createRef();

        this.inputsRef=[this.nameInputRef,this.lastNameInputRef,this.emailInputRef,this.phoneInputRef, this.cityInputRef,
                         this.streetInputRef,this.buildingInputRef,this.apartmentInputRef,this.postInputRef];
        this.labelsRef=[this.nameLabelRef,this.lastNameLabelRef,this.emailLabelRef,this.phoneLabelRef, this.cityLabelRef,
            this.streetLabelRef,this.buildingLabelRef,this.apartmentLabelRef,this.postLabelRef];
        
       //bind
        this.totalItems=this.totalItems.bind(this)
        this.calcSubtotal=this.calcSubtotal.bind(this)
        this.calcShipping=this.calcShipping.bind(this)
        this.calacTotal=this.calacTotal.bind(this)
        this.couponBtnClicked=this.couponBtnClicked.bind(this)

        //call
        this.state.total=this.calacTotal();
        
    }
    calacTotal(){
        let sumTotal=(Number(this.calcSubtotal())+this.calcShipping());
        if(this.state.discount.includes("%")){
            let Percent=Number(this.state.discount.replace("%",""))
            sumTotal=sumTotal*((100-Percent)/100);
        }
        else{
            let less=Number(this.state.discount.replace("₪",""))
            sumTotal=sumTotal-less;
        }
        return sumTotal+"₪"
    
    }

    totalItems(){
        let sumItems=0;
        if(this.props.localStorageArr!=null)
        { for(let item of this.props.localStorageArr) {
            sumItems+=Number(item.amountProduct)
             }
        }
        return sumItems;
    }

    calcSubtotal(){
        let sum=0;
        if(this.props.localStorageArr!=null)
        { for(let item of this.props.localStorageArr) {
            sum+=Number(item.discountProduct!="none"?item.discountProduct:item.priceProduct)*Number(item.amountProduct)
             }
        }
        return sum;
    }

    calcShipping(){
       let subtotal=this.calcSubtotal();
       if(subtotal>=200)
            return 0;
        else    
            return 20;
    }

    couponBtnClicked(){
        let coupon=this.CouponInput.current.value;
        let indexCoupon=this.state.couponsArr.indexOf(coupon);
       if(indexCoupon==-1){//wrong code coupon
            this.setState({couponLabelFailed:"Displaylabel",couponLabelAdd:"notDisplay"})
       }
       else{
        this.setState({couponLabelFailed:"notDisplay",couponLabelAdd:"Displaylabel",discount:(indexCoupon==0)?"10%":"20₪"},()=>this.setState({total:this.calacTotal()}));
       } 
       setTimeout(()=>this.setState({couponLabelFailed:"notDisplay",couponLabelAdd:"notDisplay"}),5000)
    }

    payBtnClicked(){
        let flag=true;

        this.inputsRef.map((curRef,i)=>{
            if(curRef.current.value=="")
            {
                this.labelsRef[i].current.className="showLabel"
                flag=false;
            }
            else{
                this.labelsRef[i].current.className="hideLabel";
            }
        })

        if(this.emailInputRef.current.value==""||!emailValidation(this.emailInputRef.current.value))
        {
            this.emailLabelRef.current.className="showLabel"
            flag=false;
        }
        else this.emailLabelRef.current.className="hideLabel"

        if(this.phoneInputRef.current.value==""||isNaN(Number(this.phoneInputRef.current.value))||!/^0\d([\d]{0,1})([-]{0,1})\d{7}$/.test(this.phoneInputRef.current.value))
        {
            this.phoneLabelRef.current.className="showLabel"
            flag=false;
        }
        else this.phoneLabelRef.current.className="hideLabel"
      
        if(this.postInputRef.current.value==""||isNaN(Number(this.postInputRef.current.value))||this.postInputRef.current.value.length<7)
        {
            this.postLabelRef.current.className="showLabel"
            flag=false;
        }
        else this.postLabelRef.current.className="hideLabel"
     
        if(flag)
        {
            // let card=(this.paypalRef.current.checked)?"paypal":"credit_Card";
            // this.props.history.push(`/checkout/payment/${card}`)
            this.setState({paypalBtn:true});//to show the pay buttons

        }
        else
            window.scrollTo(0, 0);

    }
    onSuccessPaypal(details, data){
        console.log(details, data);
        let objOrder={
            orderId:data.orderID,
            firstName:this.nameInputRef.current.value,
            lastName:this.lastNameLabelRef.current.value,
            email:this.emailInputRef.current.value,
            phone:this.phoneInputRef.current.value,
            city:this.cityInputRef.current.value,
            street:this.streetInputRef.current.value,
            building:this.buildingInputRef.current.value,
            apartment:this.apartmentInputRef.current.value,
            post:this.postInputRef.current.value,
            comments:this.commentsRef.current.value,
            itemsInOrderArr:this.props.localStorageArr,
            totalOrder:this.state.total,
            totalItems:this.totalItems()
        }
        localStorage.setItem("objOrder",JSON.stringify(objOrder) );//save object of order
        localStorage.setItem("cartArray","[]")//delete shopping cart
        this.props.localStorageChange();
        //לשמור בבסיס נתונים את ההזמנה
        this.props.history.push("/checkout/payment/order_number");
    }
    

    render() {
        return (
            <div className="paymentPageDiv row">
                <div className="ShippingDiv col-12 col-md-7">
                    <h4 className="h4Pay">Shipping Address</h4>
                    <form className="row justify-content-center">
                        <div className="payDiv col-6">
                            <label className="labels">*First name</label>
                            <input ref={this.nameInputRef} className="inputPay" type="text" id="namePay" required/><br/>
                            <div className="hideLabelPay" ref={this.nameLabelRef}><label className="redLabel" for="namePay">*Name is missing</label></div>
                        </div>
                        <div className="payDiv col-6"> 
                            <label className="labels">*Last name</label>
                            <input ref={this.lastNameInputRef} className="inputPay" type="text" id="lastNamePay"  /><br/>
                            <div ref={this.lastNameLabelRef} className="hideLabelPay"><label className="redLabel"  for="lastNamePay">*Last name is missing</label></div>
                        </div>
                        <div className="payDiv col-6">
                        <label className="labels">*Email Address</label>
                            <input ref={this.emailInputRef} className="inputPay" type="email" id="emailPay" /><br/>
                            <div ref={this.emailLabelRef} className="hideLabelPay"><label className="redLabel"  for="emailPay">*Your email must be a valid email</label></div>
                        </div>
                        <div className="payDiv col-6">
                            <label className="labels">*Phone number</label>
                            <input ref={this.phoneInputRef} className="inputPay" type="tel" id="phone" /><br/>
                            <div ref={this.phoneLabelRef} className="hideLabelPay"><label className="redLabel"  for="phone">*The phone number is incorrect</label></div>
                        </div>
                        <div className="payDiv col-6">
                            <label className="labels">*City</label>
                            <input ref={this.cityInputRef} className="inputPay" type="text" id="city" /><br/>
                            <div ref={this.cityLabelRef} className="hideLabelPay"><label className="redLabel" for="city">*City is missing</label></div>
                        </div>
                        <div className="payDiv col-6">
                            <label className="labels">*Street</label>
                            <input ref={this.streetInputRef} className="inputPay" type="text" id="street" /><br/>
                            <div ref={this.streetLabelRef} className="hideLabelPay"><label className="redLabel" for="street">*Street is missing</label></div>
                        </div>
                        <div className="payDiv col-4">
                            <label className="labels">*Building</label>
                            <input ref={this.buildingInputRef} className="inputPay" type="text" id="building"/><br/>
                            <div ref={this.buildingLabelRef} className="hideLabelPay"><label className="redLabel" for="building">*Building is missing</label></div>
                        </div>
                        <div className="payDiv col-4">
                            <label className="labels">*Apartment</label>
                            <input ref={this.apartmentInputRef} className="inputPay" type="text" id="apartment" /><br/>
                            <div ref={this.apartmentLabelRef} className="hideLabelPay"><label className="redLabel" for="apartment">*Apartment is missing</label></div>
                        </div>
                        <div className="payDiv col-4">
                            <label className="labels">*Post/Zip Code</label>
                            <input ref={this.postInputRef} className="inputPay" type="text" id="post" maxlength="7" /><br/>
                            <div ref={this.postLabelRef} className="hideLabelPay"><label className="redLabel" for="post">*ZIP/Postal Code should be a 7-digit number, e.g. 1234567</label></div>
                        </div>
                        <div className="payDiv col-12">
                            <textarea ref={this.commentsRef} id="comments" rows="5" cols="20" placeholder="Comments"></textarea>
                        </div >
                        
                    </form>
                </div>

                <div className="sumOrderDiv col-12 col-md-5 ">
                    <div className="borderDiv">
                        {/* <h4 className="h4Pay">Payment Method</h4>
                        <div>
                            <div className="cardItemDiv">
                                <input ref={this.payCardRef} type="radio" id="CreditCard" name="PayMethod" value="card" checked/>
                                <label for="CreditCard">Credit/Debit Card</label>
                            </div>
                            <div className="cardItemDiv">
                                <input  ref={this.paypalRef} type="radio" id="PayPal" name="PayMethod" value="PayPal"/>
                                <label for="PayPal"> <img src="https://www.guilty.co.il/images/paypal-logo.png" className="imgCard"/> PayPal</label>
                            </div>    
                        </div> */}
                       
                        <div className="OrderSummaryDiv">
                            <h4 className="h4Pay">Order Summary</h4>
                            <hr className="hrStyle"/>
                            <div className="itemsDiv">
                                    {this.props.localStorageArr.map((v,index)=>{
                                        return <div><ProductDropDown data={v} key={index} displayTrash="notDisplayTrash"/><hr/></div>
                                    })}
                            </div>
                            {/* <hr className="hrStyle"/> */}
                            <div className="CartSummary">
                                <div className="SpansDiv"><span className="SpanLeft">Total items:</span><span className="Spanrighet">{this.totalItems()}</span></div>
                                <div className="SpansDiv"><span className="SpanLeft">Subtotal:</span><span className="Spanrighet">{this.calcSubtotal()}₪</span></div>   
                                <div className="SpansDiv"><span className="SpanLeft">Shipping:</span><span className="Spanrighet">{this.calcShipping()}₪</span></div>
                                <p className="FreeShippingP">Free shipping over 200₪</p>
                                <div className="SpansDiv"><span className="SpanLeft">Discount:</span><span className="Spanrighet">{this.state.discount}</span></div>
                                <hr/>
                                <div className="SpansDiv"><span className="SpanLeft">Total:</span><span className="Spanrighet">{this.state.total}</span></div>
                                <button className="CouponBtn" onClick={this.couponBtnClicked}>Add coupon</button>
                                <input ref={this.CouponInput} type="text" placeholder="Enter a coupon"/><br/>
                                <label className={`LabelCouponFailed ${this.state.couponLabelFailed}`}>Coupon code does not exist</label>
                                <label className={`LabelCouponAdd ${this.state.couponLabelAdd}`}>Successfully added coupon code</label>
                                <button className="PaymentBtn" onClick={this.payBtnClicked.bind(this)}>Place Order</button>
                           {/* paypal */}
                           {(this.state.paypalBtn)?
                           <div className="paypalDiv">
                               <hr/>
                               <h4 className="h4Pay">Payment Method</h4>
                               <PayPalBtn
                                    amount = {Number(this.state.total.replace("₪",""))}
                                    currency={"ILS"}
                                    onSuccess={this.onSuccessPaypal.bind(this)}
                                    onError={(err)=>alert(err)}/>
                            </div>  :null}
                          
                            </div>

                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

function emailValidation(email)
{
   if (!email.match(/^[\w\d]+@\w+[.]\w+([.]\w+){0,1}$/))//null
        return false;
    return true;
}