import React, { Component } from 'react';

class Rating extends Component{
    render(){
        let rating = Number(this.props.rating);
        let starsArr = [];
        for (let i = 1 ; i<=rating ; i++){
            starsArr.push(<i key={i} className="fas fa-star"></i>)
        }
        for (let i = 5; i>rating ; i--){
            starsArr.push(<i key={i} className="far fa-star"></i>)
        }
       return(
              <span className="text-primary">{starsArr}</span>

       );
    }
 }


export default Rating;