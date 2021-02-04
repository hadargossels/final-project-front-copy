import React, { Component } from 'react';
import {match,params} from "react-router-dom";
import Stars from './Stars';
import ChartBtn from './ChartBtn';
class Middle extends Component{
    constructor(props){
        super(props);
        this.myJson=require('./workOutP.json').workOut[Number(this.props.match.params.num)];
        this.state={
            imgSrc:this.myJson.urlImg,
            title:this.myJson.name,
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imgid:0,
            price:this.myJson.price,
            rateStars:this.myJson.stars
        }
    }
    


    changePic(l){
        this.setState({imgid:l});
    }

    discount(){
        if(document.querySelector('#disC').value==='123'){
            this.setState({price:(this.state.price*(9/10)).toFixed(2)});
        }
        else
            window.alert('Wrong coupon');
    }

    render(){
        console.log(this.props.match.params.num);
      return(
        <div className="row">
            <div className="col-1">
                <img src={this.state.imgSrc[0]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(0)}/><br/><br/>
                <img src={this.state.imgSrc[1]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(1)}/><br/><br/>
                <img src={this.state.imgSrc[2]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(2)}/><br/><br/>
                <img src={this.state.imgSrc[3]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(3)}/><br/><br/>
                <img src={this.state.imgSrc[4]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(4)}/>
            </div>
            <div className="col-5">
            <img id="bigI" src={this.state.imgSrc[this.state.imgid]} alt="..." width='100%'/><br/><br/>
            </div>
            <div className="col-3">
                <h1 className="text-danger">{this.state.title}</h1> <br/><br/>
                <Stars numStars={this.state.rateStars}/>
                <br/><br/><br/>
                {this.state.about}
            </div>
            <div className="col-3">
                <h2>Price : {this.state.price}$</h2><br/>
                <button className="btn btn-dark" onClick={()=>this.discount()}>get discount</button>
                <input id="disC" type="text" placeholder="Enter coupon" />
                <br/><br/>
                <ChartBtn/> <br/><br/><br/>
                more options here
            </div>
        </div>
      );
   }
}
export default Middle;