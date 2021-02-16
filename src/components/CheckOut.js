
import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom';
import './CheckOut.css';
import OrderConfirmation from './OrderConfirmation';

const coupons= require("../dataBase/couponData.json")


export default class CheckOut extends Component {

    constructor(){
        super()
        this.state={

            arrItems:[],
            temporaryAmount:"",
            shipping:"",
            total:"",
            couponCurrect:"",
            totalBeforeCoupon:"",
            couponUsed:false,
            discount:"",
            validForm:"",
        }
        this.couponRef = React.createRef()
        this.couponMessageRef= React.createRef()
        this.totBeforeCouponRef = React.createRef()

        this.mailRef = React.createRef()
        this.mailMassegeRef = React.createRef()
        this.userFnameRef = React.createRef()
        this.userLnameRef = React.createRef()
        this.userMassegeRef = React.createRef()
        this.phoneInputRef = React.createRef()
        this.phoneMassegeRef= React.createRef()
        this.validityRef=React.createRef()
        this.validityMassegeRef=React.createRef()
        this.cardInputRef=React.createRef()
        this.cardMassegeRef=React.createRef()
        

        this.calculator=this.calculator.bind(this)
        this.checkCoupon=this.checkCoupon.bind(this)
        this.inputValid=this.inputValid.bind(this)

    }


    componentDidMount(){

        this.mailMassegeRef.current.style.display="none"
        this.userMassegeRef.current.style.display="none"
        this.phoneMassegeRef.current.style.display="none"
        this.validityMassegeRef.current.style.display="none"
        this.cardMassegeRef.current.style.display="none"
        this.loadItemsFromLocalStorage()
        this.calculator()
    }

    loadItemsFromLocalStorage(){

        const storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")
        this.setState({arrItems:storage})

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

    async checkCoupon(){

        const coupon = this.couponRef.current
        const couponMessage=this.couponMessageRef.current
        let flag=false
        let calculateDisc
        let tot
        const totBefore=this.totBeforeCouponRef.current

        for (const item of coupons) {
            if(item.serialNumber===coupon.value){
                await this.setState({couponCurrect:item})
                flag=true
            }
        }
        
        if(flag){
            couponMessage.innerHTML=`הקופון הוזן בהצלחה קיבלת ${this.state.couponCurrect.discountPercentage}%  הנחה`
            couponMessage.style.color="green"

            calculateDisc=this.state.total*(1-this.state.couponCurrect.discountPercentage/100)
            tot=this.state.total
            totBefore.innerHTML=`${tot}₪`
            let disc=(this.state.couponCurrect.discountPercentage/100)*this.state.total
            
            this.setState({discount:disc})
            this.setState({totalBeforeCoupon:tot})
            this.setState({total:calculateDisc})
            this.setState({couponUsed:true})


        }else{

            this.setState({couponCurrect:""})

            if(this.state.couponUsed){

                let temp= this.state.totalBeforeCoupon
                this.setState({couponUsed:false})
                this.setState({total:temp})
                this.setState({totalBeforeCoupon:""})

            }
            couponMessage.innerHTML=`שגיאה בהזנת הקופון`
            couponMessage.style.color="red"
            totBefore.innerHTML=""
            setTimeout(() => {
                couponMessage.innerHTML=""
            }, 3000);
        }

    }

    ////////////////////////////////////////////////////////       valid        /////////////////////////////////

    inputValid(){

        let flag=true

        const mailInput = this.mailRef.current
        const mailMassege = this.mailMassegeRef.current

        const fnameInput= this.userFnameRef.current
        const lnameInput= this.userLnameRef.current
        const userMassage= this.userMassegeRef.current

        const phoneInput= this.phoneInputRef.current
        const phoneMassage= this.phoneMassegeRef.current

        const validityInput= this.validityRef.current
        const validityMassege= this.validityMassegeRef.current

        const cardInput=this.cardInputRef.current
        const cardMassege=this.cardMassegeRef.current

        /////////////    check email   ///////////

        let array=mailInput.value.split("@");

        if((mailInput.value.includes("@")) && (array.length==2)&&(array[1].includes("."))){
            array=array[1].split(".");
            if(array.length==2)
                mailMassege.style.display="none"
            else{
                mailMassege.style.display="inline"
                flag=false
            }
            }else{
                mailMassege.style.display="inline"
                flag=false
            }
        /////////////    check user   ///////////

            if(lnameInput.value.length<2 || fnameInput.value.length<2){
                flag=false
                userMassage.style.display="inline"
            }
            else
                userMassage.style.display="none"

        /////////////    check phone   ///////////
           
        if(phoneInput.value[0] !=0 || phoneInput.value[1]!=5 || phoneInput.value.length!==10){
            phoneMassage.style.display="inline"
            flag=false
        }
        else
            phoneMassage.style.display="none"

        /////////////    check validity   ///////////

        if(validityInput.value.includes("/") && validityInput.value.length===5){

            let arr=validityInput.value.split("/")
            if(Number.isInteger(arr[0]*1) && Number.isInteger(arr[1]*1))
                validityMassege.style.display="none"
            else{
                flag=false
                validityMassege.style.display="inline"
            }
        
        }else{
            validityMassege.style.display="inline"
            flag=false
        }
            
        /////////////    chose type of payment   ///////////
        /////////////    chose type of payment end  ///////////
        this.setState({validForm:flag})
    }
       

    
    valiNumber(e) {
        e.value=e.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        }
      


    render() {
        return (
            <div>
                {(!this.state.validForm)? <div className="myContainerCart">
                
                <div className="statusOrder">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 fs-3">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">עגלת קניות </a>
                                </li>
                                <li className="nav-item">
                                    <span><i className="fas fa-chevron-left"></i></span>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">פרטי ההזמנה<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <span><i className="fas fa-chevron-left"></i></span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">הזמנה הושלמה</a>
                                </li>
                            </ul>
                        
                        </div>
                    </nav>

                </div>

                <div className="btnRow mb-3">
                    <NavLink to="/Catalog" ><button type="button" style={{backgroundColor:"rgb(155,23,80)"}}> <b>חזרה לחנות</b></button></NavLink>
                    <NavLink to="/Cart" ><button type="button" style={{backgroundColor:"rgb(93,0,29)"}}> <b> חזרה לעגלה </b></button></NavLink>
                </div>

                <div className="myRowCart">
                                        
                    <div id="myForm">
                        <hr style={{height:"5px"}}></hr>
                        <form className="formToOrder m-5 fs-4 " method="POST" onSubmit={e=>{ e.preventDefault();}}>
                            <h3>פרטי חיוב:</h3>
                            <div class="form-group row ">
                                <div className="col">
                                    <label htmlFor="fname">
                                        שם פרטי:  *
                                    </label>
                                    <input type="text" name="fname" id="fname" required className="form-control" ref={this.userFnameRef}/>
                                    
                                </div>
                                <div className="col" >
                                    <label htmlFor="lname">
                                        שם משפחה:  *
                                    </label>
                                    <input type="text" name="lname" id="lname" required className="form-control"  ref={this.userLnameRef}/>
                                    
                                </div>
                                <p id="usercheck" style={{color: "red"}} className="vlidMassege" ref={this.userMassegeRef}>
                                        **חובה למלא שם פרטי ושם משפחה תיקניים  
                                    </p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    מייל:  *
                                </label>
                                <input type="email" name="email" id="email" required className="form-control" ref={this.mailRef}/>
                                <small id="emailvalid" className="form-text
                                        text-muted invalid-feedback">
                                        ** חובה למלא מייל תקין
                                </small>
                                <p id="usercheck" style={{color: "red"}} ref={this.mailMassegeRef} className="vlidMassege">
                                        **חובה למלא מייל תקין  
                                </p>
                            </div>

                            <div className="col">
                                <label htmlFor="city">
                                    עיר:  *
                                </label>
                                <input type="city" name="city" id="city" required className="form-control"/>
                                <small id="city" className="form-text
                                        text-muted invalid-feedback">
                                        ** חובה למלא את שם העיר
                                </small>
                            </div>

                            <div className="form-group row">
                                
                                <div className="col">
                                    <label htmlFor="address">
                                        כתובת:  *
                                    </label>
                                    <input type="address" name="address" id="address" required className="form-control" placeholder="מספר בית ושם רחוב"/>
                                    <small id="address" className="form-text
                                            text-muted invalid-feedback" >
                                            ** חובה למלא כתובת
                                    </small>
                                </div>
                                
                                <div className="col">
                                    <label htmlFor="typeAddress">
                                        
                                    </label>
                                    <input type="text" name="typeAddress" id="typeAddress" className="form-control" placeholder="דירה/בית פרטי/יח' דיור..."/>
                                </div>
                            </div>
                        
                            <div className="col">
                                <label htmlFor="zip">
                                    מיקוד:
                                </label>
                                <input type="zip" name="zip" id="zip" className="form-control" maxLength="7" onChange={(e)=>this.valiNumber(e.target)}/>
                            </div>

                            <div className="form-group ">
                                <label htmlFor="phone">
                                    פלאפון:  *
                                </label>
                                <input type="phone" name="phone" id="phone" required className="form-control" maxLength="10" onChange={(e)=>this.valiNumber(e.target)} ref={this.phoneInputRef}/>
                                <p id="usercheck" style={{color: "red"}} ref={this.phoneMassegeRef} className="vlidMassege">
                                    **חובה למלא מספר פלאפון תקין  
                                </p>
                            </div>

                            <br/>
                            <hr/>

                            <h3> אמצעי תשלום:</h3>

                            <div class="col-md-12">
                                <div class="payment-info">
                                    <span class="type d-block mt-3 mb-1"> סוג כרטיס / פייפל</span>
                                    <label class="radio"> <input type="radio" name="card" value="mastercard" ref={this.cardInputRef}/> <span><img width="50" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>
                                    <label class="radio"> <input type="radio" name="card" value="vise"/> <span><img width="50" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>
                                    <label class="radio"> <input type="radio" name="card" value="amex"/> <span><img width="50" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>
                                    <label class="radio"> <input type="radio" name="card" value="paypal"/> <span><img width="50" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
                                    <p id="usercheck" style={{color: "red"}} className="vlidMassege" ref={this.cardMassegeRef}> ** נא לבחור אמצעי תשלום  </p>
                                    <div><label class="credit-card-label">שם בעל הכרטיס:</label><input type="text" class="form-control credit-inputs" placeholder="ישראל ישראלי" required/></div>
                                    <div><label class="credit-card-label">מספר כרטיס: </label><input type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000" required onChange={(e)=>this.valiNumber(e.target)}/></div>
                                    <div class="row ">
                                        <div class="col-md-6"><label class="credit-card-label">תוקף הכרטיס:</label><input type="text" class="form-control credit-inputs" placeholder="12/24" required maxLength="5"ref={this.validityRef}/></div>
                                        <div class="col-md-6"><label class="credit-card-label">CVV:</label><input type="text" class="form-control credit-inputs" placeholder="342" required maxLength="3" onChange={(e)=>this.valiNumber(e.target)}/></div>
                                        <p id="usercheck" style={{color: "red"}} className="vlidMassege" ref={this.validityMassegeRef}> **  תוקף הכרטיס חייב להכיל  /  </p>
                                    </div>
                                    <hr class="line"/>
                                    <div class="d-flex justify-content-between information"><span>סה"כ לתשלום:</span><span>{this.state.total}₪</span></div>
                                </div>
                            </div>



                            <label id="Conditions" className="containerCheckBox">קראתי ואני מסכים לתנאי השימוש *
                                <input type="checkbox" required className="form-control"/>
                                <span className="checkmark"></span>
                            </label>
                            <br/>

                            <input type="Submit" id="submitbtn" value="שלח" className="btn btn-primary pe-4 ps-4" onClick={this.inputValid}/>
                        </form>
                    </div>
                    
                        



                    <div className="chechoutList">
                        <hr className="mb-4" style={{height:"5px"}}/>
                         <div className="card-body" >

                            <h4 className="mb-3">פרטי הזמנה </h4>

                            <ul className="list-group list-group-flush p-0" >
                                <li className=" d-flex justify-content-between align-items-center px-0 pb-0">
                                    מוצר
                                    <span>סכום ביניים</span>
                                </li>
                                <hr/>
                                {this.state.arrItems.map((el, key) => (
                                    <li className=" d-flex justify-content-between align-items-center px-0 pb-0 " key={key}>
                                      {el.title} {el.count}: 
                                    <span>{el.price*el.count}₪</span>
                                </li>

                                    ))}

                                <br/><br/>
                                <li className="d-flex justify-content-between align-items-center px-0">
                                    סכום ביניים
                                    <span>{this.state.total}₪</span>
                                </li>
                                <hr/>
                                <li className="d-flex justify-content-between align-items-center px-0">
                                    משלום
                                    <span>{this.state.shipping}₪</span>
                                </li>

                                    {(this.state.discount) ? <li className="d-flex justify-content-between align-items-center px-0 mb-2">הנחת קופון<span>{this.state.discount}₪-</span></li> :<span></span>}
                                
                                <li className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                            <strong>סה"כ לתשלום</strong>
                                            <strong>
                                            <p className="mb-0">(כולל מע"מ)</p>
                                            </strong>
                                    </div>
                                <span><strong>{this.state.total}₪<span ref={this.totBeforeCouponRef} style={{color:"red",textDecoration:"line-through",marginLeft:"8px"}}></span></strong></span>
                                </li>
                            </ul>

                            <div className=" mb-3">
                                <div className="card-body"><h5 className="mb-3">הוספת קופון</h5>
                                    
                                        <input type="text" id="discount-code1" ref={this.couponRef} className="form-control font-weight-light" placeholder=" הכנס קופון"/>
                                        <p className="mb-0 mt-1" ref={this.couponMessageRef}></p>
                                        <button type="button" className="btn btn-secondary btn-block waves-effect waves-light mb-4 mt-3" onClick={this.checkCoupon}>החלת קופון </button>
                                    
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>: <OrderConfirmation/>}

            
        </div>
        )
    }
}
