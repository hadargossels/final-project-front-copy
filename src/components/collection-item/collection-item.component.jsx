import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import QuickView from "../quick-view/quick-view.component";
import { connect } from "react-redux";

import "./collection-item.style.scss";
import { compose } from "redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({
  addItem,
  id,
  name,
  price,
  imageUrl,
  width,
  height,
  history,
  linkUrl,
  match,
  source,
}) => {
  const imgStyle = {
    backgroundImage: `url(${imageUrl})`,
    width: width,
    height: height,
  };

  const [displayMessage, setDisplayMessage] = useState(false);

  const [displayModal, setDisplayModal] = useState(false);

  const handelClick = (event) => {
    // console.log(event.target.id);
    history.push(`/product/${name.split(" ").join("-")}`);
  };

  const handleBtnClick = () => {
    // console.log([name, price, imageUrl]);
  };

  const handleCartBtnClick = () => {
    // console.log(imageUrl);
    // console.log(price);

    // console.log(name);

    // console.log(id);
    addItem({ id, name, price, imageUrl });
    setDisplayMessage(true);

    setTimeout(() => {
      setDisplayMessage(false);
    }, 3000);
  };

  const handleDisplayModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        id={id}
        name={name.split(" ").join("").toLowerCase()}
        style={imgStyle}
        onClick={handelClick}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>{" "}
        <img
          className="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <img
          className="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <img
          className="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <img
          className="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <img
          className="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <span className="price">{price} $</span>{" "}
        <img
          className="cart-icon"
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTkxLjM1OSAxMzguMzQ4aC02MS4zMTJjLTQuMTM4IDAtNy44OCAxLjY3My0xMC42MyA0LjQyMy0yLjcyMSAyLjcyMi00LjQyMiA2LjQ5MS00LjQyMiAxMC42MDIgMCA0LjEzOCAxLjcwMSA3LjkwOCA0LjQyMiAxMC42MyAyLjc1IDIuNzUgNi40OTIgNC40MjEgMTAuNjMgNC40MjFoMjQuNTQ4YzQuMTM5IDAgNy40ODMgMy4zNzMgNy40ODMgNy41MTJzLTMuMzQ1IDcuNTEyLTcuNDgzIDcuNTEyaC0yNC41NDhjLTguMjc3IDAtMTUuNzg5LTMuNDAxLTIxLjIzMS04Ljg0NC01LjQ0Mi01LjQ0NC04LjgxNi0xMi45NTYtOC44MTYtMjEuMjMyIDAtOC4yNDkgMy4zNzQtMTUuNzYxIDguODE1LTIxLjIwMyA1LjQ0My01LjQ0MiAxMi45NTUtOC44NDUgMjEuMjMxLTguODQ1aDY2Ljg0YzMuMTc1IDAgNi4xNTEgMi4wOTggNy4xNDMgNS4zMDFsMTkuODQyIDY0LjM3NGgzMzguMTY5YzQuMTM5IDAgNy41MTIgMy4zNzMgNy41MTIgNy41MTJ2MTU4LjkzN2MwIDEzLjQ2NC01LjUgMjUuNjgyLTE0LjM3MiAzNC41MjUtOC44NDQgOC44NzMtMjEuMDkgMTQuMzcxLTM0LjUyNiAxNC4zNzFoLTI4NS4zMDJjLTcuNTk3IDAtMTQuNTEzIDMuMTE5LTE5LjUzMSA4LjEzNy01LjA0NSA1LjAxNi04LjE2NCAxMS45Ni04LjE2NCAxOS41NTggMCA3LjU5NyAzLjExOCAxNC41MTQgOC4xNjQgMTkuNTU5IDUuMDE4IDUuMDE4IDExLjkzNCA4LjEzNiAxOS41MzEgOC4xMzZoMTQuMzcxYzQuMTM5IDAgNy41MTIgMy4zNDUgNy41MTIgNy40ODNzLTMuMzczIDcuNTEyLTcuNTEyIDcuNTEyaC0xNC4zNzFjLTExLjczNSAwLTIyLjQyMi00Ljc5MS0zMC4xNi0xMi41MjktNy43MS03LjczOC0xMi41MjktMTguNDI1LTEyLjUyOS0zMC4xNiAwLTExLjc2NCA0LjgxOS0yMi40MjEgMTIuNTI5LTMwLjE1OSA3LjczOC03LjczOSAxOC40MjUtMTIuNTI5IDMwLjE2LTEyLjUyOWgzNC42NjhjLTI2LjIyMS04NS4wMTMtNTIuNDQxLTE3MC4wMjItNzguNjYxLTI1NS4wMDR6bTM2My4xNyA2OS42NDdoLTMyNi4wMzZsMTEuMzY3IDM2Ljg0OWgzMTQuNjY5em0wIDE1MS40NTJ2LTIuOTQ5aC0yODAuMjI5bDExLjM2NyAzNi44NTJoMjM0Ljk4OGM5LjI5OCAwIDE3Ljc3My0zLjgyNyAyMy45MjUtOS45NzlzOS45NDktMTQuNTk4IDkuOTQ5LTIzLjkyNHptMC0xNy45NDJ2LTMzLjMzNmgtMjk1LjEzOWwxMC4yOSAzMy4zMzZ6bTAtNDguMzMxdi0zMy4zMzRoLTMxMC4wMjFsMTAuMjYxIDMzLjMzNHptLTI0Mi44NDEgMTg1LjU1NGMtNC4xNjcgMC03LjUxMS0zLjM3My03LjUxMS03LjUxMnMzLjM0NC03LjQ4MyA3LjUxMS03LjQ4M2gxNzcuOTg1YzQuMTM5IDAgNy41MTIgMy4zNDUgNy41MTIgNy40ODNzLTMuMzczIDcuNTEyLTcuNTEyIDcuNTEyeiIgZmlsbD0iIzM3NWU3ZCIvPjxnIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtNDIwLjY1NCA0MzUuMjQ0YzE5Ljg3MSAwIDM1Ljk3MyAxNi4xMDEgMzUuOTczIDM1Ljk3MiAwIDE5Ljg3LTE2LjEwMiAzNS45NzEtMzUuOTczIDM1Ljk3MS0xOS44NjkgMC0zNS45Ny0xNi4xMDEtMzUuOTctMzUuOTcxLjAwMS0xOS44NzEgMTYuMTAxLTM1Ljk3MiAzNS45Ny0zNS45NzJ6bS0yMzkuOTQ4IDBjMTkuODcxIDAgMzUuOTcxIDE2LjEwMSAzNS45NzEgMzUuOTcyIDAgMTkuODctMTYuMSAzNS45NzEtMzUuOTcxIDM1Ljk3MXMtMzUuOTcxLTE2LjEwMS0zNS45NzEtMzUuOTcxYzAtMTkuODcxIDE2LjEtMzUuOTcyIDM1Ljk3MS0zNS45NzJ6IiBmaWxsPSIjNDA3MDkzIi8+PHBhdGggZD0ibTQyMC42NTQgNDM1LjI0NGMxOS44NzEgMCAzNS45NzMgMTYuMTAxIDM1Ljk3MyAzNS45NzIgMCAxOS44Ny0xNi4xMDIgMzUuOTcxLTM1Ljk3MyAzNS45NzEtNC4zOTMgMC04LjYxNi0uNzY1LTEyLjQ5OS0yLjIxMSAxMy42OS01LjEwMyAyMy40Ny0xOC4yODQgMjMuNDctMzMuNzYgMC0xNS40NDktOS43NzktMjguNjU4LTIzLjQ3LTMzLjczMiAzLjg4My0xLjQ0NiA4LjEwNy0yLjI0IDEyLjQ5OS0yLjI0em0tMjM5Ljk0OCAwYzE5Ljg3MSAwIDM1Ljk3MSAxNi4xMDEgMzUuOTcxIDM1Ljk3MiAwIDE5Ljg3LTE2LjEgMzUuOTcxLTM1Ljk3MSAzNS45NzEtNC4zOTQgMC04LjYxNy0uNzY1LTEyLjUwMS0yLjIxMSAxMy42OTEtNS4xMDMgMjMuNDctMTguMjg0IDIzLjQ3LTMzLjc2IDAtMTUuNDQ5LTkuNzc5LTI4LjY1OC0yMy40Ny0zMy43MzIgMy44ODQtMS40NDYgOC4xMDgtMi4yNCAxMi41MDEtMi4yNHoiIGZpbGw9IiMzNzVlN2QiLz48cGF0aCBkPSJtNDUyLjMxOCAxNy4zOTdjMS45ODMgMS45ODQgNC4zNjUgMi4xODIgNi41NDggMGw0LjIyNC00LjIyNWMxMS4xNC0xMS4xNCAyOS4zOTQtMTEuMTQgNDAuNTM0IDAgMTEuMTY4IDExLjE0MSAxMS4xNjggMjkuMzk1IDAgNDAuNTYzLTE0LjkxIDE0LjkxLTI5LjgxOSAyOS44Mi00NC43NTggNDQuNzI5LTIuMDQxIDIuMDY5LTQuMzM3IDIuMjM5LTYuNTQ4IDBsLTQ0Ljc1OC00NC43MjhjLTExLjE0LTExLjE2OS0xMS4xNC0yOS4zOTUgMC00MC41NjMgMTEuMTQxLTExLjE0IDI5LjM5NS0xMS4xNCA0MC41MzQgMHptLTE2OS40MjQgMTE1LjczNmM0LjQ1MSA0LjQ1IDkuNzUxIDQuODQ4IDE0LjYyNiAwbDkuMzgzLTkuMzgzYzI0LjgzMi0yNC44NTkgNjUuNDc5LTI0Ljg1OSA5MC4zMzkgMCAyNC44MzEgMjQuODMyIDI0LjgzMSA2NS40NzkgMCA5MC4zMzktMzMuMjUgMzMuMjIyLTY2LjQ3MSA2Ni40NzItOTkuNzIyIDk5LjcyMS00LjU5MiA0LjU2NC05LjY5MyA0LjkzMy0xNC42MjYgMGwtOTkuNzIyLTk5LjcyMWMtMjQuODMxLTI0Ljg1OS0yNC44MzEtNjUuNTA3IDAtOTAuMzM5IDI0LjgzMS0yNC44NTkgNjUuNTA4LTI0LjgzMiA5MC4zMzkgMHoiIGZpbGw9IiNmZDhmY2UiLz48cGF0aCBkPSJtNDcwLjg1NiA3LjY0NWMxMC42ODctNS4xMzEgMjMuOTUxLTMuMjg4IDMyLjc2OCA1LjUyNyAxMS4xNjggMTEuMTQxIDExLjE2OCAyOS4zOTUgMCA0MC41NjMtMTQuOTEgMTQuOTEtMjkuODE5IDI5LjgyLTQ0Ljc1OCA0NC43MjktMi4wNDEgMi4wNjktNC4zMzcgMi4yMzktNi41NDggMGwtOS4yMTMtOS4yMTIgMzUuNTE3LTM1LjUxOGMxMS4xNjgtMTEuMTY5IDExLjE2OC0yOS40MjMgMC00MC41NjMtMi4zMjMtMi4zMjMtNC45NTktNC4xNjUtNy43NjYtNS41MjZ6bS0xMzEuMjk4IDk4LjcwMWMyMC4yMzgtMy45OTggNDIuMDY1IDEuODEzIDU3LjY4NCAxNy40MDQgMjQuODMxIDI0LjgzMiAyNC44MzEgNjUuNDc5IDAgOTAuMzM5LTMzLjI1IDMzLjIyMi02Ni40NzEgNjYuNDcyLTk5LjcyMiA5OS43MjEtNC41OTIgNC41NjQtOS42OTMgNC45MzMtMTQuNjI2IDBsLTUuMTg4LTUuMTg4IDk0LjUzNC05NC41MzNjMjQuODMxLTI0Ljg1OSAyNC44MzEtNjUuNTA3IDAtOTAuMzM5LTkuMjQxLTkuMjQxLTIwLjY5Mi0xNS4wNTMtMzIuNjgyLTE3LjQwNHoiIGZpbGw9IiNmZjZmYzAiLz48L2c+PC9nPjwvc3ZnPg=="
        />{" "}
      </div>

      <div
        className="item-add"
        style={{ display: displayMessage ? "block" : "none" }}
      >
        {" "}
        <h4>Item was add to your shopping cart </h4>
      </div>

      <CustomButton onClick={handleCartBtnClick} inverted>
        Add to cart
      </CustomButton>

      <div>
        {/* Trigger/Open The Modal */}

        <i id="myBtn" onClick={handleDisplayModal} class="fas fa-search"></i>

        {/* <button >
          Open Modal
        </button> */}
        {/* The Modal */}
        <div
          style={{ display: displayModal ? "block" : "none" }}
          id="myModal"
          className="modal"
        >
          {/* Modal content */}
          <div className="modal-content">
            <span onClick={closeModal} className="close">
              ×
            </span>
            <img src={imageUrl} alt="modal" />
            <div className="row">
              <h3>{name}</h3>
              <h4>{price}$</h4>{" "}
            </div>
            <p>
              Glove For Cats Cat Grooming Silicone Pet Dog brush Glove De
              shedding Gentle Efficient Pet Grooming Glove Dog Bath Cat cleaning
            </p>

            <button onClick={handelClick} class="btn btn-secondary">
              Go to the product page
            </button>
            <button
              onClick={handleCartBtnClick}
              type="button"
              class="btn btn-primary"
            >
              add to cart
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      {/* {source !== "main" && (
        <QuickView
          // onClick={handelQuickViewClick}
          img={imageUrl}
          title={name}
          text="Glove For Cats Cat Grooming Silicone Pet Dog brush Glove De shedding Gentle Efficient Pet Grooming Glove Dog Bath Cat cleaning"
          price={price}
        />
      )} */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
// export default withRouter(CollectionItem);

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(CollectionItem);

// export default connect(null, mapDispatchToProps)(CollectionItem);

//  <div className="col-md-3 col-sm-6">
//    <div className="product-grid7">
//      <div className="product-image7">
//        <a href="#">
//          <img
//            className="pic-1"
//            src={imageUrl}
//          />
//          <img
//            className="pic-2"
//            src={imageUrl}
//          />
//        </a>
//        <ul className="social">
//          <li>
//            <a href className="fa fa-search" />
//          </li>
//          <li>
//            <a href className="fa fa-shopping-bag" />
//          </li>
//          <li>
//            <a href className="fa fa-shopping-cart" />
//          </li>
//        </ul>
//        <span className="product-new-label">New</span>
//      </div>
//      <div className="product-content">
//        <h3 className="title">
//          <a href="#">{name}/a>
//        </h3>
//        <ul className="rating">
//          <li className="fa fa-star" />
//          <li className="fa fa-star" />
//          <li className="fa fa-star" />
//          <li className="fa fa-star" />
//          <li className="fa fa-star" />
//        </ul>
//        <div className="price">
//          {price}
//          <span>{price+10} </span>
//        </div>
//      </div>
//    </div>
//  </div>;
