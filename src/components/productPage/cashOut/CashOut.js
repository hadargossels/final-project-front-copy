import React, { Component } from 'react'
import '../cashOut/CashOut.css'

export default class CashOut extends Component {

    constructor(){
        super();
        this.state={
            myCart : []
        }
    }

    componentDidMount(){
            const lSArr =localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):null;
            const numOf = (window.localStorage.getItem('numOf'))?JSON.parse(window.localStorage.getItem('numOf')):[];
            if(lSArr){
                // console.log(lSArr);
                const temp = [];
                for(let i=0; i<lSArr.length; i++){
                    if(lSArr[i]!==null){
                        temp.push(
                            <div>
                                <div className="d-flex" key={i}>
                                    <img className="p-3" src={lSArr[i].urlImg[0]} height="100px" width="100px"></img>
                                    <div className="text-center text-white">
                                        <h5 className="mt-4">{lSArr[i].name}</h5>
                                        <span className="m-2">{`quantity:${numOf[i]}  price:${lSArr[i].price*numOf[i]}$`}</span>
                                    </div>
                                </div>
                                {(i!==lSArr.length-1)?<hr/>:""}
                            </div>
                        )
                    }
                }
                this.setState({myCart : temp})
            }
            else{
                this.setState({myCart : <h1 className="text-white">Your cart is empty</h1>})
            }
        }
        

    render() {
        if (localStorage.getItem('login')!='true'){
            this.props.history.push('/login');
        }
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
                                        {/* <div className="row">
                                            <div className="col-lg-7 col-8 mt-4 line pl-4">
                                                <h2 className="bill-head">Electronics</h2> <small className="bill-date">2017 Feb 10 at 10:30 PM</small>
                                            </div>
                                            <div className="col-lg-5 col-4 mt-4">
                                                <h2 className="bill-head px-xl-5 px-lg-4">CAF</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-7 col-8 mt-4 line pl-4">
                                                <h2 className="bill-head">Food</h2> <small className="bill-date">2017 Feb 25 at 11:30 PM</small>
                                            </div>
                                            <div className="col-lg-5 col-4 mt-4">
                                                <h2 className="bill-head px-xl-5 px-lg-4">JFK</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-7 col-8 mt-4 line pl-4">
                                                <h2 className="bill-head">Grocery</h2> <small className="bill-date">2017 Mar 17 at 10:45 PM</small><br/> <small className="bill-date">2017 Mar 18 at 11:45 PM</small>
                                            </div>
                                            <div className="col-lg-5 col-4 mt-4">
                                                <h2 className="bill-head px-xl-5 px-lg-4">LHR</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-7 col-8 mt-4 line pl-4">
                                                <h2 className="bill-head">Accessories</h2> <small className="bill-date">2017 Apr 13 at 05:30 PM</small>
                                            </div>
                                            <div className="col-lg-5 col-4 mt-4">
                                                <h2 className="bill-head px-xl-5 px-lg-4">JFK</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 red-bg">
                                                <p className="bill-date" id="total-label">Total Price</p>
                                                <h2 className="bill-head" id="total">$ 523.65</h2> <small className="bill-date" id="total-label">Price includes all taxes</small>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 p-0 box">
                                    <div className="card rounded-0 border-0 card2" id="paypage">
                                        <div className="form-card">
                                            <h2 id="heading2" className="text-danger">Payment Method</h2>
                                            <div className="radio-group">
                                                <div className='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px"/></div>
                                                <div className='radio' data-value="paypal"><img src="https://i.imgur.com/5QFsx7K.jpg" width="200px" height="60px"/></div> <br/>
                                            </div> <label className="pay">Name on Card</label> <input type="text" name="holdername" placeholder="John Smith"/>
                                            <div className="row">
                                                <div className="col-8 col-md-6"> <label className="pay">Card Number</label> <input type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minlength="19" maxlength="19"/> </div>
                                                <div className="col-4 col-md-6"> <label className="pay">CVV</label> <input type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" className="placeicon" minlength="3" maxlength="3"/> </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12"> <label className="pay">Expiration Date</label> </div>
                                                <div className="col-md-12"> <input type="text" name="exp" id="exp" placeholder="MM/YY" minlength="5" maxlength="5"/> </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6"> <input type="submit" value="MAKE A PAYMENT &nbsp; &#xf178;" className="btn btn-info placeicon"/> </div>
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
}
