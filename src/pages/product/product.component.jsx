import React, { useState } from "react";
import SHOP_DATA from "./../shop/shop.data";

import "./product.styles.scss";

function ProductPage(props) {
  const collections = SHOP_DATA;
  const productName = props.match.params.id.replaceAll("-", " ");

  var arrOfArr = collections.map((collection) => {
    return collection.items;
  });
  console.log("arrOfArr :", arrOfArr);
  var price;
  var imgFound = false;
  for (let i = 0; i < arrOfArr.length && !imgFound; i++) {
    for (let j = 0; j < arrOfArr[i].length; j++) {
      if (arrOfArr[i][j].name === productName) {
        console.log("hello");
        price = arrOfArr[i][j].price;
        var img = arrOfArr[i][j].imageUrl;
        imgFound = true;
        break;
      }
    }
  }

  const [mainImage, setMainImage] = useState(img);

  const changeImage = (event) => {
    console.log("clickeddd", event.target.src);
    // var ls = document.getElementsByClassName("image_list")[0];
    // console.log("ls :", ls);
    setMainImage(event.target.src);
  };

  return (
    // <div className="product-page">
    //   <h1>{productName} </h1>
    //   <img src={img} alt="product image" />
    //   <p>{price}$</p>

    // </div>
    <>
      <div className="super_container">
        <header className="header" style={{ display: "none" }}>
          <div className="header_main">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                        <form
                          action="#"
                          className="header_search_form clearfix"
                        >
                          <div className="custom_dropdown">
                            <div className="custom_dropdown_list">
                              {" "}
                              <span className="custom_dropdown_placeholder clc">
                                All Categories
                              </span>{" "}
                              <i className="fas fa-chevron-down" />
                              <ul className="custom_list clc">
                                <li>
                                  <a className="clc" href="#">
                                    All Categories
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="single_product">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#fff", padding: 11 }}
          >
            <div className="row">
              <div className="col-lg-2 order-lg-1 order-2">
                <ul className="image_list">
                  <li data-image="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg">
                    <img onClick={changeImage} src={img} alt="product image" />
                  </li>
                  <li data-image={img}>
                    <img
                      onClick={changeImage}
                      src="https://ae01.alicdn.com/kf/H1217f9616fc44491a89db3bc63270e6aC/Pet-Dog-Waterproof-Raincoat-Jumpsuit-Reflective-Rain-Coat-Sunscreen-Dog-Outdoor-Clothes-Jacket-for-Small-Dog.jpg"
                      alt
                    />
                  </li>
                  <li data-image={img}>
                    <img
                      onClick={changeImage}
                      src="https://ae01.alicdn.com/kf/Hedd97931c4654f0dbf99003fbca3ba1bu/Pet-Dog-Waterproof-Raincoat-Jumpsuit-Reflective-Rain-Coat-Sunscreen-Dog-Outdoor-Clothes-Jacket-for-Small-Dog.jpg"
                      alt
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 order-lg-2 order-1">
                <div className="image_selected">
                  <img
                    className="main-img"
                    src={mainImage}
                    alt="product image"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-3 main-content">
                <div className="product_description">
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Products</a>
                      </li>
                      <li className="breadcrumb-item active">{productName} </li>
                    </ol>
                  </nav>
                  <div className="product_name">
                    <h1>{productName} </h1>
                  </div>
                  <div className="product-rating">
                    <span className="badge badge-success">
                      <i className="fa fa-star" /> 4.5 Star
                    </span>{" "}
                    <span className="rating-review">
                      35 Ratings &amp; 45 Reviews
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className="product_price"> {price}$</span>{" "}
                    <strike className="product_discount">
                      {" "}
                      <span style={{ color: "black" }}>
                        5$<span> </span>
                      </span>
                    </strike>{" "}
                  </div>
                  <div>
                    {" "}
                    <span className="product_saved">You Saved:</span>{" "}
                    <span style={{ color: "black" }}>
                      5$ <span> </span>
                    </span>
                  </div>
                  <hr className="singleline" />
                  <div>
                    {" "}
                    <span className="product_info">
                      EMI starts at 5$ . No Cost EMI Available
                      <span>
                        <br />{" "}
                        <span className="product_info">
                          Warranty: 6 months warranty
                          <span>
                            <br />{" "}
                            <span className="product_info">
                              7 Days easy return policy
                              <span>
                                <br />{" "}
                                <span className="product_info">
                                  7 Days easy return policy
                                  <span>
                                    <br />{" "}
                                    <span className="product_info">
                                      In Stock: 25 units sold this week
                                      <span> </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>

                  <hr className="singleline" />
                  <div className="order_info d-flex flex-row">
                    <form action="#"></form>
                  </div>
                  <div className="row">
                    <div className="col-xs-6" style={{ marginLeft: 13 }}>
                      <div className="product_quantity">
                        {" "}
                        <span>QTY: </span>{" "}
                        <input
                          id="quantity_input"
                          type="text"
                          pattern="[0-9]*"
                          defaultValue={1}
                        />
                        <div className="quantity_buttons">
                          <div
                            id="quantity_inc_button"
                            className="quantity_inc quantity_control"
                          >
                            <i className="fas fa-chevron-up" />
                          </div>
                          <div
                            id="quantity_dec_button"
                            className="quantity_dec quantity_control"
                          >
                            <i className="fas fa-chevron-down" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-primary shop-button"
                      >
                        Add to Cart
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-success shop-button"
                      >
                        Buy Now
                      </button>
                      <div className="product_fav">
                        <i className="fa fa-heart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-underline">
              <div className="col-md-6">
                {" "}
                <span className=" deal-text">
                  Other Products You May Like
                </span>{" "}
              </div>
              <div className="col-md-6">
                {" "}
                <a href="#" data-abc="true">
                  {" "}
                  <span className="ml-auto view-all" />{" "}
                </a>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="row padding-2">
                  <div className="col-md-5 padding-0">
                    <div className="bbb_combo">
                      <div className="bbb_combo_image">
                        <img className="bbb_combo_image" src={img} alt />
                      </div>
                      <div className="d-flex flex-row justify-content-start">
                        {" "}
                        <strike style={{ color: "red" }}>
                          {" "}
                          <span className="fs-10" style={{ color: "black" }}>
                            $32<span> </span>
                          </span>
                        </strike>{" "}
                        <span className="ml-auto">
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                        </span>{" "}
                      </div>
                      <div
                        className="d-flex flex-row justify-content-start"
                        style={{ marginBottom: 13 }}
                      >
                        {" "}
                        <span style={{ marginTop: "-4px" }}>$30,000</span>{" "}
                        <span className="ml-auto fs-10">23 Reviews</span>{" "}
                      </div>{" "}
                      <span>
                        Acer dog with 10for your dog cool product + for your dog
                        Hard Disk
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2 text-center">
                    {" "}
                    <span className="step">+</span>{" "}
                  </div>
                  <div className="col-md-5 padding-0">
                    <div className="bbb_combo">
                      <div className="bbb_combo_image">
                        <img className="bbb_combo_image" src={img} alt />
                      </div>
                      <div className="d-flex flex-row justify-content-start">
                        {" "}
                        <strike style={{ color: "red" }}>
                          {" "}
                          <span className="fs-10" style={{ color: "black" }}>
                            $32<span> </span>
                          </span>
                        </strike>{" "}
                        <span className="ml-auto">
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                        </span>{" "}
                      </div>
                      <div
                        className="d-flex flex-row justify-content-start"
                        style={{ marginBottom: 13 }}
                      >
                        {" "}
                        <span style={{ marginTop: "-4px" }}>$30,000</span>{" "}
                        <span className="ml-auto fs-10">23 Reviews</span>{" "}
                      </div>{" "}
                      <span>
                        Acer dog with 10for your dog cool product + for your dog
                        Hard Disk
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12" style={{ marginLeft: 36 }}>
                    <div className="boxo-pricing-items">
                      <div className="combo-pricing-item">
                        {" "}
                        <span className="items_text">1 Item</span>{" "}
                        <span className="combo_item_price">$13,200</span>{" "}
                      </div>
                      <div className="combo-plus">
                        {" "}
                        <span className="plus-sign">+</span>{" "}
                      </div>
                      <div className="combo-pricing-item">
                        {" "}
                        <span className="items_text">1 Add-on</span>{" "}
                        <span className="combo_item_price">$50</span>{" "}
                      </div>
                      <div className="combo-plus">
                        {" "}
                        <span className="plus-sign">=</span>{" "}
                      </div>
                      <div className="combo-pricing-item">
                        {" "}
                        <span className="items_text">Total</span>{" "}
                        <span className="combo_item_price">$13,700</span>{" "}
                      </div>
                      <div className="add-both-cart-button">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-primary shop-button"
                        >
                          Add to Cart
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-center">
                {" "}
                <span className="vertical-line" />{" "}
              </div>
              <div className="col-md-5" style={{ marginLeft: "-27px" }}>
                <div className="row padding-2">
                  <div className="col-md-5 padding-0">
                    <div className="bbb_combo">
                      <div className="bbb_combo_image">
                        <img className="bbb_combo_image" src={img} alt />
                      </div>
                      <div className="d-flex flex-row justify-content-start">
                        {" "}
                        <strike style={{ color: "red" }}>
                          {" "}
                          <span className="fs-10" style={{ color: "black" }}>
                            $32<span> </span>
                          </span>
                        </strike>{" "}
                        <span className="ml-auto">
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating p-rating" />
                          <i className="fa fa-star p-rating" />
                        </span>{" "}
                      </div>
                      <div
                        className="d-flex flex-row justify-content-start"
                        style={{ marginBottom: 13 }}
                      >
                        {" "}
                        <span style={{ marginTop: "-4px" }}>$30,000</span>{" "}
                        <span className="ml-auto fs-10">23 Reviews</span>{" "}
                      </div>{" "}
                      <span>cool product </span>
                    </div>
                  </div>
                  <div className="col-md-2 text-center">
                    {" "}
                    <span className="step">+</span>{" "}
                  </div>
                  <div className="col-md-5 padding-0">
                    <div className="bbb_combo">
                      <div className="bbb_combo_image">
                        <img className="bbb_combo_image" src={img} alt />
                      </div>
                      <div className="d-flex flex-row justify-content-start">
                        {" "}
                        <strike style={{ color: "red" }}>
                          {" "}
                          <span className="fs-10" style={{ color: "black" }}>
                            $32<span> </span>
                          </span>
                        </strike>{" "}
                        <span className="ml-auto">
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                          <i className="fa fa-star p-rating" />
                        </span>{" "}
                      </div>
                      <div
                        className="d-flex flex-row justify-content-start"
                        style={{ marginBottom: 13 }}
                      >
                        {" "}
                        <span style={{ marginTop: "-4px" }}>$30,000</span>{" "}
                        <span className="ml-auto fs-10">23 Reviews</span>{" "}
                      </div>{" "}
                      <span>
                        Acer dog with 10for your dog cool product + for your dog
                        Hard Disk
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12" style={{ marginLeft: 36 }}>
                    <div className="boxo-pricing-items">
                      <div className="combo-pricing-item">
                        {" "}
                        <span className="items_text">1 Item</span>{" "}
                        <span className="combo_item_price">$13,200</span>{" "}
                      </div>
                      <div className="combo-plus">
                        {" "}
                        <span className="plus-sign">+</span>{" "}
                      </div>
                      <div className="combo-pricing-item">
                        {" "}
                        <span className="items_text">1 Add-on</span>{" "}
                        <span className="combo_item_price">$500</span>{" "}
                      </div>
                      <div className="combo-plus">
                        {" "}
                        <span className="plus-sign">=</span>{" "}
                      </div>
                      <div className="combo-pricing-item">
                        {" "}
                        <span className="items_text">Total</span>{" "}
                        <span className="combo_item_price">$13,700</span>{" "}
                      </div>
                      <div className="add-both-cart-button">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-primary shop-button"
                        >
                          Add to Cart
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-underline">
              <div className="col-md-6">
                {" "}
                <span className=" deal-text">Specifications</span>{" "}
              </div>
              <div className="col-md-6">
                {" "}
                <a href="#" data-abc="true">
                  {" "}
                  <span className="ml-auto view-all" />{" "}
                </a>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <table className="col-md-12">
                  <tbody>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Sales Package :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>2 in 1 dog, User Guide, Warranty Documents</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Model Number :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li> 14-dh0107TU </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Part Number :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>dog</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Color :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>Black</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Suitable for :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>dog&amp; Multitasking</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">dog Brand :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>dog</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// const ProductPage = ({ match }) => (
//   <div className="product">
//   </div>
// );

export default ProductPage;

// import React from "react";
// import SHOP_DATA from "./../shop/shop.data";

// import "./product.styles.scss";

// class ProductPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collections: SHOP_DATA,
//       productName: props.match.params.id.replaceAll("-", " "),
//       mainImage: "",
//     };
//   }

//   render() {
//     const { collections, productName } = this.state;
//     console.log(collections);
//     var arrOfArr = collections.map((collection) => {
//       return collection.items;
//     });
//     console.log("arrOfArr :", arrOfArr);

//     var price;
//     var img;
//     for (let i = 0; i < arrOfArr.length; i++) {
//       for (let j = 0; j < arrOfArr[i].length; j++) {
//         if (arrOfArr[i][j].name === productName) {
//           console.log("hello");
//           price = arrOfArr[i][j].price;
//           img = arrOfArr[i][j].imageUrl;

//           // this.setState({
//           //   mainImage: img,
//           // });
//         }
//       }
//     }

//     const changeImage = (event) => {
//       console.log("clickeddd", event.target.src);
//       // var ls = document.getElementsByClassName("image_list")[0];
//       // console.log("ls :", ls);
//       this.setState({
//         mainImage: event.target.src,
//       });
//     };

//     return (
//       // <div className="product-page">
//       //   <h1>{productName} </h1>
//       //   <img src={img} alt="product image" />
//       //   <p>{price}$</p>

//       // </div>
//       <>
//         <div className="super_container">
//           <header className="header" style={{ display: "none" }}>
//             <div className="header_main">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
//                     <div className="header_search">
//                       <div className="header_search_content">
//                         <div className="header_search_form_container">
//                           <form
//                             action="#"
//                             className="header_search_form clearfix"
//                           >
//                             <div className="custom_dropdown">
//                               <div className="custom_dropdown_list">
//                                 {" "}
//                                 <span className="custom_dropdown_placeholder clc">
//                                   All Categories
//                                 </span>{" "}
//                                 <i className="fas fa-chevron-down" />
//                                 <ul className="custom_list clc">
//                                   <li>
//                                     <a className="clc" href="#">
//                                       All Categories
//                                     </a>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </header>
//           <div className="single_product">
//             <div
//               className="container-fluid"
//               style={{ backgroundColor: "#fff", padding: 11 }}
//             >
//               <div className="row">
//                 <div className="col-lg-2 order-lg-1 order-2">
//                   <ul className="image_list">
//                     <li data-image="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg">
//                       <img
//                         onClick={changeImage}
//                         src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
//                         alt="product image"
//                       />
//                     </li>
//                     <li data-image={img}>
//                       <img onClick={changeImage} src={img} alt />
//                     </li>
//                     <li data-image={img}>
//                       <img onClick={changeImage} src={img} alt />
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-lg-4 order-lg-2 order-1">
//                   <div className="image_selected">
//                     <img src={this.state.mainImage} alt="product image" />
//                   </div>
//                 </div>
//                 <div className="col-lg-6 order-3">
//                   <div className="product_description">
//                     <nav>
//                       <ol className="breadcrumb">
//                         <li className="breadcrumb-item">
//                           <a href="#">Home</a>
//                         </li>
//                         <li className="breadcrumb-item">
//                           <a href="#">Products</a>
//                         </li>
//                         <li className="breadcrumb-item active">
//                           {productName}{" "}
//                         </li>
//                       </ol>
//                     </nav>
//                     <div className="product_name">
//                       <h1>{productName} </h1>
//                     </div>
//                     <div className="product-rating">
//                       <span className="badge badge-success">
//                         <i className="fa fa-star" /> 4.5 Star
//                       </span>{" "}
//                       <span className="rating-review">
//                         35 Ratings &amp; 45 Reviews
//                       </span>
//                     </div>
//                     <div>
//                       {" "}
//                       <span className="product_price"> {price}$</span>{" "}
//                       <strike className="product_discount">
//                         {" "}
//                         <span style={{ color: "black" }}>
//                           5$<span> </span>
//                         </span>
//                       </strike>{" "}
//                     </div>
//                     <div>
//                       {" "}
//                       <span className="product_saved">You Saved:</span>{" "}
//                       <span style={{ color: "black" }}>
//                         5$ <span> </span>
//                       </span>
//                     </div>
//                     <hr className="singleline" />
//                     <div>
//                       {" "}
//                       <span className="product_info">
//                         EMI starts at 5$ . No Cost EMI Available
//                         <span>
//                           <br />{" "}
//                           <span className="product_info">
//                             Warranty: 6 months warranty
//                             <span>
//                               <br />{" "}
//                               <span className="product_info">
//                                 7 Days easy return policy
//                                 <span>
//                                   <br />{" "}
//                                   <span className="product_info">
//                                     7 Days easy return policy
//                                     <span>
//                                       <br />{" "}
//                                       <span className="product_info">
//                                         In Stock: 25 units sold this week
//                                         <span> </span>
//                                       </span>
//                                     </span>
//                                   </span>
//                                 </span>
//                               </span>
//                             </span>
//                           </span>
//                         </span>
//                       </span>
//                     </div>

//                     <hr className="singleline" />
//                     <div className="order_info d-flex flex-row">
//                       <form action="#"></form>
//                     </div>
//                     <div className="row">
//                       <div className="col-xs-6" style={{ marginLeft: 13 }}>
//                         <div className="product_quantity">
//                           {" "}
//                           <span>QTY: </span>{" "}
//                           <input
//                             id="quantity_input"
//                             type="text"
//                             pattern="[0-9]*"
//                             defaultValue={1}
//                           />
//                           <div className="quantity_buttons">
//                             <div
//                               id="quantity_inc_button"
//                               className="quantity_inc quantity_control"
//                             >
//                               <i className="fas fa-chevron-up" />
//                             </div>
//                             <div
//                               id="quantity_dec_button"
//                               className="quantity_dec quantity_control"
//                             >
//                               <i className="fas fa-chevron-down" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-xs-6">
//                         {" "}
//                         <button
//                           type="button"
//                           className="btn btn-primary shop-button"
//                         >
//                           Add to Cart
//                         </button>{" "}
//                         <button
//                           type="button"
//                           className="btn btn-success shop-button"
//                         >
//                           Buy Now
//                         </button>
//                         <div className="product_fav">
//                           <i className="fas fa-heart" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row row-underline">
//                 <div className="col-md-6">
//                   {" "}
//                   <span className=" deal-text">
//                     Other Products You May Like
//                   </span>{" "}
//                 </div>
//                 <div className="col-md-6">
//                   {" "}
//                   <a href="#" data-abc="true">
//                     {" "}
//                     <span className="ml-auto view-all" />{" "}
//                   </a>{" "}
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-5">
//                   <div className="row padding-2">
//                     <div className="col-md-5 padding-0">
//                       <div className="bbb_combo">
//                         <div className="bbb_combo_image">
//                           <img className="bbb_combo_image" src={img} alt />
//                         </div>
//                         <div className="d-flex flex-row justify-content-start">
//                           {" "}
//                           <strike style={{ color: "red" }}>
//                             {" "}
//                             <span className="fs-10" style={{ color: "black" }}>
//                               $32<span> </span>
//                             </span>
//                           </strike>{" "}
//                           <span className="ml-auto">
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                           </span>{" "}
//                         </div>
//                         <div
//                           className="d-flex flex-row justify-content-start"
//                           style={{ marginBottom: 13 }}
//                         >
//                           {" "}
//                           <span style={{ marginTop: "-4px" }}>
//                             $30,000
//                           </span>{" "}
//                           <span className="ml-auto fs-10">23 Reviews</span>{" "}
//                         </div>{" "}
//                         <span>
//                           Acer dog with 10for your dog cool product + for your
//                           dog Hard Disk
//                         </span>
//                       </div>
//                     </div>
//                     <div className="col-md-2 text-center">
//                       {" "}
//                       <span className="step">+</span>{" "}
//                     </div>
//                     <div className="col-md-5 padding-0">
//                       <div className="bbb_combo">
//                         <div className="bbb_combo_image">
//                           <img className="bbb_combo_image" src={img} alt />
//                         </div>
//                         <div className="d-flex flex-row justify-content-start">
//                           {" "}
//                           <strike style={{ color: "red" }}>
//                             {" "}
//                             <span className="fs-10" style={{ color: "black" }}>
//                               $32<span> </span>
//                             </span>
//                           </strike>{" "}
//                           <span className="ml-auto">
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                           </span>{" "}
//                         </div>
//                         <div
//                           className="d-flex flex-row justify-content-start"
//                           style={{ marginBottom: 13 }}
//                         >
//                           {" "}
//                           <span style={{ marginTop: "-4px" }}>
//                             $30,000
//                           </span>{" "}
//                           <span className="ml-auto fs-10">23 Reviews</span>{" "}
//                         </div>{" "}
//                         <span>
//                           Acer dog with 10for your dog cool product + for your
//                           dog Hard Disk
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-xs-12" style={{ marginLeft: 36 }}>
//                       <div className="boxo-pricing-items">
//                         <div className="combo-pricing-item">
//                           {" "}
//                           <span className="items_text">1 Item</span>{" "}
//                           <span className="combo_item_price">$13,200</span>{" "}
//                         </div>
//                         <div className="combo-plus">
//                           {" "}
//                           <span className="plus-sign">+</span>{" "}
//                         </div>
//                         <div className="combo-pricing-item">
//                           {" "}
//                           <span className="items_text">1 Add-on</span>{" "}
//                           <span className="combo_item_price">$50</span>{" "}
//                         </div>
//                         <div className="combo-plus">
//                           {" "}
//                           <span className="plus-sign">=</span>{" "}
//                         </div>
//                         <div className="combo-pricing-item">
//                           {" "}
//                           <span className="items_text">Total</span>{" "}
//                           <span className="combo_item_price">$13,700</span>{" "}
//                         </div>
//                         <div className="add-both-cart-button">
//                           {" "}
//                           <button
//                             type="button"
//                             className="btn btn-primary shop-button"
//                           >
//                             Add to Cart
//                           </button>{" "}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-2 text-center">
//                   {" "}
//                   <span className="vertical-line" />{" "}
//                 </div>
//                 <div className="col-md-5" style={{ marginLeft: "-27px" }}>
//                   <div className="row padding-2">
//                     <div className="col-md-5 padding-0">
//                       <div className="bbb_combo">
//                         <div className="bbb_combo_image">
//                           <img className="bbb_combo_image" src={img} alt />
//                         </div>
//                         <div className="d-flex flex-row justify-content-start">
//                           {" "}
//                           <strike style={{ color: "red" }}>
//                             {" "}
//                             <span className="fs-10" style={{ color: "black" }}>
//                               $32<span> </span>
//                             </span>
//                           </strike>{" "}
//                           <span className="ml-auto">
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating p-rating" />
//                             <i className="fa fa-star p-rating" />
//                           </span>{" "}
//                         </div>
//                         <div
//                           className="d-flex flex-row justify-content-start"
//                           style={{ marginBottom: 13 }}
//                         >
//                           {" "}
//                           <span style={{ marginTop: "-4px" }}>
//                             $30,000
//                           </span>{" "}
//                           <span className="ml-auto fs-10">23 Reviews</span>{" "}
//                         </div>{" "}
//                         <span>cool product </span>
//                       </div>
//                     </div>
//                     <div className="col-md-2 text-center">
//                       {" "}
//                       <span className="step">+</span>{" "}
//                     </div>
//                     <div className="col-md-5 padding-0">
//                       <div className="bbb_combo">
//                         <div className="bbb_combo_image">
//                           <img className="bbb_combo_image" src={img} alt />
//                         </div>
//                         <div className="d-flex flex-row justify-content-start">
//                           {" "}
//                           <strike style={{ color: "red" }}>
//                             {" "}
//                             <span className="fs-10" style={{ color: "black" }}>
//                               $32<span> </span>
//                             </span>
//                           </strike>{" "}
//                           <span className="ml-auto">
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                             <i className="fa fa-star p-rating" />
//                           </span>{" "}
//                         </div>
//                         <div
//                           className="d-flex flex-row justify-content-start"
//                           style={{ marginBottom: 13 }}
//                         >
//                           {" "}
//                           <span style={{ marginTop: "-4px" }}>
//                             $30,000
//                           </span>{" "}
//                           <span className="ml-auto fs-10">23 Reviews</span>{" "}
//                         </div>{" "}
//                         <span>
//                           Acer dog with 10for your dog cool product + for your
//                           dog Hard Disk
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-xs-12" style={{ marginLeft: 36 }}>
//                       <div className="boxo-pricing-items">
//                         <div className="combo-pricing-item">
//                           {" "}
//                           <span className="items_text">1 Item</span>{" "}
//                           <span className="combo_item_price">$13,200</span>{" "}
//                         </div>
//                         <div className="combo-plus">
//                           {" "}
//                           <span className="plus-sign">+</span>{" "}
//                         </div>
//                         <div className="combo-pricing-item">
//                           {" "}
//                           <span className="items_text">1 Add-on</span>{" "}
//                           <span className="combo_item_price">$500</span>{" "}
//                         </div>
//                         <div className="combo-plus">
//                           {" "}
//                           <span className="plus-sign">=</span>{" "}
//                         </div>
//                         <div className="combo-pricing-item">
//                           {" "}
//                           <span className="items_text">Total</span>{" "}
//                           <span className="combo_item_price">$13,700</span>{" "}
//                         </div>
//                         <div className="add-both-cart-button">
//                           {" "}
//                           <button
//                             type="button"
//                             className="btn btn-primary shop-button"
//                           >
//                             Add to Cart
//                           </button>{" "}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row row-underline">
//                 <div className="col-md-6">
//                   {" "}
//                   <span className=" deal-text">Specifications</span>{" "}
//                 </div>
//                 <div className="col-md-6">
//                   {" "}
//                   <a href="#" data-abc="true">
//                     {" "}
//                     <span className="ml-auto view-all" />{" "}
//                   </a>{" "}
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-12">
//                   <table className="col-md-12">
//                     <tbody>
//                       <tr className="row mt-10">
//                         <td className="col-md-4">
//                           <span className="p_specification">
//                             Sales Package :
//                           </span>{" "}
//                         </td>
//                         <td className="col-md-8">
//                           <ul>
//                             <li>2 in 1 dog, User Guide, Warranty Documents</li>
//                           </ul>
//                         </td>
//                       </tr>
//                       <tr className="row mt-10">
//                         <td className="col-md-4">
//                           <span className="p_specification">
//                             Model Number :
//                           </span>{" "}
//                         </td>
//                         <td className="col-md-8">
//                           <ul>
//                             <li> 14-dh0107TU </li>
//                           </ul>
//                         </td>
//                       </tr>
//                       <tr className="row mt-10">
//                         <td className="col-md-4">
//                           <span className="p_specification">Part Number :</span>{" "}
//                         </td>
//                         <td className="col-md-8">
//                           <ul>
//                             <li>dog</li>
//                           </ul>
//                         </td>
//                       </tr>
//                       <tr className="row mt-10">
//                         <td className="col-md-4">
//                           <span className="p_specification">Color :</span>{" "}
//                         </td>
//                         <td className="col-md-8">
//                           <ul>
//                             <li>Black</li>
//                           </ul>
//                         </td>
//                       </tr>
//                       <tr className="row mt-10">
//                         <td className="col-md-4">
//                           <span className="p_specification">
//                             Suitable for :
//                           </span>{" "}
//                         </td>
//                         <td className="col-md-8">
//                           <ul>
//                             <li>dog&amp; Multitasking</li>
//                           </ul>
//                         </td>
//                       </tr>
//                       <tr className="row mt-10">
//                         <td className="col-md-4">
//                           <span className="p_specification">dog Brand :</span>{" "}
//                         </td>
//                         <td className="col-md-8">
//                           <ul>
//                             <li>dog</li>
//                           </ul>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// // const ProductPage = ({ match }) => (
// //   <div className="product">
// //   </div>
// // );

// export default ProductPage;
