import React, { useState } from "react";

import "./sorting-btn.style.scss";

// function handleClick(event) {
//   console.log(event.target.innerText);
//   // console.log(props.title);
// }
// const element = <FontAwesomeIcon icon={faCoffee} />;
const SortingBtn = (props) => {
  const [title, setTitle] = useState("Sort by");

  return (
    <div className="dropdown sorting-btn">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {title}
      </button>
      <div
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
        onClick={(event) => {
          props.sortBtnClick(event.target.innerText);
          setTitle(event.target.innerText);
        }}
      >
        <a className="dropdown-item" href="#">
          Name: A to Z
        </a>
        <a className="dropdown-item" href="#">
          Name: Z to A
        </a>
        <a className="dropdown-item" href="#">
          Price: Low to High
        </a>
        <a className="dropdown-item" href="#">
          Price: High to Low
        </a>
        <a className="dropdown-item" href="#">
          Price: Under $25
        </a>
        <a className="dropdown-item" href="#">
          Price: $25 to $50
        </a>
        <a className="dropdown-item" href="#">
          Price: $50 to $100
        </a>
        <a className="dropdown-item" href="#">
          Price: $100 to $150
        </a>
        <a className="dropdown-item" href="#">
          Price: $150 to $200
        </a>
        <a className="dropdown-item" href="#">
          Price: $200 & Above
        </a>
      </div>
    </div>
  );
};

export default SortingBtn;
