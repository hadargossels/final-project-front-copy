import React, { useContext, useState } from "react";

import "./checkout.styles.scss";

import { CartContext } from "../../providers/cart/cart.provider";

import ShoppingCartItem from "../../components/shopping-cart-item/shopping-cart-item.component";

import orderConfirmation from "../../components/order-confirmation/order-confirmation.component";

import CartItem from "./../../components/cart-item/cart-item.component";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PayPal from "./../../components/paypal/paypal";
import OrderConfirmation from "../../components/order-confirmation/order-confirmation.component";
import { fireInfo } from "./../../firebase/firebase.utils";

const CheckoutPage = () => {
  const { cartItems, cartTotal, cartItemsCount } = useContext(CartContext);

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

  const [promoChange, setPromoChange] = useState(0);

  const [deliveryChange, setDeliveryChange] = useState(0);
  const [validShipping, setValidShipping] = useState(false);

  // const [checkout, setCheckOut] = useState(false);

  const [notValidDetails, setNotValidClick] = useState(false);

  const [validPayment, setValidPayment] = useState(false);

  const orderid = require("order-id")("mysecret");
  const id = orderid.generate();

  const [orderData, setOrderData] = useState({
    id: id,
    date: new Date().toLocaleString(),
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    country: "",
    zip: "",
    shipping: "",
    cartItems: cartItems,
    cartItemsCount: cartItemsCount,
    cartTotal: cartTotal,
    orderState: "sent",
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setOrderData((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  const createOrder = () => {
    const orderRef = fireInfo.database().ref("orders");
    const order = orderData;

    orderRef.push(order);

    setOrderData({
      date: "",
      firstName: "",
      phone: "",
      address: "",
      country: "",
      zip: "",
      shipping: "",
      price: "",
      orderState: "",
    });
  };

  const isAllValid = (event) => {
    event.preventDefault();

    if (
      validPhone &&
      validFirstName &&
      validLastName &&
      validAddress &&
      validZip &&
      validCName &&
      validExpiration &&
      validCNumber &&
      validCVV &&
      validCountry &&
      validShipping
    ) {
      setValidPayment(true);
    } else {
      setNotValidClick(true);
      createOrder();
    }

    setTimeout(() => {
      setNotValidClick(false);
    }, 3000);
  };

  let promoCode = 123;
  const handlePromoChange = (event) => {
    setPromoValue(event.target.value);
  };
  const handlePromoClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    if (Number(promoValue) === promoCode) {
      setValidPromo(true);
      setPromoChange(-5);
    } else {
      setValidPromo(false);
      setPromoChange(0);
    }
  };

  const handleChange = (event) => {
    event.persist();

    setOrderData((prevNote) => {
      return {
        ...prevNote,
        country: event.target.value,
      };
    });
    setValidCountry(true);
  };

  const handleShippingChange = (event) => {
    event.persist();

    console.log(event.target.value);

    setOrderData((prevNote) => {
      return {
        ...prevNote,
        shipping: event.target.value,
      };
    });
    setValidShipping(false);

    switch (event.target.value) {
      case "Standard: 20-30 days, free":
        setDeliveryChange(0);
        setValidShipping(true);

        break;
      case "Fast: 10-20 days, 5$":
        setDeliveryChange(5);
        setValidShipping(true);

        break;
      case "Super: 1-3 days, 10$":
        setDeliveryChange(10);
        setValidShipping(true);

        break;

      default:
        setValidShipping(false);
        setDeliveryChange(0);

        break;
    }
  };

  const patterns = {
    promo: /^123$/gim,
    phone: /^\d{10,11}$/gim,
    firstName: /(^[a-z ,.'-]{1,})+$/i,

    lastName: /(^[a-z ,.'-]{2,})+$/i,

    address: /^[a-zA-Z0-9\s,'-]*$/i,
    // street: /^[a-zA-Z0-9\s,'-]*$/i,

    // number: /^[a-zA-Z0-9\s,'-]*$/i,

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
      {validPayment ? (
        <OrderConfirmation
          cartItems={cartItems}
          total={cartTotal + promoChange + deliveryChange}
        />
      ) : (
        <div className="container check-page">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">
                  {cartItemsCount} Items
                </span>
              </h4>
              <ul className="list-group mb-3">
                {cartItems.map((cartItem) => (
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
                  </li>
                ))}
                {!validShipping && (
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Price</span>
                    <p
                      style={{
                        textDecoration: validPromo ? "line-through" : "none",
                      }}
                    >
                      {" "}
                      US ${cartTotal}
                    </p>
                  </li>
                )}
                {/* //////////////////start Shipping//////////////// */}
                <select
                  onChange={handleShippingChange}
                  className="custom-select d-block w-100"
                  id="shipping"
                  required
                >
                  <option value>Choose Shipping Method...</option>
                  <option name="Standard">Standard: 20-30 days, free</option>
                  <option name="Fast">Fast: 10-20 days, 5$</option>
                  <option name="Super">Super: 1-3 days, 10$</option>
                </select>
                {/* ///cheackicng ////// */}
                <div
                  style={{ display: validShipping ? "none" : "block" }}
                  className="invalid-feedback"
                >
                  Please choose shipping method.
                </div>
                <div
                  style={{ display: validShipping ? "block" : "none" }}
                  className="valid-feedback"
                >
                  delivery charge {deliveryChange}$
                </div>
                {/* ///Endcheackicng ////// */}
                {/* //////////////////// end Shipping /////////////////// */}
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
                {validShipping && (
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong
                      style={{
                        textDecoration: validPromo ? "line-through" : "none",
                      }}
                    >
                      {" "}
                      US ${cartTotal + deliveryChange}
                    </strong>
                  </li>
                )}
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
                      Promo Code
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
              {validPromo && (
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total </span>
                  <strong>
                    {" "}
                    US ${cartTotal + promoChange + deliveryChange}
                  </strong>
                </li>
              )}
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <div className="needs-validation" noValidate>
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
                      onChange={handleOnChange}
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
                      onChange={handleOnChange}
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
                    onChange={handleOnChange}
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
                    onChange={handleOnChange}
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
                      name="country"
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
                      onChange={handleOnChange}
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
                  onClick={isAllValid}
                  className="btn btn-primary btn-lg btn-block pay-now"
                >
                  Pay now
                </button>
                {/* ///cheackicng ////// */}
                {notValidDetails && (
                  <div className="invalid-feedback">
                    Please Fill All The Required Input
                  </div>
                )}
                {/* ///Endcheackicng ////// */}
                <div onClick={isAllValid} className="paypal-btn">
                  <PayPal totalPay={cartTotal + promoChange + deliveryChange} />
                </div>
                <Link to="/shopping-cart">
                  <button type="button" class="btn btn-secondary">
                    back to shopping cart
                  </button>
                </Link>
                <Link to="/store">
                  <button type="button" class="btn btn-warning">
                    Back to store
                  </button>
                </Link>
                {/* 
              {checkout ? (
                <PayPal totalPay={total + promoChange + deliveryChange} />
              ) : (
                <button
                  onClick={() => {
                    setCheckOut(true);
                  }}
                >
                  Checkout
                </button>
              )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
