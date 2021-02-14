import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";
import "./Home.css"

const ListItemLink = ({ to, name }) => (
    <Route path={to} children={({ match }) => (
        <Link className="btn btn-dark" to={to}>{name}</Link>
    )}/>);

const ImgLink = ({ name , to ,src }) => (
  <Route path={to} children={({ match }) => (
      <Link className="btn text-white text-center" to={to}><br/>
          <img  className="rounded-pill" key={name} src={src} alt="..." width='200rem' height="200rem"/><br/>
          <h3>{name}</h3>
      </Link>
  )}/>);

class Home extends Component{
    constructor(){
      super();
      this.state = {
        hidText:["","",""]
      }
      this.topPrice = ["168.3 $","19 $","22 $"];
    }

    render(){
       return ( 
                <div id="homePage"
                 style={{
                   backgroundImage:"url('/images/bg-img.jpg')",
                   backgroundRepeat: "no-repeat",
                   backgroundSize:"cover",
                   height: "100%",
                   backgroundPosition:"center" 
                   
                 }}
                 className="text-center">
                    <h1 id="homeHeadLine" className="text-white">Wellcome to Experis Sports</h1>
                    <img src="/images/experisSportLogo.png"></img>
                    <ListItemLink to="/store/all"  name="Go to store"/><br/>
                    {/* <div className="row">
                        <div className="col-3"></div>
                        <div className="col-12 col-md-2">
                            <ImgLink name="Bottles" to="/store/bottle" src="/images/bottles/nike-training-hypercharge-shaker-bottle-07l.jpg"/>
                        </div>
                        <div className="col-12 col-md-2">
                          <ImgLink name="Weights" to="/store/weights" src="/images/weights-home.jpg"/>
                        </div>
                        <div className="col-12 col-md-2">
                          <ImgLink name="Yoga" to="/store/yoga" src="/images/yogaMattress.jpg"/>  
                        </div>
                        <div className="col-3"></div>
                    </div> */}
                  <div id="carouselExampleIndicators" className="carousel slide text-center" data-bs-ride="carousel">
                    <h2 className="text-white">Category</h2>
                    {/* <ol className="carousel-indicators">
                      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                      <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol> */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <ImgLink name="Bottles" to="/store/bottle" src="/images/bottles/nike-training-hypercharge-shaker-bottle-07l.jpg"/>
                      </div>
                      <div className="carousel-item">
                        <ImgLink name="Weights" to="/store/weights" src="/images/weights-home.jpg"/>
                      </div>
                      <div className="carousel-item">
                        <ImgLink name="Yoga" to="/store/yoga" src="/images/yogaMattress.jpg"/>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                  <div className="container text-center"><br/><br/><br/>
                      <h2 className="text-white">Best seller</h2>
                      <div className="row">
                          <div className="col-sm-12 col-md-4 quickView" onMouseEnter={()=>this.dispPrice(0)} onMouseLeave={()=>this.hidePrice(0)}>
                            <h2 className="hiddenText text-danger fw-bolder">{this.state.hidText[0]}</h2>
                            <ImgLink name="Bench Press" to="/product/0/Bench Press" src="/images/benchPress.jpg"/>
                          </div>
                          <div className="col-sm-12 col-md-4 quickView" onMouseEnter={()=>this.dispPrice(1)} onMouseLeave={()=>this.hidePrice(1)}>
                            <h2 className="hiddenText text-danger fw-bolder">{this.state.hidText[1]}</h2>
                            <ImgLink name="Yoga wheel" to="/product/5/Yoga wheel" src="/images/yoga-wheel.jpg"/>
                          </div>
                          <div className="col-sm-12 col-md-4 quickView" onMouseEnter={()=>this.dispPrice(2)} onMouseLeave={()=>this.hidePrice(2)}>
                            <h2 className="hiddenText text-danger fw-bolder">{this.state.hidText[2]}</h2>
                            <ImgLink name="Nike water bottle" to="/product/8/Nike water bottle" src="/images/bottles/nike-water-bottle.jpg"/>
                          </div>
                      </div>
                      <br/><br/><br/><br/>
                  </div>
                </div>


       )

    }

    dispPrice(i){
      let tempArr = ["","",""];
      tempArr[i]=this.topPrice[i];
      this.setState({hidText:tempArr});
    }
    
    hidePrice(i){
      this.setState({hidText:["","",""]});
    }

}

export default Home;