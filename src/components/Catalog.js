
import React, { Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Catalog.css';
import SortBar from "./Sortbar";



const cakeArr = [
   { img: '/images/cake1-1.jpeg', alt: 'PHOTO',id: 1, title: 'טארט פירות העונה',priceSmall: 30,priceBig: 140, milk: true ,parve: false ,fruit: true, glutenFree: false,shugerFree: false,stars: 5},
   { img: '/images/cake2-1.jpeg', alt: 'PHOTO',id: 2, title: 'פיסטוק-פירות יער',priceSmall: 35,priceBig: 180, milk: true ,parve: false ,fruit: true, glutenFree: false,shugerFree: false,stars: 4},
   { img: '/images/cake3-1.jpeg', alt: 'PHOTO',id: 3, title: 'לוזיק- עוגת אגוזי לוז',priceSmall: 30,priceBig: 130, milk: true ,parve: false ,fruit: false, glutenFree: false,shugerFree: false,stars: 3}, 
   { img: '/images/cake4-1.jpeg', alt: 'PHOTO',id: 4, title: 'עוגת גבינה קרמית',priceSmall: "",priceBig: 160, milk: true ,parve: false ,fruit: true, glutenFree: false,shugerFree: false,stars: 3 },
   { img: '/images/cake5-1.jpeg', alt: 'PHOTO',id: 5, title: 'פאי לימון',priceSmall: "",priceBig: 120, milk: true ,parve: false ,fruit: true, glutenFree: true,shugerFree: false,stars: 4 },
   { img: '/images/cake6-1.jpeg', alt: 'PHOTO',id: 6, title: 'עוגות שמרים',priceSmall: "",priceBig: 50, milk: true ,parve: true ,fruit: false, glutenFree: false,shugerFree: false,stars: 5},
   { img: '/images/cake7-1.jpeg', alt: 'PHOTO',id: 7, title: 'עוגיות',priceSmall: "",priceBig: 50, milk: true ,parve: false ,fruit: true, glutenFree: false,shugerFree: true,stars: 2},
   { img: '/images/cake8-1.jpeg', alt: 'PHOTO',id: 8, title: 'מקרונים',priceSmall: "",priceBig: 20, milk: true ,parve: false ,fruit: true, glutenFree: true,shugerFree: false,stars: 3 },
   { img: '/images/cake9-1.jpeg', alt: 'PHOTO',id: 9, title: 'חלות שבת',priceSmall: "",priceBig: 10, milk: false ,parve: true ,fruit: false, glutenFree: false,shugerFree: true,stars: 5 },
]

const updateCakeArr=[...cakeArr.reverse()]

class Catalog extends Component {

   constructor(){
      super()
      this.state={
         Arr: [...updateCakeArr],
         filterArr: [],
         sortSelected:"",
      }
      this.sortFunc=this.sortFunc.bind(this)
      this.addFilter=this.addFilter.bind(this)
      this.filtering=this.filtering.bind(this)
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

      for (const type of copyFilterArr) {
         if(type==="price1"){
            copyArr=copyArr.filter((item)=>{
               return (item["priceBig"]<=100)
            })
         }
         else if(type==="price2"){
            copyArr=copyArr.filter((item)=>{
               return (item["priceBig"]>=100 && item["priceBig"]<=200)
            })
         }
         else if(type==="price3"){
            copyArr=copyArr.filter((item)=>{
               return (item["priceBig"]>=200)
            })
         }
         else if(type==="withoutfruit"){
            copyArr=copyArr.filter((item)=>{
               return (!item["fruit"])
            })
         }else{
            copyArr=copyArr.filter((item)=>{
               return (item[type])
            })
         }
      }
      this.setState({Arr: copyArr})
      setTimeout(()=>this.sortFunc(this.state.sortSelected),5)
      
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

   render() {

      return (
         <div>
            
            <SortBar sortFunc={this.sortFunc} addFilter={this.addFilter}/>
            <div className="myContainer">
               {this.state.Arr.map((el, key) => (
                  <Link className="myBox"  key={key} to={"/Product"}>
                     <img src={el.img} alt={el.alt}></img>
                     <div className="details">
                        <p>{el.title}</p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
        
      );
   }
}
export default Catalog;