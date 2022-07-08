import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="rounded-lg border  shadow-md">
        <div className={`relative `}>
          <img className="rounded-t-lg h-36" src={product.image} alt="" />
          <div className="absolute bottom-2 left-2 text-black font-bold">
            ₹ hello world
          </div>
        </div>
        <div className="p-2">
          <a href="/">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product?.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.length > 60 ? product.length : product?.des.slice(0, 60)}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <select className="appearance-none w-full py-1 px-2 border">
                {product.price.map((p, i) => (
                  <option key={i} value={Object.values(p)}>
                    {Object.keys(p)}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-right mt-2">
              <button className="text-xl font-bold  border border-[#ccc] px-1 py-0">
                -
              </button>
              <span className="text-xl font-bold  border border-[#ccc] px-1 py-0">
                {"qty"}
              </span>
              <button className="text-xl font-bold  border border-[#ccc] px-1 py-0">
                +
              </button>
              <button className="inline-flex items-center py-1 px-3 text-sm font-medium text-center  rounded-lg  focus:ring-4 focus:outline-none border border-purple-400">
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
