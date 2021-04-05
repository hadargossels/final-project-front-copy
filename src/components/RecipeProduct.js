

import React, { Component } from 'react'
import './RecipeProduct.css';
import axios from "axios"



export default class RecipeProduct extends Component {

    constructor(props){
        super(props)
        
        this.state={
            recipe:"",
            validForm:"",
            arrayOfMassege:[],
        }

        this.textMassegeRef= React.createRef()
        this.textInputRef= React.createRef()
        this.mailMassegeRef= React.createRef()
        this.mailRef= React.createRef()
        this.userMassegeRef= React.createRef()
        this.userLnameRef= React.createRef()
        this.userFnameRef= React.createRef()

        this.inputValid=this.inputValid.bind(this)
        this.updateMassegeList=this.updateMassegeList.bind(this)
    }

    componentDidMount(){

        this.getDataFromMongoDB()
        
        this.textMassegeRef.current.style.visibility="hidden"
        this.mailMassegeRef.current.style.visibility="hidden"
        this.userMassegeRef.current.style.visibility="hidden"
    }

    async getDataFromMongoDB(){

        try{
            let response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/recipes?title=${this.props.match.params.RecipeName}`)
            await this.setState({recipe:response.data[0]})
            this.updateMassegeList()

         }catch(err){
   
            console.log(err);
         }
    }

    myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }

      ////////////////////////////////////////////////////////       valid        /////////////////////////////////

    inputValid(){

        let flag=true
        let tempArray=this.state.arrayOfMassege
        let today

        const textInput =this.textInputRef.current
        const textMassege =this.textMassegeRef.current

        const mailInput = this.mailRef.current
        const mailMassege = this.mailMassegeRef.current

        const fnameInput= this.userFnameRef.current
        const lnameInput= this.userLnameRef.current
        const userMassage= this.userMassegeRef.current

        /////////////    check email   ///////////

        let array=mailInput.value.split("@");

        if((mailInput.value.includes("@")) && (array.length===2)&&(array[1].includes("."))&& (array[0])){
            array=array[1].split(".");
            if(array.length>=2)
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

        /////////////    check text   ///////////

        if(textInput.value.length<2){
            flag=false
            textMassege.style.visibility="visible"
        }
        else
        textMassege.style.visibility="hidden"


        this.setState({validForm:flag})

        if(flag){
            
            today=new Date()

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

            let message={fname:fnameInput.value,lname:lnameInput.value,email:mailInput.value,textMessage:textInput.value,titleComment:this.state.recipe.title,date:today,time:hour}
            tempArray.unshift(message)

            axios.post(`${process.env.REACT_APP_MONGO_DATABASE}/api/comments`,message)
            .then(function (response) {
            })
            .catch(function (error) {
            console.log(error);
            });

            this.setState({arrayOfMassege:tempArray})
            window.alert("ההודעה נוספה בהצלחה")
            this.myFunction()
        }
    }

     async updateMassegeList(){

        let storage
        let array
    
        try{
            let response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/comments?titleComment=${this.state.recipe.title}`)
    
            storage = (response.data)? response.data : []
            array=storage.reverse()
            this.setState({arrayOfMassege:array})
        }catch(err){
           console.log(err);
        }
    }


    render() {
        return (
            <div className="myContainerRecipesProduct">
                <h1 className="mb-3">{this.state.recipe.title}</h1>
                <div className="imageRecipe">
                    <img src={this.state.recipe.img} alt={this.state.recipe.alt}></img>
                </div>
                <div className="fs-3 mt-3">
                    {this.state.recipe.description}
                </div>

                <div className="myRowText">
                    <div className="fs-4 colText">
                        <h3 className="mb-3">מרכיבים:</h3>
                        {this.state.recipe && this.state.recipe.ingredients.map((el, key) => (
                                <p key={key} >{el}</p>
                            ))}
                    </div>
                    <div className="fs-4 colText">
                        <h3 className="mb-3"> אופן ההכנה:</h3>
                        {this.state.recipe.preparation}
                    </div>
                    
                </div>

                <hr/>

                <h3>🙂 מוזמנים לשתף איך יצא לכם</h3>
                        
                            
                        <div className="topnav m-5" >
                            <span className="active" onClick={()=>this.myFunction()}>לחץ כאן להוספת תגובה</span>

                            <div className="formRecipe fs-4 mb-3" id="myLinks">
                                
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

                                    <div className="form-group  ">
                                        <textarea required className="form-control " placeholder=" הודעה *" rows="10" ref={this.textInputRef}></textarea>
                                        <p id="usercheck" style={{color: "red"}} ref={this.textMassegeRef} className="vlidMassege mb-4">**חובה למלא תוכן הודעה  </p>
                                    </div>


                                    <input type="button" id="submitbtn" value="הגב" className="btn btn-dark"onClick={this.inputValid}/>
                                </div>

                                <div className="massegeList mt-3">

                                {(this.state.arrayOfMassege)&& this.state.arrayOfMassege.map((el, key)=>(

                                        <div className="formRecipe fs-4 mb-3" key={key}>
                                            <div className="rowComment">
                                                <div className="detailMassege">
                                                    שם : {el.fname} {el.lname}   <br/>
                                                    תאריך : {el.date}  <br/>
                                                    שעה :  {el.time}
                                                </div>

                                                <div className="theMassege">
                                                    {el.textMessage}
                                                </div>
                                            </div>
                                            
                                        </div>
                                ))}

                                </div>
                            
                        </div>



            </div>
        )
    }
}
