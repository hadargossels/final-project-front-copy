import React from "react";
import { Link } from "react-router-dom";

import "./quick-view.styles.scss";

const QuickView = (props) => (
  <>
    <div className="quick-view">
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <img className="quick-view-img" src={props.img} />
              <p className="quick-text">{props.text}</p>
              <p className="quick-text">{props.price}$</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add to cart{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default QuickView;
