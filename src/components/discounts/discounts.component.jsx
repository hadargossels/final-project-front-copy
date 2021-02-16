import React from "react";
import { Link } from "react-router-dom";

import "./discounts.styles.scss";

const Discounts = () => (
  <>
    <div className="discounts-page">
      <div className="container mydiv">
        <div className="row">
          <div className="col-md-4">
            {/* bbb_deals */}

            <Link to="/product/Pajama-jacket">
              <div className="bbb_deals">
                <div className="ribbon ribbon-top-right">
                  <span>60% OFF</span>
                </div>
                <div className="bbb_deals_title">Today's Best Offer</div>
                <div className="bbb_deals_slider_container">
                  <div className=" bbb_deals_item">
                    <div className="bbb_deals_image">
                      <img
                        src="https://ae01.alicdn.com/kf/Hc9b91ca4034a4ec4adc8f9e88e51930d7/Pet-clothes-dog-clothes-dog-autumn-and-winter-warm-pajamas-jacket-pet-supplies-cat-clothes.jpg_220x220xz.jpg_.webp"
                        alt
                      />
                    </div>
                    <div className="bbb_deals_content">
                      <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_category">
                          <a href="#">Dog Clothing </a>
                        </div>
                        <div className="bbb_deals_item_price_a ml-auto">
                          25$
                        </div>
                      </div>
                      <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_name">Pajama jacket</div>
                        <div className="bbb_deals_item_price ml-auto">18$ </div>
                      </div>
                      <div className="available">
                        <div className="available_line d-flex flex-row justify-content-start">
                          <div className="available_title">
                            Available: <span>6</span>
                          </div>
                          <div className="sold_title ml-auto">
                            Already sold: <span>128</span>
                          </div>
                        </div>
                        <div className="available_bar">
                          <span style={{ width: "17%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </Link>
          </div>
          <div className="col-md-4">
            {/* bbb_deals */}

            <Link to="/product/Hoody-Waterproof-Jacket">
              <div className="bbb_deals">
                <div className="ribbon ribbon-top-right">
                  <span>30% OFF</span>
                </div>
                <div className="bbb_deals_title">Today's Best Offer</div>
                <div className="bbb_deals_slider_container">
                  <div className=" bbb_deals_item">
                    <div className="bbb_deals_image">
                      <img
                        src="https://ae01.alicdn.com/kf/HTB1B2xtX5nrK1RjSsziq6xptpXaN/Summer-Outdoor-Puppy-Pet-Rain-Coat-S-XL-Hoody-Waterproof-Jackets-PU-Raincoat-for-Dogs-Cats.jpg_220x220xz.jpg_.webp"
                        alt
                      />
                    </div>
                    <div className="bbb_deals_content">
                      <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_category">
                          <a href="#">Hoody</a>
                        </div>
                        <div className="bbb_deals_item_price_a ml-auto">
                          25$
                        </div>
                      </div>
                      <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_name">
                          Hoody Waterproof Jacket
                        </div>
                        <div className="bbb_deals_item_price ml-auto">10$</div>
                      </div>
                      <div className="available">
                        <div className="available_line d-flex flex-row justify-content-start">
                          <div className="available_title">
                            Available: <span>6</span>
                          </div>
                          <div className="sold_title ml-auto">
                            Already sold: <span>128</span>
                          </div>
                        </div>
                        <div className="available_bar">
                          <span style={{ width: "17%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            {/* bbb_deals */}
            <Link to="/product/Windbreaker">
              <div className="bbb_deals">
                <div className="ribbon ribbon-top-right">
                  <span>50% OFF</span>
                </div>
                <div className="bbb_deals_title">Today's Best Offer</div>
                <div className="bbb_deals_slider_container">
                  <div className=" bbb_deals_item">
                    <div className="bbb_deals_image">
                      <img
                        src="https://ae01.alicdn.com/kf/H73be83d176b64dea9be3ce6367ab922f1/Dog-Clothes-Raincoat-for-Small-Big-Dogs-Wind-Coat-Windbreaker-French-Bulldog-Hoodie-for-Dogs-Clothes.jpg_220x220xz.jpg_.webp"
                        alt
                      />
                    </div>
                    <div className="bbb_deals_content">
                      <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_category">
                          <a href="#">Windbreaker</a>
                        </div>
                        <div className="bbb_deals_item_price_a ml-auto">
                          $30
                        </div>
                      </div>
                      <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_name">Windbreaker</div>
                        <div className="bbb_deals_item_price ml-auto">$16</div>
                      </div>
                      <div className="available">
                        <div className="available_line d-flex flex-row justify-content-start">
                          <div className="available_title">
                            Available: <span>6</span>
                          </div>
                          <div className="sold_title ml-auto">
                            Already sold: <span>108</span>
                          </div>
                        </div>
                        <div className="available_bar">
                          <span style={{ width: "17%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  </>
);

export default Discounts;
