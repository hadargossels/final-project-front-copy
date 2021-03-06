import React from "react";

import "./slider.styles.scss";

const Slider = () => (
  <div className="container home-slider">
    <div className="row">
      <div className="col-md-12">
        <h2>
          Trending <b>Products</b>
        </h2>
        <div
          id="myCarousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval={0}
        >
          {/* Carousel indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          {/* Wrapper for carousel items */}
          <div className="carousel-inner">
            <div className="item carousel-item active">
              <div className="row">
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://image.ibb.co/g0CAPp/ipad.jpg"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Raincoat</h4>
                      <p className="item-price">
                        <strike>$40.00</strike> <span>$36.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/Hf0a42d4f48b246f794b940dd08c899d9M/Dog-Clothes-for-Pet-Dogs-Raincoat-for-Dog-Coat-Windbreaker-Fashion-Reflective-Clothing-for-Large-Small.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Warm Puppy Dog Socks</h4>
                      <p className="item-price">
                        <strike>$18.00</strike> <span>$16.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/Hd47ca275164343f5999365da589a4007n/4pcs-Warm-Puppy-Dog-Socks-Soft-Pet-Knits-Socks-Cute-Cartoon-Anti-Slip-Socks-Warm-Puppy.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Pet Winter Sweater</h4>
                      <p className="item-price">
                        <strike>$899.00</strike> <span>$649.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-half-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/H82c084b9e5cf4f7ea087829512d60739g/Puppy-Clothes-Pet-Winter-Sweater-Flexible-Fashion-Sweater-for-Korea-Dog-Koki-Teddy-Cat.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Waterproof Raincoat</h4>
                      <p className="item-price">
                        <strike>$25.00</strike> <span>$23.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item carousel-item">
              <div className="row">
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/H2c115b36190d4dffbbc31614c046f0f1N/Pet-Dog-Waterproof-Raincoat-Jumpsuit-Reflective-Rain-Coat-Sunscreen-Dog-Outdoor-Clothes-Jacket-for-Small-Dog.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>"Waterproof Reflective coat</h4>
                      <p className="item-price">
                        <strike>$18.00</strike> <span>$16.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/Hf8e853554c954aaa8e16a5df40ee15f04/Dog-Clothes-Raincoat-Jacket-Windproof-Cat-Dog-Jacket-Fashion-Waterproof-Reflective-coat-for-dogs-Large-dog.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Didog coat</h4>
                      <p className="item-price">
                        <strike>$14.00</strike> <span>$12.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-half-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/Hacbcbaa2c39642d0bb9d1838227a2208p/Pet-Products-Dog-Clothing-Coat-Jacket-Hoodie-Sweater-Clothes-For-Dogs-Cotton-Clothing-For-Dogs-Sports.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Pajama jacket</h4>
                      <p className="item-price">
                        <strike>$18.00</strike> <span>$12.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/Hc9b91ca4034a4ec4adc8f9e88e51930d7/Pet-clothes-dog-clothes-dog-autumn-and-winter-warm-pajamas-jacket-pet-supplies-cat-clothes.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Hoody Waterproof Jacket</h4>
                      <p className="item-price">
                        <strike>$14.00</strike> <span>$12.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item carousel-item">
              <div className="row">
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/HTB1B2xtX5nrK1RjSsziq6xptpXaN/Summer-Outdoor-Puppy-Pet-Rain-Coat-S-XL-Hoody-Waterproof-Jackets-PU-Raincoat-for-Dogs-Cats.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Windbreaker</h4>
                      <p className="item-price">
                        <strike>$16.00</strike> <span>$14.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/H73be83d176b64dea9be3ce6367ab922f1/Dog-Clothes-Raincoat-for-Small-Big-Dogs-Wind-Coat-Windbreaker-French-Bulldog-Hoodie-for-Dogs-Clothes.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Collar 1</h4>
                      <p className="item-price">
                        <strike>$315.00</strike> <span>$250.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/H285fceb917814959bf883dbc7f9e9b646/Personalized-Dog-Tag-Stainless-Steel-Name-Engraved-ID-Tags-For-Dog-Collar-Anti-Lost-Pet-Nameplate.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Collar 1</h4>
                      <p className="item-price">
                        <strike>$220.00</strike> <span>$118.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="thumb-wrapper">
                    <div className="img-box">
                      <img
                        src="https://ae01.alicdn.com/kf/H285fceb917814959bf883dbc7f9e9b646/Personalized-Dog-Tag-Stainless-Steel-Name-Engraved-ID-Tags-For-Dog-Collar-Anti-Lost-Pet-Nameplate.jpg_220x220xz.jpg_.webp"
                        className="img-responsive img-fluid"
                        alt
                      />
                    </div>
                    <div className="thumb-content">
                      <h4>Collar 2</h4>
                      <p className="item-price">
                        <strike>$280.00</strike> <span>$278.00</span>
                      </p>
                      <div className="star-rating">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star" />
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-star-o" />
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-primary">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel controls */}
          <a
            className="carousel-control left carousel-control-prev"
            href="#myCarousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </a>
          <a
            className="carousel-control right carousel-control-next"
            href="#myCarousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Slider;
