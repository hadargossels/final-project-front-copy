import React, { Component } from "react";
import data2 from "../../data2";
import Bestseller from "../Bestseller/Bestseller";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data2,
      sortItem: [],
    };
  }
  componentDidMount = () => {
    this.displayItemsCategory(this.props.category);
  };
  displayItemsCategory(category) {
    
    if (category) {
      let searchCategory = [];
      searchCategory = [...this.state.data].filter((item) => {
        return item.subcategory.toLowerCase().includes(category.toLowerCase());
      });

      this.setState({ sortItem: searchCategory });
    }
  }
  counterItems(start) {
    let arr = [];

    // arr=this.state.sortItem.map((item, key) =>{ (
    //     <Bestseller name={item.name}  price={item.price} src={item.src} key={key}/>
    //     )}
    //   );
    for (let i = start; i < start + 4 && i < this.state.sortItem.length; i++) {
      arr.push(
        <Bestseller
          name={this.state.sortItem[i].name}
          price={this.state.sortItem[i].price}
          src={this.state.sortItem[i].src}
          subcategory={this.state.sortItem[i].subcategory}
          categoryimg={this.props.categoryimg}
          key={i}
        />
      );
    }
console.log(arr)
    return arr;
  }
  render() {
    return (
      <div>
        <div
          id={`carouselExampleControls${this.props.id}`}
          className="carousel slide pageSlide"
          data-bs-ride="carousel"
          style={{minHeight:'300px'}}
          data-bs-interval="1000000"
        >
          <div className="carousel-inner">
            <div className="carousel-item   active">
                <div style={{display:'flex',justifyContent:'center'}}>
                {this.counterItems(0)}
                </div>
            </div>
            <div className="carousel-item ">      <div style={{display:'flex',justifyContent:'center'}}>
                {this.counterItems(4)}
                </div></div>
            <div className="carousel-item ">      <div style={{display:'flex',justifyContent:'center'}}>
                {this.counterItems(8)}
                </div></div>
          </div>
          <a
            className="carousel-control-prev slideA"
            href={`#carouselExampleControls${this.props.id}`}
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next slideA"
            href={`#carouselExampleControls${this.props.id}`}
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
