import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./new-item.styles.scss";
import { Alert, Button, Modal } from "react-bootstrap";
import Header from "./../header/header.component";

const NewItemComponent = ({ item, history }) => {
  const { name, price, imageUrl, id, description, image1 } = item;

  const { addItem, addWishItem } = useContext(CartContext);

  const [displayMessage, setDisplayMessage] = useState(false);

  const [displayWishMessage, setDisplayWishMessage] = useState(false);

  const handelClick = (event) => {
    history.push(`/product/${name.split(" ").join("-")}`);
  };

  const handleWishBtnClick = () => {
    addWishItem(item);

    setDisplayWishMessage(true);

    setTimeout(() => {
      setDisplayWishMessage(false);
    }, 3000);
  };

  const handleCartBtnClick = () => {
    addItem(item);

    setDisplayMessage(true);

    setTimeout(() => {
      setDisplayMessage(false);
    }, 3000);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-3 col-sm-6 new-item">
      <div className="product-grid7">
        <div className="product-image7">
          <a onClick={handelClick}>
            <img className="pic-1" src={imageUrl} />
            <img className="pic-2" src={image1} />
          </a>
          <ul className="social">
            <li onClick={handleShow}>
              <a href className="fa fa-search" />
            </li>
            <li onClick={handleWishBtnClick}>
              <a href className="fa fa-shopping-bag" />
            </li>
            <li onClick={handleCartBtnClick}>
              <a href className="fa fa-shopping-cart" />
            </li>
          </ul>
          <span className="product-new-label">New</span>
        </div>
        <div className="product-content">
          {displayMessage && (
            <Alert variant="success">
              <p>Item was add to your Shopping Cart </p>
            </Alert>
          )}
          {displayWishMessage && (
            <Alert variant="success">
              <p>Item was add to your WishList </p>
            </Alert>
          )}

          <h3 onClick={handelClick} className="title">
            <a>{name}</a>
          </h3>
          <ul className="rating">
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star" />
          </ul>
          <div className="price">
            ${price} <span>${price + 10}</span>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="modal-content">
            <img onClick={handelClick} src={imageUrl} alt="modal" />
            <br />
            <p>${price}</p>
            <p>{description}</p>
            {displayMessage && (
              <Alert variant="success">
                <p>Item was add to your shopping cart </p>
              </Alert>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            onClick={handelClick}
            className=" go-to-product-btn btn btn-success"
          >
            Go to the product page
          </button>
          <Button
            variant="primary"
            onClick={handleCartBtnClick}
            className="add-to-cart-btn btn btn-primary"
          >
            Add to Cart
            <i className="fas fa-shopping-cart"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default withRouter(NewItemComponent);
