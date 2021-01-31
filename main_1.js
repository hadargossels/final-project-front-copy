import React, { Component } from 'react';
// import pic1 from './Screen_'

class Main extends Component{
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
                    <img  className="bigpicture" src="https://www.planetgroup.co.il/pub/media/catalog/product/cache/5c054ddd3c8822459c40511ab45526c0/d/z/DZ-DZ4282-1611841693694119.jpg" />
                    <ul className="pictures">
                        <li className="piclist"><img  className="smallpicture" src="https://www.planetgroup.co.il/pub/media/catalog/product/cache/5c054ddd3c8822459c40511ab45526c0/d/z/DZ-DZ4282-1611841693694119.jpg" /></li>
                        <li className="piclist"><img  className="smallpicture" src="https://www.planetgroup.co.il/pub/media/catalog/product/cache/10ea40c2987b17775b9ba9b1c42f49af/d/z/DZ-DZ4282_1-15731389591167063.jpg" /></li>
                        <li className="piclist" ><img  className="smallpicture" src="https://www.planetgroup.co.il/pub/media/catalog/product/cache/10ea40c2987b17775b9ba9b1c42f49af/d/z/DZ-DZ4282_2-1573138961858273.jpg" /></li>
                    </ul>
                </div>
                <ul className="prodact_list">
                    <li className="price">price: 400$</li>
                    <li >correct price:<span className="cur_price">375$</span></li>
                    <li>size: 51x59 mm </li>
                    <li>Case Thickness: 13 mm</li>
                    <li>Water Resistance: 10 ATM</li>
                    <li>Case Material: stainless steel</li>
                    <li>Case Finish: combo</li>
                    <li>Attachment Material: stainless steel</li>
                    <li>Attachment Color: black</li>
                    <li>Dial Color: black</li>
                    <li>Movement: alog</li>
                    <li>Closure: bracelet deployant</li> 
                </ul>
            </div>    
        </main>
      );
   }
}
export default Main;
