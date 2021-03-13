import React, { useContext, useState } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import "./wishList.styles.scss";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CurrentUserContext from "./../../contexts/current-user/current-user.context";
import { Alert } from "react-bootstrap";
import SideHeader from "./../../components/side-header/side-header.component";

const WishListPage = ({ history }) => {
  const {
    wishItems,
    clearWishlist,
    addItem,
    clearItemFromWishlist,
  } = useContext(CartContext);
  const currentUser = useContext(CurrentUserContext);
  // console.log("currentUser :", currentUser);

  const [displayMessage, setDisplayMessage] = useState(false);
  const [displayRemoveMessage, setDisplayRemoveMessage] = useState(false);

  return (
    <>
      <div className="wish-list container">
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container padding-bottom-3x mb-2">
          <div className="row">
            <SideHeader />

            <div className="col-lg-8">
              <div className="padding-top-2x mt-2 hidden-lg-up" />
              {/* Wishlist Table*/}
              <div className="table-responsive wishlist-table margin-bottom-none">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      {displayMessage && (
                        <Alert variant="success">
                          <p>Item was add to your shopping cart </p>
                        </Alert>
                      )}
                      {displayRemoveMessage && (
                        <Alert variant="danger">
                          <p>Item was remove from your wishlist </p>
                        </Alert>
                      )}
                      <th className="text-center">
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => clearWishlist()}
                        >
                          Clear Wishlist
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishItems &&
                      wishItems.map((wishItem) => (
                        <tr key={wishItem.index}>
                          <td>
                            <div className="product-item">
                              <div
                                className="product-thumb"
                                onClick={() => {
                                  history.push(
                                    `/product/${wishItem.name
                                      .split(" ")
                                      .join("-")}`
                                  );
                                }}
                              >
                                <img src={wishItem.imageUrl} alt="Product" />
                              </div>
                              <div className="product-info">
                                <h4 className="product-title">
                                  <a
                                    onClick={() => {
                                      history.push(
                                        `/product/${wishItem.name
                                          .split(" ")
                                          .join("-")}`
                                      );
                                    }}
                                  >
                                    {" "}
                                    {wishItem.name}
                                  </a>
                                </h4>
                                <div className="text-lg text-medium text-muted">
                                  ${wishItem.price}
                                </div>
                                <div>
                                  Availability:
                                  <div className="d-inline text-success">
                                    In Stock
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">
                            <button
                              onClick={() => {
                                setDisplayMessage(true);

                                setTimeout(() => {
                                  setDisplayMessage(false);
                                }, 2000);

                                addItem(wishItem);
                              }}
                              className=" add-button  btn btn-success"
                            >
                              Add to Cart <i className="fa fa-shopping-cart" />
                            </button>{" "}
                            <div
                              onClick={() => {
                                setDisplayRemoveMessage(true);

                                setTimeout(() => {
                                  setDisplayRemoveMessage(false);
                                }, 2000);
                                clearItemFromWishlist(wishItem);
                              }}
                              className="remove-from-cart"
                              // data-toggle="tooltip"
                              data-original-title="Remove item"
                            >
                              {" "}
                              &#10005;{" "}
                            </div>
                          </td>
                        </tr>
                      ))}

                    {/* <tr>
                      <td>
                        <div className="product-item">
                          <a className="product-thumb" href="#">
                            <img
                              src="https://via.placeholder.com/220x180/87CEFA/000000"
                              alt="Product"
                            />
                          </a>
                          <div className="product-info">
                            <h4 className="product-title">
                              <a href="#">Daily Fabric Cap</a>
                            </h4>
                            <div className="text-lg text-medium text-muted">
                              $24.70
                            </div>
                            <div>
                              Availability:
                              <div className="d-inline text-warning">
                                2 - 3 Weeks
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <a
                          className="remove-from-cart"
                          href="#"
                          data-toggle="tooltip"
                          title
                          data-original-title="Remove item"
                        >
                          <i className="icon-cross" />
                        </a>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <hr className="mb-4" />
              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="inform_me"
                  defaultChecked
                />
                <label className="custom-control-label" htmlFor="inform_me">
                  Inform me when item from my wishlist is available
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          {" "}
          <Link to="/store">
            <button type="button" className="btn btn-primary">
              Store{" "}
            </button>
          </Link>
          <Link to="/shopping-cart">
            <button type="button" className="btn btn-success checkout-btn">
              Shopping Cart
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="wishList">
        {wishItems.map((wishItem) => (
          <ShoppingCartItem key={wishItem.id} cartItem={wishItem} />
        ))}
*/}

      {/* </div>  */}
    </>
  );
};

export default WishListPage;
