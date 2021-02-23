import React, { Component } from "react";
import {lowToHigh, highToLow, ratingOrder, alphabetOrder} from "../../functions/compareFuncs.js";
import CatalogElement from "./CatalogElement";
import "./Catalog.css";

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.arr = this.props.arr;
    this.state = {arr: props.arr, displayArr: props.arr, filtering: [], page: 1,limit: 6};
  }

  setOrder = (e) => {
    let sortFunction;
    switch (e.target.value) {
      case "cheapFirst":
        sortFunction = lowToHigh;
        break;
      case "expensiveFirst":
        sortFunction = highToLow;
        break;
      case "byRating":
        sortFunction = ratingOrder;
        break;
      default:
        sortFunction = alphabetOrder;
        break;
    }

    let displayArr = [...this.state.displayArr].sort(sortFunction);
    let arr = this.props.arr.sort(sortFunction);
    this.setState({ arr,displayArr,page:1 }); //as we use arr in categores filtering, it needs to be in the correct sorting order as well
  };

  filteredCategories = (e) => {
    let displayArr = [...this.state.arr];
    let categ = [...this.state.filtering];
    let checkbox = e.target;

    if (checkbox.checked) categ.push(checkbox.value);
    else categ = categ.filter((el) => el !== checkbox.value);

    this.setState({ filtering: categ });

    if (categ.length >= 1)
      displayArr = displayArr.filter((el) => categ.includes(el.platforms[0]));

    this.setState({ displayArr, page:1 });
  };

  checkIfLast(){
    let lastPage = Math.ceil(this.state.displayArr.length / this.state.limit)
    let currentPage = (this.state.page)
    if (lastPage !== currentPage)
      currentPage +=1
    
    this.setState({page:currentPage})
  };

  render() {
    return (
      <div className=" mb-2">
        {/* sorter */}
        <div className="row">
          <div className="text-end col-12 mb-2">
            <span className="me-1">Sort by:</span>
            <select onChange={this.setOrder}>
              <option defaultValue>Alphabetical</option>
              <option value="cheapFirst">Price Low to High</option>
              <option value="expensiveFirst">Price High to Low</option>
              <option value="byRating">Highest-Rated</option>
            </select>
          </div>
        </div>

        <div className="row">
          {/* filtering */}
          <div className="col-lg-2 col-md-3 col-4">
            <h3 className="categs p-1 text-light bg-primary">Categories</h3>
            <h5 className="p-1 platf">Platform</h5>
            <form className="ps-sm-3">
              <input type="checkbox" onChange={this.filteredCategories} value="Computer" id="comp"/>
              <label htmlFor="comp" className="ps-1">Computer</label> <br />
              <input type="checkbox" onChange={this.filteredCategories} value="PlayStation4" id="ps4"/>
              <label htmlFor="ps4" className="ps-1">PlayStation4</label> <br />
              <input type="checkbox" onChange={this.filteredCategories} value="Nintendo Switch" id="switch"/>
              <label htmlFor="switch" className="ps-1">Switch</label>
            </form>
          </div>
          {/* showing the catalog items on the screen */}
          <div className="container col-lg-10 col-md-9 col-8 ">
            <div className="row mb-2">
              {this.state.displayArr.slice(
                  (this.state.page - 1) * this.state.limit, this.state.page * this.state.limit
                )
                .map(({ ...rest }, key) => (
                  <CatalogElement {...rest} key={key} />
                ))}
            </div>
          </div>
          {/* page navigation */}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item" onClick={() => {
                  this.setState({page: (this.state.page - 1 ? this.state.page-1 : this.state.page)});
                }}>
                <span className="page-link">Previous</span>
              </li>
              
              {Array(Math.ceil(this.state.displayArr.length / this.state.limit ))
                .fill(0)
                .map((_, index) => (
                  <li key={index} className={`page-item ${this.state.page === index + 1 ? "page-item active": ""}`} onClick={() => this.setState({ page: index + 1 })}>
                    <span className="page-link">{index + 1}</span>
                  </li>
                ))}

              <li className="page-item"  onClick={() => {this.checkIfLast()}}>
                <span className="page-link">Next</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
