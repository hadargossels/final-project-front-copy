import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";
import Stars from './Stars';
const ListItemLink = ({ name , urlImg ,index }) => (
    <Route path={"/product/"+index+"/"+name} children={({ match }) => (
      <li className={match ? 'active' : ''}><br/>
        <Link className="btn text-white" to={"/product/"+index+"/"+name}><br/>
            <img key={name} src={urlImg} alt="..." width='100%' height="250rem"/><br/>
        </Link>
      </li>
)}/>)

class WorkOutP extends Component{
    constructor(){
        super();
        this.myJson = require('./workOutP.json').data;
        this.state ={
            urlImg :[],
            name: [],
            prices :[],
            stars:[],
            myArr:[],
            jsonPlace:[],
            filteFlagYoga: true
        }
        this.deState();
    }

    deState(){
        for (const i of this.myJson) {
            this.state.name.push(i.name);
            this.state.prices.push(Number(i.price));
            this.state.stars.push(Number(i.stars));
            this.state.urlImg.push(i.urlImg[0]);
            this.state.jsonPlace.push(Number(i.jsonPlace));
        };
    }


    render(){

        if(this.state.myArr.length==0){
            let tempArr=[];
            for(let i=0; i<this.state.name.length; i++){
                if(i%3==0 && i!=0){
                    tempArr.push(<hr key={-i*10}/>)
                    tempArr.push(<div key={-i} className="col-2"></div>)
                }
                tempArr.push(<div className="col-3 text-center" key={i}>
                    <h3>{this.state.name[i]} Price: {this.state.prices[i]}$</h3>
                    <ListItemLink name={this.state.name[i]} urlImg={this.state.urlImg[i]} index={this.state.jsonPlace[i]}/><br/>
                    <Stars numStars={this.state.stars[i]}/>
                </div>)
            }
            this.state.myArr=tempArr;
        }
        return(
            <div className="row">
                <div className="col-2">
                    <label>Sort By:</label><br/><br/>
                    <button className="btn btn-secondary" onClick={()=>this.sortPrice()}>Price Low to High</button><br/><br/>
                    <button className="btn btn-secondary" onClick={()=>this.sortStars()}>Most Stars</button><br/><br/>
                    <div className="text-center">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>this.filterSelect("yoga")}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault" >Yoga
                    </label>
                    </div>
                    <img src="/images/experisSportLogo.png"></img>
                </div>
                {this.state.myArr}
                <div className="col-1"></div>
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
    filterSelect(name){
        let sPrice=[]
        let sName=[]
        let sUrl=[]
        let sStars=[]
        let sJson =[]
        if(this.state.filteFlagYoga){
            for (const iterator of this.myJson) {
                if(iterator.type==name){
                    sPrice.push(iterator.price);
                    sName.push(iterator.name);
                    sUrl.push(iterator.urlImg[0]);
                    sStars.push(iterator.stars);
                    sJson.push(iterator.jsonPlace);
                }
            }
            this.setState({filteFlagYoga:false});
        }
        else {
            for (const i of this.myJson) {
                sName.push(i.name);
                sPrice.push(Number(i.price));
                sStars.push(Number(i.stars));
                sUrl.push(i.urlImg[0]);
                sJson.push(Number(i.jsonPlace));
            };
            this.setState({filteFlagYoga:true});
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