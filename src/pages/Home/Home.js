import React, { Component } from "react";
import { Link } from "react-router-dom";
import CatalogElement from "../../components/Catalog/CatalogElement";
import "./Home.css";
import Spinner from "../../components/Spinner/Spinner";
import {connect} from 'react-redux';
import {getProducts, moveBestsell} from '../../actions'


const imgArr = [
{src:'/img/home/slider2.jpg',alt:'',h:'First slide label',p:'Nulla vitae elit libero, a pharetra augue mollisinterdum.',color:'btn-primary'},
{src:'/img/home/slider1.jpg',alt:'',h:'Second slide label',p:'Vitae elit libero, a pharetra augue mollisinterdum.',color:'btn-danger'},
]

class Home extends Component {
  
  componentDidMount(){
    this.props.getProducts()
  }

  clickHandler = ({ target: { innerHTML } }) => {
    this.props.moveBestsell(innerHTML)
  };
  
  render() {
    let homeCategs = [
      {title: "NEW", src: "/img/home/new.jpg", link: "new"},
      {title: "DISCOUNT", src: "/img/home/sale.jpg", link: "discount"},
      {title: "BESTSELLERS", src: "/img/home/bestsellers.jpeg",link: "bestsellers"}
    ];
    return (
      <div className="pb-5 text-center">
        {/* upper-slider */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade py-5" data-bs-ride="carousel">
          <div className="carousel-inner">
              {imgArr.map((item,index)=>(
                  <div key = {index} className={`carousel-item  ${!index&&'active'}`}>
                  <img src={item.src} className="carouselImg d-block w-100" alt={item.alt}/>
                  <div className="carousel-caption d-none d-md-block bg-gradient py-2 rounded">
                    <div className="container">
                      <div className="row text-start">
                        <div className="col-9">
                          <h5>{item.h}</h5>
                          <p>{item.p}</p>
                        </div>
                        <div className="col-3">
                          <Link to="/store/">
                            <button className={`btn btn-lg  w-100 h-100 ${item.color}`}>SHOP NOW!</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>

        {/* img-btns */}
        <div className="container">
          <div className="row justify-content-center mt-5">
            {homeCategs.map((el, key) => (
              <div key={key} className="col-md-4 col-12 my-1" style={{ position: "relative" }}>
                <Link to={`/store/${el.link}`}>
                  <div>
                    <img src={el.src} className="img-fluid toBlur" alt="" />
                    <span className="homeTitle" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontSize: "3rem"}}>{el.title}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* bottom-slider-BestSellers */}
        {!this.props.bestSellers? <Spinner/> : 
          <div className="py-5 container-fluid btmSlider">
              <h1 className="text-danger">Our Best-Sellers</h1>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <button className="btn btn-primary" onClick={this.clickHandler}>&lt;</button>
              </div>
              <div className="col-9">
                <div className="row">
                  {(this.props.bestSellers).slice(0, 3).map(({ ...rest }, key) => (
                    <CatalogElement {...rest} key={key} />
                  ))}
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <button className="btn btn-primary" onClick={this.clickHandler}>&gt;</button>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bestSellers: state.products.bestSellers,
})

export default connect(mapStateToProps, {getProducts, moveBestsell})(Home)
