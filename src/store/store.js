import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cart/cartSlice.js";

export const store = configureStore({
  reducer: {
    cart: createReducer,
  },
});