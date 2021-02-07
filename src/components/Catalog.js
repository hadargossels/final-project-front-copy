
import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Catalog.css';
import SortBar from "./Sortbar";
import Header from "./Header";



const cakeArr= require("../dataBase/productsData.json")

const updateCakeArr=[...cakeArr.reverse()]

class Catalog extends Component {

   constructor(props){
      super(props)
      this.state={
         Arr: [...updateCakeArr],
         filterArr: [],
         sortSelected:"",
         priceMin:"",
         priceMax:"",
      }
      this.sortFunc=this.sortFunc.bind(this)
      this.addFilter=this.addFilter.bind(this)
      this.filtering=this.filtering.bind(this)
      this.filteringPrice=this.filteringPrice.bind(this)
      this.price=this.price.bind(this)
      this.filterSearch=this.filterSearch.bind(this)
      console.log((this.props.location.search))
   }

   addFilter(e){
      let copyFilterArr=[...this.state.filterArr]

      if(e.checked){
         copyFilterArr.push(e.id)
      }else{
         copyFilterArr=copyFilterArr.filter((item)=>{
            return (e.id !==item)
         })
      }
      this.filtering(copyFilterArr)
      this.setState({filterArr: copyFilterArr})
   }

   filteringPrice(min,max){

      let copyFilterArr=[...this.state.filterArr]
      this.setState({priceMin: min})
      this.setState({priceMax: max})
      setTimeout(()=>this.filtering(copyFilterArr),0)
   }


   filtering(copyFilterArr){

      let copyArr=[...cakeArr]

      let flagFruit=copyFilterArr.filter((item)=>{
         return (item==="fruit" || item==="withoutfruit")
      })

      if(flagFruit.length==2){
         copyFilterArr=copyFilterArr.filter((item)=>{
            return (item !=="fruit" && item !=="withoutfruit")
         })
      }
      let flagMilkParve=copyFilterArr.filter((item)=>{
         return (item==="parve" || item==="milk")
      })

      if(flagMilkParve.length==2){
         copyFilterArr=copyFilterArr.filter((item)=>{
            return (item !=="parve" && item !=="milk")
         })
      }
      if(this.state.priceMin){
         copyArr=copyArr.filter((item)=>{
            return (item["priceBig"]>=this.state.priceMin)
         })
      }
      if(this.state.priceMax){
         copyArr=copyArr.filter((item)=>{
            return (item["priceBig"]<=this.state.priceMax)
         })
      }

      for (const type of copyFilterArr) {
          if(type==="withoutfruit"){
            copyArr=copyArr.filter((item)=>{
               return (!item["fruit"])
            })
         }else{
            copyArr=copyArr.filter((item)=>{
               return (item[type])
            })
         }
      }
      if(!copyArr[0]){
         document.querySelector("#notFoundResults").innerHTML="לא נמצאו תוצאות"
         document.querySelector("#notFoundResults").style.display = "inline";

      }else{
         document.querySelector("#notFoundResults").innerHTML=""
         document.querySelector("#notFoundResults").style.display = "none";

      }
      this.setState({Arr: copyArr})
      setTimeout(()=>this.sortFunc(this.state.sortSelected),0)
      
   }


   sortFunc(e){

      let copyArr=[...this.state.Arr]
      switch(e){
         case "מהזול ליקר":
            copyArr.sort((a,b)=>a.priceBig -b.priceBig)
            break;

         case "מהיקר לזול":
            copyArr.sort((a,b)=>b.priceBig -a.priceBig)
            break;

         case "הפופלרי ביותר":
            copyArr.sort((a,b)=>b.stars -a.stars)
            break;

         case "העדכני ביותר":
            copyArr.sort((a,b)=>b.id -a.id)
            break;
         default:
      }

      this.setState({Arr: copyArr})
      this.setState({sortSelected: e})

   }
   price(el){

      if(el.priceSmall)
          return `מחיר: ${el.priceBig}₪ גדול  /${el.priceSmall}₪  קטן `
      else
          return `  מחיר:  ${el.priceBig}₪`
      
  }

  filterSearch(){
   console.log("sad")
   console.log((this.props.location.search).q)
  }

   render() {

      return (
         <div>
            <Header filterSearch={this.filterSearch}/>
            <SortBar sortFunc={this.sortFunc} addFilter={this.addFilter} filteringPrice={this.filteringPrice}/>
            <div className="myContainer">
               <span id="notFoundResults"></span>
               {this.state.Arr.map((el, key) => (
                  <Link className="myBox"  key={key} to={"/Catalog/"+el.title}>
                     <img src={el.img} alt={el.alt}></img>
                     <div className="details">
                        <p>{el.title}</p>
                        <p>{this.price(el)}</p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
        
      );
   }
}
export default Catalog;