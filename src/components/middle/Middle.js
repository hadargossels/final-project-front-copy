
import './Middle.css';
import barista from './imgs/barista.jpg'
import gal3 from './imgs/gal3.jpg'
import gal4 from './imgs/gal4.jpg'
import gal5 from './imgs/gal5.png'
import gal6 from './imgs/gal6.jpg'
import gal1 from './imgs/gal1.png'
import gal2 from './imgs/gal2.jpg'
import img1 from './imgs/img1.png'
import img2 from './imgs/img2.png'
import img3 from './imgs/img3.png'

function Middle() {
    return (
     
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="bigImg">
                <img
                  src={barista}
                  width="400"
                  height="430"
                  className="row"
                  
                />
              </div>
              <div className="container"></div>
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <img
                        src={gal2}
                        width="100"
                        height="100"
                        className="img col"
                      />
                    </div>
                    <div className="col-sm">
                      <img
                        src={gal3}
                        width="100"
                        height="100"
                        className="img col"
                      />
                    </div>
                    <div className="col-sm">
                      <img
                        src={gal4}
                        width="100"
                        height="100"
                        className="img col"
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <img
                          src={gal5}
                          width="100"
                          height="100"
                          className="img col"
                        />
                      </div>
                      <div className="col-sm">
                        <img
                          src={gal6}
                          width="100"
                          height="100"
                          className="img col"
                        />
                      </div>
                      <div className="col-sm">
                        <img
                          src={gal1}
                          width="100"
                          height="100"
                          className="img col"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col-sm">
                <h1>Capsule dispenser transparent cube</h1>
                <div className="container">
                  <span className="col">
                    790.00<i className="fas fa-shekel-sign"></i>
                  </span>
                  &emsp;
                  <button className="col btn btn-success" type="button">
                    <i className="fas fa-cart-plus"></i>&thinsp;Add to cart
                  </button>
                </div>
                <p>Devices-Milk</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  The Nespresso Barista is an invitation to discover a wide
                  world of recipe possibilities. Prepare anything from
                  refreshing iced coffees to elaborate latte art at home. With
                  its touch screen, navigating through the recipes becomes
                  surprisingly easy. You’ll want to rival your favourite coffee
                  shop and impress anybody who loves coffee as much as you do.
                  The Barista is designed for those who simply want to choose
                  their fancy. Café style. * The device does not support
                  connection to the application
                </p>
                {/* <p> מחיר מלא של המוצר, מחיר הנחה של המוצר (אם יש) מחיר מכירה של המוצר</p> */}
                <p>Only 2 left in stock - order soon.</p>
                <div>
                  Select quantity:&emsp;
                  <select id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div>
                  Ships to Israel
                  <p>
                    {" "}
                    22.55<i className="fas fa-shekel-sign"></i> Shipping to Israel
                  </p>
                  <span>shipped in 2 weeks</span>
                </div>
                <br />
                <button type="button" className="btn btn-warning">
                  <i className="fas fa-plus"></i>Add to the favorites list
                </button>
              </div>
            </div>
          </div>
                <div className="row-fluid">
                    <div className="container product">
                    <div className="row">

                        <div className="col-sm ">

                        <div className="card border border-danger" >
                            <img src={img1} className="card-img-top"/>
                            <div className="card-body">
                            <h5 className="card-title">ESSENZA MINI PIANO BLACK</h5>
                            <p className="card-text">749<i className="fas fa-shekel-sign"></i></p>
                            <p className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </p>
                            </div>
                        </div>
                        
                  
                </div>

                <div className="col-sm">
                    <div className="card border border-danger" >
                            <img src={img2} className="card-img-top"/>
                            <div className="card-body">
                            <h5 className="card-title">2 VIEW Recipe Glasses</h5>
                            <p className="card-text">89.00<i className="fas fa-shekel-sign"></i></p>
                            <p className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </p>
                            </div>
                        </div>
                    </div>
                        
                <div className="col-sm">
                <div className="card border border-danger" >
                            <img src={img3} className="card-img-top"/>
                            <div className="card-body">
                            <h5 className="card-title">Orange Flavored Biscuits</h5>
                            <p className="card-text">25.00<i className="fas fa-shekel-sign"></i></p>
                            <p className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            </p>
                            </div>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Middle;

