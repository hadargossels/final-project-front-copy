
import React, { Component } from 'react'
import {NavLink } from 'react-router-dom';
import axios from "axios"
import './Home.css';
import HomeElement from './HomeElement';

let cakeArr=[]


let x=3

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={

            newArr:[],
            bestRatingArr:[],
            width: 0,
            height: 0,
        }
          this.slideMyslider=this.slideMyslider.bind(this)
          
    }
    

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      };
      componentDidMount() {

        window.addEventListener('resize', this.updateDimensions);
        this.getDataFromMongoDB()

      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

      async getDataFromMongoDB(){

        try{
           let response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/products`)
           cakeArr = response.data
           this.bestRatingProduct()
            this.newestProducts()
  
        }catch(err){
  
           console.log(err);
        }
  
      }


    newestProducts(){

        let array=cakeArr.slice(cakeArr.length-5,cakeArr.length)
        this.setState({newArr:array})
    }

    bestRatingProduct(){

        let copyArr=[...cakeArr]
        let maxArr=[]
        let maxRating=copyArr[0].stars
        let index=0

        for(let i=0;i<5;i++){
            for (let j=1; j<copyArr.length;j++) {
                
                if(maxRating<copyArr[j].stars){
                    index=j
                    maxRating=copyArr[j].stars
                }
            }
            maxArr.push(copyArr[index])
            copyArr.splice(index,1)
            index=0
            maxRating=copyArr[0].stars
        }
        this.setState({bestRatingArr:maxArr})
    }

    slideMyslider(e){

        let arr=[]
        let element
        if(e.parentNode.id==="newElementSlider")
            arr=[...this.state.newArr]
        else if(e.parentNode.id==="bestRatingElementSlider")
            arr=[...this.state.bestRatingArr]

        if(e.innerHTML==='<i class="fas fa-arrow-left"></i>'){

            element=arr.shift()
            arr.push(element)
        }else {
            
            element=arr.pop()
            arr.unshift(element)
        }
        if(e.parentNode.id==="newElementSlider")
            this.setState({newArr:arr})
        
        else if(e.parentNode.id==="bestRatingElementSlider")
            this.setState({bestRatingArr:arr})

    }

    render() {

        if (window.matchMedia("(max-width: 620px)").matches){
            x=1
        }else if(window.matchMedia("(max-width: 1000px)").matches){
            x=2
        }else{
            x=3
        }

        return (
            <div>

                <div className="myContainer">
                    <div id="imageHpmePage"> <NavLink to="/Catalog/page/1" className="nav-link" href="#" ><button type="button" > <b>לחנות</b></button></NavLink></div>
                        <div className="myRow" style={{marginBottom:"60px"}}>
                            <div className="textOnMe">
                                <h3>קצת עלי</h3>
                                <p> הייתי ילדה מאוד עסוקה עם הרבה חוגים ותחביבים, אך האפייה שבתה את ליבי יותר מכל השאר. מיד בסיום הטירונות סבי בנה לי מטבח משלי, ורוד כמובן, ובמהלך השירות הצבאי שלי פיתחתי את העסק שלי צעד אחר צעד. עם כל הקושי והשעות המטורפות החלטתי ללמוד קונדיטוריה אצל "אסטלה" ולהתמקצע יותר בתחום. אצל אסטלה הבנתי לחלוטין שגם לאחר אשתחרר זו תהיה עבודת חלומותיי. ההשתתפות בתוכנית הייתה אחת החוויות היותר מאתגרות וחווייתיות שעברתי. לפני חצי שנה עברתי לגור בתל אביב וכיום אני עובדת באופן רצוף בהזמנות עוגות בעיצוב אישי
                                    ומעבירה סדנאות קבוצתיות ואישיות.
                                    מוזמנים להכין את המתכונים שלי ולספר לי איך היה בעמוד באינסטגרם שלי😆
                                    ולעולם אל תשכחו – רק מי שמעז מצליח!
                                </p>
                            </div>
                            <div className="myImage" >

                            </div>
                        </div>

                        <div className="myRow" style={{marginBottom:"10px"}}><h2> החדשים שלנו </h2></div>

                        <div id="newElementSlider" className="mySlider">
                            <button className="mySliderBtn" style={{backgroundColor:"rgb(155,23,80)"}} onClick={(e)=>this.slideMyslider(e.target)}><i className="fas fa-arrow-left" onClick={(e)=>this.slideMyslider(e.target.parentNode)}></i></button>
                            
                            {this.state.newArr.slice(0,x).map((el,key)=>(
                                <div className="elm" key={key*10}><HomeElement el={el} updatItemsFromLocalStorage={this.props.updatItemsFromLocalStorage}/></div>
                            ))}
                            
                            <button className="mySliderBtn" style={{backgroundColor:"rgb(155,23,80)"}} onClick={(e)=>this.slideMyslider(e.target)} ><i className="fas fa-arrow-right" onClick={(e)=>this.slideMyslider(e.target.parentNode)}></i></button>
                        </div>

                        <div className="myRow" style={{marginBottom:"10px",marginTop:"50px"}}><h2> המומלצים שלנו </h2></div>

                        <div id="bestRatingElementSlider" className="mySlider">
                            <button className="mySliderBtn" style={{backgroundColor:"rgb(155,23,80)"}} onClick={(e)=>this.slideMyslider(e.target)} ><i className="fas fa-arrow-left" onClick={(e)=>this.slideMyslider(e.target.parentNode)}></i></button>
                            {this.state.bestRatingArr.slice(0,x).map((el,key)=>(
                                <div className="elm" key={key}><HomeElement  el={el} updatItemsFromLocalStorage={this.props.updatItemsFromLocalStorage}/></div>
                            ))}
                            <button className="mySliderBtn" style={{backgroundColor:"rgb(155,23,80)"}} onClick={(e)=>this.slideMyslider(e.target)}><i className="fas fa-arrow-right" onClick={(e)=>this.slideMyslider(e.target.parentNode)}></i></button>
                        </div>

                    

                    </div>
            </div>
        )
    }
}
