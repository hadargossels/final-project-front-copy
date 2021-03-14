
import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';
import './Product.css';
import Rating from './Rating';
import "firebase/database";
import {db} from '../firebase'

//const productArr= require("../dataBase/productsData.json")

class Product extends Component{
    constructor(props){
        super(props)

        this.popRef = React.createRef()
        this.priceChoiceRef= React.createRef()
        
        this.state={
            prod:"",
            arrImage:[],
            selectedPrice:"",
            size:"",
            counter:1,
            priceSmall:"",
            validForm:"",
            counterMassege:0,
            arrayOfMassege:[],
         }
         this.state.priceSmallExists=this.priceSmallExists.bind(this)
         this.state.typeOfCake=this.typeOfCake.bind(this)
         this.state.makeArrayImage=this.makeArrayImage.bind(this)
         this.setInLocalStorage=this.setInLocalStorage.bind(this)
         this.popUp=this.popUp.bind(this)

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
        
        this.getDataFromFirebase()

        this.textMassegeRef.current.style.visibility="hidden"
        this.mailMassegeRef.current.style.visibility="hidden"
        this.userMassegeRef.current.style.visibility="hidden"
    }
    getDataFromFirebase(){
        let myData = ""
        
        db.on('value',async (snapshot)=>{
          if(snapshot.val()!=null){
  
              myData = (snapshot.val())
  
          for (const [key, value] of Object.entries(myData)) {
              myData[key] = Object.keys(myData[key]).map((iKey) => myData[key][iKey])
            }
            myData = myData.products

            const product=myData.filter((item)=>{
                return (item["title"]==this.props.match.params.ProductName)
            })
            await this.setState({prod:product[0]})
            this.makeArrayImage()
            this.priceSmallExists()
            this.updateMassegeList()
          } 
        })
      }


    showPriceSmall(){
        
        const price = this.priceChoiceRef.current
        price.innerText=` ₪ ${this.state.prod.priceSmall}`
        this.setState({selectedPrice:this.state.prod.priceSmall,size:"קטן"})

    }   
    showPriceBig(){
        const price = this.priceChoiceRef.current
        price.innerText=` ₪ ${this.state.prod.priceBig}`
        this.setState({selectedPrice:this.state.prod.priceBig,size:"גדול"})
    } 

    priceSmallExists(){

        const price = this.priceChoiceRef.current

        if(this.state.prod.priceSmall && document.querySelector("#btns")){
            document.querySelector("#btns").style.display="inline"
            this.setState({priceSmall:`מחיר: ${this.state.prod.priceBig}₪ גדול  /${this.state.prod.priceSmall}₪  קטן `}) 
            
        }else if(document.querySelector("#btns") && price){
            
            price.innerText=` ₪ ${this.state.prod.priceBig}`
            document.querySelector("#btns").style.display="none"
            this.setState({ priceSmall:`  מחיר:  ${this.state.prod.priceBig}₪`})
        }
        
    }
    typeOfCake(){

        if(this.state.prod.milk && this.state.prod.parve)
            return ` פרווה / חלבי`
        if(this.state.prod.milk)
            return `חלבי`
        if(this.state.prod.parve)
            return `פרווה`
        
    }

//////////////////    array of image to the slider     //////////////////////////////
    makeArrayImage(){

        let count=2
        let arr=[]

        while(this.state.prod["img"+count]){
            arr.push(this.state.prod["img"+count])
            count++
        }
        this.setState({arrImage:arr})
    }
    
//////////////////////      add product to the cart     ///////////////////////////////////

     async setInLocalStorage(){

        if(this.state.prod.priceSmall && !this.state.selectedPrice){
            const price = this.priceChoiceRef.current
            price.innerText=` בחר גודל`
            return

        }
        if(!this.state.prod.priceSmall){
            await this.setState({selectedPrice:this.state.prod.priceBig}) 
        }
        let flag=false
        let storage=JSON.parse(localStorage.getItem("cartStorage")||"[]")

            for (const item of storage) {
                if(item.id==this.state.prod.id && this.state.selectedPrice==item.price){
                    item.count=item.count+this.state.counter
                    flag=true
                }
            }


            if(!flag){
                if(this.state.size=="קטן")
                    storage.push({id:this.state.prod.id,count:this.state.counter,title:this.state.prod.title,img:this.state.prod.img2,price:this.state.selectedPrice,size:this.state.size})
                else
                    storage.push({id:this.state.prod.id,count:this.state.counter,title:this.state.prod.title,img:this.state.prod.img,price:this.state.selectedPrice,size:this.state.size})
            }
        
            localStorage.setItem("cartStorage",JSON.stringify(storage))
            this.popUp()
    }

    popUp() {
        var popup = this.popRef.current
        popup.classList.toggle("show");
        setTimeout(() => {
            popup.classList.toggle("show");
        }, 2000);
      }
//////////////////////      add product to the cart   end  ////////////////
//////////////////////      counter     ///////////////////////////////////
quantity(e){

    let count=this.state.counter
    
    if(e.value=="+"){
        count++
    }
    if(e.value=="-" && (count>1)){
        count--
    }
    this.setState({counter:count})
}
//////////////////////      counter end     ///////////////////////////////////
//////////////////////      form massege     ///////////////////////////////////
myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  inputValid(){

    let flag=true
    let tempArray=[]
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

    if((mailInput.value.includes("@")) && (array.length==2)&&(array[1].includes("."))){
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

        let count=this.state.counterMassege
        let massege={id:this.state.counterMassege,fname:fnameInput.value,lname:lnameInput.value,mail:mailInput.value,textMassege:textInput.value,titleFeedBack:this.state.prod.title,date:today,time:hour}
        count++
        tempArray.unshift(massege)
        db.child('feedBackStorage').child(massege.id).set(massege)

        this.setState({counterMassege:count})
        this.setState({arrayOfMassege:tempArray})
        window.alert("ההודעה נוספה בהצלחה")
        this.myFunction()
    }
}

 updateMassegeList(){

    let storage
    let myData = ""
    
    db.on('value', (snapshot)=>{
        if(snapshot.val()!=null){

            myData = (snapshot.val())

        for (const [key, value] of Object.entries(myData)) {
            myData[key] = Object.keys(myData[key]).map((iKey) => myData[key][iKey])
          }
          storage = (myData.feedBackStorage)? myData.feedBackStorage : []
        } 
      })

    let tempArray
    let revtempArray

    if(storage[0]){
            this.setState({counterMassege:storage.length})
            tempArray=storage.filter((item)=>{
                return (item["titleFeedBack"]===this.state.prod.title)
         })
         revtempArray=tempArray.reverse()
    }

    this.setState({arrayOfMassege:revtempArray})
}



//////////////////////      form massege end    ///////////////////////////////////




   render(){

    return(
         <div id="bg">
            <div className="margin-top-product">
                <div className="d-flex flex-row bd-highlight flex-wrap justify-content-center">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade p-2 bd-highlight mt-1" data-bs-ride="carousel">
                   
               
                        <div className="carousel-inner img-size">
                
                            <div className="carousel-item active" data-bs-interval="3000">
                            <div className="container">
                                <img src={this.state.prod.img} className="d-block w-100 img-size" alt="cake"></img>
                                </div>
                            </div>
                            {this.state.arrImage.map((el, key) => (
                            <div key={key} className="carousel-item" data-bs-interval="3000">
                                <div className="container">
                                    <img src={el} className="d-block w-100 img-size" alt="cake"></img>
                                </div>
                            </div>
                            ))}
                           
                        </div>
                        
                        {this.state.arrImage[0]&&<span>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark rounded-circle " aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                        </span>}

                        
                        <div>
                            <NavLink to="/Catalog"  href="#" ><button type="button" id="btnShop" style={{backgroundColor:"rgb(155,23,80)"}}> <b>חזרה לחנות</b></button></NavLink>
                            
                            <div className="btn-group mr-2 ms-5" role="group" aria-label="First group" >
                                <button type="button" className="btn btn-warning mt-2 mb-2 fs-4" value="-" onClick={(e)=>this.quantity(e.target)}>-</button>
                                <div  className="zero mt-2 mb-2 ps-3 pe-3 pt-2 fs-4 pt-2" style={{backgroundColor:"white"}}>{this.state.counter}</div>
                                <button  type="button" className="btn btn-success mt-2 mb-2" value="+" onClick={(e)=>this.quantity(e.target)}>+</button>
                            </div>
                        </div>
                    </div>
           

                    <div className="myCard" style={{"direction":"rtl","position":"relative"}}>
                        
                        <div className="card-body fs-4">
                            <h3 className="card-title">{this.state.prod.title}</h3>
                    
                            <div className="text-start stars1">
                                <Rating stars={this.state.prod.stars}/>
                            </div>

                            <ul>
                                <li className="card-text" style={{"margin":"1px"}}>{this.state.prod.description}</li>
                                <li id="priceText" className="card-text" style={{"margin":"1px"} }>{this.state.priceSmall}</li>
                                <li className="card-text" style={{"margin":"1px"}}>{this.typeOfCake()}</li>
                                <li className="card-text" style={{"margin":"1px"}}>את המוצר ניתן להזמין מראש בלבד</li>
                            </ul>

                        </div>
                    
                        <div className="card-body" style={{"position":"relative"}}>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" id="btns" style={{"direction":"ltr",display: "none"}}>

                                <input onClick={()=>this.showPriceBig()} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"></input>
                                <label className="btn btn-outline-danger" htmlFor="btnradio1">גדול</label>

                                <input  onClick={()=>this.showPriceSmall()} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" ></input>
                                <label className="btn btn-outline-danger" htmlFor="btnradio2">קטן</label>

                            </div>
                            <div id="priceChoice" ref={this.priceChoiceRef}>

                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-danger popup" onClick={this.setInLocalStorage}>
                                    הוסף לעגלה<i className="fas fa-shopping-cart"></i><span className="popuptext" ref={this.popRef} id="myPopup">המוצר הוסף לעגלה!</span></button>
                            </div>                  
                        </div>
                    </div>
                </div>
            </div>

            <hr/>


            <h3>🙂 מוזמנים לשתף איך יצא </h3>
                        
                    <div className="formProduct"> 
                        <div className="topnav m-5" >
                            <a className="active" onClick={()=>this.myFunction()}>לחץ כאן להוספת תגובה</a>

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
                                    <div className="rating stars2">
                                        <input type="radio" name="rating" value="5" id="5"></input><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"></input><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"></input><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"></input><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"></input><label htmlFor="1">☆</label>
                                    </div>
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
                                                    {el.textMassege}
                                                </div>
                                            </div>
                                            
                                        </div>
                                ))}

                                </div>
                            
                        </div>
                    </div>

        </div>
        

        
      );
   }
}
   export default Product;