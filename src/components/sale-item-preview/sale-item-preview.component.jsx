import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import { CartContext } from "../../providers/cart/cart.provider";

import "./sale-item-preview.styles.scss";
import { Alert, Button, Modal } from "react-bootstrap";

const SaleItemPreview = ({ item, history }) => {
  const { name, price, imageUrl, id, description, image1 } = item;

  const { addItem, addWishItem } = useContext(CartContext);

  const [displayMessage, setDisplayMessage] = useState(false);

  const handelClick = (event) => {
    history.push(`/product/${name.split(" ").join("-")}`);
  };

  const handleCartBtnClick = () => {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-3 col-sm-6 sale-item-preview">
      <div className="product-grid  big-grid">
        <div className="product-grid">
          <div className="product-image">
            <div onClick={handelClick}>
              <img className="pic-1" src={imageUrl} />
              <img className="pic-2" src={image1} />
            </div>
            <ul className="social">
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
              <li onClick={handleCartBtnClick}>
                <a href data-tip="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
            </ul>
            <span className="product-new-label">Sale</span>
            <span className="product-discount-label">20%</span>
          </div>
          {displayMessage && (
            <Alert variant="success">
              <p>Item was add to your shopping cart </p>
            </Alert>
          )}
          {displayWishMessage && (
            <Alert variant="info">
              <p>Item was add to your Wishlist </p>
            </Alert>
          )}
          <ul className="rating">
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star disable" />
          </ul>
          <div className="product-content">
            <h3 onClick={handelClick} className="title">
              <a>{name}</a>
            </h3>
            <div className="price">
              ${price}
              <span>${price + 10}</span>
            </div>
            <a className="add-to-cart" onClick={handleCartBtnClick}>
              + Add To Cart
            </a>
          </div>
        </div>
      </div>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

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

export default withRouter(SaleItemPreview);
