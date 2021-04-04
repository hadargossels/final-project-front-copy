
import React, { Component } from 'react'
import Map from './Map'

import './Contact.css'



export default class Contact extends Component {


    constructor(){
        super()

        this.state={
            validForm:"",
            counter:1,
            arrayOfMassege:[],
        }

        this.mailRef = React.createRef()
        this.mailMassegeRef = React.createRef()
        this.userFnameRef = React.createRef()
        this.userLnameRef = React.createRef()
        this.userMassegeRef = React.createRef()
        this.phoneInputRef = React.createRef()
        this.phoneMassegeRef= React.createRef()
        this.cityRef = React.createRef()
        this.cityMassegeRef = React.createRef()
        this.addressRef = React.createRef()
        this.addressMassegeRef= React.createRef()
        this.textInputRef= React.createRef()
        this.textMassegeRef= React.createRef()

        this.inputValid=this.inputValid.bind(this)
    }

    componentDidMount(){

        this.textMassegeRef.current.style.visibility="hidden"
        this.addressMassegeRef.current.style.visibility="hidden"
        this.cityMassegeRef.current.style.visibility="hidden"
        this.mailMassegeRef.current.style.visibility="hidden"
        this.userMassegeRef.current.style.visibility="hidden"
        this.phoneMassegeRef.current.style.visibility="hidden"
    }

 ////////////////////////////////////////////////////////       valid        /////////////////////////////////

    inputValid(){

        let flag=true

        const textInput =this.textInputRef.current
        const textMassege =this.textMassegeRef.current

        const addressInput = this.addressRef.current
        const addressMassege = this.addressMassegeRef.current

        const mailInput = this.mailRef.current
        const mailMassege = this.mailMassegeRef.current

        const cityInput = this.cityRef.current
        const cityMassege = this.cityMassegeRef.current

        const fnameInput= this.userFnameRef.current
        const lnameInput= this.userLnameRef.current
        const userMassage= this.userMassegeRef.current

        const phoneInput= this.phoneInputRef.current
        const phoneMassage= this.phoneMassegeRef.current


        /////////////    check email   ///////////

        let array=mailInput.value.split("@");

        if((mailInput.value.includes("@")) && (array.length===2)&&(array[1].includes("."))&& (array[0])){
            array=array[1].split(".");
            if(array.length===2)
                mailMassege.style.visibility="hidden"
            else{
                mailMassege.style.visibility="visible"
                flag=false
            }
            }else{
                mailMassege.style.visibility="visible"
                flag=false
            }
        /////////////    check user   ///////////

            if(lnameInput.value.length<2 || fnameInput.value.length<2){
                flag=false
                userMassage.style.visibility="visible"
            }
            else
                userMassage.style.visibility="hidden"

        /////////////    check phone   ///////////
        
        if(phoneInput.value[0] !=="0" || phoneInput.value[1]!=="5" || phoneInput.value.length!==10){
            phoneMassage.style.visibility="visible"
            flag=false
        }
        else
            phoneMassage.style.visibility="hidden"


         /////////////    check city   ///////////

         if(cityInput.value.length<2){
            flag=false
            cityMassege.style.visibility="visible"
        }
        else
        cityMassege.style.visibility="hidden"

         /////////////    check address   ///////////

         if(addressInput.value.length<2){
            flag=false
            addressMassege.style.visibility="visible"
        }
        else
        addressMassege.style.visibility="hidden"

        /////////////    check text   ///////////

        if(textInput.value.length<2){
            flag=false
            textMassege.style.visibility="visible"
        }
        else
        textMassege.style.visibility="hidden"


        this.setState({validForm:flag})

        if(flag){

            let storage=JSON.parse(localStorage.getItem("massegeStorage")||"[]")
            let tempArray=this.state.arrayOfMassege
            let count=this.state.counter
            let massege={id:this.state.counter,fname:fnameInput.value,lname:lnameInput.value,mail:mailInput.value,city:cityInput.value,address:addressInput.value,phone:phoneInput.value,textMassege:textInput.value}
            count++
            tempArray.push(massege)
            storage.push(massege)

            localStorage.setItem("massegeStorage",JSON.stringify(storage))
            this.setState({counter:count})
            this.setState({arrayOfMassege:tempArray})
            window.alert("ההודעה נשלחה בהצלחה")
        }
    }
    

    valiNumber(e) {
        e.value=e.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        }
  


    render() {
        return (
            
            <div className="myContainerContact">
                <h1>החנות שלי</h1>
                <Map/>

                <div className="myRowContact">
                    <div className="contactInfo">

                    <div className="contact_options">
                            <div className="contact_options_info">
                                <h4><strong> כתובת </strong></h4>
                                <p>היקינטון 34, רחובות</p>
                            </div>
                            <i className="fas fa-home"></i>
                        </div>

                        <div className="contact_options">
                            <div className="contact_options_info">
                                <h4><strong> פלאפון ליצירת קשר </strong></h4>
                                <p>052-4284203 (ניתן לחייג או לשלוח הודעת ווצאפ)</p>
                            </div>
                            <i className="fas fa-phone"></i>
                        </div>

                        <div className="contact_options">
                            <div className="contact_options_info">
                                <h4><strong> מייל ליצירת קשר </strong></h4>
                                <p> razbotner@hotmail.com</p>
                            </div>
                            <i className="far fa-envelope"></i>
                        </div>

                        <div className="contact_options ">
                            <div className="contact_options_info">
                                <h4 className="me-5 mt-4"><strong> ניתן גם להשאיר לנו הודעה באתר ונחזור אליכם </strong></h4>
                            </div>


                            <form className="formContact m-5 fs-4 ">
                                
                                <div className="form-group row ">
                                    <div className="col">
                                        <input type="text" name="fname" id="fname" required className="form-control"  placeholder="שם פרטי *" ref={this.userFnameRef}/>
                                    </div>
                                    
                                    <div className="col" >
                                        <input type="text" name="lname" id="lname" required className="form-control" placeholder="שם משפחה *" ref={this.userLnameRef}/>
                                    </div>

                                    <p id="usercheck" style={{color: "red"}} className="vlidMassege m-0" ref={this.userMassegeRef}> **חובה למלא שם פרטי ומשפחה תיקניים  </p>
                                           
                                </div>


                                <div className="form-group ">
                                   
                                    <input type="email" name="email" id="email" required className="form-control" placeholder='דוא"ל *'  ref={this.mailRef}/>
                                    <p id="mailcheck" style={{color: "red"}} ref={this.mailMassegeRef} className="vlidMassege m-0"> **חובה למלא מייל תקין  </p>
                                           
                                </div>


                                <div className="col ">
                                    <input type="city" name="city" id="city" placeholder=" עיר מגורים *" required className="form-control" ref={this.cityRef}/>
                                    <p id="citycheck" style={{color: "red"}} ref={this.cityMassegeRef} className="vlidMassege m-0"> **חובה למלא עיר מגורים תקין  </p>
                                </div>


                                <div className="form-group ">
                                        <input type="address" name="address" id="address" required className="form-control" placeholder=" כתובת * ( רחוב ומספר בית ) " ref={this.addressRef}/>
                                        <p id="addresscheck" style={{color: "red"}} ref={this.addressMassegeRef} className="vlidMassege m-0"> **חובה למלא כתובת מגורים תקין  </p>
                                </div>


                                <div className="form-group  ">
                
                                    <input type="phone" name="phone" id="phone" required className="form-control" placeholder=" טלפון  *" maxLength="10" onChange={(e)=>this.valiNumber(e.target)} ref={this.phoneInputRef}/>
                                    <p id="usercheck" style={{color: "red"}} ref={this.phoneMassegeRef} className="vlidMassege m-0">**חובה למלא מספר פלאפון תקין </p>
                                         
                                </div>


                                <div className="form-group  ">
                                   <textarea required className="form-control " placeholder=" הודעה *" rows="10" ref={this.textInputRef}></textarea>
                                   <p id="usercheck" style={{color: "red"}} ref={this.textMassegeRef} className="vlidMassege mb-4">**חובה למלא תוכן הודעה  </p>
                                </div>


                                <input type="button" id="submitbtn" value="שלח" className="btn btn-primary"onClick={this.inputValid}/>
                            </form>


                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
