import React, { Component } from 'react'
import '../cashOut/CashOut.css'
import {auth} from '../../../firebase'

export default class CashOut extends Component {

    constructor(){
        super();
        this.state={
            myCart : [],
            prevAddress : ""
        }
        this.myAddress = React.createRef();
        this.myCountry = React.createRef();
        this.myCity = React.createRef();
        this.myCardName = React.createRef();
        this.myCvv = React.createRef();
        this.myCardNum = React.createRef();
        this.myExpDate = React.createRef();
        this.myCheckBox = React.createRef();
    }

    componentDidMount(){
            const lSArr =localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):null;
            const numOf = (window.localStorage.getItem('numOf'))?JSON.parse(window.localStorage.getItem('numOf')):[];
            const addressArr = localStorage.getItem('cart')?JSON.parse(localStorage.getItem('address')):null;
            if(lSArr){
                // console.log(lSArr);
                const temp = [];
                for(let i=0; i<lSArr.length; i++){
                    if(lSArr[i]!==null){
                        temp.push(
                                <div className="" key={lSArr[i].name} width="100%">
                                    <img className="p-3" src={lSArr[i].urlImg[0]} height="100px" width="100px"></img>
                                    <div className="text-center text-white float-end">
                                        <h5 className="mt-4">{lSArr[i].name}</h5>
                                        <span className="m-2">{`quantity:${numOf[i]}  price:${lSArr[i].price*numOf[i]}$`}</span>
                                    </div>
                                </div>
                        )
                    }
                }
                this.setState({myCart : temp})
            }
            else{
                this.setState({myCart : <h1 className="text-white">Your cart is empty</h1>})
            }
            if(!lSArr.length)this.setState({myCart : <h1 className="text-white">Your cart is empty</h1>});
            if(addressArr){
                const tempAd = <div className="">
                    <label className="m-0 p-0">Use previes address</label><input ref={this.myCheckBox} className="m-0 p-0 w-25" type="checkbox" onClick={()=>this.usePrevAddress()}/>
                </div>
                this.setState({prevAddress : tempAd});
            }
        }
        
        usePrevAddress(){
            const address = JSON.parse(localStorage.getItem('address'))
            if(this.myCheckBox.current.checked){
                this.myAddress.current.value=address[0]
                this.myCountry.current.value=address[1]
                this.myCity.current.value=address[2]
            }
            else{
                this.myAddress.current.value=""
                this.myCountry.current.value=""
                this.myCity.current.value=""
            }
        }

    render() {
        auth.onAuthStateChanged(user=> {
            if (!user) {
                this.props.history.push('/login');
            }
          });
        return (
                <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-11">
                        <div className="card card0 rounded-0">
                            <div className="row">
                                <div className="col-md-5 col-sm-12">
                                    <div className="card rounded-0 border-0 card1" id="bill">
                                        <h3 id="heading1">Payment Summary</h3>
                                        {this.state.myCart}
                                        <div className="d-fle mt-3 text-center">
                                            <h3 className="text-white">Total price {localStorage.getItem('totalPrice')}$</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 p-0 box">
                                    <div className="card rounded-0 border-0 card2" id="paypage">
                                        <div className="form-card">
                                            <h2 id="heading2" className="text-danger">Payment Method</h2>
                                            <div className="radio-group">
                                                <div className='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px"/></div>
                                                <div className='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px"/></div> <br/>
                                                {this.state.prevAddress}
                                            </div>
                                            <label className="pay">Address</label> <input ref={this.myAddress} type="text" name="address" placeholder="Address" minLength="19" maxLength="19" required/>
                                            <div className="row">
                                                <div className="col-12 col-md-6"> <label className="pay">Country</label> <input ref={this.myCountry} type="country" name="country" id="cr_no" placeholder="Country" minLength="19" maxLength="19"/> </div>
                                                <div className="col-12 col-md-6"> <label className="pay">City</label> <input ref={this.myCity} type="text" name="city" placeholder="City" className="placeicon"/> </div>
                                            </div>
                                            <label className="pay">Name on Card</label> <input ref={this.myCardName} type="text" name="holdername" placeholder="John Smith"/>
                                            <div className="row">
                                                <div className="col-8 col-md-6"> <label className="pay">Card Number</label> <input ref={this.myCardNum} type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minLength="19" maxLength="19"/> </div>
                                                <div className="col-4 col-md-6"> <label className="pay">CVV</label> <input ref={this.myCvv} type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" className="placeicon" minLength="3" maxLength="3"/> </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12"> <label className="pay">Expiration Date</label> </div>
                                                <div className="col-md-12"> <input ref={this.myExpDate} type="text" name="exp" id="exp" placeholder="MM/YY" minLength="5" maxLength="5"/> </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 d-flex">
                                                    <input type="submit" onClick={()=>this.checkOutVal()} value="MAKE A PAYMENT" className="btn btn-info placeicon"/> 
                                                    <input type="button" onClick={()=>this.props.history.push('/store/all')} value="BACK TO STORE" className="btn btn-info placeicon"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    checkOutVal(){
        let validationArr = [false,false,false,false,false,false,false];
        const checkVisaCard = /^4[0-9]{12}(?:[0-9]{3})?/;
        const checkName =/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/;
        const checkCvv =/^[0-9]{3}/;
        const checkDate =/^(0[0-9]|1[0-2])[/-]?[0-9]{2}/;
        if(this.myAddress.current.value.length>3)validationArr[0]=true;
        else{
            this.myAddress.current.value="";
            this.myAddress.current.placeholder="Address not found"
            this.myAddress.current.classList.add("myPlaceHolder");
            return
        }
        if(this.myCountry.current.value.toLowerCase()=="israel")validationArr[1]=true;
        else{
            this.myCountry.current.value="";
            this.myCountry.current.placeholder="Shiping only in Israel at this time"
            this.myCountry.current.classList.add("myPlaceHolder");
            return
        }
        if(this.myCity.current.value.toLowerCase()=="jerusalem" || this.myCity.current.value.toLowerCase()=="tel aviv")validationArr[2]=true;
        else{
            this.myCity.current.value="";
            this.myCity.current.placeholder="Shiping only in Israel at this time"
            this.myCity.current.classList.add("myPlaceHolder");
            return
        }
        if(checkName.test(this.myCardName.current.value))validationArr[3]=true;
        else{
            this.myCardName.current.value="";
            this.myCardName.current.placeholder="Invalid name"
            this.myCardName.current.classList.add("myPlaceHolder");
            return
        }
        if(checkVisaCard.test(this.myCardNum.current.value))validationArr[4]=true;
        else{
            this.myCardNum.current.value="";
            this.myCardNum.current.placeholder="Invalid Card Number"
            this.myCardNum.current.classList.add("myPlaceHolder");
            return
        }
        if(checkCvv.test(this.myCvv.current.value))validationArr[5]=true;
        else{
            this.myCvv.current.value="";
            this.myCvv.current.placeholder="Invalid CVV"
            this.myCvv.current.classList.add("myPlaceHolder");
            return
        }
        if(checkDate.test(this.myExpDate.current.value))validationArr[5]=true;
        else{
            this.myExpDate.current.value="";
            this.myExpDate.current.placeholder="Invalid Expiration Date"
            this.myExpDate.current.classList.add("mystyle");
            return
        }
        localStorage.setItem('totalPrice',0)
        localStorage.setItem('totalItems',0)
        localStorage.setItem('cart',JSON.stringify([]))
        localStorage.setItem('address',JSON.stringify([this.myAddress.current.value,this.myCountry.current.value,this.myCity.current.value]));
        document.querySelector('#myBag').innerHTML=""+((Number(localStorage.getItem('totalItems')))?Number(localStorage.getItem('totalItems')):0);
        this.props.history.push('/paymentconfirm')
    }
}
