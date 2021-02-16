import React, { useState } from "react";
import Map from "../../components/google-map/google-map.component";

import "./contact.styles.scss";

const ContactPage = () => {
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validSubject, setValidSubject] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  const [validForm, setValidForm] = useState(true);

  const patterns = {
    name: /(^[a-z ,.'-]{2,})+$/i,
    email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,

    subject: /(^[\w ,.'-]{2,})+$/i,
    message: /(^[\w ,.'-]{2,})+$/i,
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
      case "name":
        validationState ? setValidName(true) : setValidName(false);
        break;
      case "email":
        validationState ? setValidEmail(true) : setValidEmail(false);
        break;

      case "subject":
        validationState ? setValidSubject(true) : setValidSubject(false);
        break;
      case "message":
        validationState ? setValidMessage(true) : setValidMessage(false);
        break;

      // case "lastName":
      //   validationState ? setValidLastName(true) : setValidLastName(false);
      //   break;

      // case "phone":
      //   validationState ? setValidPhone(true) : setValidPhone(false);
      //   break;

      // case "address":
      //   validationState ? setValidAddress(true) : setValidAddress(false);
      //   break;

      // case "zip":
      //   validationState ? setValidZip(true) : setValidZip(false);
      //   break;

      // case "cName":
      //   validationState ? setValidCName(true) : setValidCName(false);
      //   break;
      // case "cNumber":
      //   validationState ? setValidCNumber(true) : setValidCNumber(false);
      //   break;

      // case "expiration":
      //   validationState ? setExpiration(true) : setExpiration(false);
      //   break;

      // case "cvv":
      //   validationState ? setValidCVV(true) : setValidCVV(false);
      //   break;

      default:
        break;
    }
  }

  // const isAllValid = (event) => {
  //   event.preventDefault();
  //   validPhone &&
  //   validFirstName &&
  //   validLastName &&
  //   validAddress &&
  //   validZip &&
  //   validCName &&
  //   validExpiration &&
  //   validCNumber &&
  //   validCVV &&
  //   validCountry &&
  //   validShipping
  //     ? setValidPayment(true)
  //     : setNotValidClick(true);

  //   setTimeout(() => {
  //     setNotValidClick(false);
  //   }, 3000);
  // };

  return (
    <>
      {/* Contact Us Section */}

      <section className="Material-contact-section section-padding section-dark contact-us">
        <div className="container">
          <div className="row">
            {/* Section Titile */}
            <div
              className="col-md-12 wow animated fadeInLeft"
              data-wow-delay=".2s"
            >
              <h1 className="section-title">Love to Hear From You</h1>
            </div>
          </div>
          <div className="row">
            {/* Section Titile */}
            <div
              className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft"
              data-wow-delay=".2s"
            >
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content.
              </p>
              <div className="find-widget">
                Company: <a href="">Dog best friends</a>
              </div>
              <div className="find-widget">
                Address: <a href="#"> Moskovich 19,Rehovot </a>
              </div>
              <div className="find-widget">
                Phone: <a href="#"> 08-111-1111</a>
              </div>
              <div className="find-widget">
                Website: <a href="https://uny.ro">www.dogFrienfs.com</a>
              </div>
              <div className="find-widget">
                Program: <a href="#">Sun to Sat: 09:30 AM - 10.30 PM</a>
              </div>
            </div>
            {/* contact form */}
            <div
              className="col-md-6 wow animated fadeInRight"
              data-wow-delay=".2s"
            >
              <form
                className="shake"
                role="form"
                method="post"
                id="contactForm"
                name="contact-form"
                data-toggle="validator"
              >
                {/* Name */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    onKeyUp={handleKey}
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    required
                    data-error="Please enter your name"
                  />
                  {/* ///cheackicng ////// */}

                  {validName ? (
                    <p className="valid">valid</p>
                  ) : (
                    <p className="invalid">Please enter a valid Name.</p>
                  )}

                  {/* ///Endcheackicng ////// */}
                </div>

                {/* email */}
                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    onKeyUp={handleKey}
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    required
                    data-error="Please enter your Email"
                  />
                  {/* ///cheackicng ////// */}
                  {validEmail ? (
                    <p className="valid">valid</p>
                  ) : (
                    <p className="invalid">Please enter a valid Name.</p>
                  )}
                  {/* ///Endcheackicng ////// */}{" "}
                </div>
                {/* Subject */}
                <div className="form-group label-floating">
                  <label className="control-label">Subject</label>
                  <input
                    onKeyUp={handleKey}
                    className="form-control"
                    id="msg_subject"
                    type="text"
                    name="subject"
                    required
                    data-error="Please enter your message subject"
                  />
                  {/* ///cheackicng ////// */}
                  {validSubject ? (
                    <p className="valid">valid</p>
                  ) : (
                    <p className="invalid">Please enter a valid Name.</p>
                  )}
                  {/* ///Endcheackicng ////// */}{" "}
                </div>
                {/* Message */}
                <div className="form-group label-floating">
                  <label htmlFor="message" className="control-label">
                    Message
                  </label>
                  <textarea
                    onKeyUp={handleKey}
                    className="form-control"
                    rows={3}
                    id="message"
                    name="message"
                    required
                    data-error="Write your message"
                    defaultValue={""}
                  />
                  {/* ///cheackicng ////// */}
                  {validMessage ? (
                    <p className="valid">valid</p>
                  ) : (
                    <p className="invalid">Please enter a valid Name.</p>
                  )}
                  {/* ///Endcheackicng ////// */}{" "}
                </div>
                {/* Form Submit */}
                <div className="form-submit mt-5">
                  <button
                    className="btn btn-common"
                    type="submit"
                    id="form-submit"
                  >
                    <i className="material-icons mdi mdi-message-outline" />{" "}
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                  {/* ///cheackicng ////// */}

                  {!validForm && (
                    <p className="invalid">Please enter a valid Name.</p>
                  )}

                  {/* ///Endcheackicng ////// */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Map />
    </>
  );
};

export default ContactPage;
