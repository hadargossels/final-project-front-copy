import React, { Component } from "react";

export default class Checkstars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: [],
    };
  }
  updateCheckbox = (num) => {
    const checkbox = [...this.state.checkbox];
    const index=checkbox.indexOf(num)
    if(index!==-1)
        checkbox.splice(index,1)
    else checkbox.push(num)

    this.setState({checkbox})
    this.props.filterStars(checkbox)
  };
  clear=()=>{
      this.setState({checkbox:[]})
      this.props.filterStars([])
      this.props.no()
  }

  render() {
    // const { filterStars } = this.props;
    return (
      <div>
        <a href="#" onClick={this.clear} id="clear">
          Clear
        </a>
        <div className="form-check">
          <input
            onChange={(e) => this.updateCheckbox(4)}
            checked={this.state.checkbox.indexOf(4)!==-1}
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            name="4"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <i className="fas fa-star starsort"></i>
            <i className="fas fa-star starsort"></i>
            <i className="fas fa-star starsort"></i>
            <i className="fas fa-star starsort"></i>
          </label>
        </div>
        <div className="form-check">
          <input
             onChange={(e) => this.updateCheckbox(3)}
             checked={this.state.checkbox.indexOf(3)!==-1}
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault1"
            name="3"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <i className="fas fa-star starsort"></i>
            <i className="fas fa-star starsort"></i>
            <i className="fas fa-star starsort"></i>
            <i className="fas fa-star greystar"></i>
          </label>
        </div>
        <div className="form-check">
          <input
             onChange={(e) => this.updateCheckbox(2)}
             checked={this.state.checkbox.indexOf(2)!==-1}
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault2"
            name="2"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <i className="fas fa-star starsort"></i>
            <i className="fas fa-star starsort "></i>
            <i className="fas fa-star greystar"></i>
            <i className="fas fa-star greystar"></i>
          </label>
        </div>
        <div className="form-check">
          <input
             onChange={(e) => this.updateCheckbox(1)}
             checked={this.state.checkbox.indexOf(1)!==-1}
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault3"
            name="1"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <i className="fas fa-star starsort"></i>
            <i className="fas fa-star greystar"></i>
            <i className="fas fa-star greystar"></i>
            <i className="fas fa-star greystar"></i>
          </label>
        </div>
      </div>
    );
  }
}


