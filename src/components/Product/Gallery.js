import React, { Component } from 'react';
import './Gallery.css'
class Gallery extends Component{
    render(){

       return(
            <div className = ""> 
                <img className="img-fluid rounded lessZoom" src={this.props.mainImg} alt=""/>
                
                <div className = "py-3 text-center row">
                    <img className="my-1 img-fluid rounded zoom col-lg-6 col-md-12" src="/img/game1Gallery1.jpg" alt=""/>
                    <img className=" my-1 img-fluid rounded zoom col-lg-6 col-md-12" src="/img/game1Gallery2.jpg" alt=""/>
                    <img className=" my-1 img-fluid rounded zoom col-lg-6 col-md-12" src="/img/game1Gallery3.jpg" alt=""/>
                    <img className=" my-1 img-fluid rounded zoom col-lg-6 col-md-12" src="/img/game1Gallery4.jpg" alt=""/>
                </div>
            </div>
       );
    }
 }


export default Gallery;