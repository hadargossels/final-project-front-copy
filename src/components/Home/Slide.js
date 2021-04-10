import React, { Component } from "react";
// import data2 from "../../data2";
import Bestseller from "../Bestseller/Bestseller";

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data || [],
      sortItem: [],
    };
  }
  componentDidMount = () => {
    // axios.get(`http://localhost:3000/products`).then((res) => {
    //   const products = res.data;
    //   this.setState({ data: products, sortItem: products });
    // });
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
      arr.push({
        name: this.state.sortItem[i].name,
        price: this.state.sortItem[i].price,
        src: this.state.sortItem[i].src,
        subcategory: this.state.sortItem[i].subcategory,
        categoryimg: this.props.categoryimg,
        id: this.state.sortItem[i].id,
        changeMsg: this.changeMsg,
        msgIsInCart: this.msgIsInCart,
        key: i,
      });
      // arr.push(
      //   <Bestseller
      //     name={this.state.sortItem[i].name}
      //     price={this.state.sortItem[i].price}
      //     src={this.state.sortItem[i].src}
      //     subcategory={this.state.sortItem[i].subcategory}
      //     categoryimg={this.props.categoryimg}
      //     id={this.state.sortItem[i].id}
      //     changeMsg={this.changeMsg}
      //     msgIsInCart={this.msgIsInCart}
      //     key={i}
      //   />
      // );
    }

    return arr;
  }
  changeMsg() {
    let msg = document.querySelector("#message");

    msg.style.display = "";

    setTimeout(() => {
      msg.style.display = "none";
    }, 10000);
  }
  msgIsInCart() {
    let msg2 = document.querySelector("#message2");

    msg2.style.display = "";

    setTimeout(() => {
      msg2.style.display = "none";
    }, 10000);
  }
  render() {
    return (
      <div>
        <div
          id={`carouselExampleControls${this.props.id}`}
          className="carousel slide pageSlide"
          data-bs-ride="carousel"
          style={{ minHeight: "300px" }}
          data-bs-interval="1000000"
        >
          <div className="carousel-inner">
            <div className="carousel-item   active">
              <div className="d-flex justify-content-center">
                {this.counterItems(0).map((comp, key) => (
                  <Bestseller {...comp} key={key} />
                ))}
              </div>
            </div>
            <div className="carousel-item ">
              <div style={{ display: "flex", justifyContent: "center" }}>
                {this.counterItems(4).map((comp, key) => (
                  <Bestseller {...comp} key={key} />
                ))}

                {/* {this.counterItems(4)} */}
              </div>
            </div>
            <div className="carousel-item ">
              <div style={{ display: "flex", justifyContent: "center" }}>
                {this.counterItems(8).map((comp, key) => (
                  <Bestseller {...comp} key={key} />
                ))}

                {/* {this.counterItems(8)} */}
              </div>
            </div>
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
        <span
          id="message"
          style={{
            display: "none",
            zIndex: "2",
            color: "green",
            position: "absolute",
            width: "auto",
            margin: "2rem 0 0 20rem",
            fontSize: "1.2rem",
            backgroundColor: "ivory",
            fontWeight: "bolder",
          }}
        >
          One product Add to cart
        </span>

        <span
          id="message2"
          style={{
            display: "none",
            zIndex: "2",
            color: "red",
            position: "absolute",
            width: "auto",
            margin: "2rem 0 0 20rem",
            fontSize: "1.2rem",
            backgroundColor: "ivory",
            fontWeight: "bolder",
          }}
        >
          This product is already in the cart
        </span>
      </div>
    );
  }
}
