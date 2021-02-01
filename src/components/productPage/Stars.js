import React, { Component } from 'react';
class Stars extends Component{
    render(){
        let htmlStars=[];
        for (let i = 0; i < this.props.numStars; i++){
            htmlStars.push(<span key={i} className='starsAdd'></span>)
        }
        for (let i=htmlStars.length; i<5; i++){
            htmlStars.push(<span key={i} className='starsBlanck'></span>)
        }
        return(
                <div>{htmlStars}</div>
        );
   }
}
export default Stars;