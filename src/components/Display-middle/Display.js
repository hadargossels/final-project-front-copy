import React, { Component } from "react";
import Checkstars from "./Checkstars";
import "./Display.css";
import Items from "./Items";
import Sortby from "./Sortby";
import Category from "./Category";
import queryString from "query-string";
import axios from "axios";

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      limit: 8,
      origItem: this.props.data || [],
      ItemsDet: this.props.data || [],
      // searchValue: queryString.parse((props.location || "").search),
      noResult: "",
    };
    this.filterStars = this.filterStars.bind(this);
    this.sortCategory = this.sortCategory.bind(this);
  }
  componentDidMount = () => {
    // axios.get(`http://localhost:3000/products`).then((res) => {
    //   const products = res.data;
    //   this.setState({ origItem: products });
    // });
    console.log(this.props);
    this.setState({ ItemsDet: this.props.data });
    this.updateSearch();

    this.updatecategory();
  };
  componentDidUpdate(previousProps) {
    if (previousProps.location != this.props.location) this.updateSearch();
  }
  // componentWillUnmount = () => {
  //   localStorage.setItem("imgs", JSON.stringify(this.props.data));
  // };

  sortPrice = (type) => {
    let ItemsDet = [...this.props.data];
    if (type === "lowToHight") ItemsDet.sort((a, b) => a.price - b.price);
    else ItemsDet.sort((a, b) => b.price - a.price);

    this.setState({ ItemsDet });
  };

  filterStars = (types) => {
    let orgArr = [...this.props.data];
    let newArr = [];
    if (types.length) {
      newArr = orgArr.filter((item) => types.indexOf(+item.stars) !== -1);
      this.setState({ ItemsDet: newArr });
    } else this.setState({ ItemsDet: orgArr });
  };

  sortCategory = (type) => {
    let category = [...this.props.data];
    category = category.filter((item) => item.category === type);
    this.setState({ ItemsDet: category });
  };
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
  update = () => {
    const page = this.state.page;
    const limit = this.state.limit;
    return this.state.ItemsDet.slice(page * limit, (page + 1) * limit).map(
      (img, key) => (
        <div className="col-md-6 col-lg-4 col-xl-3 mb-2 item" key={key}>
          <Items
            changeMsg={this.changeMsg}
            msgIsInCart={this.msgIsInCart}
            openProduct={this.openProduct}
            src={img.src}
            name={img.name}
            price={img.price}
            stars={img.stars}
            sale={img.sale}
            subcategory={img.subcategory}
            text={img.text}
            id={+key + 2}
            data={this.props.data}
          />
        </div>
      )
    );
  };

  updateSearch() {
    // console.log(this.props.location, this.props.location.search.includes("q="));
    // if (!this.props.location.search.includes("q=")) return;
    let searchValueInput = queryString.parse(this.props.location.search).q;

    if (!searchValueInput) return;
    // this.setState({ noResult: "" });
    if (searchValueInput) {
      let searchInput = [];
      const ItemsDet = [...this.props.data].filter((item) => {
        return item.name.toLowerCase().includes(searchValueInput.toLowerCase());
      });
      console.log(searchValueInput, ItemsDet);
      this.setState({ ItemsDet });
      // this.setState({ ItemsDet: searchInput });
      // if (searchInput.length === 0) this.setState({ noResult: "No Result" });
      // if(!this.state.ItemsDet) this.setState({display:"inline"})
      // else this.setState({display:"none"})
    }
  }
  updatecategory() {
    let category = this.props.data ? "" : this.props.match.params.search;
    if (category) {
      let searchCategory = [];
      searchCategory = [...this.props.data].filter((item) => {
        return item.subcategory.toLowerCase().includes(category.toLowerCase());
      });
      // console.log("searchCategory", searchCategory);
      this.setState({ ItemsDet: searchCategory });
    }
  }
  no = () => {
    this.setState({ noResult: "" });
  };
  render() {
    return (
      <div id="display">
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
                    no={this.no}
                  />
                </div>
                <div className="row mb-4">
                  <Category sortCategory={this.sortCategory} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-10">
              {/* <div id="noresult" >{this.state.noResult}</div> */}
              {this.state.noResult && (
                <p className="no-matching display-4 justify-content-center">
                  {this.state.noResult}
                </p>
              )}

              <div className="row storeItems">{this.update()}</div>
              <div className="row pagesNum">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a
                        className="page-link"
                        href="#"
                        onClick={() =>
                          this.setState((state) => ({
                            page: state.page && state.page - 1,
                          }))
                        }
                      >
                        Previous
                      </a>
                    </li>
                    {Array(
                      0 | (this.state.ItemsDet.length / this.state.limit + 1)
                    )
                      .fill(0)
                      .map((_, index) => (
                        <li
                          className="page-item"
                          onClick={() => this.setState({ page: index })}
                          key={index}
                        >
                          <a className="page-link" href="#">
                            {index}
                          </a>
                        </li>
                      ))}

                    <li
                      className="page-item"
                      onClick={() => {
                        if (
                          this.state.page <
                          (0 | (this.props.data.length / this.state.limit))
                        ) {
                          this.setState((state) => ({ page: state.page + 1 }));
                        }
                      }}
                    >
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
