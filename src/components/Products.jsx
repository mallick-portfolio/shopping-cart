import React from "react";
import image1 from "../assets/images/pic1.jpg";

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="rounded-lg border  shadow-md">
        <div className={`relative `}>
          <img className="rounded-t-lg h-36" src={image1} alt="" />
          <div className="absolute bottom-2 left-2 text-black font-bold">
            ₹ hello world
          </div>
        </div>
        <div className="p-2">
          <a href="/">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
          </p>
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
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
