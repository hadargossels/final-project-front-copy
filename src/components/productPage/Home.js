import React, { Component } from 'react';
import {Link,Route} from "react-router-dom";

const ListItemLink = ({ to, name }) => (
    <Route path={to} children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <Link className="btn btn-dark" to={to}>{name}</Link>
      </li>
    )}/>);

const ImgLink = ({ name , to ,src }) => (
  <Route path={to} children={({ match }) => (
      <li className={match ? 'active' : ''}><br/>
      <Link className="btn text-white text-center" to={to}><br/>
          <img key={name} src={src} alt="..." width='80%' height="200rem"/><br/>
          <h3>{name}</h3>
      </Link>
      </li>
  )}/>);

class Home extends Component{

    render(){
       return ( 
                <div id="homePage"
                 style={{
                   backgroundImage:"url('/images/bg-img.jpg')",
                   backgroundRepeat: "no-repeat",
                   backgroundSize:"100%",
                   height: "55vw"
                 }}
                 className="text-center">
                    <h1 id="homeHeadLine" className="text-white">Wellcome to Experis Sports</h1>
                    <img src="/images/experisSportLogo.png"></img>
                    <ListItemLink to="/store/all"  name="Go to store"/><br/>
                    <div className="row">
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
                    </div>
                </div>


       )

    }

}

export default Home;