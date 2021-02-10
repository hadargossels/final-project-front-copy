import React from "react";
import data from '../../data.json';
import { Link } from 'react-router-dom';
import formatPrice from '../utility/Price';

const CartQuickView = ({ handleClose, show, title }) => {
  const showHideClassName = show ? "modal modal-visible" : "modal-hidden";
  let storageList = localStorage.getItem('shoppingCart');
  let productList = [];
  let itemSum = 0;
  if (storageList) {
    productList = data.products.filter((product) => {
        if (storageList.includes(product.ISBN10)) {
            return product
        }
    })
  }

  if (productList.length) {
    productList.forEach((product) => {
        itemSum += product.price
    })
  }
console.log(itemSum)
let itemNum = localStorage.getItem('shoppingLength');
if (!itemNum) {
    itemNum = 0;
}
console.log(itemNum)
  let obj;
  if(title != null) {
    obj = data.products.filter(product => product.title === title)
    obj = obj[0];
    console.log(obj.title)
  } else {
    obj = data.products.filter(product => product.title === "Lorem ipsum dolor: sit amet consectetur")
    obj = obj[0];
    console.log(obj.title)
  }

  return (
    <div className={showHideClassName}>
    <div className="absolute right-10 top-12 flex overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none" onClick={handleClose}>
    <div className="relative w-full my-6 mx-auto max-w-3xl">
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-yellow-50 outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 className="text-2xl font-semibold text-yellow-700">
            You have {itemNum} items in your cart
          </h3>
          <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-95 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={handleClose}>
            <span className="text-yellow-800 opacity-95 h-6 w-6 text-2xl block">
              ×
            </span>
          </button>
        </div>
        {/*body*/}
        {productList.map((product) => {
            return (
                <div className="pb-2">
                    <img src={product.image} className="cartImage float-left pr-5 h-1/3" alt="" />
                    <p className="text-xl">{product.title}<br/>{formatPrice(product.price)}</p>
                </div>
            )
        })}
        {/* <div className="relative p-6 flex-auto">
          <img src={obj.image} className="cartImage float-left pr-12 h-1/2" alt="" />
          <p className="my-4 text-gray-600 text-lg leading-relaxed">
              "hello"
          </p>
          <p className="text-xl">
            {formatPrice(obj.price)}
          </p>
          <p>
          <button className="bg-yellow-100 text-yellow-600 background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 rounded" type="button" style={{ transition: "all .15s ease" }} onClick={handleClose}>
            Buy now!
          </button>
          </p>
        </div> */}
        <hr/>
        <div className="text-xl">
            <span>Sum Total: {formatPrice(itemSum)}</span>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
          <Link to="/shoppingCart">
            <button className="bg-yellow-600 text-yellow-100 uppercase text-lg px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
              Go To Shopping Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div >
  );
};

export default CartQuickView;