import React, { Component } from 'react';
import Stars from './Stars';
import ChartBtn from './ChartBtn';
class Yoga extends Component{
    
    render(){
        const urlImg =["/images/benchPress.jpg","/images/pullupbar.jpg","/images/FUEL-Weighted-Vest.jpg"]
        const name= ['Bench Press','Pull up bar','FUEL Weighted Vest']
        const prices =['187$','152$','90$']
        const stars=[4,3,5]
        let myArr=[]
        for(let i=0; i<urlImg.length; i++){
            myArr.push(<div className="col-4 text-center">
                <h3>{name[i]} Price: {prices[i]}</h3>
                <img key={name[i]} src={urlImg[i]} alt="..." width='100%' height="300px"/><br/>
                <Stars  numStars={stars[i]}/>
            </div>)
        }
        return(
            <div className="row">
                {myArr}
            </div>
        );
   }
}
export default Yoga;