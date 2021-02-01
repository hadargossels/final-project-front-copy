import React, { Component } from 'react';
import './productStyle.css';

function cartClick() {
    if(this===undefined)
      return;
      let button = this;
      console.log(button)
      button.classList.add('clicked');
      return;
  }
class Product extends Component{
   render(){
      return(
    <div>
       <div className="container-row-app">
          <div className="container-col-app">
             <img src="motor.png" alt="motor" className="imgProduct"  width="400" height="400"/>
             <img src="aboutItem.png" alt="aboutItem" className="imgProduct"  width="400" height="400"/>
          </div>
          <div className="container-col-app">
             <h1 className="productHeader">The Emula electric motorcycle is a two-wheeled time machine</h1>
             <p className="pBrand">Brand: Electric</p>
             <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
             </div>
             <p className="pPrice">Price: <span className="spanPrice">120,000ILS</span></p>
             <h3 className="sale">Sale: 110,000ILS</h3>
             <h3 className="features">Features</h3>
             <p className="pFeatures">SYMNH T is a collection of crossover adventure; designed for the urban explorer.
                The slightly upright riding posture offers you a clearer forward visibility.
                To achieve outstanding handling, the SYMNH T features perimeter frame, centered-suspension and front & rear brake disc with CBS.

                Full-LED lighting, 2A USB charger and LCD meter on SYMNH T gives the bike a contemporary look.
                It also equipped with beak and visor; emphasize the adventure look.
                The front 140mm travel suspension provides greater ability on crossing various terrains. The wire-spoke wheels help on absorbing shock from the road, which can make your riding journey more comfortable.
             </p>
             <h3 className="features">Dimensions</h3>
             <div className="container-row-dimensions">
                <div className="container-col-dimensions">
                   <p className="pFeatures">
                         Length x Width x Height (mm)<br></br>
                         Wheel Base (mm)<br></br>
                         Curb Weight<br></br>
                         Front Suspension<br></br>
                         Rear Suspension<br></br>
                         Front/Rear Rim Material<br></br>
                         Front Tire Dimensions<br></br>
                         Rear Tire Dimensions<br></br>
                         Front Brakes Type/Diameter<br></br>
                         Rear Brakes Type/Diameter<br></br>
                         Fuel Capacity
                   </p>
                </div>
                <div className="container-col-dimensions">
                   <p className="pFeatures">
                         2068 x 860 x 1195 mm<br></br>
                         1405 mm<br></br>
                         152 kg<br></br>
                         Telescope fork<br></br>
                         Single swing<br></br>
                         Aluminum/ Aluminum<br></br>
                         100 / 90-19<br></br>
                         130 / 80-17<br></br>
                         Disc Ø 288 mm + ABS<br></br>
                         Disc Ø 222 mm + ABS<br></br>
                         11 L
                   </p>
                </div>
             </div>
             <h3 className="features">Power System</h3>
             <div className="container-row-dimensions">
                <div className="container-col-dimensions">
                   <p className="pFeatures">
                         Emissions Standard<br></br>
                         Engine Type/Cylinder<br></br>
                         Displacement<br></br>
                         Fuel System<br></br>
                         Max. Horsepower<br></br>
                         Max. Torque<br></br>
                         Max. Speed<br></br>
                         Cooling System<br></br>
                         Transmission
                   </p>
                </div>
                <div className="container-col-dimensions">
                   <p className="pFeatures">
                         Euro IV<br></br>
                         4-stroke engine, single cylinder<br></br>
                         183 c.c.<br></br>
                         EFI<br></br>
                         13.5 kW / 8500 rpm<br></br>
                         15.7 Nm / 7500 rpm<br></br>
                         125 km/h<br></br>
                         Liquid<br></br>
                         gear/ 6-speed
                   </p>
                </div>
             </div>
             <h3 className="features">Electric System</h3>
             <div className="container-row-dimensions">
                <div className="container-col-dimensions">
                   <p className="pFeatures">
                         Starting System<br></br>
                         Headlight<br></br>
                         Taillight<br></br>
                         Front Position Lamp<br></br>
                         Front/Rear Turning Signal Light
                   </p>
                </div>
                <div className="container-col-dimensions">
                   <p className="pFeatures">
                         Electrical starter<br></br>
                         LED<br></br>
                         LED<br></br>
                         LED × 2<br></br>
                         LED X2/ LED X2
                   </p>
                </div>
             </div>
          </div>
          <div className="container-col-add">
             <div class="borderAddToCart">
             <p></p>

                <button class="cart-button" onclick={cartClick()}>
                   <span class="add-to-cart">Add to cart</span>
                   <span class="added">Added</span>
                   <i class="fas fa-shopping-cart"></i>
                   <i class="fas fa-box"></i>
                </button>
                <p></p>
                <button class="cart-button">
                   <span class="add-to-cart">Buy Now</span>
                </button>                     
             

                <div class="input-group plus-minus-input">
                   <div class="input-group-button">
                      <button type="button" class="button hollow circle" data-quantity="minus" data-field="quantity">
                         <i class="fa fa-minus" aria-hidden="true"></i>
                      </button>
                   </div>
                   <input class="input-group-field" type="number" name="quantity" value="0"/>
                   <div class="input-group-button">
                      <button type="button" class="button hollow circle" data-quantity="plus" data-field="quantity">
                         <i class="fa fa-plus" aria-hidden="true"></i>
                      </button>
                   </div>
                </div>

             </div>
          </div>
       </div>
    </div>
      );
    }
 }
 export default Product;