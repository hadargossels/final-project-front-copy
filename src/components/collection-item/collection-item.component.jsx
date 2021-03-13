import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../providers/cart/cart.provider";
import { Alert, Button, Modal } from "react-bootstrap";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, history }) => {
  const { name, price, imageUrl, id, description } = item;

  const { addItem, addWishItem } = useContext(CartContext);

  const [displayMessage, setDisplayMessage] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const [displayWishMessage, setDisplayWishMessage] = useState(false);

  const handleWishBtnClick = () => {
    addWishItem(item);

    setDisplayWishMessage(true);

    setTimeout(() => {
      setDisplayWishMessage(false);
    }, 3000);
  };

  return (
    <>
      <div className="collection-item col-md-3 col-sm-6">
        <div className="product-grid6">
          <div className="product-image6">
            <div
              className="view-image"
              id={id}
              name={name.split(" ").join("").toLowerCase()}
              onClick={handelClick}
            >
              <img className="pic-1" src={imageUrl} />
            </div>
          </div>
          <div className="product-content">
            <h3 className="title">
              <a href="#">{name}</a>
            </h3>
            <div className="price">
              ${price}
              <span>${price + 10}</span>
            </div>
          </div>
          <ul className="social">
            {" "}
            {displayMessage && (
              <Alert variant="success">
                <p>Item was add to your shopping cart </p>
              </Alert>
            )}
            {displayWishMessage && (
              <Alert variant="success">
                <p>Item was add to your WishList </p>
              </Alert>
            )}
            <li onClick={handleShow}>
              <a href data-tip="Quick View">
                <i className="fa fa-search" />
              </a>
            </li>
            <li onClick={handleWishBtnClick}>
              <a href data-tip="Add to Wishlist">
                <i className="fa fa-shopping-bag" />
              </a>
            </li>
            <li>
              <a href data-tip="Add to Cart" onClick={handleCartBtnClick}>
                <i className="fa fa-shopping-cart" />
              </a>
            </li>
          </ul>
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
    </>
  );
};

export default withRouter(CollectionItem);
