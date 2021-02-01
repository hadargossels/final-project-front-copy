import React, { Component } from 'react';

class Middle extends Component{

   constructor() {

      super();

      this.state = {src: '/images/brands/ASUS/ASUS-XONAR-AE/1.png'};

      this.updateState = this.updateState.bind(this);

   };

   updateState(img) {

      this.setState({src: img.target.src});
   }

   render(){
      return(
         <main role="main" className="container lead">

            <br/><br/>
            
            <h1 className="mt-5">ASUS XONAR AE</h1>

            <p>7.1 PCIe gaming sound card with 192kHz/24-bit Hi-Res audio quality, 150ohm headphone amp, high-quality DAC, and exclusive EMI back plate.</p>

            <br/>

            <div className="row">

               <div className="col-sm">
                  <ul style={{paddingLeft: "20px"}}>
                     <li>192kHz/24-bit Hi-Res audio and 7.1-channel, 150ohm headphone amp</li>
                     <li>High-quality ESS DAC with 110dB signal-to-noise ratio (SNR)</li>
                     <li>Exclusive EMI back plate provides noise shielding for exceptionally clear audio</li>
                     <li>Sonic Studio enables full audio control via an intuitive, one-page interface</li>
                     <li>Perfect Voice technology eliminates background noise for clear in-game communication</li>
                  </ul>
               </div>

               <div className="col-sm">
                  <img src={this.state.src} alt="Prod_Img" className="img-product"
                     style={{position: "relative", bottom: "5%", objectFit: "cover", width: "500px"}}/>
               </div>

               <div className="col-sm">
                  Ratings:&emsp;<span className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>
                  <br/><br/>
                  Price:&emsp;₪216.99
                  <br/><br/>
                  <span className="text-success">In Stock</span>
                  <br/><br/>
                  Shipping:&emsp;<span className="text-success">Free Shipping</span>
                  <br/><br/>
                  Shipping To:&emsp;Worldwide
                  <br/><br/>
                  Arrives:&emsp;6-12 Working Days After Dispatch
                  <br/><br/>
                  Quantity:&emsp;<select><option>1</option><option>2</option><option>3</option></select>
                  <br/><br/>
                  <button type="button" className="btn btn-outline-primary">
                     <span style={{fontSize: "1.25rem", fontWeight: "300"}}>Add to <i className="fas fa-shopping-cart"></i></span>
                  </button>
                  &emsp;
                  <button type="button" className="btn btn-outline-warning">
                     <span style={{fontSize: "1.25rem", fontWeight: "300"}}>Add to <i className="fas fa-star"></i></span>
                  </button>
               </div>

            </div>

            <br/><br/>
            
            <div className="gallery">
               <img src="/images/brands/ASUS/ASUS-XONAR-AE/1.png" alt="Img_1" onClick={this.updateState}/>
            </div>

            <div className="gallery">
               <img src="/images/brands/ASUS/ASUS-XONAR-AE/2.png" alt="Img_2" onClick={this.updateState}/>
            </div>

            <div className="gallery">
               <img src="/images/brands/ASUS/ASUS-XONAR-AE/3.png" alt="Img_3" onClick={this.updateState}/>
            </div>

            <div className="gallery">
               <img src="/images/brands/ASUS/ASUS-XONAR-AE/4.png" alt="Img_4" onClick={this.updateState}/>
            </div>

            <div className="gallery">
               <img src="/images/brands/ASUS/ASUS-XONAR-AE/5.png" alt="Img_5" onClick={this.updateState}/>
            </div>
            
            {/*https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements*/}
            <span className="d-block d-xl-none" style={{color: "white"}}>........................</span>

            <br/><br/><br/><br/><br/><br/><br/><br/>

            <h3>Similar Products:</h3>

            <br/>

            <div className="gallery">
               <a target="_blank" href="#"/>
               <img src="/images/brands/Creative/Creative-Sound-BlasterX-AE-5/1.png" alt="Other_1"/>
               <div className="desc">Creative Sound BlasterX AE-5</div>
            </div>

            <div className="gallery">
               <a target="_blank" href="#"/>
               <img src="/images/brands/EVGA/EVGA-NU-Audio/1.png" alt="Other_2"/>
               <div className="desc">EVGA NU Audio</div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
       </main>
      );
   }
}

export default Middle;