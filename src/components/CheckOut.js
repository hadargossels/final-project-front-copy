
import React, { Component } from 'react'
import {NavLink } from 'react-router-dom';
import './CheckOut.css';
import OrderConfirmation from './OrderConfirmation';
import Paypal from './Paypal';
import {db} from '../firebase'
import {auth} from '../firebase'
import 'firebase/auth'
import "firebase/database";

let coupons=[]
// const coupons= require("../dataBase/couponData.json")


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
            validPay:"",
            detailUser:"",
            cardType:"",
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
        this.cardMassegeRef=React.createRef()
        this.cityRef=React.createRef()
        this.cityMessageRef=React.createRef()
        this.addressRef=React.createRef()
        this.addressMessageRef=React.createRef()
        this.houseTypeRef=React.createRef()
        this.zipRef=React.createRef()
        this.cardDetails=React.createRef()
        this.termsInputRef=React.createRef()
        this.termsMassegeRef=React.createRef()
        

        this.calculator=this.calculator.bind(this)
        this.checkCoupon=this.checkCoupon.bind(this)
        this.inputValid=this.inputValid.bind(this)
        this.validPayment = this.validPayment.bind(this)
    }


    componentDidMount(){

        this.getDataFromFirebase()
        this.mailMassegeRef.current.style.display="none"
        this.userMassegeRef.current.style.display="none"
        this.cityMessageRef.current.style.display="none"
        this.addressMessageRef.current.style.display="none"
        this.phoneMassegeRef.current.style.display="none"
        this.termsMassegeRef.current.style.display="none"

        this.loadItemsFromLocalStorage()
        this.calculator()

    }

    getDataFromFirebase(){

        let myData = ""
        
        db.on('value',async (snapshot)=>{
          if(snapshot.val()!=null){
  
              myData = (snapshot.val())
  
          for (const [key, value] of Object.entries(myData)) {
              myData[key] = Object.keys(myData[key]).map((iKey) => myData[key][iKey])
            }
            coupons=myData.coupons
           } 
        })
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

        if(coupons[0]){
            for (const item of coupons) {
                if(item.serialNumber===coupon.value){
                    await this.setState({couponCurrect:item})
                    flag=true
                }
            }
        }
        
        
        if(flag){
            couponMessage.innerHTML=`הקופון הוזן בהצלחה קיבלת ${this.state.couponCurrect.discountPercentage}%  הנחה`
            couponMessage.style.color="green"

            calculateDisc= Math.floor(this.state.total*(1-this.state.couponCurrect.discountPercentage/100)) 
            tot=this.state.total
            totBefore.innerHTML=`${tot}₪`
            let disc=Math.floor((this.state.couponCurrect.discountPercentage/100)*this.state.total)
            
            this.setState({discount:disc})
            this.setState({totalBeforeCoupon:tot})
            this.setState({total:calculateDisc})
            this.setState({couponUsed:true})


        }else{
            this.setState({discount:""})
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

    ////////////////////////////////////////////////////////       valid Form       /////////////////////////////////

    async inputValid(){

        let flag=true

        const mailInput = this.mailRef.current
        const mailMassege = this.mailMassegeRef.current

        const fnameInput= this.userFnameRef.current
        const lnameInput= this.userLnameRef.current
        const userMassage= this.userMassegeRef.current

        const cityInput = this.cityRef.current
        const cityMassege =this.cityMessageRef.current

        const addressInput =this.addressRef.current
        const addressMessage =this.addressMessageRef.current

        const phoneInput= this.phoneInputRef.current
        const phoneMassage= this.phoneMassegeRef.current

        const zipInput= this.zipRef.current


        const termInput= this.termsInputRef.current
        const termMessage= this.termsMassegeRef.current

        /////////////    check email   ///////////

        let array=mailInput.value.split("@");

        if((mailInput.value.includes("@")) && (array.length==2)&&(array[1].includes("."))){
            array=array[1].split(".");
            if(array.length>=2)
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

        /////////////    check city   ///////////

        if(cityInput.value.length<2){
            flag=false
            cityMassege.style.display="inline"
        }
        else
            cityMassege.style.display="none"

        /////////////    check address   ///////////

        if(addressInput.value.length<2){
            flag=false
            addressMessage.style.display="inline"
        }
        else
            addressMessage.style.display="none"

        /////////////    check phone   ///////////
           
        if(phoneInput.value[0] !=0 || phoneInput.value[1]!=5 || phoneInput.value.length!==10){
            phoneMassage.style.display="inline"
            flag=false
        }
        else
            phoneMassage.style.display="none"

       
        
        /////////////    check term   ///////////

        if(!termInput.checked){
            termMessage.style.display="inline"
            flag=false
        }else{
            termMessage.style.display="none"
        }

        if(flag){

            let userDetail={fname:fnameInput.value,lname:lnameInput.value,email:mailInput.value,city:cityInput.value,address:addressInput.value,houseType:this.houseTypeRef.current.value,zip:zipInput.value,phone:phoneInput.value}
            localStorage.setItem("userDetails",JSON.stringify(userDetail))
            this.setState({detailUser:userDetail})
        }

        await this.setState({validForm:flag})

        if(flag){
            this.validityMassegeRef.current.style.display="none"
            this.cardMassegeRef.current.style.display="none"
            this.cardDetails.current.style.display="none"
        }
    }


    //////////////////////// valid Pay    ///////////////////////////////////
       
    validPayment(){

        let flag=true
        const cardMassege= this.cardMassegeRef.current

        const validityInput= this.validityRef.current
        const validityMassege= this.validityMassegeRef.current


        /////////////    chose type of payment   ///////////

        if(!this.state.cardType){
            cardMassege.style.display="inline"
            flag=false
        }else{
            cardMassege.style.display="none"
        }



        if(this.state.cardType==="mastercard" || this.state.cardType==="visa" || this.state.cardType==="amex"){

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
            

        }else if(this.state.cardType==="paypal"){
            if(!(localStorage.getItem("order")==="correct"))
            flag=false
        }else{
            flag=false
        }

        this.setState({validPay:flag})

        if(flag){

            let today=new Date()

            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            let hh = today.getHours();
            let m = today.getMinutes();
            if(m<10)
                m="0"+m
            if(hh<10)
                hh="0"+hh
            let hour= hh+ ':' +m
            
            today = dd + '/' + mm + '/' + yyyy;

            let myData = ""
            let orderLng
        
            db.on('value', (snapshot)=>{
                if(snapshot.val()!=null){
        
                    myData = (snapshot.val())
        
                for (const [key, value] of Object.entries(myData)) {
                    myData[key] = Object.keys(myData[key]).map((iKey) => myData[key][iKey])
                  }
                  orderLng = (myData.orders)? myData.orders.length : 0
                } 
              })


            let data = {id:orderLng,cart:this.state.arrItems,userOrder:this.state.detailUser,payment:this.state.total,date:{date:today,time:hour},doneAndSend:false}

            auth.onAuthStateChanged(user=>{
  
                if(user){
                    db.child('orders').child(orderLng).set(data)
                }
             })
        }
    }
    
    valiNumber(e) {
        e.value=e.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        }

        cardType(e){

            this.setState({cardType:e})

            if(e==="mastercard" || e==="visa" || e==="amex")
                this.cardDetails.current.style.display="inline"
            else 
                this.cardDetails.current.style.display="none"

        }
      


    render() {
        return (
            <div>
                {(!this.state.validPay)? <div className="myContainerCart">
                
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
                                    <div className="step completed m-0">
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

                <div className="btnRow mb-3">
                    <NavLink to="/Catalog" ><button type="button" style={{backgroundColor:"rgb(155,23,80)"}}> <b>חזרה לחנות</b></button></NavLink>
                    <NavLink to="/Cart" ><button type="button" style={{backgroundColor:"rgb(93,0,29)"}}> <b> חזרה לעגלה </b></button></NavLink>
                </div>

                <div className="myRowCart">
                                        
                    <div id="myForm">
                        <hr style={{height:"5px"}}></hr>
                        <div className="formToOrder m-5 fs-4">
                            <h3>פרטי משלוח:</h3>
                            <div className="form-group row ">
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
                                <p id="mailcheck" style={{color: "red"}} ref={this.mailMassegeRef} className="vlidMassege">
                                        **חובה למלא מייל תקין  
                                </p>
                            </div>

                            <div className="col">
                                <label htmlFor="city">
                                    עיר:  *
                                </label>
                                <input type="city" name="city" id="city" required className="form-control" ref={this.cityRef}/>
                                <p id="citycheck" style={{color: "red"}} ref={this.cityMessageRef} className="vlidMassege">**חובה למלא את שם העיר </p>
                            </div>

                            <div className="form-group row">
                                
                                <div className="col">
                                    <label htmlFor="address">
                                        כתובת:  *
                                    </label>
                                    <input type="address" name="address" id="address" required className="form-control" placeholder="מספר בית ושם רחוב" ref={this.addressRef}/>
                                </div>
                                
                                <div className="col">
                                    <label htmlFor="typeAddress">
                                        
                                    </label>
                                    <input type="text" name="typeAddress" id="typeAddress" className="form-control" placeholder="דירה/בית פרטי/יח' דיור..." ref={this.houseTypeRef}/>
                                </div>
                                <p id="addresscheck" style={{color: "red"}} ref={this.addressMessageRef} className="vlidMassege">** חובה למלא כתובת </p>
                            </div>
                        
                            <div className="col">
                                <label htmlFor="zip">
                                    מיקוד:
                                </label>
                                <input type="zip" name="zip" id="zip" className="form-control" maxLength="7" onChange={(e)=>this.valiNumber(e.target)} ref={this.zipRef}/>
                            </div>

                            <div className="form-group ">
                                <label htmlFor="phone">
                                    פלאפון:  *
                                </label>
                                <input type="phone" name="phone" id="phone" required className="form-control" maxLength="10" onChange={(e)=>this.valiNumber(e.target)} ref={this.phoneInputRef}/>
                                <p id="usercheck" style={{color: "red"}} ref={this.phoneMassegeRef} className="vlidMassege">
                                    **חובה למלא מספר פלאפון תקין  
                                </p>

                                <br/>
                                <label id="Conditions" className="containerCheckBox">קראתי ואני מסכים לתנאי השימוש *
                                    <input type="checkbox" required className="form-control" ref={this.termsInputRef}/>
                                    <span className="checkmark"></span><br/>
                                    <p id="termscheck" style={{color: "red"}} className="vlidMassege" ref={this.termsMassegeRef}> ** חובה לאשר את התקנון שלא קיים  </p>
                                </label>
                
                                <button id="submitbtn" className="btn btn-primary pe-4 ps-4" onClick={this.inputValid}>שלח</button>
                            </div>

                            <hr/>
                            {(this.state.validForm)? <div>
                            <h3> אמצעי תשלום:</h3>

                            <div className="col-md-12">
                                <div className="payment-info">
                                    <span className="type d-block mt-3 mb-1"> סוג כרטיס / פייפל</span>
                                    <label className="radio"> <input type="radio" name="card" value="mastercard" onClick={(e)=>this.cardType(e.target.value)}/> <span><img width="50" src="https://img.icons8.com/color/48/000000/mastercard.png" /></span> </label>
                                    <label className="radio"> <input type="radio" name="card" value="visa" onClick={(e)=>this.cardType(e.target.value)}/> <span><img width="50" src="https://img.icons8.com/officel/48/000000/visa.png" /></span> </label>
                                    <label className="radio"> <input type="radio" name="card" value="amex" onClick={(e)=>this.cardType(e.target.value)}/> <span><img width="50" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" /></span> </label>
                                    <label className="radio"> <input type="radio" name="card" value="paypal" onClick={(e)=>this.cardType(e.target.value)}/> <span><img width="50" src="https://img.icons8.com/officel/48/000000/paypal.png" /></span> </label>
                                    <br/> <p id="usercheck" style={{color: "red"}} className="vlidMassege" ref={this.cardMassegeRef}> ** נא לבחור אמצעי תשלום  </p>

                                    
                                    <div ref={this.cardDetails}>
                                        <div><label className="credit-card-label">שם בעל הכרטיס:</label><input type="text" className="form-control credit-inputs" placeholder="ישראל ישראלי" required/></div>
                                        <div><label className="credit-card-label">מספר כרטיס: </label><input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" required onChange={(e)=>this.valiNumber(e.target)}/></div>
                                        <div className="row ">
                                            <div className="col-md-6"><label className="credit-card-label">תוקף הכרטיס:</label><input type="text" className="form-control credit-inputs" placeholder="12/24" required maxLength="5"ref={this.validityRef}/></div>
                                            <div className="col-md-6"><label className="credit-card-label">CVV:</label><input type="text" className="form-control credit-inputs" placeholder="342" required maxLength="3" onChange={(e)=>this.valiNumber(e.target)}/></div>
                                            <p id="usercheck" style={{color: "red"}} className="vlidMassege" ref={this.validityMassegeRef}> **  תוקף הכרטיס חייב להכיל  /  </p>
                                        </div>
                                    </div>

                                    {(this.state.cardType==="paypal")&& <Paypal numberItem={this.state.arrItems.length} total={this.state.total}/>}

                                    <hr className="line"/>
                                    <div className="d-flex justify-content-between information"><span>סה"כ לתשלום:</span><span>{this.state.total}₪</span></div>
                                </div>
                            </div>

                            <button id="submitbtn" className="btn btn-primary pe-4 ps-4" onClick={this.validPayment}>שלם</button>
                            </div>:<div></div>}
                        </div>
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

            </div>: <OrderConfirmation userDetail={this.state.detailUser} numberItem={this.state.arrItems.length} sumItem={this.state.temporaryAmount} shipping={this.state.shipping} total={this.state.total} discountBool={this.state.couponUsed} discount={this.state.discount}/>}
        </div>
        )
    }
}
