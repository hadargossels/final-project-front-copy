import React from "react";

import "./discounts.styles.scss";

const Discounts = () => (
  <>
    <div>
      <div className="container mydiv">
        <div className="row">
          <div className="col-md-4">
            {/* bbb_deals */}
            <div className="bbb_deals">
              <div className="ribbon ribbon-top-right">
                <span>60% OFF</span>
              </div>
              <div className="bbb_deals_title">Today's Best Offer</div>
              <div className="bbb_deals_slider_container">
                <div className=" bbb_deals_item">
                  <div className="bbb_deals_image">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png"
                      alt
                    />
                  </div>
                  <div className="bbb_deals_content">
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_category">
                        <a href="#">Laptops</a>
                      </div>
                      <div className="bbb_deals_item_price_a ml-auto">
                        ₹30,000
                      </div>
                    </div>
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_name">HP Notebook</div>
                      <div className="bbb_deals_item_price ml-auto">
                        ₹25,550
                      </div>
                    </div>
                    <div className="available">
                      <div className="available_line d-flex flex-row justify-content-start">
                        <div className="available_title">
                          Available: <span>6</span>
                        </div>
                        <div className="sold_title ml-auto">
                          Already sold: <span>28</span>
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
          </div>
          <div className="col-md-4">
            {/* bbb_deals */}
            <div className="bbb_deals">
              <div className="ribbon ribbon-top-right">
                <span>30% OFF</span>
              </div>
              <div className="bbb_deals_title">Today's Best Offer</div>
              <div className="bbb_deals_slider_container">
                <div className=" bbb_deals_item">
                  <div className="bbb_deals_image">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074217/124896_preview.png"
                      alt
                    />
                  </div>
                  <div className="bbb_deals_content">
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_category">
                        <a href="#">Laptops</a>
                      </div>
                      <div className="bbb_deals_item_price_a ml-auto">
                        ₹40,000
                      </div>
                    </div>
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_name">HP Envy</div>
                      <div className="bbb_deals_item_price ml-auto">
                        ₹35,550
                      </div>
                    </div>
                    <div className="available">
                      <div className="available_line d-flex flex-row justify-content-start">
                        <div className="available_title">
                          Available: <span>6</span>
                        </div>
                        <div className="sold_title ml-auto">
                          Already sold: <span>28</span>
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
          </div>
          <div className="col-md-4">
            {/* bbb_deals */}
            <div className="bbb_deals">
              <div className="ribbon ribbon-top-right">
                <span>50% OFF</span>
              </div>
              <div className="bbb_deals_title">Today's Best Offer</div>
              <div className="bbb_deals_slider_container">
                <div className=" bbb_deals_item">
                  <div className="bbb_deals_image">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png"
                      alt
                    />
                  </div>
                  <div className="bbb_deals_content">
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_category">
                        <a href="#">Laptops</a>
                      </div>
                      <div className="bbb_deals_item_price_a ml-auto">
                        ₹30,000
                      </div>
                    </div>
                    <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                      <div className="bbb_deals_item_name">Toshiba B77</div>
                      <div className="bbb_deals_item_price ml-auto">
                        ₹27,550
                      </div>
                    </div>
                    <div className="available">
                      <div className="available_line d-flex flex-row justify-content-start">
                        <div className="available_title">
                          Available: <span>6</span>
                        </div>
                        <div className="sold_title ml-auto">
                          Already sold: <span>28</span>
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
          </div>
        </div>
      </div>{" "}
    </div>
  </>
);

export default Discounts;
