import React from "react";
import { Link } from "react-router-dom";

import "./items-grid.styles.scss";

const ItemsGrid = () => (
  <>
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <hr />
      <div className="container">
        <h3 className="h3">Featured Product </h3>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/Hf0a42d4f48b246f794b940dd08c899d9M/Dog-Clothes-for-Pet-Dogs-Raincoat-for-Dog-Coat-Windbreaker-Fashion-Reflective-Clothing-for-Large-Small.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/Hd47ca275164343f5999365da589a4007n/4pcs-Warm-Puppy-Dog-Socks-Soft-Pet-Knits-Socks-Cute-Cartoon-Anti-Slip-Socks-Warm-Puppy.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i className="fa fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <a className="add-to-cart" href>
                  Add to cart
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Dogs Raincoat</a>
                </h3>
                <span className="price">$25.00</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/Hd47ca275164343f5999365da589a4007n/4pcs-Warm-Puppy-Dog-Socks-Soft-Pet-Knits-Socks-Cute-Cartoon-Anti-Slip-Socks-Warm-Puppy.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/Hd47ca275164343f5999365da589a4007n/4pcs-Warm-Puppy-Dog-Socks-Soft-Pet-Knits-Socks-Cute-Cartoon-Anti-Slip-Socks-Warm-Puppy.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i className="fa fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <a className="add-to-cart" href>
                  Add to cart
                </a>
              </div>

              <div className="product-content">
                <h3 className="title">
                  <a href="#">Warm Puppy Dog Socks</a>
                </h3>
                <span className="price">$18</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/H82c084b9e5cf4f7ea087829512d60739g/Puppy-Clothes-Pet-Winter-Sweater-Flexible-Fashion-Sweater-for-Korea-Dog-Koki-Teddy-Cat.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/H82c084b9e5cf4f7ea087829512d60739g/Puppy-Clothes-Pet-Winter-Sweater-Flexible-Fashion-Sweater-for-Korea-Dog-Koki-Teddy-Cat.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i className="fa fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <a className="add-to-cart" href>
                  Add to cart
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Pet Winter Sweater</a>
                </h3>
                <span className="price">$35.99</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid2">
              <div className="product-image2">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/H2c115b36190d4dffbbc31614c046f0f1N/Pet-Dog-Waterproof-Raincoat-Jumpsuit-Reflective-Rain-Coat-Sunscreen-Dog-Outdoor-Clothes-Jacket-for-Small-Dog.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/Hacbcbaa2c39642d0bb9d1838227a2208p/Pet-Products-Dog-Clothing-Coat-Jacket-Hoodie-Sweater-Clothes-For-Dogs-Cotton-Clothing-For-Dogs-Sports.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i className="fa fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <a className="add-to-cart" href>
                  Add to cart
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Waterproof Raincoat</a>
                </h3>
                <span className="price">$25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <hr />
      <div className="container">
        <h3 className="h3">Sales</h3>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid5">
              <div className="product-image5">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/Hf8e853554c954aaa8e16a5df40ee15f04/Dog-Clothes-Raincoat-Jacket-Windproof-Cat-Dog-Jacket-Fashion-Waterproof-Reflective-coat-for-dogs-Large-dog.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/Hf8e853554c954aaa8e16a5df40ee15f04/Dog-Clothes-Raincoat-Jacket-Windproof-Cat-Dog-Jacket-Fashion-Waterproof-Reflective-coat-for-dogs-Large-dog.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <a href="#" className="select-options">
                  <i className="fa fa-arrow-right" /> Select Options
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Waterproof Reflective coat</a>
                </h3>
                <div className="price">$18</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid5">
              <div className="product-image5">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/Hacbcbaa2c39642d0bb9d1838227a2208p/Pet-Products-Dog-Clothing-Coat-Jacket-Hoodie-Sweater-Clothes-For-Dogs-Cotton-Clothing-For-Dogs-Sports.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/Hc9b91ca4034a4ec4adc8f9e88e51930d7/Pet-clothes-dog-clothes-dog-autumn-and-winter-warm-pajamas-jacket-pet-supplies-cat-clothes.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <a href="#" className="select-options">
                  <i className="fa fa-arrow-right" /> Select Options
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Pajama jacket</a>
                </h3>
                <div className="price">$18.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid5">
              <div className="product-image5">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/Hc9b91ca4034a4ec4adc8f9e88e51930d7/Pet-clothes-dog-clothes-dog-autumn-and-winter-warm-pajamas-jacket-pet-supplies-cat-clothes.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1B2xtX5nrK1RjSsziq6xptpXaN/Summer-Outdoor-Puppy-Pet-Rain-Coat-S-XL-Hoody-Waterproof-Jackets-PU-Raincoat-for-Dogs-Cats.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <a href="#" className="select-options">
                  <i className="fa fa-arrow-right" /> Select Options
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Hoody Waterproof Jacket</a>
                </h3>
                <div className="price">$14.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid5">
              <div className="product-image5">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/H73be83d176b64dea9be3ce6367ab922f1/Dog-Clothes-Raincoat-for-Small-Big-Dogs-Wind-Coat-Windbreaker-French-Bulldog-Hoodie-for-Dogs-Clothes.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1B2xtX5nrK1RjSsziq6xptpXaN/Summer-Outdoor-Puppy-Pet-Rain-Coat-S-XL-Hoody-Waterproof-Jackets-PU-Raincoat-for-Dogs-Cats.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <a href="#" className="select-options">
                  <i className="fa fa-arrow-right" /> Select Options
                </a>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Windbreaker</a>
                </h3>
                <div className="price">$16.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="container">
        <h3 className="h3">Best Sellers</h3>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid7">
              <div className="product-image7">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/H285fceb917814959bf883dbc7f9e9b646/Personalized-Dog-Tag-Stainless-Steel-Name-Engraved-ID-Tags-For-Dog-Collar-Anti-Lost-Pet-Nameplate.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/H2a0efc6df4f14a8d84c52a339ed408b2s/USB-Charging-Led-Dog-Collar-Anti-Lost-Avoid-Car-Accident-Collar-For-Dogs-Puppies-Dog-Collars.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href className="fa fa-search" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-bag" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-cart" />
                  </li>
                </ul>
                <span className="product-new-label">New</span>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Collar 1</a>
                </h3>
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <div className="price">$220.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid7">
              <div className="product-image7">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/H2a0efc6df4f14a8d84c52a339ed408b2s/USB-Charging-Led-Dog-Collar-Anti-Lost-Avoid-Car-Accident-Collar-For-Dogs-Puppies-Dog-Collars.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1S83ea1L2gK0jSZPhq6yhvXXa5/Nylon-Dog-Collar-Personalized-Pet-Collar-Engraved-ID-Tag-Nameplate-Reflective-for-Small-Medium-Large-Dogs.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href className="fa fa-search" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-bag" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-cart" />
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Collar 2</a>
                </h3>
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <div className="price">$280.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid7">
              <div className="product-image7">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/HTB1S83ea1L2gK0jSZPhq6yhvXXa5/Nylon-Dog-Collar-Personalized-Pet-Collar-Engraved-ID-Tag-Nameplate-Reflective-for-Small-Medium-Large-Dogs.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1S83ea1L2gK0jSZPhq6yhvXXa5/Nylon-Dog-Collar-Personalized-Pet-Collar-Engraved-ID-Tag-Nameplate-Reflective-for-Small-Medium-Large-Dogs.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href className="fa fa-search" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-bag" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-cart" />
                  </li>
                </ul>
                <span className="product-new-label">New</span>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Collar 3</a>
                </h3>
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <div className="price">$110.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid7">
              <div className="product-image7">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/H5777fec0393849c596fb2a77a8552131u/Personalized-Cat-Dog-Pet-ID-Tag-Keychain-Engraved-Pet-ID-Name-for-Cat-Puppy-Dog-Collar.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/Hc014c3eef850431c88a9b945ba86f929r/Small-Dog-Cat-Harness-Leash-Adjustable-Vest-Collar-Puppy-Outdoor-Walking-Chihuahua-Terier-Schnauzer.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href className="fa fa-search" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-bag" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-cart" />
                  </li>
                </ul>
                <span className="product-new-label">New</span>
              </div>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Collar 4</a>
                </h3>
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <div className="price">$160.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h3 className="h3">Hot/New </h3>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="product-grid8">
              <div className="product-image8">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/Hc014c3eef850431c88a9b945ba86f929r/Small-Dog-Cat-Harness-Leash-Adjustable-Vest-Collar-Puppy-Outdoor-Walking-Chihuahua-Terier-Schnauzer.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/H5d9b5d52910e4452913aa3acd53e2930x/New-Dog-Soft-Adjustable-Harness-Pet-Large-Dog-Walk-Out-Harness-Vest-for-Medium-Dog-Chest.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href className="fa fa-search" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-bag" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-cart" />
                  </li>
                </ul>
                <span className="product-discount-label">-20%</span>
              </div>
              <div className="product-content">
                <div className="price">
                  <span>£160.00</span>
                </div>
                <span className="product-shipping">Free Shipping</span>
                <h3 className="title">
                  <a href="#">Collar 5</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product-grid8">
              <div className="product-image8">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/H5d9b5d52910e4452913aa3acd53e2930x/New-Dog-Soft-Adjustable-Harness-Pet-Large-Dog-Walk-Out-Harness-Vest-for-Medium-Dog-Chest.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1S5s6AN1YBuNjy1zcq6zNcXXaY/Dog-Harness-with-Leash-Summer-Pet-Adjustable-Reflective-Vest-Walking-Lead-for-Puppy-Polyester-Mesh-Harness.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href className="fa fa-search" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-bag" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-cart" />
                  </li>
                </ul>
                <span className="product-discount-label">-30%</span>
              </div>
              <div className="product-content">
                <div className="price">190</div>
                <span className="product-shipping">Free Shipping</span>
                <h3 className="title">
                  <a href="#">Collar 6</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="product-grid8">
              <div className="product-image8">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/HTB1S5s6AN1YBuNjy1zcq6zNcXXaY/Dog-Harness-with-Leash-Summer-Pet-Adjustable-Reflective-Vest-Walking-Lead-for-Puppy-Polyester-Mesh-Harness.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1S5s6AN1YBuNjy1zcq6zNcXXaY/Dog-Harness-with-Leash-Summer-Pet-Adjustable-Reflective-Vest-Walking-Lead-for-Puppy-Polyester-Mesh-Harness.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <ul className="social">
                  <li>
                    <a href className="fa fa-search" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-bag" />
                  </li>
                  <li>
                    <a href className="fa fa-shopping-cart" />
                  </li>
                </ul>
                <span className="product-discount-label">-20%</span>
              </div>
              <div className="product-content">
                <div className="price">190</div>
                <span className="product-shipping">Free Shipping</span>
                <h3 className="title">
                  <a href="#">Collar 7</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h3 className="h3">Sales </h3>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/Hc014c3eef850431c88a9b945ba86f929r/Small-Dog-Cat-Harness-Leash-Adjustable-Vest-Collar-Puppy-Outdoor-Walking-Chihuahua-Terier-Schnauzer.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1S5s6AN1YBuNjy1zcq6zNcXXaY/Dog-Harness-with-Leash-Summer-Pet-Adjustable-Reflective-Vest-Walking-Lead-for-Puppy-Polyester-Mesh-Harness.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Collar 8</a>
                </h3>
                <div className="price"> $200.53</div>
                <a className="add-to-cart" href>
                  VIEW PRODUCTS
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/He72bd27b4ca543e783aab7dfde336319t/guante-para-gato-dog-Grooming-Glove-pet-products-mascotas-cat-Deshedding-Hair-Remove-Cleaning-Puppy-Massage.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/H2bf0f67fa07b434ebc1c3e636a49d1a1y/Hair-Removal-Comb-for-Dogs-Cat-Detangler-Fur-Trimming-Dematting-Deshedding-Brush-Grooming-Tool-For-matted.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star disable" />
                  <li className="fa fa-star disable" />
                </ul>
                <h3 className="title">
                  <a href="#">Grooming Item 1</a>
                </h3>
                <div className="price"> $25.20 </div>
                <a className="add-to-cart" href>
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/H2bf0f67fa07b434ebc1c3e636a49d1a1y/Hair-Removal-Comb-for-Dogs-Cat-Detangler-Fur-Trimming-Dematting-Deshedding-Brush-Grooming-Tool-For-matted.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/HTB1XHbMQxTpK1RjSZFKq6y2wXXaS/Pet-Nail-Clipper-Scissors-Pet-Dog-Cat-Nail-Toe-Claw-Clippers-Scissors-Trimmer-Grooming-Tools-for.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Grooming Item 2</a>
                </h3>
                <div className="price"> $20</div>
                <a className="add-to-cart" href>
                  VIEW PRODUCTS
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid9">
              <div className="product-image9">
                <a href="#">
                  <img
                    className="pic-1"
                    src="https://ae01.alicdn.com/kf/HTB1XHbMQxTpK1RjSZFKq6y2wXXaS/Pet-Nail-Clipper-Scissors-Pet-Dog-Cat-Nail-Toe-Claw-Clippers-Scissors-Trimmer-Grooming-Tools-for.jpg_220x220xz.jpg_.webp"
                  />
                  <img
                    className="pic-2"
                    src="https://ae01.alicdn.com/kf/Hd96e305483de454e9aeac6a8b914fb53G/Outdoor-portable-pet-dog-paw-cleaner-cup-360-soft-silicone-foot-washer-clean-dog-paws-one.jpg_220x220xz.jpg_.webp"
                  />
                </a>
                <a href="#" className="fa fa-search product-full-view" />
              </div>
              <div className="product-content">
                <ul className="rating">
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
                <h3 className="title">
                  <a href="#">Grooming Item 3</a>
                </h3>
                <div className="price"> $80.53</div>
                <a className="add-to-cart" href>
                  VIEW PRODUCTS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </>
);

export default ItemsGrid;
