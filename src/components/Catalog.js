
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import querystring from "query-string";
import './Catalog.css';
import SortBar from "./Sortbar";
import axios from "axios"

let cakeArr

class Catalog extends Component {

   constructor(props){
      super(props)
      this.state={
         Arr: [],
         filterArr: [],
         sortSelected:"",
         priceMin:"",
         priceMax:"",
         urlSearch:"",
         page:this.props.match.params.number,
         maxPage:1,
         productInPage:9,
      }
      this.sortFunc=this.sortFunc.bind(this)
      this.addFilter=this.addFilter.bind(this)
      this.filtering=this.filtering.bind(this)
      this.filteringPrice=this.filteringPrice.bind(this)
      this.price=this.price.bind(this)
      this.filterSearch=this.filterSearch.bind(this)
   }


   componentDidMount(){
      this.getDataFromMongoDB()
   }
   
   componentDidUpdate(prevProps){
      if(this.props.location.search!==prevProps.location.search){
      this.filterSearch()
       }
    }

    async getDataFromMongoDB(){

      let productInPage= this.state.productInPage
      let currectPage=this.state.page

      try{
         let response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/productsPages`)
         let pages=Math.ceil(response.data[0]/productInPage)
         this.setState({maxPage:pages})

      }catch(err){
         console.log(err);
      }

      try{

         let response
            if(currectPage){
                response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/products?range=[${currectPage*productInPage-productInPage},${currectPage*productInPage-1}]`)
            }else{
                response=await axios.get(`${process.env.REACT_APP_MONGO_DATABASE}/api/products`)
            }
         cakeArr = response.data
         let updateproducts=[...cakeArr.reverse()]
         this.setState({Arr:updateproducts})

      }catch(err){

         console.log(err);
      }

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

   async filteringPrice(min,max){

      let copyFilterArr=[...this.state.filterArr]
      await this.setState({priceMin: min})
      await this.setState({priceMax: max})
      this.filtering(copyFilterArr)
   }


   async filtering(copyFilterArr){

      let copyArr=[...cakeArr]

      let flagFruit=copyFilterArr.filter((item)=>{
         return (item==="fruit" || item==="withoutfruit")
      })

      if(flagFruit.length===2){
         copyFilterArr=copyFilterArr.filter((item)=>{
            return (item !=="fruit" && item !=="withoutfruit")
         })
      }
      let flagMilkParve=copyFilterArr.filter((item)=>{
         return (item==="parve" || item==="milk")
      })

      if(flagMilkParve.length===2){
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
      if(this.state.urlSearch){
         copyArr=copyArr.filter((item)=>{
            return (item["title"].includes(this.state.urlSearch)||item["description"].includes(this.state.urlSearch))
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
      await this.setState({Arr: copyArr})
      this.sortFunc(this.state.sortSelected)
      
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

   async filterSearch(){

      let copyFilterArr=[...this.state.filterArr]
      await this.setState({urlSearch: querystring.parse(this.props.location.search).q})
      this.filtering(copyFilterArr)
         
  }
  async prevPage(){

      let page= this.state.page
      if(page>1){
         page--
         await this.setState({page})
         this.props.history.push(`/Catalog/page/${page}`)
         this.getDataFromMongoDB()
      }
  }
  async nextPage(){

   let page= this.state.page
   if(page<this.state.maxPage){
      page++
      await this.setState({page})
      this.props.history.push(`/Catalog/page/${page}`)
      this.getDataFromMongoDB()
   }

  }
  async currectPage(e){

   let page= e.value
   await this.setState({page})
   this.props.history.push(`/Catalog/page/${page}`)
   this.getDataFromMongoDB()
  }


   render() {
      return (
         <div style={{backgroundImage: "url(../../public/images/logo.jpeg)"}}>
            <SortBar sortFunc={this.sortFunc} addFilter={this.addFilter} filteringPrice={this.filteringPrice}/>
            <div className="myContainer">
               <span id="notFoundResults"></span>
               {this.state.Arr.map((el, key) => (
                  <Link className="myBox"  key={key} to={"/Catalog/"+el.title}>
                     {el.new&&<p id="banner">New</p>}
                     <img src={el.img} alt={el.alt}></img>
                     <div className="details">
                        <p>{el.title}</p>
                        <p>{this.price(el)}</p>
                     </div>
                  </Link>
               ))}
            </div>
            {(this.state.maxPage>1) && <div className="rowPaginationButton">
                  <button className="pageArrowBtn" style={{backgroundColor:"rgb(155,23,80)"}} onClick={(e)=>this.prevPage(e.target)} ><i className="fas fa-arrow-left"></i></button>
                  {(Array(this.state.maxPage).fill(0)).map((element,index) =>{
                     if(this.state.page==(index+1))
                        return <button key={index+1} value={index+1} onClick={(e)=>this.currectPage(e.target)} className="pageCurrectBtn" disabled>{index+1} </button>
                     else
                        return <button key={index+1} value={index+1} onClick={(e)=>this.currectPage(e.target)} className="pageArrowBtn">{index+1}</button>
                  })}
                  <button className="pageArrowBtn" style={{backgroundColor:"rgb(155,23,80)"}} onClick={(e)=>this.nextPage(e.target)}><i className="fas fa-arrow-right"></i></button>
            </div>}
         </div>
        
      );
   }
}
export default Catalog;