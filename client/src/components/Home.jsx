import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/home.css';
import 'bootstrap/js/dist/carousel';
import { useStore } from '../context/StoreContext';


export default function Home() {
    const { products } = useStore();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const bestSellersCarousel = () => {
        const cards = [];
        products.slice(0, 6).forEach((item, index) => {
            cards.push(
                <div className={`col-md-4 ${index%3!==0? 'clearfix d-none d-md-block' : ''}`} key={index}>
                    <Link to={`/${item.name.replace(' ', '_')}`} className="bestSeller" style={{color: 'black', textDecoration: 'none'}}>
                        <div className="card">
                            <img className="card-img-top" src={`${item.product_images[0]}`} alt={item.name}></img>
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        });

        const sliders = [];
        for (let i=0; i<2; i++) {
            sliders.push(
                <div className={`carousel-item ${i===0? 'active' : ''}`} key={i}>
                    <div className="row">
                        {cards.slice(i*3, i*3+3)}
                    </div>
                </div>
            )
        }

        return (
            <div id="multi-item-example" className="container carousel slide carousel-multi-item" data-ride="carousel">
                {/* <!--Controls--> */}
                <div className="controls-top">
                    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                </div>
                {/* <!--Indicators--> */}
                <ol className="carousel-indicators">
                    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                    <li data-target="#multi-item-example" data-slide-to="1"></li>
                </ol>

                {/* <!--Slides--> */}
                <div className="carousel-inner" role="listbox">
                    {sliders}
                </div>
                {/* <!--/.Slides--> */}
            </div>
        )  
    }


    return (
        <div>
            <div className="container-fluid">
                <div className="d-flex flex-column align-items-center justify-content-center" id="major">
                    <h1 className="mb-4">UP TO 30% OFF</h1>
                    {/* <Link to="/products">
                        <button type="button" className="btn btn-outline-secondary" style={{backgroundColor: `rgb(204, 204, 204, 0.8)`}}>SHOP</button>
                    </Link> */}
                </div>
            </div>
            <div className="container-fluid py-4">
                <div className="row text-center categories">
                    <div className="col-12 col-md-4 my-2">
                        <Link to="/products/bedroom" style={{color: 'black', textDecoration: 'none'}}>
                            <div className="box" id="bedroom">
                                <h1 className="display-4 pt-3" style={{fontWeight: "400", fontSize: "40px"}}>BEDROOM</h1>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="col-12 col-md-4 my-2">
                        <Link to="/products/bathroom" style={{color: 'black', textDecoration: 'none'}}>
                            <div className="box" id="bathroom">
                                <h1 className="display-4 pt-3" style={{fontWeight: "400", fontSize: "40px"}}>BATHROOM</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 my-2">
                        <Link to="/products/living-room" style={{color: 'black', textDecoration: 'none'}}>
                            <div className="box" id="living_room">
                                <h1 className="display-4 pt-3" style={{fontWeight: "400", fontSize: "40px"}}>LIVING ROOM</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center" id="sale">
                <div className="text-center">
                    <h1 style={{fontSize: "100px", color: "red"}}>Sale!</h1>
                    <h1 style={{fontSize: "80px", color: "red"}}>Up to 30%</h1>
                </div>
                <Link to={{pathname: "/products/sale", onSale: true}} style={{color: 'white', textDecoration: 'none'}}>
                    <h1 className="display-3" style={{fontWeight: "400"}}>See Products</h1>
                </Link>
            </div>


            <div className="container-fluid text-center py-4">
                <h1 className="display-4" style={{fontWeight: "350", fontSize: "50px", margin:"0"}}>Best Sellers</h1>
                <div>
                    {bestSellersCarousel()}
                </div>
            </div>

        </div>
    );
}

