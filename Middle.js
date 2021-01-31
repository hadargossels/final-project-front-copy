import React, { Component } from 'react';
import Stars from './Stars'
import ChartBtn from './ChartBtn'
class Middle extends Component{
   render(){
      return(
        <div className="row">
            <div className="col-1">
                <img src="benchPress.jpg" alt="..." className="img-thumbnail"/><br/><br/>
                <img src="benchPress.jpg" alt="..." className="img-thumbnail"/><br/><br/>
                <img src="benchPress.jpg" alt="..." className="img-thumbnail"/><br/><br/>
                <img src="benchPress.jpg" alt="..." className="img-thumbnail"/><br/><br/>
                <img src="benchPress.jpg" alt="..." className="img-thumbnail"/>
            </div>
            <div className="col-5">
            <img src="benchPress.jpg" alt="..." width='100%'/><br/><br/>
            </div>
            <div className="col-3">
                <h1>Bench Press</h1> <br/><br/>
                <Stars numStars='3'/>
                <button>Rate</button>
                <br/><br/><br/>
                short explanation About the product here
            </div>
            <div className="col-3">
                <h2>Price : 187$</h2><br/>
                <input type="text" placeholder="Enter coupon" /><br/><br/>
                <ChartBtn/> <br/><br/><br/>
                more options here
            </div>
        </div>
      );
   }
}
export default Middle;