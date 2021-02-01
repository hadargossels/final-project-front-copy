import React, { Component } from 'react';
class Stars extends Component{
    constructor(n){
        super(n);
        this.numStars=Number(n.numStars);
    }
   render(){
    let htmlStars=[];
    for (let i = 0; i < this.numStars; i++){
        htmlStars.push(<span key={i} className='starsAdd'></span>)
    }
    for (let i=htmlStars.length; i<5; i++){
        htmlStars.push(<span key={i} className='starsBlanck'></span>)
    }
    console.log(htmlStars);
      return(
            <div>{htmlStars}</div>
      );
   }
}
export default Stars;