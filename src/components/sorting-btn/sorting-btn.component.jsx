import React from "react";

import "./sorting-btn.style.scss";

// function handleClick(event) {
//   console.log(event.target.innerText);
//   // console.log(props.title);
// }

const SortingBtn = (props) => (
  <div className="dropdown">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Sort by
    </button>
    <div
      className="dropdown-menu"
      aria-labelledby="dropdownMenuButton"
      onClick={(event) => {
        props.sortBtnClick(event.target.innerText.toLowerCase());
      }}
    >
      <a className="dropdown-item" href="#">
        Price
      </a>
      <a className="dropdown-item" href="#">
        Rating
      </a>
      <a className="dropdown-item" href="#">
        Popularity{" "}
      </a>
    </div>
  </div>
);

export default SortingBtn;
