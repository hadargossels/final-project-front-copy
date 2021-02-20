import React, { Component } from "react";

import "./search-bar.styles.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: STORE_DATA,
    //   searchField: "",
    // };
  }

  // handleChange = (event) => {
  //   this.setState({
  //     searchField: event.target.value,
  //   });
  // };

  render() {
    // const { items, searchField } = this.state;
    // const filteredItems = items.filter((item) =>
    //   item.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    // console.log("filteredItems :", filteredItems);

    return (
      <form class="example search-bar " action="/shop">
        <input
          // onChange={this.handleChange}
          type="text"
          placeholder="Search.."
          name="q"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
