import React from "react";
import { Link } from "react-router-dom";

import "./shop-grid.styles.scss";

const ShopGrid = () => (
  <>
    <div className="shop-grid">
      <div>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        {/*---- Include the above in your HEAD tag --------*/}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="container">
          <h3 className="h3">shopping Demo-1 </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-1.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">Sale</span>
                  <span className="product-discount-label">20%</span>
                </div>
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star disable" />
                </ul>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Blouse</a>
                  </h3>
                  <div className="price">
                    $16.00
                    <span>$20.00</span>
                  </div>
                  <a className="add-to-cart" href>
                    + Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">Sale</span>
                  <span className="product-discount-label">50%</span>
                </div>
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Plain Tshirt</a>
                  </h3>
                  <div className="price">
                    $5.00
                    <span>$10.00</span>
                  </div>
                  <a className="add-to-cart" href>
                    + Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-5.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-6.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">Sale</span>
                  <span className="product-discount-label">50%</span>
                </div>
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Plain Tshirt</a>
                  </h3>
                  <div className="price">
                    $5.00
                    <span>$10.00</span>
                  </div>
                  <a className="add-to-cart" href>
                    + Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid">
                <div className="product-image">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-7.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-8.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">Sale</span>
                  <span className="product-discount-label">50%</span>
                </div>
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Plain Tshirt</a>
                  </h3>
                  <div className="price">
                    $5.00
                    <span>$10.00</span>
                  </div>
                  <a className="add-to-cart" href>
                    + Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="h3">shopping Demo-2 </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-2.jpeg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <a className="add-to-cart" href>
                    Add to cart
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Designer Top</a>
                  </h3>
                  <span className="price">$599.99</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-3.jpeg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-4.jpeg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <a className="add-to-cart" href>
                    Add to cart
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Yellow Top</a>
                  </h3>
                  <span className="price">$699.99</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-5.jpeg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-6.jpeg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <a className="add-to-cart" href>
                    Add to cart
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Designer Top</a>
                  </h3>
                  <span className="price">$599.99</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid2">
                <div className="product-image2">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-7.jpeg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo3/images/img-8.jpeg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <a className="add-to-cart" href>
                    Add to cart
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Designer Top</a>
                  </h3>
                  <span className="price">$599.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="h3">shopping Demo-3 </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid3">
                <div className="product-image3">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-2.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Blazer</a>
                  </h3>
                  <div className="price">
                    $63.50
                    <span>$75.00</span>
                  </div>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star disable" />
                    <li className="fa fa-star disable" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid3">
                <div className="product-image3">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-3.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-4.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Designer Top</a>
                  </h3>
                  <div className="price">$43.50</div>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid3">
                <div className="product-image3">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-5.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-6.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Blazer</a>
                  </h3>
                  <div className="price">
                    $63.50
                    <span>$75.00</span>
                  </div>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star disable" />
                    <li className="fa fa-star disable" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid3">
                <div className="product-image3">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-7.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo4/images/img-8.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Blazer</a>
                  </h3>
                  <div className="price">
                    $63.50
                    <span>$75.00</span>
                  </div>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star disable" />
                    <li className="fa fa-star disable" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="h3">shopping Demo-4 </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid4">
                <div className="product-image4">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-2.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                  <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Black Top</a>
                  </h3>
                  <div className="price">
                    $14.40
                    <span>$16.00</span>
                  </div>
                  <a className="add-to-cart" href>
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid4">
                <div className="product-image4">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-3.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-4.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-discount-label">-12%</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Blue Shirt</a>
                  </h3>
                  <div className="price">
                    $17.60
                    <span>$20.00</span>
                  </div>
                  <a className="add-to-cart" href>
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid4">
                <div className="product-image4">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-5.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-6.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                  <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Black Top</a>
                  </h3>
                  <div className="price">
                    $14.40
                    <span>$16.00</span>
                  </div>
                  <a className="add-to-cart" href>
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid4">
                <div className="product-image4">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-7.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo5/images/img-8.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href="#" data-tip="Quick View">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href="#" data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                  <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Black Top</a>
                  </h3>
                  <div className="price">
                    $14.40
                    <span>$16.00</span>
                  </div>
                  <a className="add-to-cart" href>
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="h3">shopping Demo-5 </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid5">
                <div className="product-image5">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-1.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-2.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="select-options">
                    <i className="fa fa-arrow-right" /> Select Options
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Sweat Shirt</a>
                  </h3>
                  <div className="price">$11.00 - $15.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid5">
                <div className="product-image5">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-3.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-4.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="select-options">
                    <i className="fa fa-arrow-right" /> Select Options
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Shirt</a>
                  </h3>
                  <div className="price">$10.00 - $12.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid5">
                <div className="product-image5">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-5.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-6.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="select-options">
                    <i className="fa fa-arrow-right" /> Select Options
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Sweat Shirt</a>
                  </h3>
                  <div className="price">$11.00 - $15.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid5">
                <div className="product-image5">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-7.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo11/images/img-8.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href data-tip="Quick View">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Wishlist">
                        <i className="fa fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <a href data-tip="Add to Cart">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="select-options">
                    <i className="fa fa-arrow-right" /> Select Options
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Sweat Shirt</a>
                  </h3>
                  <div className="price">$11.00 - $15.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="h3">shopping Demo-6 </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-1.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Shirt</a>
                  </h3>
                  <div className="price">
                    $11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-2.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's Red Top</a>
                  </h3>
                  <div className="price">
                    $8.00
                    <span>$12.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-3.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Shirt</a>
                  </h3>
                  <div className="price">
                    $11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid6">
                <div className="product-image6">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo10/images/img-4.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Shirt</a>
                  </h3>
                  <div className="price">
                    $11.00
                    <span>$14.00</span>
                  </div>
                </div>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="h3">shopping Demo-7 </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-1.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-2.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href className="fa fa-search" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-bag" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-cart" />
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Blazer</a>
                  </h3>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                  </ul>
                  <div className="price">
                    $15.00
                    <span>$20.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-3.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-4.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href className="fa fa-search" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-bag" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-cart" />
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Women's White Shirt</a>
                  </h3>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                  </ul>
                  <div className="price">$15.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-5.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-6.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href className="fa fa-search" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-bag" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-cart" />
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Blazer</a>
                  </h3>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                  </ul>
                  <div className="price">
                    $15.00
                    <span>$20.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-7.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-8.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href className="fa fa-search" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-bag" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-cart" />
                    </li>
                  </ul>
                  <span className="product-new-label">New</span>
                </div>
                <div className="product-content">
                  <h3 className="title">
                    <a href="#">Men's Blazer</a>
                  </h3>
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                  </ul>
                  <div className="price">
                    $15.00
                    <span>$20.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="h3">shopping Demo-8 </h3>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="product-grid8">
                <div className="product-image8">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-1.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-2.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href className="fa fa-search" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-bag" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-cart" />
                    </li>
                  </ul>
                  <span className="product-discount-label">-20%</span>
                </div>
                <div className="product-content">
                  <div className="price">
                    £ 8.00
                    <span>£ 10.00</span>
                  </div>
                  <span className="product-shipping">Free Shipping</span>
                  <h3 className="title">
                    <a href="#">Women's Plain Top</a>
                  </h3>
                  <a className="all-deals" href>
                    See all deals <i className="fa fa-angle-right icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-grid8">
                <div className="product-image8">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-3.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-4.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href className="fa fa-search" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-bag" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-cart" />
                    </li>
                  </ul>
                  <span className="product-discount-label">-30%</span>
                </div>
                <div className="product-content">
                  <div className="price">
                    £ 7.00
                    <span>£ 10.00</span>
                  </div>
                  <span className="product-shipping">Free Shipping</span>
                  <h3 className="title">
                    <a href="#">Women's Designer Top</a>
                  </h3>
                  <a className="all-deals" href>
                    See all deals <i className="fa fa-angle-right icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-grid8">
                <div className="product-image8">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-5.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo7/images/img-6.jpg"
                    />
                  </a>
                  <ul className="social">
                    <li>
                      <a href className="fa fa-search" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-bag" />
                    </li>
                    <li>
                      <a href className="fa fa-shopping-cart" />
                    </li>
                  </ul>
                  <span className="product-discount-label">-20%</span>
                </div>
                <div className="product-content">
                  <div className="price">
                    £ 8.00
                    <span>£ 10.00</span>
                  </div>
                  <span className="product-shipping">Free Shipping</span>
                  <h3 className="title">
                    <a href="#">Women's Plain Top</a>
                  </h3>
                  <a className="all-deals" href>
                    See all deals <i className="fa fa-angle-right icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="h3">shopping Demo-9 </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid9">
                <div className="product-image9">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-1.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-2.jpg"
                    />
                  </a>
                  <a href="#" className="fa fa-search product-full-view" />
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
                    <a href="#">Women's Top</a>
                  </h3>
                  <div className="price"> $12.60 - $40.53</div>
                  <a className="add-to-cart" href>
                    VIEW PRODUCTS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid9">
                <div className="product-image9">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-3.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-4.jpg"
                    />
                  </a>
                  <a href="#" className="fa fa-search product-full-view" />
                </div>
                <div className="product-content">
                  <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star disable" />
                    <li className="fa fa-star disable" />
                  </ul>
                  <h3 className="title">
                    <a href="#">Men's Shirt</a>
                  </h3>
                  <div className="price"> $10.20 </div>
                  <a className="add-to-cart" href>
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid9">
                <div className="product-image9">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-5.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-6.jpg"
                    />
                  </a>
                  <a href="#" className="fa fa-search product-full-view" />
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
                    <a href="#">Women's Top</a>
                  </h3>
                  <div className="price"> $12.60 - $40.53</div>
                  <a className="add-to-cart" href>
                    VIEW PRODUCTS
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid9">
                <div className="product-image9">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-7.jpg"
                    />
                    <img
                      className="pic-2"
                      src="http://bestjquery.com/tutorial/product-grid/demo6/images/img-8.jpg"
                    />
                  </a>
                  <a href="#" className="fa fa-search product-full-view" />
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
                    <a href="#">Women's Top</a>
                  </h3>
                  <div className="price"> $12.60 - $40.53</div>
                  <a className="add-to-cart" href>
                    VIEW PRODUCTS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </>
);

export default ShopGrid;
