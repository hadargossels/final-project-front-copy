import React, { Component } from 'react';
import GridProduct from '../GridProduct/GridProduct';
import ListCategory from '../ListCategory/ListCategory'
import HeaderCategory from '../HeaderCategory/HeaderCategory'
import './storePage.css';



class StorePage extends Component{
   
    constructor(props){
       super(props);
       this.state={
         categoryHeader:"Makeup",
         arrProduct:props.arrAllProduct,
         arrFilterList:{category:"Makeup",brands:{"MAC":false,"LORIAL PARIS":false,"BOBBI BROWN":false,"IL MAKIAGE":false},orderBy:"defalte"}

        //props.arrAllProduct is include all makeup product
       }
       this.clickedCategory= this.clickedCategory.bind(this);
       this.changedBrandFilter=this.changedBrandFilter.bind(this);
       this.updateArrProductAllFilters= this.updateArrProductAllFilters.bind(this);
       this.sortChoiced= this.sortChoiced.bind(this);
       this.sortArr=this.sortArr.bind(this);
    }
 
      updateArrProductAllFilters(){
      let filterArr=[...this.props.arrAllProduct].map(a=>({...a}));
      let categoryToFilter=this.state.arrFilterList.category;

      if(categoryToFilter!="Makeup"){//makeup is all the product
         filterArr=filterArr.filter((v)=>v.categoryProduct==categoryToFilter);
      }
      let tempArr=[];
      let flagNoBrands=true;
      for(let brand in this.state.arrFilterList.brands){
         if(this.state.arrFilterList.brands[brand]){
            tempArr=tempArr.concat(filterArr.filter((v)=>{return v.brandProduct==brand}) )
            flagNoBrands=false;
         }
      }
      if(flagNoBrands){//show all if no brands checked
         tempArr=filterArr;
      }
      filterArr=[...tempArr];
      this.setState({arrProduct:filterArr},()=>{ this.sortArr(this.state.arrFilterList.orderBy)});
     
   }
    
    clickedCategory(categoryToFilter){

         let tempObj=Object.assign({}, this.state.arrFilterList);
         tempObj["category"]=categoryToFilter;
          this.setState({categoryHeader:categoryToFilter,arrFilterList:tempObj},this.updateArrProductAllFilters);
      }

      changedBrandFilter(brandToFilter,boolBrand){
         let tempArray=Object.assign({}, this.state.arrFilterList);
         // if(brandToFilter=="All Brands")
         // {
         //    tempArray.brands["MAC"]=boolBrand;
         //    tempArray.brands["LORIAL PARIS"]=boolBrand;
         //    tempArray.brands[ "BOBBI BROWN"]=boolBrand;
         //    tempArray.brands["IL MAKIAGE"]=boolBrand;
         // }
         // else{
            tempArray.brands[brandToFilter]=boolBrand;
         // }
       
         this.setState({arrFilterList:tempArray}, this.updateArrProductAllFilters);
      }


      sortChoiced(orderBy){
         let tempObj=Object.assign({}, this.state.arrFilterList);
         tempObj.orderBy=orderBy;
         this.setState({arrFilterList:tempObj});
         this.sortArr(orderBy);
      }

      sortArr(orderBy){
         let productArr=[...this.state.arrProduct];
         switch(orderBy){
            case "default":{
               break;
            }
            case "cheap-expensive":{
               productArr.sort((a,b)=>+a.priceProduct.replace("₪","")-(+b.priceProduct.replace("₪","")));
               break;
            }
            case "expensive-cheap":{
               productArr.sort((a,b)=>+b.priceProduct.replace("₪","")-(+a.priceProduct.replace("₪","")));
               break;
            }
         }
         this.setState({arrProduct:productArr});
      }
  
    render(){
       return(
        <div className="row storeDiv">

            <ListCategory clickedCategory={this.clickedCategory} changedBrandFilter={this.changedBrandFilter}/>
           
           <div className="col-10">
               <HeaderCategory categoryHeader={this.state.categoryHeader} sortChoiced={this.sortChoiced}/>
               <GridProduct arrProduct={this.state.arrProduct}/>
           </div>
        </div>
          
       );
    }
}
 export default StorePage;