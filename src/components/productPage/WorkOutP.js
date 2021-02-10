import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";
import Stars from './Stars';
const ListItemLink = ({ name , urlImg ,index }) => (
    <Route path={"/product/"+index+"/"+name} children={({ match }) => (
      <li className={match ? 'active' : ''}><br/>
        <Link className="btn text-white" to={"/product/"+index+"/"+name}><br/>
            <img key={name} src={urlImg} alt="..." width='80%' height="200rem"/><br/>
        </Link>
      </li>
)}/>)

class WorkOutP extends Component{
    constructor(props){
        super(props);
        this.pType = ["yoga","weights"];
        this.myJson = require('./workOutP.json').data;
        this.state ={
            // searchUrl: 
            urlImg :[],
            name: [],
            prices :[],
            stars:[],
            myArr:[],
            jsonPlace:[],
            // filteFlags:[true,true]
        }
        this.urlSelect = this.urlSelect.bind(this);
        this.deState();
    }

    deState(){
        if(this.props.search!="all"){
            const regex = new RegExp (`${this.props.search}`,"gi")
            console.log(regex);
            for (const i of this.myJson) {
                if(regex.test(i.name) || regex.test(i.type)){
                    this.state.name.push(i.name);
                    this.state.prices.push(Number(i.price));
                    this.state.stars.push(Number(i.stars));
                    this.state.urlImg.push(i.urlImg[0]);
                    this.state.jsonPlace.push(Number(i.jsonPlace));
                }
            }
            if (this.state.name.length===0){
                this.props.searchHead("No matches found");
            }
            else {
                this.props.searchHead(this.props.search);
            }
        }
        else{
            for (const i of this.myJson) {
                this.state.name.push(i.name);
                this.state.prices.push(Number(i.price));
                this.state.stars.push(Number(i.stars));
                this.state.urlImg.push(i.urlImg[0]);
                this.state.jsonPlace.push(Number(i.jsonPlace));
            }
            this.props.searchHead(this.props.search+ " products");
        }
    }

    render(){
        if(this.state.myArr.length==0){
            let tempArr=[];
            for(let i=0; i<this.state.name.length; i++){
                if(i%3==0 && i!=0){
                    tempArr.push(<hr key={-i*10}/>)
                    tempArr.push(<div key={-i} className="col-sm-12 col-md-2"></div>)
                }
                tempArr.push(<div className="col-sm-12 col-md-3 text-center " key={i}>
                    <h3>{this.state.name[i]}</h3>
                    <ListItemLink name={this.state.name[i]} urlImg={this.state.urlImg[i]} index={this.state.jsonPlace[i]}/><br/>
                    <Stars numStars={this.state.stars[i]}/><br/>
                    {this.myJson[this.state.jsonPlace[i]].onSale==false?
                    (<h3>{this.state.prices[i]}$</h3>):
                    (<h3><del>{this.state.prices[i]}$</del><br/><span className="text-danger">{(this.state.prices[i]*(9/10)).toFixed(2)}$</span></h3>)}
                </div>)
            }
            this.state.myArr=tempArr;
        }
        return(
            <div className="row">
                <div className="col-sm-12 col-md-2">
                    <div className="text-center">
                        <label className="fs-4">Sort By</label><br/>
                        <button className="btn btn-secondary" onClick={()=>this.sortPrice()}>Price Low to High</button><br/>
                        <button className="btn btn-secondary mt-1" onClick={()=>this.sortStars()}>Most Stars</button><br/><br/>
                        <label className="fs-4">Filter</label>
                    </div>
                    <div className="myFilters">
                        <input className="form-check-input mycheck" type="radio" name="myRadio" value="" id="flexCheckDefault" onChange={()=>this.filterSelect("yoga")}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault" >Yoga<br/>
                        </label><br/>
                        <input className="form-check-input mycheck" type="radio" name="myRadio" value="" id="flexCheckDefault1" onChange={()=>this.filterSelect("weights")}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault" >Weights<br/>
                        </label><br/>
                        <input className="form-check-input mycheck" type="radio" name="myRadio" value="" id="flexCheckDefault2" onChange={()=>this.cancelFilter()}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault" >All products<br/>
                        </label>
                    </div>
                    <div className="text-center">
                        <img src="/images/experisSportLogo.png"></img>
                    </div>
                </div>
                {this.state.myArr}
                <div className="col-sm-12 col-md-1"></div>
            </div>
        );
   }
   sortPrice(){
       let sArr=this.state.prices
       let sName=this.state.name
       let sUrl=this.state.urlImg
       let sStars=this.state.stars
       let sJson=this.state.jsonPlace
        for(let i=0; i<sArr.length; i++){
            for(let k=i; k<sArr.length; k++){
                if(sArr[k]<sArr[i]){
                    [sArr[i],sArr[k]]=[sArr[k],sArr[i]];
                    [sName[i],sName[k]]=[sName[k],sName[i]];
                    [sUrl[i],sUrl[k]]=[sUrl[k],sUrl[i]];
                    [sStars[i],sStars[k]]=[sStars[k],sStars[i]];
                    [sJson[i],sJson[k]]=[sJson[k],sJson[i]];
                }
            }

        }
        this.setState({prices:sArr});
        this.setState({name:sName});
        this.setState({urlImg:sUrl});
        this.setState({stars:sStars});
        this.setState({jsonPlace:sJson});
        this.setState({myArr:[]});
   }
   sortStars(){
    let sArr=this.state.prices
    let sName=this.state.name
    let sUrl=this.state.urlImg
    let sStars=this.state.stars
    let sJson=this.state.jsonPlace
     for(let i=0; i<this.state.stars.length; i++){
         for(let k=i; k<this.state.stars.length; k++){
             if(sStars[k]>sStars[i]){
                 [sArr[i],sArr[k]]=[sArr[k],sArr[i]];
                 [sName[i],sName[k]]=[sName[k],sName[i]];
                 [sUrl[i],sUrl[k]]=[sUrl[k],sUrl[i]];
                 [sStars[i],sStars[k]]=[sStars[k],sStars[i]];
                 [sJson[i],sJson[k]]=[sJson[k],sJson[i]];
             }
         }

     }

     this.setState({prices:sArr});
     this.setState({name:sName});
     this.setState({urlImg:sUrl});
     this.setState({stars:sStars});
     this.setState({jsonPlace:sJson});
     this.setState({myArr:[]});
}
    cancelFilter(){
        let sPrice=[]
        let sName=[]
        let sUrl=[]
        let sStars=[]
        let sJson =[]
        for (const i of this.myJson) {
            sName.push(i.name);
            sPrice.push(Number(i.price));
            sStars.push(Number(i.stars));
            sUrl.push(i.urlImg[0]);
            sJson.push(Number(i.jsonPlace));
        };
        this.setState({prices:sPrice});
        this.setState({name:sName});
        this.setState({urlImg:sUrl});
        this.setState({stars:sStars});
        this.setState({jsonPlace:sJson});
        this.setState({myArr:[]});
    }
    filterSelect(name){
        let sPrice=[]
        let sName=[]
        let sUrl=[]
        let sStars=[]
        let sJson =[]

        for (const iterator of this.myJson) {
            if(iterator.type==name){
                sPrice.push(iterator.price);
                sName.push(iterator.name);
                sUrl.push(iterator.urlImg[0]);
                sStars.push(iterator.stars);
                sJson.push(iterator.jsonPlace);
            }
        }
        this.setState({prices:sPrice});
        this.setState({name:sName});
        this.setState({urlImg:sUrl});
        this.setState({stars:sStars});
        this.setState({jsonPlace:sJson});
        this.setState({myArr:[]});
        }
        urlSelect(){
            let sPrice=[]
            let sName=[]
            let sUrl=[]
            let sStars=[]
            let sJson =[]
            const regex = new RegExp (`${this.props.search}*`,"gi")
            console.log(this.props.search,this.myJson[1].name,regex.test(this.myJson[1].name));
    
            for (const iterator of this.myJson) {
                if(regex.test(iterator.name) || regex.test(iterator.type)){
                    console.log("IM IN");
                    sPrice.push(iterator.price);
                    sName.push(iterator.name);
                    sUrl.push(iterator.urlImg[0]);
                    sStars.push(iterator.stars);
                    sJson.push(iterator.jsonPlace);
                }
            }
            this.setState({prices:sPrice});
            this.setState({name:sName});
            this.setState({urlImg:sUrl});
            this.setState({stars:sStars});
            this.setState({jsonPlace:sJson});
            this.setState({myArr:[]});
            }
}
export default WorkOutP;