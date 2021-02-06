import React, { Component } from 'react';
class Stars extends Component{
    render(){
        let htmlStars=[];
        for (let i = 0; i < this.props.numStars; i++){
            htmlStars.push(<span key={i}><i className="fas fa-star fs-2"></i></span>)
        }
        for (let i=htmlStars.length; i<5; i++){
            htmlStars.push(<span key={i}><i className="far fa-star fs-2"></i></span>)
        }
        return(
                <div>{htmlStars}</div>
        );
   }
}
export default Stars;