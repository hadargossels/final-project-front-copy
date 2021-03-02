import React, { Component } from 'react';
// import {Link,Route} from "react-router-dom";
// import {match,params} from "react-router-dom";
import {Link,Route} from "react-router-dom";
import Stars from './Stars';
import axios from 'axios';
import {db} from '../../firebase';
// import ChartBtn from './ChartBtn';
const ShopingLink = ({ to }) => (
    <Route path={to} children={({ match }) => (
        <Link className="btn btn-dark" to={to}><i className="fas fa-shopping-bag"> Add to shoping bag</i></Link>
    )}/>)

class Middle extends Component{
    constructor(props){
        super(props);
        // this.myJson=require('./workOutP.json').data[Number(this.props.match.params.num)];
        // this.myJson=[];
        this.state={
            imgSrc:"",
            title :'',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imgid:0,
            price:"",
            rateStars:"",
            onSale : false
        }
        // this.state={
        //     imgSrc:this.myJson.urlImg,
        //     title:this.myJson.name,
        //     about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     imgid:0,
        //     price:this.myJson.price,
        //     rateStars:this.myJson.stars
        // }
    }

    async componentDidMount(){
        // this.myJson = await axios.get('http://localhost:3000/data').then(res=>res);
        // this.myJson = this.myJson.data[Number(this.props.match.params.num)];
        // console.log(this.myJson);
        db.on("value", (snapshot) =>{
            const myJson = (snapshot.val().products)[Number(this.props.match.params.num)];
            console.log(myJson);
            this.setState({
                imgSrc:myJson.urlImg,
                title:myJson.name,
                price:myJson.price,
                rateStars:myJson.stars,
                onSale : myJson.onSale
            })
        })

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
      return(
        <div className="row pt-4">
            <div className="col-sm-0 col-md-1">
                <img src={this.state.imgSrc[0]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(0)}/><br/><br/>
                <img src={this.state.imgSrc[1]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(1)}/><br/><br/>
                <img src={this.state.imgSrc[2]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(2)}/><br/><br/>
                <img src={this.state.imgSrc[3]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(3)}/><br/><br/>
                {/* <img src={this.state.imgSrc[4]} alt="..." className="img-thumbnail" onClick={()=>this.changePic(4)}/> */}
            </div>
            <div className="col-sm-12 col-md-5 text-center">
            <img id="bigI" src={this.state.imgSrc[this.state.imgid]} alt="..." width='80%'/><br/><br/>
            </div>
            <div className="col-sm-12 col-md-3">
                <h1 className="text-danger">{this.state.title}</h1> <br/><br/>
                <Stars numStars={this.state.rateStars}/><br/>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook fs-4"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter fs-4 ms-4"></i></a>
                <br/><br/>
                {this.state.about}
            </div>
            <div className="col-sm-12 col-md-3">
                {(this.state.onSale==false)?(<h2>Price : {this.state.price}$</h2>):
                 (<h2>Price: <del>{this.state.price}$</del> <span className="text-danger">{(this.state.price*(9/10)).toFixed(2)}$</span></h2>)}
                <br/>
                <button className="btn btn-dark" onClick={()=>this.discount()}>get discount</button>
                <input id="disC" type="text" placeholder="Enter coupon" />
                <br/><br/>
                <ShopingLink to={`/shopingchart/${this.props.match.params.num}`} /> <br/><br/><br/>
                more options here
            </div>
        </div>
      );
   }
}
export default Middle;