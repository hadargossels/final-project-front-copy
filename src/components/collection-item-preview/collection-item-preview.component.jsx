import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./collection-item-preview.styles.scss";
import { Alert, Button, Modal } from "react-bootstrap";
import Header from "./../header/header.component";

const CollectionItemPreview = ({ item, history }) => {
  const { name, price, imageUrl, id, description, image1 } = item;

  const { addItem } = useContext(CartContext);

  const [displayMessage, setDisplayMessage] = useState(false);

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-3 col-sm-6 collection-item-preview">
      <div className="product-grid9">
        <div className="product-image9">
          <img
            className="pic-1"
            src={imageUrl}
            id={id}
            name={name.split(" ").join("").toLowerCase()}
            onClick={handelClick}
          />
          <img
            id={id}
            name={name.split(" ").join("").toLowerCase()}
            onClick={handelClick}
            className="pic-2"
            src={image1}
          />

          <a
            id="myBtn"
            variant="primary"
            onClick={handleShow}
            className="fa fa-search product-full-view"
          />
        </div>
        <div className="product-content">
          <ul className="rating">
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star" />
            <li className="fa fa-star" />
          </ul>
          <h3 className="title">
            <a onClick={handelClick}>{name}</a>
          </h3>
          <div className="price"> ${price}</div>

          <div onClick={handelClick} className="add-to-cart text-view">
            VIEW PRODUCT
          </div>
        </div>
        {/* The Modal */}
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

export default withRouter(CollectionItemPreview);
