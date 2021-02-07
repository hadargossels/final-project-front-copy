import React from "react";

import "./heading-slider.styles.scss";

const HeadingSlider = () => (
  <>
    <div className="container-fluid heading-slider">
      <div className="row">
        <div className="col-md-12">
          <div className="carousel slide" id="carousel-554496">
            <ol className="carousel-indicators">
              <li data-slide-to={0} data-target="#carousel-554496"></li>
              <li data-slide-to={1} data-target="#carousel-554496"></li>
              <li
                data-slide-to={2}
                data-target="#carousel-554496"
                className="active"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap First"
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1566561994/rest.png"
                />
                <div className="carousel-caption">
                  <h4> Restaurant View </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{"{"}" "{"}"}
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap Second"
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1566562085/rest_1.png"
                />
                <div className="carousel-caption">
                  <h4> printing and typesetting </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{"{"}" "{"}"}
                  </p>
                </div>
              </div>
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap Third"
                  src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1566562162/rest_2.png"
                />
                <div className="carousel-caption">
                  <h4> printer took </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel-554496"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-554496"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" />

              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HeadingSlider;
