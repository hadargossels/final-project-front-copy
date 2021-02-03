
import React, { Component } from 'react';
import './Cakes.css';
import SortBar from "./Sortbar";


const cakeArr = [
   { img: '/images/cake1-1.jpeg', alt: 'PHOTO', title: 'טארט פירות העונה',priceSmall: 30,priceBig: 140, milk: true ,parve: false ,fruit: true, gluten: true,suger: true,stars: 5},
   { img: '/images/cake2-1.jpeg', alt: 'PHOTO', title: 'פיסטוק-פירות יער',priceSmall: 35,priceBig: 180, milk: true ,parve: false ,fruit: true, gluten: true,suger: true,stars: 4},
   { img: '/images/cake3-1.jpeg', alt: 'PHOTO', title: 'לוזיק- עוגת אגוזי לוז',priceSmall: 30,priceBig: 130, milk: true ,parve: false ,fruit: false, gluten: true,suger: true,stars: 3}, 
   { img: '/images/cake4-1.jpeg', alt: 'PHOTO', title: 'עוגת גבינה קרמית',priceSmall: "",priceBig: 160, milk: true ,parve: false ,fruit: true, gluten: true,suger: true,stars: 3 },
   { img: '/images/cake5-1.jpeg', alt: 'PHOTO', title: 'פאי לימון',priceSmall: "",priceBig: 120, milk: true ,parve: false ,fruit: true, gluten: false,suger: true,stars: 4 },
   { img: '/images/cake6-1.jpeg', alt: 'PHOTO', title: 'עוגות שמרים',priceSmall: "",priceBig: 50, milk: true ,parve: true ,fruit: false, gluten: true,suger: true,stars: 5},
   { img: '/images/cake7-1.jpeg', alt: 'PHOTO', title: 'עוגיות',priceSmall: "",priceBig: 50, milk: true ,parve: false ,fruit: true, gluten: true,suger: false,stars: 2},
   { img: '/images/cake8-1.jpeg', alt: 'PHOTO', title: 'מקרונים',priceSmall: "",priceBig: 20, milk: true ,parve: false ,fruit: true, gluten: false,suger: true,stars: 3 },
   { img: '/images/cake9-1.jpeg', alt: 'PHOTO', title: 'חלות שבת',priceSmall: "",priceBig: 10, milk: false ,parve: true ,fruit: false, gluten: true,suger: false,stars: 5 },
]

const updateArr= cakeArr.reverse()


class Cakes extends Component {

   constructor(){
      super()
      this.state={
         Arr: [...cakeArr],
         filterArr: [],
      }
      this.sortFunc=this.sortFunc.bind(this)
      this.addFilter=this.addFilter.bind(this)
   }

   addFilter(e){
      console.log(e.checked)
      let copyFilterArr=[...this.state.filterArr]
      if(e.checked){
         copyFilterArr.push(e.id)
      }else{
         copyFilterArr=copyFilterArr.filter((item)=>{
            return (e.id !==item)
         })
      }
      console.log(copyFilterArr)
      this.setState({filterArr: copyFilterArr})
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
            copyArr=[...updateArr]
            break;
         default:
      }

      this.setState({Arr: copyArr})
   }

   render() {

      return (
         <div>
            <SortBar sortFunc={this.sortFunc} addFilter={this.addFilter}/>
            <div className="myContainer">
               {this.state.Arr.map((el, key) => (
                  <div className="myBox" key={key}>
                     <img src={el.img} alt={el.alt}></img>
                     <div className="details">
                        <p>{el.title}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
        
      );
   }
}
export default Cakes;