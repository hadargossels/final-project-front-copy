import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./collection-item-preview.styles.scss";

const CollectionItemPreview = ({ item, history }) => {
  const { name, price, imageUrl, id, description, image1 } = item;

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

          {/* <a
            id="myBtn"
            onClick={handleDisplayModal}
            className="fa fa-search product-full-view"
          /> */}
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

          <a onClick={handelClick} className="add-to-cart" href>
            VIEW PRODUCT
          </a>
        </div>
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

export default withRouter(CollectionItemPreview);
