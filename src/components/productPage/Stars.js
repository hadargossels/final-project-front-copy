import React, { Component } from 'react';
class Stars extends Component{
    constructor(n){
        super(n);
        this.state={
            numStars:Number(n.numStars)
        }
        
        
    }
   render(){
    let htmlStars=[];
    for (let i = 0; i < this.state.numStars; i++){
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