import React from "react";
import images from "../../src/assets/images/pic1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "../store/cart/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.cart);
  return (
    <div className="h-[500px] overflow-auto">
      {carts.map((cart) => (
        <div key={cart.id}>
          <div className="py-10  flex justify-start items-start gap-4">
            <div className="">
              <img className="w-16 h-16 rounded-md" src={images} alt="" />
            </div>
            <div className="">
              <h4 className="text-xl text-purple-500">
                {cart?.title.slice(0, 30)}
              </h4>
              <p>{cart?.des}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <button
                onClick={() => dispatch(decrementQty(cart.id))}
                className="text-xl font-bold px-2 border"
              >
                -
              </button>
              <button className="border py-1 px-2">{cart.qty}</button>
              <button
                onClick={() => dispatch(incrementQty(cart.id))}
                className="text-xl font-bold px-2 border"
              >
                +
              </button>
            </div>
            <div>{cart.totalPrice}</div>
            <button onClick={() => dispatch(removeItem(cart.id))} className="text-xl">
          x
        </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
