import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./sorting-btn.style.scss";

// function handleClick(event) {
//   console.log(event.target.innerText);
//   // console.log(props.title);
// }
// const element = <FontAwesomeIcon icon={faCoffee} />;
const SortingBtn = (props) => {
  const [title, setTitle] = useState("Sort by");

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {/* {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-filter"
          viewBox="0 0 16 16"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
        </svg>{" "} */}

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
          Price: $100 to $200
        </a>
        <a className="dropdown-item" href="#">
          Price: $200 & Above
        </a>
      </div>
    </div>
  );
};

export default SortingBtn;
