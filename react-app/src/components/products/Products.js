import React, { Component } from 'react';

class Products extends Component{

    constructor() {

        super();
  
        this.state = [{img: "/images/brands/ASUS/ASUS-XONAR-AE/1.png", alt: "asus-xonar-ae", name: "ASUS XONAR AE", price: 216.99, rating: 3.5},
                    {img: "/images/brands/Creative/Creative-Sound-BlasterX-AE-5/1.png", alt: "creative-sound--blasterx-ae-5", name: "Creative Sound BlasterX AE-5", price: 600.00, rating: 2.5},
                    {img: "/images/brands/EVGA/EVGA-NU-Audio/1.png", alt: "evga-nu-audio", name: "EVGA NU Audio", price: 752.23, rating: 1.0}];

        this.len = this.state.length;
        this.lowPrice = this.lowPrice.bind(this);
        this.highPrice = this.highPrice.bind(this);
        this.bestRating = this.bestRating.bind(this);
     };
     
     lowPrice() {

        let arr = Object.keys(this.state).map((k) => this.state[k]);

        arr = arr.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));

        this.setState(arr);
     }

     highPrice() {

        let arr = Object.keys(this.state).map((k) => this.state[k]);

        arr = arr.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));

        this.setState(arr);
     }

     bestRating() {

        let arr = Object.keys(this.state).map((k) => this.state[k]);

        arr = arr.sort((a,b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0));

        this.setState(arr);
     }

/*      updateState(img) {
  
        this.setState({src: img.target.src});
     } */

     
   render(){
        
        const stars = {0.5: <span><i className="fas fa-star-half"></i></span>,
                    1.0: <span><i className="fas fa-star"></i></span>,
                    1.5: <span><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
                    2.0: <span><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
                    2.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
                    3.0: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
                    3.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
                    4.0: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
                    4.5: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half"></i></span>,
                    5.0: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>};

      return(
         <main role="main" className="container lead">

            <br/><br/><br/><br/>
            
            <div className="row">

            <div className="col-md-3">

                <div>
                  <form>
                    <a href="#" className="list-group-item active">Categories</a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox"/> Hardware
                           <span className="label label-success pull-right"> (34)</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Laptops
                         <span className="label label-danger pull-right"> (4)</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Peripherals
                             <span className="label label-info pull-right"> (434)</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Software
                             <span className="label label-success pull-right"> (34)</span>
                        </li>
                     </ul>
                  </form>
                </div>

                <br/>

                <div>
                  <form>
                    <a href="#" className="list-group-item active list-group-item-success">Sub-Category
                    </a>
                    <ul className="list-group">

                        <li className="list-group-item"><input type="checkbox"/> CPUs
                             <span className="label label-danger pull-right"> (300)</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> GPUs
                             <span className="label label-success pull-right"> (340)</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Sound Cards
                             <span className="label label-info pull-right"> (735)</span>
                        </li>

                    </ul>
                    </form>
                </div>

                <br/>

                <div>
                  <form>
                    <a href="#" className="list-group-item active">Type
                    </a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox"/> Internals
                             <span className="label label-warning pull-right"> (456)</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Externals
                             <span className="label label-success pull-right"> (156)</span>
                        </li>
                    </ul>
                    </form>
                </div>

                <br/>

                <div>
                  <form>
                    <a href="#" className="list-group-item active">Brand
                    </a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox"/> ASUS
                             <span className="label label-warning pull-right"> (456)</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Creative
                             <span className="label label-success pull-right"> (156)</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> EVGA
                             <span className="label label-success pull-right"> (156)</span>
                        </li>
                    </ul>
                    </form>
                </div>

                <br/><br/><br/>

{/*                 <div>
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-success"><a href="#">New Offer's Coming </a></li>
                        <li className="list-group-item list-group-item-info"><a href="#">New Products Added</a></li>
                        <li className="list-group-item list-group-item-warning"><a href="#">Ending Soon Offers</a></li>
                        <li className="list-group-item list-group-item-danger"><a href="#">Just Ended Offers</a></li>
                    </ul>
                </div>

                <div className="well well-lg offer-box offer-colors">


                    <span className="glyphicon glyphicon-star-empty"></span>25 % off  , GRAB IT                 
              
                   <br />
                    <br />
                    <div className="progress progress-striped">
                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                            style={{width: "70%"}}>
                            <span className="sr-only">70% Complete (success)</span>
                            2hr 35 mins left
                        </div>
                    </div>
                    <a href="#">click here to know more </a>
                </div> */}

            </div>

            <div className="col-md-9">
                <div>
                    <ol className="breadcrumb">
                        <li><a href="#">Home</a></li>
                         / <li className="active">Hardware</li>
                    </ol>
                </div>

                <div className="row">
                    <div className="btn-group alg-right-pad">
                        <button type="button" className="btn btn-default"><strong>{this.len}  </strong>Items</button>
                        <div className="btn-group">&nbsp;
                            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                                Sort Products &nbsp;
                              <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#" onClick={this.lowPrice}>By Price Low</a></li>
                                <li className="divider"></li>
                                <li><a href="#" onClick={this.highPrice}>By Price High</a></li>
                                <li className="divider"></li>
{/*                                 <li><a href="#">By Popularity</a></li>
                                <li className="divider"></li> */}
                                <li><a href="#" onClick={this.bestRating}>By Ratings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                        <div className="thumbnail product-box">
                            <img src={this.state[0].img} alt={this.state[0].alt} width="60%"/>
                            <div className="caption">
                                <h3><a href="#">{this.state[0].name}</a></h3>
                                <p>Price : <strong>₪{this.state[0].price}</strong>  </p>
                                <p>Ratings:&emsp;<span className="text-warning">{stars[this.state[0].rating]}</span></p>
{/*                                 <p><a href="#">Ptional dismiss button </a></p> */}
                                <p>Ptional dismiss button in tional dismiss button in   </p>
                                <p><a href="#" className="btn btn-success" role="button">Add To <i className="fas fa-shopping-cart"></i></a> <a href="#" className="btn btn-primary" role="button">See Details</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                        <div className="thumbnail product-box">
                            <img src={this.state[1].img} alt={this.state[1].alt} width="55%"/>
                            <div className="caption">
                                <h3><a href="#">{this.state[1].name}</a></h3>
                                <p>Price : <strong>₪{this.state[1].price}</strong>  </p>
                                <p>Ratings:&emsp;<span className="text-warning">{stars[this.state[1].rating]}</span></p>
{/*                                 <p><a href="#">Ptional dismiss button </a></p> */}
                                <p>Ptional dismiss button in tional dismiss button in   </p>
                                <p><a href="#" className="btn btn-success" role="button">Add To <i className="fas fa-shopping-cart"></i></a> <a href="#" className="btn btn-primary" role="button">See Details</a></p>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-md-4 text-center col-sm-6 col-xs-6">
                        <div className="thumbnail product-box">
                            <img src={this.state[2].img} alt={this.state[2].alt} width="60%"/>
                            <div className="caption">
                                <h3><a href="#">{this.state[2].name}</a></h3>
                                <p>Price : <strong>₪{this.state[2].price}</strong>  </p>
                                <p>Ratings:&emsp;<span className="text-warning">{stars[this.state[2].rating]}</span></p>
{/*                                 <p><a href="#">Ptional dismiss button </a></p> */}
                                <p>Ptional dismiss button in tional dismiss button in   </p>
                                <p><a href="#" className="btn btn-success" role="button">Add To <i className="fas fa-shopping-cart"></i></a> <a href="#" className="btn btn-primary" role="button">See Details</a></p>
                            </div>
                        </div>
                    </div>
        
                </div>
            
            </div>
            </div>
            <br /><br />
       </main>
      );
   }
}

export default Products;