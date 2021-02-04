import React, { Component } from "react";
import { lowToHigh, highToLow, ratingOrder, alphabetOrder} from "../../functions/compareFuncs.js";
import CatalogElement from "./CatalogElement";

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.arr = this.props.arr;
    this.state = { arr: props.arr, displayArr:props.arr, filtering:[] };
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
    this.setState({ displayArr });
    let arr = this.props.arr.sort(sortFunction);
    this.setState({ arr }); //as we use arr in categores filtering, it needs to be in the correct sorting order as well
  };

  filteredCategories = (e) =>{
    let displayArr = [...this.state.arr]
    let categ = [...this.state.filtering]
    let checkbox = e.target

    if (checkbox.checked)
      categ.push(checkbox.value)
    else
      categ = categ.filter((el) =>(el !== checkbox.value))

    this.setState({filtering:categ})
    
    if (categ.length >= 1)
      displayArr = displayArr.filter(el =>(categ.includes(el.platforms[0])))
    
    this.setState({displayArr})
  }

  render() {
    return (

      <div className="container">
        {/* sorter */}
        <div className="mb-2 text-end">
          <span className="me-1">Sort by:</span>
          <select onChange={this.setOrder}>
            <option defaultValue>Alphabetical</option>
            <option value="cheapFirst">Price Low to High</option>
            <option value="expensiveFirst">Price High to Low</option>
            <option value="byRating">Highest-Rated</option>
          </select>
        </div>
        {/* filtering */}
        <div className="row">
          <div className="col-lg-2 col-md-3 col-4 list-group pe-0 mb-5">
            <span className="ps-2 pb-2 h3 text-light bg-primary">Categories</span>
            <span className="ps-2 h5">Platform</span>
            <form className="ps-3">
              <input type="checkbox" onChange={this.filteredCategories} value="Computer" id="comp" />
              <label htmlFor="comp" className="ps-1">Computer</label>
              <br />
              <input type="checkbox" onChange={this.filteredCategories} value="PlayStation4" id="ps4" />
              <label htmlFor="ps4" className="ps-1">PlayStation4</label>
              <br />
              <input type="checkbox" onChange={this.filteredCategories} value="Nintendo Switch" id="switch" />
              <label htmlFor="switch" className="ps-1">Switch</label>
            </form>
          </div>
          {/* showing the catalog items on the screen */}
          <div className="container col-lg-10 col-md-9 col-8 mb-5">
            <div className="row">
              {this.state.displayArr.map(({ ...rest }, key) => (
                <CatalogElement {...rest} key={key} />
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }
}
