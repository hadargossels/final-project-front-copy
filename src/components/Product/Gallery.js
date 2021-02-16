import React, { Component } from 'react';
import './Gallery.css'
class Gallery extends Component{
    render(){

       return(
            <div className = "px-2"> 
                <img className="img-fluid rounded galleryImg" src={this.props.mainImg} alt=""/>
                
                <div className = "py-3 text-center row px-1 galleryImg">
                    <img className="my-1 img-fluid rounded zoom col-12" src="/img/game1Gallery1.jpg" alt=""/>
                    <img className=" my-1 img-fluid rounded zoom col-12" src="/img/game1Gallery2.jpg" alt=""/>
                    <img className=" my-1 img-fluid rounded zoom col-12" src="/img/game1Gallery3.jpg" alt=""/>
                    <img className=" my-1 img-fluid rounded zoom col-12" src="/img/game1Gallery4.jpg" alt=""/>
                </div>

                <img className="img-fluid rounded wideImg d-none" src={this.props.wideImg} alt=""/>
            </div>
       );
    }
 }


export default Gallery;