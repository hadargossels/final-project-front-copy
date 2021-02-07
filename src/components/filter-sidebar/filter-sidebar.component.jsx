import React from "react";

import "./filter-sidebar.styles.scss";

const FilterSidebar = () => (
  <div className="container-fluid mt-100">
    <div className="row d-flex justify-content-center">
      <div className="col-md-4">
        <div className="card">
          <article className="filter-group">
            <header className="card-header">
              {" "}
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_aside1"
                data-abc="true"
                aria-expanded="false"
                className="collapsed"
              >
                {" "}
                <i className="icon-control fa fa-chevron-down" />
                <h6 className="title">Categories </h6>
              </a>{" "}
            </header>
            <div
              className="filter-content collapse"
              id="collapse_aside1"
              style={{}}
            >
              <div className="card-body">
                <ul className="list-menu">
                  <li>
                    <a href="#" data-abc="true">
                      Electronics{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" data-abc="true">
                      Watches{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" data-abc="true">
                      Laptops{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" data-abc="true">
                      Clothes{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" data-abc="true">
                      Accessories{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              {" "}
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_aside2"
                data-abc="true"
                aria-expanded="false"
                className="collapsed"
              >
                {" "}
                <i className="icon-control fa fa-chevron-down" />
                <h6 className="title">Price </h6>
              </a>{" "}
            </header>
            <div
              className="filter-content collapse"
              id="collapse_aside2"
              style={{}}
            >
              <div className="card-body">
                {" "}
                <input
                  type="range"
                  className="custom-range"
                  min={0}
                  max={100}
                  name
                />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    {" "}
                    <label>Min</label>{" "}
                    <input
                      className="form-control"
                      placeholder="$0"
                      type="number"
                    />{" "}
                  </div>
                  <div className="form-group text-right col-md-6">
                    {" "}
                    <label>Max</label>{" "}
                    <input
                      className="form-control"
                      placeholder="$1,0000"
                      type="number"
                    />{" "}
                  </div>
                </div>{" "}
                <a
                  href="#"
                  className="highlight-button btn btn-medium button xs-margin-bottom-five"
                  data-abc="true"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              {" "}
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_aside3"
                data-abc="true"
                aria-expanded="false"
                className="collapsed"
              >
                {" "}
                <i className="icon-control fa fa-chevron-down" />
                <h6 className="title">Size </h6>
              </a>{" "}
            </header>
            <div
              className="filter-content collapse"
              id="collapse_aside3"
              style={{}}
            >
              <div className="card-body">
                {" "}
                <label className="checkbox-btn">
                  {" "}
                  <input type="checkbox" />{" "}
                  <span className="btn btn-light"> XS </span>{" "}
                </label>{" "}
                <label className="checkbox-btn">
                  {" "}
                  <input type="checkbox" />{" "}
                  <span className="btn btn-light"> SM </span>{" "}
                </label>{" "}
                <label className="checkbox-btn">
                  {" "}
                  <input type="checkbox" />{" "}
                  <span className="btn btn-light"> LG </span>{" "}
                </label>{" "}
                <label className="checkbox-btn">
                  {" "}
                  <input type="checkbox" />{" "}
                  <span className="btn btn-light"> XXL </span>{" "}
                </label>{" "}
                <label className="checkbox-btn">
                  {" "}
                  <input type="checkbox" />{" "}
                  <span className="btn btn-light"> XXXL </span>{" "}
                </label>{" "}
              </div>
            </div>
          </article>
          <article className="filter-group">
            <header className="card-header">
              {" "}
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_aside4"
                data-abc="true"
                className="collapsed"
                aria-expanded="false"
              >
                {" "}
                <i className="icon-control fa fa-chevron-down" />
                <h6 className="title">Rating </h6>
              </a>{" "}
            </header>
            <div
              className="filter-content collapse"
              id="collapse_aside4"
              style={{}}
            >
              <div className="card-body">
                {" "}
                <label className="custom-control">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Better </div>
                </label>{" "}
                <label className="custom-control">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Best </div>
                </label>{" "}
                <label className="custom-control">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Good</div>
                </label>{" "}
                <label className="custom-control">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Not good</div>
                </label>{" "}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
);

export default FilterSidebar;
