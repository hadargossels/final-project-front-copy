import React from "react";

import Directory from "../../components/directory/directory.component";
import Discounts from "../../components/discounts/discounts.component";
import HeadingSlider from "../../components/heading-slider/heading-slider.component";
import Slider from "../../components/slider/slider.component";
import StoreBanner from "../../components/store-banner/store-banner.component";
import ShopPage from "../shop/shop.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Directory />
    {/* <HeadingSlider /> */}

    <StoreBanner />
    <Discounts />
    <Slider title="Featured Product" />
    <Slider title="Sales" />
    <Slider title="Best Sellers" />
    <Slider title="Hot/New" />
    <ShopPage />
  </div>
);

export default HomePage;
