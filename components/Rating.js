import React, { Component } from 'react';

class Rating extends Component{
    render(){
        let rating = 4;
        let starsArr = [];
        for (let i = 1 ; i<=rating ; i++){
            starsArr.push(<i className="fas fa-star"></i>)
        }
        for (let i = 5; i>rating ; i--){
            starsArr.push(<i className="far fa-star"></i>)
        }
       return(
          <div className = "text-start py-3">
              <span className="h5">Global Rating:</span>
              <span className="text-primary mx-2">{starsArr}</span>
          </div>
       );
    }
 }


export default Rating;