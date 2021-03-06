import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, history }) => {
  const { name, price, imageUrl, id, description } = item;

  const { addItem } = useContext(CartContext);

  const [displayMessage, setDisplayMessage] = useState(false);

  const [displayModal, setDisplayModal] = useState(false);

  const handleDisplayModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  const handelClick = (event) => {
    history.push(`/product/${name.split(" ").join("-")}`);
  };

  const handleCartBtnClick = () => {
    // addItem({ id, name, price, imageUrl });

    addItem(item);

    setDisplayMessage(true);

    setTimeout(() => {
      setDisplayMessage(false);
    }, 3000);
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        id={id}
        name={name.split(" ").join("").toLowerCase()}
        onClick={handelClick}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>{" "}
        <img
          className="star-icon"
          alt="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <img
          className="star-icon"
          alt="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <img
          className="star-icon"
          alt="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <img
          className="star-icon"
          alt="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <img
          className="star-icon"
          alt="star-icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRUQ0MkQ7IiBkPSJNNTExLjI2NiwxOTcuMjU4Yy0xLjc2NC01LjQzMi02LjQ1OC05LjM4OS0xMi4xMDgtMTAuMjA5bC0xNTguNzIyLTIzLjA2NkwyNjkuNDUyLDIwLjE1Ng0KCWMtMi41MjctNS4xMjEtNy43NDEtOC4zNjEtMTMuNDUxLTguMzYxYy01LjcwOSwwLTEwLjkyNCwzLjI0LTEzLjQ1MSw4LjM2MWwtNzAuOTg4LDE0My44MjZMMTIuODQzLDE4Ny4wNDkNCgljLTUuNjQ5LDAuODItMTAuMzQ1LDQuNzc3LTEyLjEwOCwxMC4yMDdjLTEuNzY1LDUuNDMyLTAuMjkzLDExLjM5MywzLjc5NSwxNS4zNzdsMTE0Ljg0OCwxMTEuOTU1TDkyLjI3LDQ4Mi42Nw0KCWMtMC45NjUsNS42MjksMS4zNDksMTEuMzE1LDUuOTY4LDE0LjY3MmM0LjYxOSwzLjM1NSwxMC43NDEsMy43OTksMTUuNzk3LDEuMTQxTDI1Niw0MjMuODQ1bDE0MS45NjEsNzQuNjM3DQoJYzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODgNCglsMTE0Ljg2LTExMS45NTVDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkNCRjI5OyIgZD0iTTUxMS4yNjYsMTk3LjI1OGMtMS43NjQtNS40MzItNi40NTgtOS4zODktMTIuMTA4LTEwLjIwOWwtMTU4LjcyMi0yMy4wNjZMMjY5LjQ1MiwyMC4xNTYNCgljLTIuNTI3LTUuMTIxLTcuNzQxLTguMzYxLTEzLjQ1MS04LjM2MXY0MTIuMDUxbDE0MS45NjEsNzQuNjM3YzIuMTk1LDEuMTU0LDQuNTkxLDEuNzIzLDYuOTc5LDEuNzIzDQoJYzMuMTEsMCw2LjIwNi0wLjk2NSw4LjgxOC0yLjg2M2M0LjYxOS0zLjM1Nyw2LjkzMy05LjA0NSw1Ljk2OC0xNC42NzJMMzkyLjYxLDMyNC41ODhsMTE0Ljg2LTExMS45NTUNCglDNTExLjU1OSwyMDguNjQ4LDUxMy4wMzEsMjAyLjY4Nyw1MTEuMjY2LDE5Ny4yNTh6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <span className="price">{price} $</span>{" "}
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
          name="largeArea"
          onClick={(e) => {
            e.target.getAttribute("name") == "largeArea" &&
              setDisplayModal(false);
          }}
        >
          {/* Modal content */}
          <div className="modal-content" name="smallArea">
            <span onClick={closeModal} className="close">
              ×
            </span>
            <img src={imageUrl} alt="modal" />
            <div className="row">
              <h3>{name}</h3>
              <h4>{price}$</h4>{" "}
            </div>
            <p>{description}</p>

            <button
              onClick={handelClick}
              className=" go-to-product-btn btn btn-secondary"
            >
              Go to the product page
            </button>
            <button
              onClick={handleCartBtnClick}
              type="button"
              className="add-to-cart-btn btn btn-primary"
            >
              add to cart
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
