import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import './Home.css'
import Slide from "./Slide";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
          <div id="imgHomePage"></div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <Link to="/store"><div className="carousel-inner">
            <div className="carousel-item active">
             <img src="./images/img13.jpg" className="d-block w-100 slideImg" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./images/img14.jpg" className="d-block w-100 slideImg" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./images/img15.jpg" className="d-block w-100 slideImg" alt="..." />
            </div>
          </div></Link>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
        <div className="categories" style={{marginTop:"5rem"}}>
        
          <div className="divCate">
          <Link to="/store/new"><span className="spantext">New</span></Link>
          </div>
          <div className="divCate">
          <Link to="/store/best sellers"><span className="spantext">Best Sellers</span></Link>
          </div>
          <div className="divCate">
          <Link  to="/store/sales"><span className="spantext">Sales</span></Link>
          </div>
          <div className="divCate">
          <Link  to="/store/featured product"><span className="spantext">Featured Product</span></Link>
          </div>
          
        </div>
        <div className="bestseller" style={{textAlign:"center",marginTop:"10rem"}}>
        <NavLink style={{ textDecoration:"none"}} to="/store/best sellers"><h2 style={{marginBottom:"2rem"}} className="titleH2">BEST SELLERS</h2></NavLink>
          <div className="row" >
               <Slide category="BEST SELLERS" id="0" nameItem="slide0" categoryimg="/images/bastSeller.png"/>
          </div>
        </div>
        <div className="bestseller" style={{textAlign:"center",marginTop:"10rem"}}>
        <NavLink style={{ textDecoration:"none"}} to="/store/sales"><h2 style={{marginBottom:"2rem"}} className="titleH2">Sales</h2></NavLink>
          <div className="row" >
               <Slide category="sales" id="1" nameItem="slide1" categoryimg="/images/sale.webp"/>
          </div>
        </div>

        <div className="bestseller" style={{textAlign:"center",marginTop:"10rem"}}>
        <NavLink style={{ textDecoration:"none"}} to="/store/new"><h2 style={{marginBottom:"2rem"}} className="titleH2">New</h2></NavLink>
          <div className="row d-flex" >
               <Slide category="New" id="2"  nameItem="slide2" categoryimg="/images/new.webp"/>
          </div>
        </div>
        <div className="bestseller" style={{textAlign:"center",marginTop:"10rem",marginBottom:"10rem"}}>
        <NavLink style={{ textDecoration:"none"}} to="/store/featured product"><h2 className="titleH2" style={{marginBottom:"2rem"}}>Featured Product</h2></NavLink>
          <div className="row d-flex" >
           <Slide category="Featured Product" id="3" nameItem="slide3" categoryimg="/images/feature.png"/>
          </div>
        </div>
      </div>
    );
  }
}
