import React from "react";

import images from "../../src/assets/images/4623-CMB1210.jpg";
const Cart = () => {
  return (
    <div className="py-10 flex justify-start items-start gap-4">
      <div className="">
        <img className="w-16 h-16 rounded-md" src={images} alt="" />
      </div>
      <div className="">
        <h4>Meal for 4: Indi Tandoori Paneer & Peppy Paneer Combo</h4>
        <p>Med Indi Tandoori Paneer + Peppy Paneer + 2 Garlic Bread +2 Pepsi</p>
      </div>
    </div>
  );
};

export default Cart;
