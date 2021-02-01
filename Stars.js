import React, { Component } from 'react';
class Stars extends Component{
    constructor(n){
        super(n);
        this.numStars=Number(n.numStars);
    }
   render(){
    let htmlStars=[];
    for (let i = 0; i < this.numStars; i++){
        htmlStars.push(<span className='starsAdd'></span>)
    }
    for (let i=0; i<5-this.numStars; i++){
        htmlStars.push(<span className='starsBlanck'></span>)
    }
      return(
            <div key="{htmlStars}">{htmlStars}</div>
      );
   }
}
export default Stars;