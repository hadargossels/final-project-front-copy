import React, { Component } from "react";
import "./Middle.css";
import barista from "./imgs/barista.jpg";
import gal3 from "./imgs/gal3.jpg";
import gal4 from "./imgs/gal4.jpg";
import gal5 from "./imgs/gal5.png";
import gal6 from "./imgs/gal6.jpg";
import gal1 from "./imgs/gal1.png";
import gal2 from "./imgs/gal2.jpg";
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";

export default class Middle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bigPhoto: barista,
      origItem: [
        {
          src: "/images/img1.png",
          name: "ESSENZA MINI PIANO BLACK",
          price: "749",
          stars: "3",
          category: "Pixie",
          ship: "10.00",
          text:
            "The new Essenza Mini, a small, compact machine with all the capabilities,knowledge and expertise of Nespresso in a new, modern design.The new Essenza Mini combines simplicity of use with beauty and minimalism to prepare coffee of uncompromising quality",
        },
        {
          src: "/images/img2.png",
          name: "2 VIEW Recipe Glasses",
          price: "89.00",
          stars: "2",
          category: "Origin",
          ship: "23.00",
          text:
            "Set of 2 Recipe glasses (12oz.) in tempered glass.  You instinctively want to slip your finger around the glass, cradle it in your hand and feel the warmth of your coffee based recipe through the dense glass",
        },
        {
          src: "/images/img3.png",
          name: "Orange Flavored Biscuits",
          price: "60.00",
          stars: "4",
          category: "food&bites",
          ship: "11.50",
          text:
            "These delicious orange flavored cookies with cornmeal provide the perfect balance of golden crunchiness. A combination that will create a delightful tasting experience when paired with one of our coffees. Pack contains 15 pieces (4.23oz).",
        },
        {
          src: "/images/img4.png",
          name: "Pixie",
          price: "120.00",
          stars: "2",
          category: "Pixie",
          ship: "32.10",
          text:
            "Transcending the colors of our Grands Crus capsules, the Pixie Collection will illuminate your daily coffee rituals, creating unique sensations that will transform your experience of tasting.",
        },
        {
          src: "/images/img5.png",
          name: "REVEAL LUNGO",
          price: "130.00",
          stars: "3",
          category: "Origin",
          ship: "12.00",
          text:
            "Elevate your coffee tasting experience with the Reveal Lungo Glass.Set of 2 tasting glasses in crystal-glass, enhancing the body and aroma complexity of the Lungo coffees.Dimensions: Height = 13cm, Width = 6.7cm Ref. 3643/2",
        },
        {
          src: "/images/img6.png",
          name: "Brown sugar",
          price: "21.00",
          stars: "3",
          category: "Sugar",
          ship: "45.00",
          text:
            "Brown Sugar Sticks The sugar sticks contain just the right amount of brown sugar for one cup of coffee.Supplied in a pack of 60 sticks of 4 g each",
        },
        {
          src: "/images/img7.png",
          name: "Pure Rock dispenser",
          price: "110.00",
          stars: "1",
          category: "Pixie",
          ship: "8.00",
          text:
            "(Capacity: 60 capsules (supplied without capsules *The bowl is made of PMMA (Polymethyl - methacrylate  and the base is made of MMA.(Methyle - methacrylate)",
        },
        {
          src: "/images/img8.png",
          name: "Origin Lungo Cups",
          price: "95.00",
          stars: "4",
          category: "LUME Collection",
          ship: "15.00",
          text:
            "With the organic curves and gentle imperfections, this set of cups and trays was desinged by India Mahdavi to remind you of your coffee's most primal from, the raw coffee cherry.Before it is picked, washes, roasted and ground to fill your cup.Smoothily rounded and slightly indented, the Origin Collection simply feels natural in the paln of your hand,And Beautiful to look.",
        },
        {
          src: "/images/img9.png",
          name: "Versilo Capsule Dispense",
          price: "140.00",
          stars: "2",
          category: "LUME Collection",
          ship: "33.00",
          text:
            "A compact, transparent and versatile premium capsules dispenser to easily store and display your favourite Nespresso capsules (up to 40 capsules).*This capsule dispenser is made of PMMA (Polymethyl - methacrylate) and contains magnets",
        },
        {
          src: "/images/img10.png",
          name: "PIXIE Lungo Set, Fortissio & Vivalto",
          price: "140.00",
          stars: "2",
          category: "Pixie",
          ship: "60.00",
          text:
            "In creating the PIXIE collection, the known design studio 5.5 Designers turned the Nespresso’s iconic elements to a colorful collection. The cups are perfectly matching the capsules' colors, for perfect coffee experience.Set of 2 double-wall Lungo cups (160 ml) in Grand Cru colour.Dimensions: Height - 7.8cm, Width at top - 7.5cm.",
        },
        {
          src: "/images/img11.png",
          name: "6 Large VIEW spoons",
          price: "65.00",
          stars: "3",
          category: "Pixie",
          ship: "13.00",
          text:
            "hed some light on the aromas in your Nespresso coffee with the VIEW collection spoons.The design studio Atelier oï created this long spoon to reveal every flavor in all your large coffees or coffee based recipes moments.With a polished finish and an indented handle, they were made to fit your cup, your coffee and your life.Set of 6 large spoons in polished stainless steel 18/10 (19 cm). dishwasher safe.",
        },
        {
          src: "/images/img12.png",
          name: "Aeroccino White",
          price: "340.00",
          stars: "3",
          category: "Barista",
          ship: "26.50",
          text:
            "The Aeroccino3 Milk Frother is an ultra-simple and fast automatic system for preparation of a light and creamy hot or cold milk froth.Simply, pour in the milk, and press the button. In a few seconds, without noise or vibration,the Aeroccino3 prepares a delicious milk froth ideal for countless coffee recipes such as a Café Latte.The Retro line of Aeroccinos are available in 3 stylish colours, red, white and black. The base houses the whisk storage.",
        },
      ],
    };

    this.changeImg = this.changeImg.bind(this);
  }

  changeImg(img) {
    this.setState({ bigPhoto: img });
  }

  render() {
    let nameP = this.props.match.params;
    let currentItem = this.state.origItem.filter(
      (item) => item.name == nameP.productName
    );
    currentItem = currentItem[0];

    let arrStars = [];
    for (let i = 0; i < 4; i++) {
      if (i < currentItem.stars)
        arrStars.push(<i className="fas fa-star" key={i}></i>);
      else
        arrStars.push(
          <i className="fas fa-star" key={i} style={{ color: "grey" }}></i>
        );
    }
    return (
      <div className="middle">
        <div className="container">
          <div className="row firstrow">
            <div className="col">
              <div id="bigImg">
                <img
                  id="bigImg"
                  alt=""
                  src={currentItem.src ? currentItem.src : this.state.bigPhoto}
                  width="400"
                  height="430"
                  className="row"
                />
              </div>
              <div className="container"></div>
              <div className="row">
                <div className="container-fluid">
                  <div className="row galery">
                    {/* <div className=""> */}
                    <div className="imgs col col-sm-6 col-md-4 col-lg-4 col-xl-3">
                      <img
                        id="Img"
                        onClick={(e) => this.changeImg(e.target.src)}
                        alt=""
                        src={currentItem.src}
                        // width="50"
                        // height="50"
                        className="img"
                      />
                    </div>
                    <div className="col  col col-sm-6 col-md-4 col-lg-4 col-xl-3 imgs">
                      <img
                        onClick={(e) => this.changeImg(e.target.src)}
                        alt=""
                        src={gal2}
                        width="50"
                        height="50"
                        className="img "
                      />
                    </div>
                    <div className="col  col col-sm-6 col-md-4 col-lg-4 col-xl-3 imgs">
                      <img
                        onClick={(e) => this.changeImg(e.target.src)}
                        alt=""
                        src={gal3}
                        width="50"
                        height="50"
                        className="img"
                      />
                    </div>

                    {/* <div className="row"> */}
                    <div className="col col-sm-6 col-md-4 col-lg-4 col-xl-3 imgs">
                      <img
                        onClick={(e) => this.changeImg(e.target.src)}
                        alt=""
                        src={gal4}
                        width="50"
                        height="50"
                        className="img"
                      />
                    </div>
                    <div className="col col-sm-6 col-md-4 col-lg-4 col-xl-3 imgs">
                      <img
                        onClick={(e) => this.changeImg(e.target.src)}
                        alt=""
                        src={gal5}
                        width="50"
                        height="50"
                        className="img"
                      />
                    </div>
                    <div className="col col-sm-6 col-md-4 col-lg-4 col-xl-3 imgs">
                      <img
                        onClick={(e) => this.changeImg(e.target.src)}
                        alt=""
                        src={gal6}
                        width="50"
                        height="50"
                        className="img"
                      />
                    </div>
                  </div>
                  {/* </div> */}
                  {/* <div className="row"> */}
                  {/* <div className="col">
                          <img onClick={(e)=>this.changeImg(e.target.src)}
                            alt=""
                            src={gal1}
                            width="100"
                            height="100"
                            className="img col"
                            />
                        </div> */}
                  {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col">
                <h1>{currentItem.name}</h1>
                {/* <h1>Capsule dispenser transparent cube</h1> */}
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

                <div className="stars">{arrStars}</div><br />
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
                    <img src={img1} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">ESSENZA MINI PIANO BLACK</h5>
                      <p className="card-text">
                        749<i className="fas fa-shekel-sign"></i>
                      </p>
                      <p className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card border border-danger">
                    <img src={img2} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">2 VIEW Recipe Glasses</h5>
                      <p className="card-text">
                        89.00<i className="fas fa-shekel-sign"></i>
                      </p>
                      <p className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card border border-danger">
                    <img src={img3} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">Orange Flavored Biscuits</h5>
                      <p className="card-text">
                        25.00<i className="fas fa-shekel-sign"></i>
                      </p>
                      <p className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
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

// function Middle(changeImg) {
//     return (

//       <div>

//       </div>
//     );
//   }

//   export default Middle;
