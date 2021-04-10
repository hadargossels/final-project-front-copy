import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [...this.props.products],
    };
  }

  clearAll = () => {
    // localStorage.setItem("counters",[])
  };
  handleDelete = () => {};
  componentDidUpdate() {
    this.state.array = [...this.props.products];
  }
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      onRestart,
    } = this.props;
    // let counters=JSON.parse(localStorage.getItem("counters"))
    return (
      <div>
        {/* <button
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0 ? "disabled" : ""}
        >
          <i className="fas fa-sync-alt" aria-hidden="true"></i>
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={onRestart}
          disabled={counters.length !== 0 ? "disabled" : ""}
        >
          <i className="fa fa-recycle" aria-hidden="true" />
        </button> */}
        {/* <button className="btn btn-danger m-2" onClick={this.clearAll()}>Clear all</button> */}

        {this.state.array.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            // onDelete={this.handleDelete}
            products={this.props.products}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
