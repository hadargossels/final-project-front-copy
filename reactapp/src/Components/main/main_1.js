import React, { Component } from 'react';
// import pic1 from './Screen_'
import './main_1.css';

export default class Main extends Component{

    constructor(){
        super();
        this.state = {
            url: 'https://www.planetgroup.co.il/pub/media/catalog/product/cache/5c054ddd3c8822459c40511ab45526c0/d/z/DZ-DZ4282-1611841693694119.jpg'
        }
    }

    changeurl1(){
        this.setState({url:'https://www.planetgroup.co.il/pub/media/catalog/product/cache/5c054ddd3c8822459c40511ab45526c0/d/z/DZ-DZ4282-1611841693694119.jpg'});
    }

    changeurl2(){
        this.setState({url:"https://www.planetgroup.co.il/pub/media/catalog/product/cache/10ea40c2987b17775b9ba9b1c42f49af/d/z/DZ-DZ4282_1-15731389591167063.jpg"});
    }

    changeurl3(){
        this.setState({url:"https://www.planetgroup.co.il/pub/media/catalog/product/cache/10ea40c2987b17775b9ba9b1c42f49af/d/z/DZ-DZ4282_2-1573138961858273.jpg"});
    }
   
   render(){
       
    
      return(
          
        <main className="main">
            
            <ul className="list_kat">
                <button>Accessories</button>
                <button>Watches</button>
                <button>Fashion Watches</button>
                <button>Clothing</button>
                <button>Men's watch</button>
                <button>DIESEL</button>
            </ul>
            <div className="prodact">
                <h3 className="prod">Watch DZ4282 black</h3>
                <p>Classic black plating and an iridescent crystal delivers bold depth to Overflow.</p>
            </div>
            <div className="main_area">
                <div className="picture">
                    <img  className="bigpicture" src={this.state.url} alt="pic0"/>
                    <ul className="pictures">
                        <li className="piclist" onClick={()=>this.changeurl1()}><img  className="smallpicture" src="https://www.planetgroup.co.il/pub/media/catalog/product/cache/5c054ddd3c8822459c40511ab45526c0/d/z/DZ-DZ4282-1611841693694119.jpg" alt="pic1" /></li>
                        <li className="piclist" onClick={()=>this.changeurl2()}><img  className="smallpicture" src="https://www.planetgroup.co.il/pub/media/catalog/product/cache/10ea40c2987b17775b9ba9b1c42f49af/d/z/DZ-DZ4282_1-15731389591167063.jpg" alt="pic2"/></li>
                        <li className="piclist" onClick={()=>this.changeurl3()}><img  className="smallpicture" src="https://www.planetgroup.co.il/pub/media/catalog/product/cache/10ea40c2987b17775b9ba9b1c42f49af/d/z/DZ-DZ4282_2-1573138961858273.jpg" alt="pic3"/></li>
                    </ul>
                </div>
                <div className="prodact1">

                        <table className="prodact_details">   
                            <tbody>      
                                <tr><td className="price">Price:</td><td>400$</td></tr>                       
                                <tr><td className="cur_price">Correct price:</td><td className="cur_price">375$</td></tr>
                                <tr><td>Size</td><td> 51x59 mm</td></tr>
                                <tr><td>Case Thickness</td><td>13 mmn</td></tr>
                                <tr><td>Water Resistance</td><td>10 ATM</td></tr>
                                <tr><td>Case Finish</td><td>combo</td></tr>
                                <tr><td>Attachment Material</td><td>stainless steel</td></tr>
                                <tr><td>Case Material</td><td>stainless steel</td></tr>
                                <tr><td>Attachment color</td><td>black</td></tr>
                                <tr><td>Dial Color</td><td>black</td></tr>
                                <tr><td>Movement</td><td>alog</td></tr>
                                </tbody>
                        </table>
                </div>
                <div className="main_details">
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div> 
                    <ul>
                        <li>IN STOCK</li>
                        <li>FREE SHIPPING </li>
                        <li>DELIVERY TIME </li>
                    </ul>
                    <button className='button_main'>add to cart</button>
                </div>
            </div>    
        </main>
      );
   }
}

