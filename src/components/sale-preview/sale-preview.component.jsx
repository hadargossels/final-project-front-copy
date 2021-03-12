import React from "react";
import { withRouter } from "react-router-dom";
import SaleItemPreviewComponent from "../sale-item-preview/sale-item-preview.component";

import "./sale-preview.styles.scss";

const SalePreview = ({ title, items, history, routeName }) => (
  <div className="collection-preview  row item-grid-component ">
    <h1
      className="title"
      onClick={() => history.push(`/shop/${routeName.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </h1>{" "}
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <SaleItemPreviewComponent key={item.id} item={item} />
        ))}

      {/* <button
        type="button"
        class="btn btn-primary"
        onClick={() => history.push(`/shop/${routeName.toLowerCase()}`)}
      >
        See More...
      </button> */}
    </div>
  </div>
);

export default withRouter(SalePreview);
