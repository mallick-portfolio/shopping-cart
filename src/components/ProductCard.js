import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/cart/cartSlice.js";
const ProductCard = ({ product }) => {
  const [productPrice, setProductPrice] = useState(
    Object.values(product.price[0])
  );
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const addToCart = (product) => {
    const { price, ...res } = product;
    let qty = 1;
    let totalPrice = productPrice[0];
    dispatch(addItem({ ...res, price: productPrice[0], qty, totalPrice }));
  };
  return (
    <div>
      <div className="rounded-lg border  shadow-md">
        <div className={`relative `}>
          <img className="rounded-t-lg h-36" src={product.image} alt="" />
          <div className="absolute bottom-2 left-2 text-white bg-shadowImage font-bold">
            ₹ {productPrice}
          </div>
        </div>
        <div className="p-2">
          <a href="/">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title.length < 20
                ? product.title
                : product?.title.slice(0, 20)}
              ...
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.des.length < 50 ? product.des : product?.des.slice(0, 50)}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <select
                multiple={false}
                onChange={(e) => setProductPrice([parseInt(e.target.value)])}
                className="appearance-none w-full py-1 px-2 border"
              >
                {product.price.map((p, i) => (
                  <option key={i} value={Object.values(p)}>
                    {Object.keys(p)}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-right mt-2">
              {cart?.find((c) => c?.id === product?.id) ? (
                <>
                  <button className="text-xl font-bold  border border-[#ccc] px-1 py-0">
                    -
                  </button>
                  <span className="text-xl font-bold  border border-[#ccc] px-1 py-0">
                    {/* {cart?.find((c) => c?.id === product?.id)} */}
                  </span>
                  <button className="text-xl font-bold  border border-[#ccc] px-1 py-0">
                    +
                  </button>
                </>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="inline-flex items-center py-1 px-3 text-sm font-medium text-center  rounded-lg  focus:ring-4 focus:outline-none border border-purple-400"
                >
                  add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
