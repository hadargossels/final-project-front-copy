import React, { Component } from 'react';
import './Gallery.css'
class Gallery extends Component{
    render(){

       return(
            <div className = "float-start"> 
                <img className="img-fluid rounded d-flex justify-content-center lessZoom" src={this.props.mainImg} alt=""/>
                
                <div className = "py-3 d-flex justify-content-center flex-wrap  float-start">
                    <img className="m-2 rounded zoom" width="150px" src="/img/game1Gallery1.jpg" alt=""/>
                    <img className="m-2 rounded zoom" width="150px" src="/img/game1Gallery2.jpg" alt=""/>
                    <img className="m-2 rounded zoom" width="150px" src="/img/game1Gallery3.jpg" alt=""/>
                    <img className="m-2 rounded zoom" width="150px" src="/img/game1Gallery4.jpg" alt=""/>
                </div>
            </div>
       );
    }
 }


export default Gallery;