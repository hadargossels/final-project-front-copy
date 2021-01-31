import React, { Component } from 'react';
class Middle extends Component{
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
                  <img src="https://www.asus.com/media/global/products/fS9hNFSsuUJ8Gj5k/P_setting_xxx_0_90_end_692.png" alt="Prod_Img" className="img-product"
                     style={{position: "relative", bottom: "10%", objectFit: "cover", width: "500px"}}/>
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
               <img src="https://www.asus.com/media/global/gallery/4enNzOgsVmK8mQmU_setting_xxx_0_90_end_1000.png" alt="Img_1"/>
            </div>

            <div className="gallery">
               <img src="https://www.asus.com/media/global/gallery/iRbQDTZHs61TPHxM_setting_xxx_0_90_end_1000.png" alt="Img_2"/>
            </div>

            <div className="gallery">
               <img src="https://www.asus.com/media/global/gallery/X5N5zbOq263GBM1n_setting_xxx_0_90_end_1000.png" alt="Img_3"/>
            </div>

            <div className="gallery">
               <img src="https://www.asus.com/media/global/gallery/lAOyT4mKr0C1FYjy_setting_xxx_0_90_end_1000.png" alt="Img_4"/>
            </div>

            <div className="gallery">
               <img src="https://www.asus.com/media/global/gallery/wN9K3cLQsb2KhPRI_setting_xxx_0_90_end_1000.png" alt="Img_5"/>
            </div>
            
            {/*https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements*/}
            <span className="d-block d-lg-none" style={{color: "white"}}>........................</span>

            <br/><br/><br/><br/><br/><br/><br/><br/>

            <h3>Similar Products:</h3>

            <br/>

            <div className="gallery">
               <a target="_blank" href="#"/>
               <img src="https://d287ku8w5owj51.cloudfront.net/images/products/hero/sound-blasterx-ae-5/hero-sound-blasterx-ae-5.png" alt="Other_1"/>
               <div className="desc">Creative Sound BlasterX AE-5</div>
            </div>

            <div className="gallery">
               <a target="_blank" href="#"/>
               <img src="https://images.evga.com/products/gallery/png/712-P1-AN01-KR_XL_4.png" alt="Other_2"/>
               <div className="desc">EVGA NU Audio</div>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
       </main>
      );
   }
}

export default Middle;