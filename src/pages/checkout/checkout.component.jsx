import React, { useState } from "react";

import "./checkout.styles.scss";

import { connect } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import ShoppingCartItem from "../../components/shopping-cart-item/shopping-cart-item.component";
import CartItem from "./../../components/cart-item/cart-item.component";
const CheckoutPage = ({ cartItems, total, itemCount }) => {
  const [validPhone, setValidPhone] = useState(false);
  const [promoValue, setPromoValue] = useState();
  const [validPromo, setValidPromo] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validAddress, setValidAddress] = useState(false);
  const [validZip, setValidZip] = useState(false);
  const [validCName, setValidCName] = useState(false);
  const [validExpiration, setExpiration] = useState(false);
  const [validCNumber, setValidCNumber] = useState(false);

  const [validCVV, setValidCVV] = useState(false);

  const [validCountry, setValidCountry] = useState(false);

  let promoCode = 123;
  const handlePromoChange = (event) => {
    setPromoValue(event.target.value);
  };
  const handlePromoClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    Number(promoValue) === promoCode
      ? setValidPromo(true)
      : setValidPromo(false);
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    setValidCountry(true);
  };

  const patterns = {
    promo: /^123$/gim,
    phone: /^\d{10,11}$/gim,
    firstName: /(^[a-z ,.'-]{1,})+$/i,

    lastName: /(^[a-z ,.'-]{2,})+$/i,

    address: /^[a-zA-Z0-9\s,'-]*$/i,

    zip: /^\d{5,7}(?:[-\s]\d{4})?$/i,
    cName: /(^[a-z ,.'-]{2,})+$/i,
    cNumber: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i,

    expiration: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/i,

    cvv: /^[0-9]{3,4}$/i,
  };

  const handleKey = (event) => {
    let typeOfInput = event.target.attributes.name.value;
    console.log("typeOfInput :", typeOfInput);
    let value = event.target.value;
    console.log("value :", value);
    validate(value, patterns[typeOfInput], typeOfInput);
  };

  function validate(value, regex, typeOfInput) {
    let validationState = regex.test(value);

    console.log(validationState);

    switch (typeOfInput) {
      case "firstName":
        validationState ? setValidFirstName(true) : setValidFirstName(false);
        break;

      case "lastName":
        validationState ? setValidLastName(true) : setValidLastName(false);
        break;

      case "phone":
        validationState ? setValidPhone(true) : setValidPhone(false);
        break;

      case "address":
        validationState ? setValidAddress(true) : setValidAddress(false);
        break;

      case "zip":
        validationState ? setValidZip(true) : setValidZip(false);
        break;

      case "cName":
        validationState ? setValidCName(true) : setValidCName(false);
        break;
      case "cNumber":
        validationState ? setValidCNumber(true) : setValidCNumber(false);
        break;

      case "expiration":
        validationState ? setExpiration(true) : setExpiration(false);
        break;

      case "cvv":
        validationState ? setValidCVV(true) : setValidCVV(false);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="container check-page">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">
                {itemCount}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cartItems.map((cartItem) => (
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
                </li>
              ))}

              <li
                style={{ display: validPromo ? "block" : "none" }}
                className="valid-feedback"
                className="list-group-item  justify-content-between bg-light"
              >
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                </div>
                <span className="text-success">-$5</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong> ${total}</strong>
              </li>
            </ul>
            <form className="card p-2">
              <div className="input-group">
                <input
                  name="promo"
                  type="text"
                  className="form-control"
                  placeholder="Promo code - Enter: 123"
                  onChange={handlePromoChange}
                />
                <div className="input-group-append">
                  <button
                    onClick={handlePromoClick}
                    className="btn btn-secondary"
                  >
                    Enter
                  </button>
                </div>{" "}
              </div>
            </form>{" "}
            <small
              style={{ display: validPromo ? "block" : "none" }}
              className="text-success"
            >
              the promo code is valid
            </small>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input
                    name="firstName"
                    onKeyUp={handleKey}
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    required
                  />
                  {/* ///cheackicng ////// */}
                  <div
                    style={{ display: validFirstName ? "none" : "block" }}
                    className="invalid-feedback"
                  >
                    Please enter your first name.
                  </div>
                  <div
                    style={{ display: validFirstName ? "block" : "none" }}
                    className="valid-feedback"
                  >
                    valid
                  </div>

                  {/* ///Endcheackicng ////// */}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    name="lastName"
                    onKeyUp={handleKey}
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    required
                  />
                  {/* ///cheackicng ////// */}
                  <div
                    style={{ display: validLastName ? "none" : "block" }}
                    className="invalid-feedback"
                  >
                    Please enter your last name{" "}
                  </div>
                  <div
                    style={{ display: validLastName ? "block" : "none" }}
                    className="valid-feedback"
                  >
                    valid
                  </div>

                  {/* ///Endcheackicng ////// */}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  name="phone"
                  onKeyUp={handleKey}
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder=""
                />
                {/* ///cheackicng ////// */}
                <div
                  style={{ display: validPhone ? "none" : "block" }}
                  className="invalid-feedback"
                >
                  Please enter a valid 10-11 digits phone number.
                </div>
                <div
                  style={{ display: validPhone ? "block" : "none" }}
                  className="valid-feedback"
                >
                  valid
                </div>

                {/* ///Endcheackicng ////// */}
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input
                  onKeyUp={handleKey}
                  name="address"
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  required
                />

                {/* ///cheackicng ////// */}
                <div
                  style={{ display: validAddress ? "none" : "block" }}
                  className="invalid-feedback"
                >
                  Please enter your shipping address.
                </div>
                <div
                  style={{ display: validAddress ? "block" : "none" }}
                  className="valid-feedback"
                >
                  valid
                </div>

                {/* ///Endcheackicng ////// */}
              </div>
              <div className="mb-3">
                <label htmlFor="address2">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select
                    onChange={handleChange}
                    className="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value>Choose...</option>
                    <option>United States</option>
                    <option>Israel</option>
                  </select>

                  {/* ///cheackicng ////// */}
                  <div
                    style={{ display: validCountry ? "none" : "block" }}
                    className="invalid-feedback"
                  >
                    Please select a valid country.
                  </div>
                  <div
                    style={{ display: validCountry ? "block" : "none" }}
                    className="valid-feedback"
                  >
                    valid
                  </div>

                  {/* ///Endcheackicng ////// */}
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">
                    {" "}
                    State <span className="text-muted">(Optional)</span>
                  </label>
                  <select
                    className="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value>Choose...</option>
                    <option>California</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    onKeyUp={handleKey}
                    name="zip"
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder
                    required
                  />
                  {/* ///cheackicng ////// */}
                  <div
                    style={{ display: validZip ? "none" : "block" }}
                    className="invalid-feedback"
                  >
                    Please enter your Zip code.
                  </div>
                  <div
                    style={{ display: validZip ? "block" : "none" }}
                    className="valid-feedback"
                  >
                    valid
                  </div>

                  {/* ///Endcheackicng ////// */}
                </div>
              </div>
              <hr className="mb-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input
                    onKeyUp={handleKey}
                    name="credit"
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    defaultChecked
                    required
                  />
                  <label className="custom-control-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="custom-control-input"
                    required
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cName">Name on card</label>
                  <input
                    onKeyUp={handleKey}
                    name="cName"
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder
                    required
                  />

                  {/* ///cheackicng ////// */}
                  <div
                    style={{ display: validCName ? "none" : "block" }}
                    className="invalid-feedback"
                  >
                    Please enter your Name on card.
                  </div>
                  <div
                    style={{ display: validCName ? "block" : "none" }}
                    className="valid-feedback"
                  >
                    valid
                  </div>

                  {/* ///Endcheackicng ////// */}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cNumber">Credit card number</label>
                  <input
                    onKeyUp={handleKey}
                    name="cNumber"
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder
                    required
                  />
                  <div className="invalid-feedback"></div>
                  {/* ///cheackicng ////// */}
                  <div
                    style={{ display: validCNumber ? "none" : "block" }}
                    className="invalid-feedback"
                  >
                    Please enter your Credit card number.
                  </div>
                  <div
                    style={{ display: validCNumber ? "block" : "none" }}
                    className="valid-feedback"
                  >
                    valid
                  </div>

                  {/* ///Endcheackicng ////// */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="expiration">Expiration</label>
                  <input
                    onKeyUp={handleKey}
                    name="expiration"
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder="00/00"
                    required
                  />

                  {/* ///cheackicng ////// */}
                  <div
                    style={{ display: validExpiration ? "none" : "block" }}
                    className="invalid-feedback"
                  >
                    Please enter Expiration date .
                  </div>
                  <div
                    style={{ display: validExpiration ? "block" : "none" }}
                    className="valid-feedback"
                  >
                    valid
                  </div>

                  {/* ///Endcheackicng ////// */}
                </div>

                <div className="col-md-3 mb-3">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    onKeyUp={handleKey}
                    name="cvv"
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder="000"
                    required
                  />
                  {/* ///cheackicng ////// */}
                  <div
                    style={{ display: validCVV ? "none" : "block" }}
                    className="invalid-feedback"
                  >
                    Please enter your Security code
                  </div>
                  <div
                    style={{ display: validCVV ? "block" : "none" }}
                    className="valid-feedback"
                  >
                    valid
                  </div>

                  {/* ///Endcheackicng ////// */}
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <span className="total">Total: ${total}</span>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps)(CheckoutPage);
