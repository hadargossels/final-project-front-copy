import React, { Component } from 'react'
import './Catalog.css';
import Product from '../Prod/Prod';
import myProducts from './prod.json';

export default class Catalog extends Component {
    constructor(props){
        super(props)

        this.Products= myProducts;

        this.state = {
            Arr:this.Products
        }
        
        this.updateState = this.updateState.bind(this)
    }
    

    updateState(e){
        
        let myArr =[...this.Products]
        //check price
        if(e.target.id === "price1")
            myArr = myArr.filter((prod) => {
                    return (prod.Price <10)
                });
        else if (e.target.id === "price2")
            myArr = myArr.filter((prod) => {
                return (prod.Price <20 && prod.Price >10)
            });
        else if (e.target.id === "price3")
            myArr = myArr.filter((prod) => {
                return (prod.Price <30 && prod.Price >20)
            });
        else if (e.target.id === "price4")
            myArr = myArr.filter((prod) => {
                return (prod.Price <50 && prod.Price >30)
            });
        else if (e.target.id === "price5")
            myArr = myArr.filter((prod) => {
                return (prod.Price <100 && prod.Price >50)
            });
        else if (e.target.id === "price6")
            myArr = myArr.filter((prod) => {
                return (prod.Price >100)
            });
        //check if hardware
        if(e.target.id === "hardware")
        myArr = myArr.filter((prod) => {
            return (prod.Hardware ===true)
        });
        else if (e.target.id === "all")
            myArr = [...this.Products]
        else if (e.target.id === "accessories")
        myArr = myArr.filter((prod) => {
            return (prod.Hardware ===false)
        });

        this.setState({ Arr: myArr })
        
    }
 
    

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
                            <p id="all" onClick={this.updateState} className="col-6 cursor">All</p>
                            <p className="col-6 text-end">8</p>
                            <p id="hardware" onClick={this.updateState} className="col-6 cursor">Hardware wallet</p>
                            <p className="col-6 text-end">3</p>
                            <p id="accessories" onClick={this.updateState} className="col-6 cursor">Accessories</p>
                            <p className="col-6 text-end">5</p>
                        </div>
                        </div>
                        <br/>
                        <h4 className="text-center"><b>Price</b></h4>
                        <div className="container">
                            <p id="price1" onClick={this.updateState} className="cursor">under $10</p>
                            <p id="price2" onClick={this.updateState} className="cursor">$10 to $20</p>
                            <p id="price3" onClick={this.updateState} className="cursor">$20 to $30</p>
                            <p id="price4" onClick={this.updateState} className="cursor">$30 to $50</p>
                            <p id="price5" onClick={this.updateState} className="cursor">$50 to $100</p>
                            <p id="price6" onClick={this.updateState} className="cursor">$100 &#38; above</p>
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
                            {
                                this.state.Arr.map((prod) =>
                                    <Product key={prod.Title} price={prod.Price} title={prod.Title} image={prod.Image} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
