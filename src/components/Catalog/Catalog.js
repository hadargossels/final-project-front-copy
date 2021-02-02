import React, { Component } from 'react'
import './Catalog.css';
import Rating from '../Rating/Rating';
import T2 from '../../pictures/T2.jpg';
import T1 from '../../pictures/T1.png';
import usb_c from '../../pictures/usb_c.jpg';
import T1_white from '../../pictures/T1_white.png';
import lanyard from '../../pictures/lanyard-09.png';
import incharge_usb_c from '../../pictures/incharge_usb_c.jpg';
import cs_interactive from '../../pictures/cs_interactive.png';
import case_T_front_dark_blue_empty from '../../pictures/case_T_front_dark_blue_empty.png';

const align={
    width:"230px",
    margin:"20px 30px",
    padding:"10px",
    border:"1px lightgrey solid"
}
export default class Catalog extends Component {
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                 <div className="col-3">
                 <br/>
                 <h4 className="text-center"><b>Items</b></h4>
                    <div className="container-fluid">
                        <form className="d-flex">
                        
                        <input className="form-control me-2" type="search" placeholder="Search items" aria-label="Search"/>
                        </form>
                    </div>
                    <br/>
                    <div className="container">
                    <div className="row">
                        <p className="col-6 cursor">All</p>
                        <p className="col-6 text-end">8</p>
                        <p className="col-6 cursor">Hardware wallet</p>
                        <p className="col-6 text-end">3</p>
                        <div className="col-6 cursor">Accessories</div>
                        <div className="col-6 text-end">5</div>
                    </div>
                    </div>
                    <br/>
                    <h4 className="text-center"><b>Price</b></h4>
                    <div className="container">
                    <p className="cursor">under $10</p>
                    <p className="cursor">$10 to $20</p>
                    <p className="cursor">$20 to $30</p>
                    <p className="cursor">$30 to $50</p>
                    <p className="cursor">$50 to $100</p>
                    <p className="cursor">$100 &#38; above</p>
                    </div>
                    <h4 className="text-center"><b>Avg. customer review</b></h4>
                    <div className="container">
                    <div className="cursor"><span className="stars">★★★★</span><span className="starsNot">★</span> &#38; up</div>
                    <div className="cursor"><span className="stars">★★★</span><span className="starsNot">★★</span> &#38; up</div>
                    <div className="cursor"><span className="stars">★★</span><span className="starsNot">★★★</span> &#38; up</div>
                    <div className="cursor"><span className="stars">★</span><span className="starsNot">★★★★</span> &#38; up</div>
                    <div className="cursor"><span className="stars"></span><span className="starsNot">★★★★★</span> &#38; up</div>
                    </div>
                 </div>

                <div className="col-9">
                <br/>
                    <div className="container d-flex justify-content-center flex-wrap">
                    <div style={align} className="text-center .align-content-center">
                        
                        <img src={T2} className="catalog alignCenter cursor"/>
                        <div><b>Trezor Model T</b></div><br/>
                        <div><b>price: $190.8</b></div>
                        <Rating/>
                        <button className="mx-auto cursor btnAdd">Add to Cart</button>
                    </div>
                    <div style={align} className="text-center">
                        <img src={T1} className="catalog alignCenter cursor"/>
                        <div><b>Trezor Model One</b></div><br/>
                        <div><b>price: $58.5</b></div>
                        <Rating/>
                        <button className="mx-auto cursor btnAdd">Add to Cart</button>
                    </div>
                    <div style={align} className="text-center">
                        <img src={T1_white} className="catalog alignCenter cursor"/>
                        <div><b>Trezor Model One (white)</b></div><br/>
                        <div><b>price: $58.5</b></div>
                        <Rating/>
                        <button className="mx-auto cursor btnAdd">Add to Cart</button>
                    </div>
                    <div style={align} className="text-center">
                        <img src={usb_c} className="catalog alignCenter cursor"/>
                        <div><b>Extended USB-C cable</b></div><br/>
                        <div><b>price: $6</b></div>
                        <Rating/>
                        <button className="mx-auto cursor btnAdd">Add to Cart</button>
                    </div>
                    <div style={align} className="text-center">
                    <div className="for">Recommended</div>
                    <img src={cs_interactive} className="catalog alignCenter cursor"/>
                    <div><b>Cryptosteel Cassette</b></div><br/>
                        <div><b>price: $130.8</b></div>
                        <Rating/>
                        <button className="mx-auto cursor btnAdd">Add to Cart</button>
                    </div>
                    <div style={align} className="text-center">
                    <div className="for">for Model T</div>
                    <img src={case_T_front_dark_blue_empty} className="catalog alignCenter cursor"/>
                    <div><b>Silicone case for Trezor Model T</b></div>
                        <div><b>price: $16.8</b></div>
                        <Rating/>
                        <button className="mx-auto cursor btnAdd">Add to Cart</button>
                    </div>
                    <div style={align} className="text-center">
                    <div className="for">for Model T</div>
                    <img src={incharge_usb_c} className="catalog alignCenter cursor"/>
                    <div><b>InCharge Ultra Portable Cable USB-C</b></div>
                        <div><b>price: $13.2</b></div>
                        <Rating/>
                        <button className="mx-auto cursor btnAdd">Add to Cart</button>
                    </div>
                    <div style={align} className="text-center">
                    <div className="for">For Model T &#38; Model One</div>
                    <img src={lanyard} className="catalog alignCenter cursor"/>
                    <div><b>Premium Adjustable Trezor Lanyard</b></div>
                        <div><b>price: $3.48</b></div>
                    <Rating/>
                    <button className="mx-auto cursor btnAdd">Add to Cart</button>
                    </div>
                    
                </div>
                </div>

                </div>
            </div>
            
        )
    }
}
