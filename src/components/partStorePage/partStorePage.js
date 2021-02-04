import React from "react";
import "./StorePage.css";

function StorePage() {
  return (
    <>
      <div className="container-fluid px-sm-1 py-5 mx-auto">
        <div className="row justify-content-center">
          <div className="d-flex">
            <div className="card card-1">
              <div className="pr-3 row justify-content-end">
                <div className="fa fa-heart-o like"></div>
              </div>
              <div className="product-pic">
                <img
                  className="pic1"
                  src="https://i.etsystatic.com/18629750/r/il/52fafb/2228576244/il_570xN.2228576244_ge59.jpg"
                />
              </div>
              <small className="category">Dog Clothes</small>
              <h5 className="product-name">Dog clothing Puppy sweater</h5>
              <div className="row px-3 justify-content-between">
                <p className="price">
                  $79.<span className="sm-text">50</span>
                </p>
                <div className="stars">
                  <span className="fa fa-star star-active"></span>
                  <span className="fa fa-star star-active"></span>
                  <span className="fa fa-star star-active"></span>
                  <span className="fa fa-star-o"></span>
                  <span className="fa fa-star-o"></span>
                </div>{" "}
                <div class="text-muted mb-3">34 reviews</div>{" "}
                <button type="button" class="btn bg-cart">
                  <i class="fa fa-cart-plus mr-2"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StorePage;
