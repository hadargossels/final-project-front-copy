import React, { Component } from "react";
import "./Product.css";
import barista from "./imgs/barista.jpg";
import { Link } from "react-router-dom";
import data from '../../data2'

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bigPhoto: barista,

      origItem: data
    };

    this.changeImg = this.changeImg.bind(this);
  }
  
  changeImg(img) {
    
    this.setState({ bigPhoto: img });
    console.log(this.state.bigPhoto)
  }

  findRelated(related){
      related=this.state.origItem.filter(
        (item) => item.name === related);
        related=related[0]
        return related
  }
  drowStars(numStars){
    let arrStars = [];
    for (let i = 0; i < 5; i++) {
      if (i < numStars)
        arrStars.push(<i className="fas fa-star" key={i}></i>);
      else
        arrStars.push(
          <i className="fas fa-star" key={i} style={{ color: "grey" }}></i>
        );
    }
    return arrStars
  }
  render() {
    // window.location.reload();
    let nameP = this.props.match.params;
    
    let currentItem = this.state.origItem.filter(
      (item) => item.name === nameP.productName
    );
    currentItem = currentItem[0];
    let related=currentItem.RelatedProducts
    
     let related1=this.findRelated(related[0])
     let related2=this.findRelated(related[1])
     let related3=this.findRelated(related[2])

      console.log(related1,related2,related3)

    
    
    return (
      <div className="middle">
        <div className="container">
          <div className="row firstrow">
            <div className="col">
              <div id="bigImg">
                <img
                  id="bigImg"
                  alt=""
                  src={currentItem.src}
                  width="400"
                  height="430"
                  className="row"
                />
              </div>
              <div className="container"></div>
              <div className="row">
                <div className="container-fluid">
                  <div className="row galery">


                  <div id="carouselExampleControls" class="carousel slide " data-bs-interval="false" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">

                    <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                    <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                    <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                  </div>
                  <div class="carousel-item">
                  <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                    <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                    <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                  </div>
                  <div class="carousel-item">
                  <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                    <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                    <img src={currentItem.src} class="imgSlide" width="120" alt="..."/>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon btnSlide" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon btnSlide" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col">
                <h1>{currentItem.name}</h1>
                <div className="container priceAndBtn">
                  <span className="col">
                    {currentItem.price}
                    <i className="fas fa-shekel-sign"></i>
                  </span>
                  &emsp;
                  <button className="col btn btn-success" type="button">
                    <i className="fas fa-cart-plus"></i>&thinsp;Add to cart
                  </button>
                </div>

                <div className="stars">{this.drowStars(currentItem.stars)}</div><br />
                <p>{currentItem.text}</p>
                <p id="stock">Only 2 left in stock - order soon.</p>
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
                  <p>Ships to Israel</p>
                  <p >
                    <span className="ship">{currentItem.ship}</span>&nbsp;
                    <i className="fas fa-shekel-sign ship"></i> <span>Shipping to Israel</span>
                  </p>
                  <span>shipped in 2 weeks</span>
                </div><br />
                
                <button type="button" className="btn btn-warning">
                  <i className="fas fa-plus"></i>Add to the favorites list
                </button>
              </div>
            </div>
          </div>
          <div className="row-fluid">
            <div className="container product">
              <div className="row">
                <div className="col ">
                  <div className="card border border-danger">
                   <Link to={`/product/${related1.name}`}><img src={related1.src} alt="" className="card-img-top" /></Link> 
                    <div className="card-body">
                      <h5 className="card-title">{related1.name}</h5>
                      <p className="card-text">
                        {related1.price}<i className="fas fa-shekel-sign"></i>
                      </p>
                      <p className="stars">
                        {this.drowStars(related1.stars)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card border border-danger">
                  <Link to={`/product/${related2.name}`}><img src={related2.src} alt="" className="card-img-top" />
                  </Link>
                    <div className="card-body">
                      <h5 className="card-title">{related2.name}</h5>
                      <p className="card-text">
                       {related2.price}<i className="fas fa-shekel-sign"></i>
                      </p>
                      <p className="stars">
                      {this.drowStars(related2.stars)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card border border-danger">
                  <Link to={`/product/${related3.name}`}><img src={related3.src} alt="" className="card-img-top" />
                  </Link>
                    <div className="card-body">
                      <h5 className="card-title">{related3.name}</h5>
                      <p className="card-text">
                        {related3.price}<i className="fas fa-shekel-sign"></i>
                      </p>
                      <p className="stars">
                      {this.drowStars(related3.stars)}
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
}


