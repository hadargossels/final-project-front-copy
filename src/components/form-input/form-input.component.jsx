import React, { useState } from "react";

import "./form-input.styles.scss";

const FormInput = ({
  handleChange,
  label,

  ...otherProps
}) => {
  //   const [validName, setValidName] = useState(false);
  //   const [validEmail, setValidEmail] = useState(false);
  //   const [validPassword, setValidPassword] = useState(false);
  //   const patterns = {
  //     displayName: /(^[a-z ,.'-]{1,})+$/i,
  //     email: /^\d{10,11}$/gim,
  //     password: /(^[a-z ,.'-]{1,})+$/i,
  //   };

  return (
    <div className="form-input-component">
      <div className="group">
        <input
          name="displayName"
          // onKeyUp={(event) => {
          //   console.log("event :", event.target.attributes.name);
          //   return handleKeyUp(event.target.attributes.nam, event.target.value);
          // }}
          // onKeyUp={(event) =>
          //   handleKeyUp(event)
          // }
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        ) : null}

        {/* 
      <p style={{ display: validEmail ? "none" : "block" }} className="invalid">
        invalid
      </p>
      <p style={{ display: validEmail ? "block" : "none" }} className="valid">
        valid
      </p>

      <p
        style={{ display: validPassword ? "none" : "block" }}
        className="invalid"
      >
        invalid
      </p>
      <p
        style={{ display: validPassword ? "block" : "none" }}
        className="valid"
      >
        valid
      </p> */}
      </div>
    </div>
  );
};

export default FormInput;
