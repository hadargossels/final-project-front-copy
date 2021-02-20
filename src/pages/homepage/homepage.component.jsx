import React from "react";

import Directory from "../../components/directory/directory.component";
// import Discounts from "../../components/discounts/discounts.component";
// import HeadingSlider from "../../components/heading-slider/heading-slider.component";
import Slider from "../../components/slider/slider.component";
import StoreBanner from "../../components/store-banner/store-banner.component";
import ItemsGrid from "../../components/items-grid/items-grid.component";

import "./homepage.styles.scss";
import CollectionsOverview from "./../../components/collections-overview/collections-overview.component";

const HomePage = () => (
  <div className="homepage">
    <Directory />
    {/* <HeadingSlider /> */}
    <StoreBanner />
    <CollectionsOverview />
    <Slider title="Featured Product" />
    <ItemsGrid />
    {/* <Discounts /> */}
  </div>
);

export default HomePage;
