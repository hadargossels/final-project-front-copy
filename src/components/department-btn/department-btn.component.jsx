import React from "react";

import "./department-btn.style.scss";
//////////////////////////////////

/*
state= [clothing, Collers]

*/

// function handleClick(event) {
//   console.log(event.target.innerText);
//   // console.log(props.title);
// }

///////////////////////////////////
const DepartmentsBtn = (props) => (
  <div
    className="btn-group-toggle"
    data-toggle="buttons"
    onClick={(event) => {
      props.handleClick(event.target.innerText.toLowerCase());
    }}
  >
    <label class="btn btn-secondary active">
      <input type="checkbox" autoComplete="off" /> {props.title}
    </label>
  </div>
);

/////////////////////////////////////////////

export default DepartmentsBtn;
