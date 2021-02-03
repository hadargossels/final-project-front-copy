import React, { Component } from 'react';
import './Products.css';
import ratingStars from '../../js/script';
import ProductsList from '../ProductsList/ProductsList';
/* import ProductsFilter from '../ProductsFilter/ProductsFilter'; */

export default class Products extends Component {

    constructor(props) {

        super(props);
        
        this.state = {prodsArr: props.prodsArr, displayArr: props.prodsArr, displayArrLen: props.prodsArr.length, filterArr: [], numHardware: 0, numLaptops: 0, numPeripheral: 0, numSoftwares: 0};
        
        this.lowPrice = this.lowPrice.bind(this);
        this.highPrice = this.highPrice.bind(this);
        this.bestRating = this.bestRating.bind(this);
        this.alphabet = this.alphabet.bind(this);

        for (let prod of this.state.prodsArr) {

            if (prod.category === "Hardware")
                this.state.numHardware++;

            else if (prod.category === "Laptops")
                this.state.numLaptops++;

            else if (prod.category === "Peripheral")
                this.state.numPeripheral++;
            
            else if (prod.category === "Softwares")
                this.state.numSoftwares++;
        }
    };
     
    lowPrice() {

        let newArr = this.state.displayArr;

        newArr = newArr.sort((a,b) => {

            let priceA = a.price;
            let priceB = b.price;

            if (a.discount)
                priceA = a.price*(1-a.discountPercentage);
        
            if (b.discount)
                priceB = b.price*(1-b.discountPercentage);

            return (priceA > priceB) ? 1 : ((priceB > priceA) ? -1 : 0)
        });

        this.setState({displayArr: newArr});
    }

    highPrice() {

        let newArr = this.state.displayArr;

        newArr  = newArr.sort((a,b) => {

            let priceA = a.price;
            let priceB = b.price;

            if (a.discount)
                priceA = a.price*(1-a.discountPercentage);
            
            if (b.discount)
                priceB = b.price*(1-b.discountPercentage);

            return (priceA < priceB) ? 1 : ((priceB < priceA) ? -1 : 0)

        });

        this.setState({adisplayArr: newArr});
    }

    bestRating() {

        let newArr = this.state.displayArr;

        newArr = newArr.sort((a,b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0));

        this.setState({displayArr: newArr});
    }

    alphabet() {

        let newArr = this.state.displayArr;

        newArr = newArr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

        this.setState({displayArr: newArr});
    }

    filterCategories(category) {

        let arr = [...this.state.prodsArr];
        let filterArr = [...this.state.filterArr];

        const index = filterArr.indexOf(category);

        if (index == -1)
            filterArr.push(category);
        
        else
            filterArr.splice(index, 1);
        
        if (filterArr.length > 0) {

           arr = arr.filter(prod => {

            //    if ((filterArr.indexOf(prod.category) != -1) || (filterArr.indexOf(prod.subCategory) != -1) || (filterArr.indexOf(prod.type) != -1) || (filterArr.indexOf(prod.brand) != -1))
            //         return prod;

                if ((filterArr.indexOf(prod.category) != -1))
                    return prod;
            });
        }

        this.setState({displayArr: arr, displayArrLen: arr.length, filterArr: filterArr}); 
    }

   render(){
      return(
         <main role="main" className="lead" style={{width: "95%", margin: "0 auto"}}>

            <br/><br/><br/><br/>

            <div>
                <ol className="breadcrumb">
                    <li><a href="#">Home</a></li>
                        / <li className="active"><a href="#">Products</a></li>
                </ol>
            </div>

            <div className="row">

            <div className="col-md-3">

                <div>
                    <a href="#" className="list-group-item active">Categories</a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox" onChange={(e) => this.filterCategories(e.target.value)} value="Hardware"/> Hardware
                           <span className="label label-success pull-right"> ({this.state.numHardware})</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox" onChange={(e) => this.filterCategories(e.target.value)} value="Laptops"/> Laptops
                         <span className="label label-danger pull-right"> ({this.state.numLaptops})</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox" onChange={(e) => this.filterCategories(e.target.value)} value="Peripheral"/> Peripheral
                             <span className="label label-info pull-right"> ({this.state.numPeripheral})</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox" onChange={(e) => this.filterCategories(e.target.value)} value="Softwares"/> Softwares
                             <span className="label label-success pull-right"> ({this.state.numSoftwares})</span>
                        </li>
                     </ul>
                </div>

                <br/>

                {/* ---------------------- To Be Continued ----------------------*/}
                {/* ---------------------- ProductsFilter ----------------------*/}

                <div>
                    <a href="#" className="list-group-item active list-group-item-success">Sub-Categories</a>
                    <ul className="list-group">

                        <li className="list-group-item"><input type="checkbox"/> CPUs
                             <span className="label label-danger pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> GPUs
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Operating Systems
                             <span className="label label-info pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Sound Cards
                             <span className="label label-info pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Speakers
                             <span className="label label-info pull-right"> ()</span>
                        </li>

                    </ul>

                </div>

                <br/>

                <div>
                    <a href="#" className="list-group-item active">Types</a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox"/> Internal
                             <span className="label label-warning pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> External
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> OEM
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Retail
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> 2.0
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> 2.1
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> 5.1
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> 7.1
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                    </ul>

                </div>

                <br/>

                <div>
                    <a href="#" className="list-group-item active">Brands</a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox"/> ASUS
                             <span className="label label-warning pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Creative
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Edifier
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> EVGA
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Microsoft
                             <span className="label label-success pull-right"> ()</span>
                        </li>
                    </ul>

                </div>
                
                <br/>

                <div>
                    <a href="#" className="list-group-item active">Ratings</a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(0)}
                            <span className="label label-warning pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(0.5)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(1.0)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(1.5)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(2.0)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(2.5)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(3.0)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(3.5)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(4.0)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(4.5)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> {ratingStars(5.0)}
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                    </ul>

                </div>

                <br/>

                <div>
                    <a href="#" className="list-group-item active">Stock</a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox"/> In Stock
                            <span className="label label-warning pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> Out of Stock
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                    </ul>

                </div>

                <br/>

                <div>
                    <a href="#" className="list-group-item active">On Sale</a>
                    <ul className="list-group">
                        <li className="list-group-item"><input type="checkbox"/> Yes
                            <span className="label label-warning pull-right"> ()</span>
                        </li>
                        <li className="list-group-item"><input type="checkbox"/> No
                            <span className="label label-success pull-right"> ()</span>
                        </li>
                    </ul>

                </div>

                <br/>

                <div>
                    <a href="#" className="list-group-item active btn-danger text-center font-weight-bold" style={{borderRadius: "15px"}}>Reset</a>
                </div>

                <br/><br/><br/>

            </div>

            <div className="col-md-9">

                <div className="row">
                    <div className="btn-group alg-right-pad">&nbsp;&thinsp;
                        <button type="button" className="btn btn-default"><strong style={{fontSize: "large"}}>{this.state.displayArrLen}  </strong>Items</button>
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
                                <li><a href="#" onClick={this.bestRating}>By Ratings</a></li>
                                <li className="divider"></li>
                                <li><a href="#" onClick={this.alphabet}>By Alphabet</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">

                    {
                        this.state.displayArr.map((prod, index) =>
                        <ProductsList 
                            key={index} img={prod.img} imgAlt={prod.imgAlt} name={prod.name} price={prod.price} rating={prod.rating} stock={prod.stock} discount={prod.discount} discountPercentage={prod.discountPercentage}
                        />)
                    }
        
                </div>
                <br /><br /><br />
                <div className="d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            
            </div>
            <br /><br />
       </main>
      );
   }
}