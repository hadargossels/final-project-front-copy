import React, { Component } from 'react';

class Gallery extends Component{
    render(){

       return(
            <div className = "pe-3"> 
                <img className="img-fluid rounded float-start" src="/img/gameImg1.jpg" alt="gameImg1.jpg"/>
                
                <div className = "py-3 d-flex justify-content-center flex-wrap  float-start">
                    <img className="m-2 rounded" width="150px" src="/img/game1Gallery1.jpg" alt=""/>
                    <img className="m-2 rounded" width="150px" src="/img/game1Gallery2.jpg" alt=""/>
                    <img className="m-2 rounded" width="150px" src="/img/game1Gallery3.jpg" alt=""/>
                    <img className="m-2 rounded" width="150px" src="/img/game1Gallery4.jpg" alt=""/>
                </div>
            </div>
          
       );
    }
 }


export default Gallery;