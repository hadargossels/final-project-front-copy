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
                    <ul className="prodact_list">
                        <li className="price"><span>price:</span> 400$</li>
                        <li><span>correct price:</span> <span className="cur_price">375$</span></li>
                        <li><span>size:</span> 51x59 mm </li>
                        <li><span>Case Thickness:</span> 13 mm</li>
                        <li><span>Water Resistance:</span> 10 ATM</li>
                        <li><span>Case Material:</span> stainless steel</li>
                        <li><span>Case Finish:</span> combo</li>
                        <li><span>Attachment Material:</span> stainless steel</li>
                        <li><span>Attachment Color:</span> black</li>
                        <li><span>Dial Color:</span> black</li>
                        <li><span>Movement:</span> alog</li>
                        <li><span>Closure:</span> bracelet deployant</li> 
                    </ul>
                    <p>IN STOCK</p>
                    <p>FREE SHIPPING </p>
                    <p>DELIVERY TIME </p>
                    <button>add to cart</button>
                </div>
            </div>    
        </main>
      );
   }
}

