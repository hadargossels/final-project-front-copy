import React, { Component } from "react";
import Checkstars from "./Checkstars";
import "./Display.css";
import Items from "./Items";
import Sortby from "./Sortby";
import Category from "./Category";

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origItem: [
        {
          src: "/images/img1.png",
          name: "ESSENZA MINI PIANO BLACK",
          price: "749",
          stars: "3",
          category: "Pixie",
        },
        {
          src: "/images/img2.png",
          name: "2 VIEW Recipe Glasses",
          price: "89.00",
          stars: "2",
          category: "Origin",
        },
        {
          src: "/images/img3.png",
          name: "Orange Flavored Biscuits",
          price: "60.00",
          stars: "4",
          category: "food&bites",
        },
        {
          src: "/images/img4.png",
          name: "Pixie",
          price: "120.00",
          stars: "2",
          category: "Pixie",
        },
        {
          src: "/images/img5.png",
          name: "REVEAL LUNGO",
          price: "130.00",
          stars: "3",
          category: "Origin",
        },
        {
          src: "/images/img6.png",
          name: "Brown sugar",
          price: "21.00",
          stars: "3",
          category: "Sugar",
        },
        {
          src: "/images/img7.png",
          name: "Pure Rock dispenser",
          price: "110.00",
          stars: "1",
          category: "Pixie",
        },
        {
          src: "/images/img8.png",
          name: "Origin Lungo Cups",
          price: "95.00",
          stars: "4",
          category: "LUME Collection",
        },
        {
          src: "/images/img9.png",
          name: "Versilo Capsule Dispense",
          price: "140.00",
          stars: "2",
          category: "LUME Collection",
        },
        {
          src: "/images/img10.png",
          name: "PIXIE Lungo Set, Fortissio & Vivalto",
          price: "140.00",
          stars: "2",
          category: "Pixie",
        },
        {
          src: "/images/img11.png",
          name: "6 Large VIEW spoons",
          price: "65.00",
          stars: "3",
          category: "Pixie",
        },
        {
          src: "/images/img12.png",
          name: "Aeroccino White",
          price: "340.00",
          stars: "3",
          category: "Barista",
        },
        {
          src: "/images/img12.png",
          name: "Aeroccino White",
          price: "340.00",
          stars: "3",
          category: "Barista",
        },
        {
          src: "/images/img12.png",
          name: "Aeroccino White",
          price: "340.00",
          stars: "3",
          category: "Barista",
        },
      ],
      ItemsDet: [
        {
          src: "/images/img1.png",
          name: "ESSENZA MINI PIANO BLACK",
          price: "749",
          stars: "3",
          category: "Pixie",
        },
        {
          src: "/images/img2.png",
          name: "2 VIEW Recipe Glasses",
          price: "89.00",
          stars: "2",
          category: "Origin",
        },
        {
          src: "/images/img3.png",
          name: "Orange Flavored Biscuits",
          price: "60.00",
          stars: "4",
          category: "food&bites",
        },
        {
          src: "/images/img4.png",
          name: "Pixie",
          price: "120.00",
          stars: "2",
          category: "Pixie",
        },
        {
          src: "/images/img5.png",
          name: "REVEAL LUNGO",
          price: "130.00",
          stars: "3",
          category: "Origin",
        },
        {
          src: "/images/img6.png",
          name: "Brown sugar",
          price: "21.00",
          stars: "3",
          category: "Sugar",
        },
        {
          src: "/images/img7.png",
          name: "Pure Rock dispenser",
          price: "110.00",
          stars: "1",
          category: "Pixie",
        },
        {
          src: "/images/img8.png",
          name: "Origin Lungo Cups",
          price: "95.00",
          stars: "4",
          category: "LUME Collection",
        },
        {
          src: "/images/img9.png",
          name: "Versilo Capsule Dispense",
          price: "140.00",
          stars: "2",
          category: "LUME Collection",
        },
        {
          src: "/images/img10.png",
          name: "PIXIE Lungo Set, Fortissio & Vivalto",
          price: "140.00",
          stars: "2",
          category: "Pixie",
        },
        {
          src: "/images/img11.png",
          name: "6 Large VIEW spoons",
          price: "65.00",
          stars: "3",
          category: "Pixie",
        },
        {
          src: "/images/img12.png",
          name: "Aeroccino White",
          price: "340.00",
          stars: "3",
          category: "Barista",
        },
        {
          src: "/images/img12.png",
          name: "Aeroccino White",
          price: "340.00",
          stars: "3",
          category: "Barista",
        },
        {
          src: "/images/img12.png",
          name: "Aeroccino White",
          price: "340.00",
          stars: "3",
          category: "Barista",
        },
      ],
    };
    this.filterStars = this.filterStars.bind(this);
    this.sortCategory = this.sortCategory.bind(this);
  }
  componentDidMount = () => {
    const storge = JSON.parse(localStorage.getItem("imgs") || "[]");
    this.setState({ origItem: storge, ItemsDet: storge });
  };

  componentWillUnmount = () => {
    localStorage.setItem("imgs", JSON.stringify(this.state.origItem));
  };

  sortPrice = (type) => {
    let ItemsDet = [...this.state.ItemsDet];
    if (type == "lowToHight") ItemsDet.sort((a, b) => a.price - b.price);
    else ItemsDet.sort((a, b) => b.price - a.price);

    this.setState({ ItemsDet });
  };

  filterStars = (types) => {
    console.log(types)
    let orgArr = [...this.state.origItem];
    let newArr = [];
    if(types.length)
   {   newArr=orgArr.filter((item)=>types.indexOf(+item.stars)!=-1)
      this.setState({ ItemsDet: newArr });}
      else this.setState({ ItemsDet: orgArr })
    
  };

  sortCategory = (type) => {
    let category = [...this.state.origItem];
    category = category.filter((item) => item.category == type);
    this.setState({ ItemsDet: category });
  };

  update = () => {
    return this.state.ItemsDet.map((img, key) => (
      <div className="col-md-6 col-lg-4 col-xl-3 mb-2 item" key={key}>
        <Items
          openProduct={this.openProduct}
          src={img.src}
          name={img.name}
          price={img.price}
          stars={img.stars}
        />
      </div>
    ));
  };

  render() {
    return (
      <div id="display">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-2">
              <div id="sort">
                <div className="row mb-4">
                  <Sortby sort={this.sortPrice} />
                </div>
                <div className="row mb-4">
                  <Checkstars
                    filterStars={this.filterStars}
                    selectStars={this.selectStars}
                  />
                </div>
                <div className="row mb-4">
                  <Category sortCategory={this.sortCategory} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-10">
              <div className="row">{this.update()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
