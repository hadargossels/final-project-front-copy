
import React, { Component } from 'react';
import Header from "./Header";
import './Product.css';
import Rating from './Rating';


const productArr= require("../dataBase/productsData.json")

class Product extends Component{
    constructor(props){
        super(props)
        

        const product=productArr.filter((item)=>{
            return (item["title"]==this.props.match.params.ProductName)
        })

        this.state={
            prod:product[0],
            arrImage:[],
         }
         this.state.priceSmallExists=this.priceSmallExists.bind(this)
         this.state.typeOfCake=this.typeOfCake.bind(this)
         this.state.makeArrayImage=this.makeArrayImage.bind(this)
    }

    componentDidMount(){
        this.makeArrayImage()
    }
    showPriceSmall(){
        let price=document.querySelector("#priceChoice")
        price.innerText=` ₪ ${this.state.prod.priceSmall}`
        

    }   
    showPriceBig(){
        let price=document.querySelector("#priceChoice")
        price.innerText=` ₪ ${this.state.prod.priceBig}`
    } 

    priceSmallExists(){

        if(this.state.prod.priceSmall){
            return `מחיר: ${this.state.prod.priceBig}₪ גדול  /${this.state.prod.priceSmall}₪  קטן `
        }else{
            setTimeout(()=>{let price=document.querySelector("#priceChoice")
            price.innerText=` ₪ ${this.state.prod.priceBig}`
            document.querySelector("#btns").style.display="none"
                },2)
             
            return `  מחיר:  ${this.state.prod.priceBig}₪`
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

    makeArrayImage(){

        let count=2
        let arr=[]

        while(this.state.prod["img"+count]){
            arr.push(this.state.prod["img"+count])
            count++
        }
        this.setState({arrImage:arr})
    }

   render(){
    
      return(

         <div id="bg">
            <div className="margin-top-product">
                <div className="d-flex flex-row bd-highlight flex-wrap justify-content-center">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade p-2 bd-highlight mt-1" data-bs-ride="carousel">
                   
               
                        <div className="carousel-inner img-size">
                
                            <div className="carousel-item active">
                            <div className="container">
                                <img src={this.state.prod.img} className="d-block w-100 img-size" alt="cake"></img>
                                </div>
                            </div>
                            {this.state.arrImage.map((el, key) => (
                            <div key={key} className="carousel-item" >
                                <div className="container">
                                    <img src={el} className="d-block w-100 img-size" alt="cake"></img>
                                </div>
                            </div>
                            ))}
                           
                        </div>
                        
                        {this.state.arrImage[0]&&<span>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                        </span>}
                    </div>
           

                    <div className="myCard" style={{"direction":"rtl","position":"relative"}}>
                        
                        <div className="card-body fs-4">
                            <h3 className="card-title">{this.state.prod.title}</h3>
                    
                            <div className="text-start stars1">
                                <Rating stars={this.state.prod.stars}/>
                            </div>

                            <ul>
                                <li className="card-text" style={{"margin":"1px"}}>{this.state.prod.description}</li>
                                <li id="priceText" className="card-text" style={{"margin":"1px"} }>{this.priceSmallExists()}</li>
                                <li className="card-text" style={{"margin":"1px"}}>{this.typeOfCake()}</li>
                                <li className="card-text" style={{"margin":"1px"}}>את המוצר ניתן להזמין מראש בלבד</li>
                                <li className="card-text" style={{"margin":"1px"}}>הערות ושינויים ניתן להוסיף בתיבת הטקסט</li>
                            </ul>

                        </div>
                    
                        <div className="card-body" style={{"position":"relative"}}>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" id="btns" style={{"direction":"ltr"}}>

                                <input onClick={()=>this.showPriceBig()} type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"></input>
                                <label className="btn btn-outline-danger" htmlFor="btnradio1">גדול</label>

                                <input  onClick={()=>this.showPriceSmall()} type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" ></input>
                                <label className="btn btn-outline-danger" htmlFor="btnradio2">קטן</label>

                            </div>
                            <div id="priceChoice">

                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-danger">הוסף לסל<i className="fas fa-shopping-cart"></i></button>
                            </div>
                            <textarea rows="6" cols="25"></textarea>
                  
                        </div>
                    </div>
                </div>
            </div>

            <hr/>


            <div className="container contFeedback">
                <div id="addFeedback" >

                    <img src=" https://i.imgur.com/d2dKtI7.png" height="100" width="100"/>
                    <h3>:הוספת תגובה</h3>
                    <div className="rating stars2">
                        <input type="radio" name="rating" value="5" id="5"></input><label htmlFor="5">☆</label> <input type="radio" name="rating" value="4" id="4"></input><label htmlFor="4">☆</label> <input type="radio" name="rating" value="3" id="3"></input><label htmlFor="3">☆</label> <input type="radio" name="rating" value="2" id="2"></input><label htmlFor="2">☆</label> <input type="radio" name="rating" value="1" id="1"></input><label htmlFor="1">☆</label>
                    </div>
                    <textarea rows="5"></textarea>
                    <div className="centered"> <a  className="lgbtn green">שלח</a> </div>
                </div>
            </div>

        </div>
        

        
      );
   }
}
   export default Product;