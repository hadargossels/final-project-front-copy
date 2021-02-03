import React, { Component } from 'react';
import Footer from './Footer';
import Stars from './Stars';
class WorkOutP extends Component{
    constructor(){
        super();
        this.myJson = require('./workOutP.json').workOut;
        this.state ={
            urlImg :[],
            name: [],
            prices :[],
            stars:[],
            myArr:[]
        }
        this.deState();
    }

    deState(){
        for (const i of this.myJson) {
            this.state.name.push(i.name);
            this.state.prices.push(Number(i.price));
            this.state.stars.push(Number(i.stars));
            this.state.urlImg.push(i.urlImg[0]);
        };
    }


    render(){

        if(this.state.myArr.length==0){
            let tempArr=[];
            for(let i=0; i<this.state.name.length; i++){
                tempArr.push(<div className="col-3 text-center" key={i}>
                    <h3>{this.state.name[i]} Price: {this.state.prices[i]}$</h3>
                    <img key={this.state.name[i]} src={this.state.urlImg[i]} alt="..." width='100%' height="300px"/><br/>
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
        for(let i=0; i<3; i++){
            for(let k=i; k<3; k++){
                if(sArr[k]<sArr[i]){
                    [sArr[i],sArr[k]]=[sArr[k],sArr[i]];
                    [sName[i],sName[k]]=[sName[k],sName[i]];
                    [sUrl[i],sUrl[k]]=[sUrl[k],sUrl[i]];
                    [sStars[i],sStars[k]]=[sStars[k],sStars[i]];
                }
            }

        }
        this.setState({prices:sArr});
        this.setState({name:sName});
        this.setState({urlImg:sUrl});
        this.setState({stars:sStars});
        this.setState({myArr:[]});
   }
   sortStars(){
    let sArr=this.state.prices
    let sName=this.state.name
    let sUrl=this.state.urlImg
    let sStars=this.state.stars
    // console.log(sStars);
     for(let i=0; i<this.state.stars.length; i++){
         for(let k=i; k<this.state.stars.length; k++){
             if(sStars[k]>sStars[i]){
                 [sArr[i],sArr[k]]=[sArr[k],sArr[i]];
                 [sName[i],sName[k]]=[sName[k],sName[i]];
                 [sUrl[i],sUrl[k]]=[sUrl[k],sUrl[i]];
                 [sStars[i],sStars[k]]=[sStars[k],sStars[i]];
             }
         }

     }
    //  console.log(sStars);
     this.setState({prices:sArr});
     this.setState({name:sName});
     this.setState({urlImg:sUrl});
     this.setState({stars:sStars});
     this.setState({myArr:[]});
}
}
export default WorkOutP;